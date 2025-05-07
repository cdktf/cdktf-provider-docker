# `container` Submodule <a name="`container` Submodule" id="@cdktf/provider-docker.container"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Container <a name="Container" id="@cdktf/provider-docker.container.Container"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container docker_container}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.Container.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.Container(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  image: str,
  name: str,
  attach: typing.Union[bool, IResolvable] = None,
  capabilities: ContainerCapabilities = None,
  cgroupns_mode: str = None,
  command: typing.List[str] = None,
  container_read_refresh_timeout_milliseconds: typing.Union[int, float] = None,
  cpus: str = None,
  cpu_set: str = None,
  cpu_shares: typing.Union[int, float] = None,
  destroy_grace_seconds: typing.Union[int, float] = None,
  devices: typing.Union[IResolvable, typing.List[ContainerDevices]] = None,
  dns: typing.List[str] = None,
  dns_opts: typing.List[str] = None,
  dns_search: typing.List[str] = None,
  domainname: str = None,
  entrypoint: typing.List[str] = None,
  env: typing.List[str] = None,
  gpus: str = None,
  group_add: typing.List[str] = None,
  healthcheck: ContainerHealthcheck = None,
  host: typing.Union[IResolvable, typing.List[ContainerHost]] = None,
  hostname: str = None,
  id: str = None,
  init: typing.Union[bool, IResolvable] = None,
  ipc_mode: str = None,
  labels: typing.Union[IResolvable, typing.List[ContainerLabels]] = None,
  log_driver: str = None,
  log_opts: typing.Mapping[str] = None,
  logs: typing.Union[bool, IResolvable] = None,
  max_retry_count: typing.Union[int, float] = None,
  memory: typing.Union[int, float] = None,
  memory_swap: typing.Union[int, float] = None,
  mounts: typing.Union[IResolvable, typing.List[ContainerMounts]] = None,
  must_run: typing.Union[bool, IResolvable] = None,
  network_mode: str = None,
  networks_advanced: typing.Union[IResolvable, typing.List[ContainerNetworksAdvanced]] = None,
  pid_mode: str = None,
  ports: typing.Union[IResolvable, typing.List[ContainerPorts]] = None,
  privileged: typing.Union[bool, IResolvable] = None,
  publish_all_ports: typing.Union[bool, IResolvable] = None,
  read_only: typing.Union[bool, IResolvable] = None,
  remove_volumes: typing.Union[bool, IResolvable] = None,
  restart: str = None,
  rm: typing.Union[bool, IResolvable] = None,
  runtime: str = None,
  security_opts: typing.List[str] = None,
  shm_size: typing.Union[int, float] = None,
  start: typing.Union[bool, IResolvable] = None,
  stdin_open: typing.Union[bool, IResolvable] = None,
  stop_signal: str = None,
  stop_timeout: typing.Union[int, float] = None,
  storage_opts: typing.Mapping[str] = None,
  sysctls: typing.Mapping[str] = None,
  tmpfs: typing.Mapping[str] = None,
  tty: typing.Union[bool, IResolvable] = None,
  ulimit: typing.Union[IResolvable, typing.List[ContainerUlimit]] = None,
  upload: typing.Union[IResolvable, typing.List[ContainerUpload]] = None,
  user: str = None,
  userns_mode: str = None,
  volumes: typing.Union[IResolvable, typing.List[ContainerVolumes]] = None,
  wait: typing.Union[bool, IResolvable] = None,
  wait_timeout: typing.Union[int, float] = None,
  working_dir: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.image">image</a></code> | <code>str</code> | The ID of the image to back this container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.attach">attach</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true` attach to the container after its creation and waits the end of its execution. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.capabilities">capabilities</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a></code> | capabilities block. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.cgroupnsMode">cgroupns_mode</a></code> | <code>str</code> | Cgroup namespace mode to use for the container. Possible values are: `private`, `host`. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.command">command</a></code> | <code>typing.List[str]</code> | The command to use to start the container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.containerReadRefreshTimeoutMilliseconds">container_read_refresh_timeout_milliseconds</a></code> | <code>typing.Union[int, float]</code> | The total number of milliseconds to wait for the container to reach status 'running'. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.cpus">cpus</a></code> | <code>str</code> | Specify how much of the available CPU resources a container can use. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.cpuSet">cpu_set</a></code> | <code>str</code> | A comma-separated list or hyphen-separated range of CPUs a container can use, e.g. `0-1`. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.cpuShares">cpu_shares</a></code> | <code>typing.Union[int, float]</code> | CPU shares (relative weight) for the container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.destroyGraceSeconds">destroy_grace_seconds</a></code> | <code>typing.Union[int, float]</code> | If defined will attempt to stop the container before destroying. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.devices">devices</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a>]]</code> | devices block. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.dns">dns</a></code> | <code>typing.List[str]</code> | DNS servers to use. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.dnsOpts">dns_opts</a></code> | <code>typing.List[str]</code> | DNS options used by the DNS provider(s), see `resolv.conf` documentation for valid list of options. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.dnsSearch">dns_search</a></code> | <code>typing.List[str]</code> | DNS search domains that are used when bare unqualified hostnames are used inside of the container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.domainname">domainname</a></code> | <code>str</code> | Domain name of the container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.entrypoint">entrypoint</a></code> | <code>typing.List[str]</code> | The command to use as the Entrypoint for the container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.env">env</a></code> | <code>typing.List[str]</code> | Environment variables to set in the form of `KEY=VALUE`, e.g. `DEBUG=0`. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.gpus">gpus</a></code> | <code>str</code> | GPU devices to add to the container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.groupAdd">group_add</a></code> | <code>typing.List[str]</code> | Additional groups for the container user. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.healthcheck">healthcheck</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a></code> | healthcheck block. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.host">host</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a>]]</code> | host block. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.hostname">hostname</a></code> | <code>str</code> | Hostname of the container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#id Container#id}. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.init">init</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Configured whether an init process should be injected for this container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.ipcMode">ipc_mode</a></code> | <code>str</code> | IPC sharing mode for the container. Possible values are: `none`, `private`, `shareable`, `container:<name\|id>` or `host`. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.labels">labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a>]]</code> | labels block. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.logDriver">log_driver</a></code> | <code>str</code> | The logging driver to use for the container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.logOpts">log_opts</a></code> | <code>typing.Mapping[str]</code> | Key/value pairs to use as options for the logging driver. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.logs">logs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Save the container logs (`attach` must be enabled). Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.maxRetryCount">max_retry_count</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of times to an attempt a restart when `restart` is set to 'on-failure'. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.memory">memory</a></code> | <code>typing.Union[int, float]</code> | The memory limit for the container in MBs. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.memorySwap">memory_swap</a></code> | <code>typing.Union[int, float]</code> | The total memory limit (memory + swap) for the container in MBs. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.mounts">mounts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a>]]</code> | mounts block. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.mustRun">must_run</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, then the Docker container will be kept running. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.networkMode">network_mode</a></code> | <code>str</code> | Network mode of the container. See https://docs.docker.com/engine/network/ for more information. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.networksAdvanced">networks_advanced</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a>]]</code> | networks_advanced block. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.pidMode">pid_mode</a></code> | <code>str</code> | he PID (Process) Namespace mode for the container. Either `container:<name\|id>` or `host`. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.ports">ports</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a>]]</code> | ports block. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.privileged">privileged</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, the container runs in privileged mode. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.publishAllPorts">publish_all_ports</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Publish all ports of the container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, the container will be started as readonly. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.removeVolumes">remove_volumes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, it will remove anonymous volumes associated with the container. Defaults to `true`. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.restart">restart</a></code> | <code>str</code> | The restart policy for the container. Must be one of 'no', 'on-failure', 'always', 'unless-stopped'. Defaults to `no`. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.rm">rm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, then the container will be automatically removed when it exits. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.runtime">runtime</a></code> | <code>str</code> | Runtime to use for the container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.securityOpts">security_opts</a></code> | <code>typing.List[str]</code> | List of string values to customize labels for MLS systems, such as SELinux. See https://docs.docker.com/engine/reference/run/#security-configuration. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.shmSize">shm_size</a></code> | <code>typing.Union[int, float]</code> | Size of `/dev/shm` in MBs. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.start">start</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, then the Docker container will be started after creation. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.stdinOpen">stdin_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, keep STDIN open even if not attached (`docker run -i`). Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.stopSignal">stop_signal</a></code> | <code>str</code> | Signal to stop a container (default `SIGTERM`). |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.stopTimeout">stop_timeout</a></code> | <code>typing.Union[int, float]</code> | Timeout (in seconds) to stop a container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.storageOpts">storage_opts</a></code> | <code>typing.Mapping[str]</code> | Key/value pairs for the storage driver options, e.g. `size`: `120G`. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.sysctls">sysctls</a></code> | <code>typing.Mapping[str]</code> | A map of kernel parameters (sysctls) to set in the container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.tmpfs">tmpfs</a></code> | <code>typing.Mapping[str]</code> | A map of container directories which should be replaced by `tmpfs mounts`, and their corresponding mount options. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.tty">tty</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, allocate a pseudo-tty (`docker run -t`). Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.ulimit">ulimit</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a>]]</code> | ulimit block. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.upload">upload</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a>]]</code> | upload block. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.user">user</a></code> | <code>str</code> | User used for run the first process. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.usernsMode">userns_mode</a></code> | <code>str</code> | Sets the usernamespace mode for the container when usernamespace remapping option is enabled. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.volumes">volumes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a>]]</code> | volumes block. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.wait">wait</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, then the Docker container is waited for being healthy state after creation. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.waitTimeout">wait_timeout</a></code> | <code>typing.Union[int, float]</code> | The timeout in seconds to wait the container to be healthy after creation. Defaults to `60`. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.workingDir">working_dir</a></code> | <code>str</code> | The working directory for commands to run in. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.container.Container.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.container.Container.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.container.Container.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.container.Container.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-docker.container.Container.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-docker.container.Container.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.container.Container.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.container.Container.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.container.Container.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-docker.container.Container.Initializer.parameter.image"></a>

- *Type:* str

The ID of the image to back this container.

The easiest way to get this value is to use the `image_id` attribute of the `docker_image` resource as is shown in the example.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#image Container#image}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.container.Container.Initializer.parameter.name"></a>

- *Type:* str

The name of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#name Container#name}

---

##### `attach`<sup>Optional</sup> <a name="attach" id="@cdktf/provider-docker.container.Container.Initializer.parameter.attach"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true` attach to the container after its creation and waits the end of its execution. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#attach Container#attach}

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktf/provider-docker.container.Container.Initializer.parameter.capabilities"></a>

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a>

capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#capabilities Container#capabilities}

---

##### `cgroupns_mode`<sup>Optional</sup> <a name="cgroupns_mode" id="@cdktf/provider-docker.container.Container.Initializer.parameter.cgroupnsMode"></a>

- *Type:* str

Cgroup namespace mode to use for the container. Possible values are: `private`, `host`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#cgroupns_mode Container#cgroupns_mode}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-docker.container.Container.Initializer.parameter.command"></a>

- *Type:* typing.List[str]

The command to use to start the container.

For example, to run `/usr/bin/myprogram -f baz.conf` set the command to be `["/usr/bin/myprogram","-f","baz.conf"]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#command Container#command}

---

##### `container_read_refresh_timeout_milliseconds`<sup>Optional</sup> <a name="container_read_refresh_timeout_milliseconds" id="@cdktf/provider-docker.container.Container.Initializer.parameter.containerReadRefreshTimeoutMilliseconds"></a>

- *Type:* typing.Union[int, float]

The total number of milliseconds to wait for the container to reach status 'running'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#container_read_refresh_timeout_milliseconds Container#container_read_refresh_timeout_milliseconds}

---

##### `cpus`<sup>Optional</sup> <a name="cpus" id="@cdktf/provider-docker.container.Container.Initializer.parameter.cpus"></a>

- *Type:* str

Specify how much of the available CPU resources a container can use.

e.g a value of 1.5 means the container is guaranteed at most one and a half of the CPUs

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#cpus Container#cpus}

---

##### `cpu_set`<sup>Optional</sup> <a name="cpu_set" id="@cdktf/provider-docker.container.Container.Initializer.parameter.cpuSet"></a>

- *Type:* str

A comma-separated list or hyphen-separated range of CPUs a container can use, e.g. `0-1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#cpu_set Container#cpu_set}

---

##### `cpu_shares`<sup>Optional</sup> <a name="cpu_shares" id="@cdktf/provider-docker.container.Container.Initializer.parameter.cpuShares"></a>

- *Type:* typing.Union[int, float]

CPU shares (relative weight) for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#cpu_shares Container#cpu_shares}

---

##### `destroy_grace_seconds`<sup>Optional</sup> <a name="destroy_grace_seconds" id="@cdktf/provider-docker.container.Container.Initializer.parameter.destroyGraceSeconds"></a>

- *Type:* typing.Union[int, float]

If defined will attempt to stop the container before destroying.

Container will be destroyed after `n` seconds or on successful stop.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#destroy_grace_seconds Container#destroy_grace_seconds}

---

##### `devices`<sup>Optional</sup> <a name="devices" id="@cdktf/provider-docker.container.Container.Initializer.parameter.devices"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a>]]

devices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#devices Container#devices}

---

##### `dns`<sup>Optional</sup> <a name="dns" id="@cdktf/provider-docker.container.Container.Initializer.parameter.dns"></a>

- *Type:* typing.List[str]

DNS servers to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#dns Container#dns}

---

##### `dns_opts`<sup>Optional</sup> <a name="dns_opts" id="@cdktf/provider-docker.container.Container.Initializer.parameter.dnsOpts"></a>

- *Type:* typing.List[str]

DNS options used by the DNS provider(s), see `resolv.conf` documentation for valid list of options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#dns_opts Container#dns_opts}

---

##### `dns_search`<sup>Optional</sup> <a name="dns_search" id="@cdktf/provider-docker.container.Container.Initializer.parameter.dnsSearch"></a>

- *Type:* typing.List[str]

DNS search domains that are used when bare unqualified hostnames are used inside of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#dns_search Container#dns_search}

---

##### `domainname`<sup>Optional</sup> <a name="domainname" id="@cdktf/provider-docker.container.Container.Initializer.parameter.domainname"></a>

- *Type:* str

Domain name of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#domainname Container#domainname}

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@cdktf/provider-docker.container.Container.Initializer.parameter.entrypoint"></a>

- *Type:* typing.List[str]

The command to use as the Entrypoint for the container.

The Entrypoint allows you to configure a container to run as an executable. For example, to run `/usr/bin/myprogram` when starting a container, set the entrypoint to be `"/usr/bin/myprogram"]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#entrypoint Container#entrypoint}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-docker.container.Container.Initializer.parameter.env"></a>

- *Type:* typing.List[str]

Environment variables to set in the form of `KEY=VALUE`, e.g. `DEBUG=0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#env Container#env}

---

##### `gpus`<sup>Optional</sup> <a name="gpus" id="@cdktf/provider-docker.container.Container.Initializer.parameter.gpus"></a>

- *Type:* str

GPU devices to add to the container.

Currently, only the value `all` is supported. Passing any other value will result in unexpected behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#gpus Container#gpus}

---

##### `group_add`<sup>Optional</sup> <a name="group_add" id="@cdktf/provider-docker.container.Container.Initializer.parameter.groupAdd"></a>

- *Type:* typing.List[str]

Additional groups for the container user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#group_add Container#group_add}

---

##### `healthcheck`<sup>Optional</sup> <a name="healthcheck" id="@cdktf/provider-docker.container.Container.Initializer.parameter.healthcheck"></a>

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a>

healthcheck block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#healthcheck Container#healthcheck}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-docker.container.Container.Initializer.parameter.host"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a>]]

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#host Container#host}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-docker.container.Container.Initializer.parameter.hostname"></a>

- *Type:* str

Hostname of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#hostname Container#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.container.Container.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#id Container#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `init`<sup>Optional</sup> <a name="init" id="@cdktf/provider-docker.container.Container.Initializer.parameter.init"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Configured whether an init process should be injected for this container.

If unset this will default to the `dockerd` defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#init Container#init}

---

##### `ipc_mode`<sup>Optional</sup> <a name="ipc_mode" id="@cdktf/provider-docker.container.Container.Initializer.parameter.ipcMode"></a>

- *Type:* str

IPC sharing mode for the container. Possible values are: `none`, `private`, `shareable`, `container:<name|id>` or `host`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#ipc_mode Container#ipc_mode}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.container.Container.Initializer.parameter.labels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a>]]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#labels Container#labels}

---

##### `log_driver`<sup>Optional</sup> <a name="log_driver" id="@cdktf/provider-docker.container.Container.Initializer.parameter.logDriver"></a>

- *Type:* str

The logging driver to use for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#log_driver Container#log_driver}

---

##### `log_opts`<sup>Optional</sup> <a name="log_opts" id="@cdktf/provider-docker.container.Container.Initializer.parameter.logOpts"></a>

- *Type:* typing.Mapping[str]

Key/value pairs to use as options for the logging driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#log_opts Container#log_opts}

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktf/provider-docker.container.Container.Initializer.parameter.logs"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Save the container logs (`attach` must be enabled). Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#logs Container#logs}

---

##### `max_retry_count`<sup>Optional</sup> <a name="max_retry_count" id="@cdktf/provider-docker.container.Container.Initializer.parameter.maxRetryCount"></a>

- *Type:* typing.Union[int, float]

The maximum amount of times to an attempt a restart when `restart` is set to 'on-failure'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#max_retry_count Container#max_retry_count}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-docker.container.Container.Initializer.parameter.memory"></a>

- *Type:* typing.Union[int, float]

The memory limit for the container in MBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#memory Container#memory}

---

##### `memory_swap`<sup>Optional</sup> <a name="memory_swap" id="@cdktf/provider-docker.container.Container.Initializer.parameter.memorySwap"></a>

- *Type:* typing.Union[int, float]

The total memory limit (memory + swap) for the container in MBs.

This setting may compute to `-1` after `terraform apply` if the target host doesn't support memory swap, when that is the case docker will use a soft limitation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#memory_swap Container#memory_swap}

---

##### `mounts`<sup>Optional</sup> <a name="mounts" id="@cdktf/provider-docker.container.Container.Initializer.parameter.mounts"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a>]]

mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#mounts Container#mounts}

---

##### `must_run`<sup>Optional</sup> <a name="must_run" id="@cdktf/provider-docker.container.Container.Initializer.parameter.mustRun"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, then the Docker container will be kept running.

If `false`, then as long as the container exists, Terraform assumes it is successful. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#must_run Container#must_run}

---

##### `network_mode`<sup>Optional</sup> <a name="network_mode" id="@cdktf/provider-docker.container.Container.Initializer.parameter.networkMode"></a>

- *Type:* str

Network mode of the container. See https://docs.docker.com/engine/network/ for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#network_mode Container#network_mode}

---

##### `networks_advanced`<sup>Optional</sup> <a name="networks_advanced" id="@cdktf/provider-docker.container.Container.Initializer.parameter.networksAdvanced"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a>]]

networks_advanced block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#networks_advanced Container#networks_advanced}

---

##### `pid_mode`<sup>Optional</sup> <a name="pid_mode" id="@cdktf/provider-docker.container.Container.Initializer.parameter.pidMode"></a>

- *Type:* str

he PID (Process) Namespace mode for the container. Either `container:<name|id>` or `host`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#pid_mode Container#pid_mode}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-docker.container.Container.Initializer.parameter.ports"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a>]]

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#ports Container#ports}

---

##### `privileged`<sup>Optional</sup> <a name="privileged" id="@cdktf/provider-docker.container.Container.Initializer.parameter.privileged"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, the container runs in privileged mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#privileged Container#privileged}

---

##### `publish_all_ports`<sup>Optional</sup> <a name="publish_all_ports" id="@cdktf/provider-docker.container.Container.Initializer.parameter.publishAllPorts"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Publish all ports of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#publish_all_ports Container#publish_all_ports}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-docker.container.Container.Initializer.parameter.readOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, the container will be started as readonly. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#read_only Container#read_only}

---

##### `remove_volumes`<sup>Optional</sup> <a name="remove_volumes" id="@cdktf/provider-docker.container.Container.Initializer.parameter.removeVolumes"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, it will remove anonymous volumes associated with the container. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#remove_volumes Container#remove_volumes}

---

##### `restart`<sup>Optional</sup> <a name="restart" id="@cdktf/provider-docker.container.Container.Initializer.parameter.restart"></a>

- *Type:* str

The restart policy for the container. Must be one of 'no', 'on-failure', 'always', 'unless-stopped'. Defaults to `no`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#restart Container#restart}

---

##### `rm`<sup>Optional</sup> <a name="rm" id="@cdktf/provider-docker.container.Container.Initializer.parameter.rm"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, then the container will be automatically removed when it exits. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#rm Container#rm}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-docker.container.Container.Initializer.parameter.runtime"></a>

- *Type:* str

Runtime to use for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#runtime Container#runtime}

---

##### `security_opts`<sup>Optional</sup> <a name="security_opts" id="@cdktf/provider-docker.container.Container.Initializer.parameter.securityOpts"></a>

- *Type:* typing.List[str]

List of string values to customize labels for MLS systems, such as SELinux. See https://docs.docker.com/engine/reference/run/#security-configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#security_opts Container#security_opts}

---

##### `shm_size`<sup>Optional</sup> <a name="shm_size" id="@cdktf/provider-docker.container.Container.Initializer.parameter.shmSize"></a>

- *Type:* typing.Union[int, float]

Size of `/dev/shm` in MBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#shm_size Container#shm_size}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-docker.container.Container.Initializer.parameter.start"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, then the Docker container will be started after creation.

If `false`, then the container is only created. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#start Container#start}

---

##### `stdin_open`<sup>Optional</sup> <a name="stdin_open" id="@cdktf/provider-docker.container.Container.Initializer.parameter.stdinOpen"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, keep STDIN open even if not attached (`docker run -i`). Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#stdin_open Container#stdin_open}

---

##### `stop_signal`<sup>Optional</sup> <a name="stop_signal" id="@cdktf/provider-docker.container.Container.Initializer.parameter.stopSignal"></a>

- *Type:* str

Signal to stop a container (default `SIGTERM`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#stop_signal Container#stop_signal}

---

##### `stop_timeout`<sup>Optional</sup> <a name="stop_timeout" id="@cdktf/provider-docker.container.Container.Initializer.parameter.stopTimeout"></a>

- *Type:* typing.Union[int, float]

Timeout (in seconds) to stop a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#stop_timeout Container#stop_timeout}

---

##### `storage_opts`<sup>Optional</sup> <a name="storage_opts" id="@cdktf/provider-docker.container.Container.Initializer.parameter.storageOpts"></a>

- *Type:* typing.Mapping[str]

Key/value pairs for the storage driver options, e.g. `size`: `120G`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#storage_opts Container#storage_opts}

---

##### `sysctls`<sup>Optional</sup> <a name="sysctls" id="@cdktf/provider-docker.container.Container.Initializer.parameter.sysctls"></a>

- *Type:* typing.Mapping[str]

A map of kernel parameters (sysctls) to set in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#sysctls Container#sysctls}

---

##### `tmpfs`<sup>Optional</sup> <a name="tmpfs" id="@cdktf/provider-docker.container.Container.Initializer.parameter.tmpfs"></a>

- *Type:* typing.Mapping[str]

A map of container directories which should be replaced by `tmpfs mounts`, and their corresponding mount options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#tmpfs Container#tmpfs}

---

##### `tty`<sup>Optional</sup> <a name="tty" id="@cdktf/provider-docker.container.Container.Initializer.parameter.tty"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, allocate a pseudo-tty (`docker run -t`). Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#tty Container#tty}

---

##### `ulimit`<sup>Optional</sup> <a name="ulimit" id="@cdktf/provider-docker.container.Container.Initializer.parameter.ulimit"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a>]]

ulimit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#ulimit Container#ulimit}

---

##### `upload`<sup>Optional</sup> <a name="upload" id="@cdktf/provider-docker.container.Container.Initializer.parameter.upload"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a>]]

upload block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#upload Container#upload}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-docker.container.Container.Initializer.parameter.user"></a>

- *Type:* str

User used for run the first process.

Format is `user` or `user:group` which user and group can be passed literraly or by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#user Container#user}

---

##### `userns_mode`<sup>Optional</sup> <a name="userns_mode" id="@cdktf/provider-docker.container.Container.Initializer.parameter.usernsMode"></a>

- *Type:* str

Sets the usernamespace mode for the container when usernamespace remapping option is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#userns_mode Container#userns_mode}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-docker.container.Container.Initializer.parameter.volumes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a>]]

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#volumes Container#volumes}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-docker.container.Container.Initializer.parameter.wait"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, then the Docker container is waited for being healthy state after creation.

This requires your container to have a healthcheck, otherwise this provider will error. If `false`, then the container health state is not checked. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#wait Container#wait}

---

##### `wait_timeout`<sup>Optional</sup> <a name="wait_timeout" id="@cdktf/provider-docker.container.Container.Initializer.parameter.waitTimeout"></a>

- *Type:* typing.Union[int, float]

The timeout in seconds to wait the container to be healthy after creation. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#wait_timeout Container#wait_timeout}

---

##### `working_dir`<sup>Optional</sup> <a name="working_dir" id="@cdktf/provider-docker.container.Container.Initializer.parameter.workingDir"></a>

- *Type:* str

The working directory for commands to run in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#working_dir Container#working_dir}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.Container.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.container.Container.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.container.Container.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.container.Container.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.container.Container.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-docker.container.Container.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-docker.container.Container.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-docker.container.Container.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-docker.container.Container.putCapabilities">put_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putDevices">put_devices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putHealthcheck">put_healthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putHost">put_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putLabels">put_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putMounts">put_mounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putNetworksAdvanced">put_networks_advanced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putPorts">put_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putUlimit">put_ulimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putUpload">put_upload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putVolumes">put_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetAttach">reset_attach</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetCapabilities">reset_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetCgroupnsMode">reset_cgroupns_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetCommand">reset_command</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetContainerReadRefreshTimeoutMilliseconds">reset_container_read_refresh_timeout_milliseconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetCpus">reset_cpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetCpuSet">reset_cpu_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetCpuShares">reset_cpu_shares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetDestroyGraceSeconds">reset_destroy_grace_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetDevices">reset_devices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetDns">reset_dns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetDnsOpts">reset_dns_opts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetDnsSearch">reset_dns_search</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetDomainname">reset_domainname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetEntrypoint">reset_entrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetEnv">reset_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetGpus">reset_gpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetGroupAdd">reset_group_add</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetHealthcheck">reset_healthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetInit">reset_init</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetIpcMode">reset_ipc_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetLogDriver">reset_log_driver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetLogOpts">reset_log_opts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetLogs">reset_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetMaxRetryCount">reset_max_retry_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetMemory">reset_memory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetMemorySwap">reset_memory_swap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetMounts">reset_mounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetMustRun">reset_must_run</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetNetworkMode">reset_network_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetNetworksAdvanced">reset_networks_advanced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetPidMode">reset_pid_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetPorts">reset_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetPrivileged">reset_privileged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetPublishAllPorts">reset_publish_all_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetReadOnly">reset_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetRemoveVolumes">reset_remove_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetRestart">reset_restart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetRm">reset_rm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetRuntime">reset_runtime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetSecurityOpts">reset_security_opts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetShmSize">reset_shm_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetStart">reset_start</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetStdinOpen">reset_stdin_open</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetStopSignal">reset_stop_signal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetStopTimeout">reset_stop_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetStorageOpts">reset_storage_opts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetSysctls">reset_sysctls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetTmpfs">reset_tmpfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetTty">reset_tty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetUlimit">reset_ulimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetUpload">reset_upload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetUser">reset_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetUsernsMode">reset_userns_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetVolumes">reset_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetWait">reset_wait</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetWaitTimeout">reset_wait_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetWorkingDir">reset_working_dir</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.container.Container.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-docker.container.Container.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.container.Container.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-docker.container.Container.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-docker.container.Container.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-docker.container.Container.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-docker.container.Container.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-docker.container.Container.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-docker.container.Container.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-docker.container.Container.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-docker.container.Container.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.container.Container.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.Container.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.container.Container.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.Container.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.container.Container.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.Container.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.container.Container.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.Container.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.container.Container.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.Container.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.container.Container.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.Container.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.container.Container.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.Container.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.container.Container.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.Container.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.container.Container.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.Container.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-docker.container.Container.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-docker.container.Container.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.container.Container.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.container.Container.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.container.Container.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.Container.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-docker.container.Container.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.container.Container.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-docker.container.Container.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-docker.container.Container.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-docker.container.Container.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-docker.container.Container.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.container.Container.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_capabilities` <a name="put_capabilities" id="@cdktf/provider-docker.container.Container.putCapabilities"></a>

```python
def put_capabilities(
  add: typing.List[str] = None,
  drop: typing.List[str] = None
) -> None
```

###### `add`<sup>Optional</sup> <a name="add" id="@cdktf/provider-docker.container.Container.putCapabilities.parameter.add"></a>

- *Type:* typing.List[str]

List of linux capabilities to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#add Container#add}

---

###### `drop`<sup>Optional</sup> <a name="drop" id="@cdktf/provider-docker.container.Container.putCapabilities.parameter.drop"></a>

- *Type:* typing.List[str]

List of linux capabilities to drop.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#drop Container#drop}

---

##### `put_devices` <a name="put_devices" id="@cdktf/provider-docker.container.Container.putDevices"></a>

```python
def put_devices(
  value: typing.Union[IResolvable, typing.List[ContainerDevices]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putDevices.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a>]]

---

##### `put_healthcheck` <a name="put_healthcheck" id="@cdktf/provider-docker.container.Container.putHealthcheck"></a>

```python
def put_healthcheck(
  test: typing.List[str],
  interval: str = None,
  retries: typing.Union[int, float] = None,
  start_interval: str = None,
  start_period: str = None,
  timeout: str = None
) -> None
```

###### `test`<sup>Required</sup> <a name="test" id="@cdktf/provider-docker.container.Container.putHealthcheck.parameter.test"></a>

- *Type:* typing.List[str]

Command to run to check health.

For example, to run `curl -f localhost/health` set the command to be `["CMD", "curl", "-f", "localhost/health"]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#test Container#test}

---

###### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-docker.container.Container.putHealthcheck.parameter.interval"></a>

- *Type:* str

Time between running the check (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#interval Container#interval}

---

###### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-docker.container.Container.putHealthcheck.parameter.retries"></a>

- *Type:* typing.Union[int, float]

Consecutive failures needed to report unhealthy. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#retries Container#retries}

---

###### `start_interval`<sup>Optional</sup> <a name="start_interval" id="@cdktf/provider-docker.container.Container.putHealthcheck.parameter.startInterval"></a>

- *Type:* str

Interval before the healthcheck starts (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#start_interval Container#start_interval}

---

###### `start_period`<sup>Optional</sup> <a name="start_period" id="@cdktf/provider-docker.container.Container.putHealthcheck.parameter.startPeriod"></a>

- *Type:* str

Start period for the container to initialize before counting retries towards unstable (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#start_period Container#start_period}

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-docker.container.Container.putHealthcheck.parameter.timeout"></a>

- *Type:* str

Maximum time to allow one check to run (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#timeout Container#timeout}

---

##### `put_host` <a name="put_host" id="@cdktf/provider-docker.container.Container.putHost"></a>

```python
def put_host(
  value: typing.Union[IResolvable, typing.List[ContainerHost]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putHost.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a>]]

---

##### `put_labels` <a name="put_labels" id="@cdktf/provider-docker.container.Container.putLabels"></a>

```python
def put_labels(
  value: typing.Union[IResolvable, typing.List[ContainerLabels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putLabels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a>]]

---

##### `put_mounts` <a name="put_mounts" id="@cdktf/provider-docker.container.Container.putMounts"></a>

```python
def put_mounts(
  value: typing.Union[IResolvable, typing.List[ContainerMounts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putMounts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a>]]

---

##### `put_networks_advanced` <a name="put_networks_advanced" id="@cdktf/provider-docker.container.Container.putNetworksAdvanced"></a>

```python
def put_networks_advanced(
  value: typing.Union[IResolvable, typing.List[ContainerNetworksAdvanced]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putNetworksAdvanced.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a>]]

---

##### `put_ports` <a name="put_ports" id="@cdktf/provider-docker.container.Container.putPorts"></a>

```python
def put_ports(
  value: typing.Union[IResolvable, typing.List[ContainerPorts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putPorts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a>]]

---

##### `put_ulimit` <a name="put_ulimit" id="@cdktf/provider-docker.container.Container.putUlimit"></a>

```python
def put_ulimit(
  value: typing.Union[IResolvable, typing.List[ContainerUlimit]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putUlimit.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a>]]

---

##### `put_upload` <a name="put_upload" id="@cdktf/provider-docker.container.Container.putUpload"></a>

```python
def put_upload(
  value: typing.Union[IResolvable, typing.List[ContainerUpload]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putUpload.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a>]]

---

##### `put_volumes` <a name="put_volumes" id="@cdktf/provider-docker.container.Container.putVolumes"></a>

```python
def put_volumes(
  value: typing.Union[IResolvable, typing.List[ContainerVolumes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putVolumes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a>]]

---

##### `reset_attach` <a name="reset_attach" id="@cdktf/provider-docker.container.Container.resetAttach"></a>

```python
def reset_attach() -> None
```

##### `reset_capabilities` <a name="reset_capabilities" id="@cdktf/provider-docker.container.Container.resetCapabilities"></a>

```python
def reset_capabilities() -> None
```

##### `reset_cgroupns_mode` <a name="reset_cgroupns_mode" id="@cdktf/provider-docker.container.Container.resetCgroupnsMode"></a>

```python
def reset_cgroupns_mode() -> None
```

##### `reset_command` <a name="reset_command" id="@cdktf/provider-docker.container.Container.resetCommand"></a>

```python
def reset_command() -> None
```

##### `reset_container_read_refresh_timeout_milliseconds` <a name="reset_container_read_refresh_timeout_milliseconds" id="@cdktf/provider-docker.container.Container.resetContainerReadRefreshTimeoutMilliseconds"></a>

```python
def reset_container_read_refresh_timeout_milliseconds() -> None
```

##### `reset_cpus` <a name="reset_cpus" id="@cdktf/provider-docker.container.Container.resetCpus"></a>

```python
def reset_cpus() -> None
```

##### `reset_cpu_set` <a name="reset_cpu_set" id="@cdktf/provider-docker.container.Container.resetCpuSet"></a>

```python
def reset_cpu_set() -> None
```

##### `reset_cpu_shares` <a name="reset_cpu_shares" id="@cdktf/provider-docker.container.Container.resetCpuShares"></a>

```python
def reset_cpu_shares() -> None
```

##### `reset_destroy_grace_seconds` <a name="reset_destroy_grace_seconds" id="@cdktf/provider-docker.container.Container.resetDestroyGraceSeconds"></a>

```python
def reset_destroy_grace_seconds() -> None
```

##### `reset_devices` <a name="reset_devices" id="@cdktf/provider-docker.container.Container.resetDevices"></a>

```python
def reset_devices() -> None
```

##### `reset_dns` <a name="reset_dns" id="@cdktf/provider-docker.container.Container.resetDns"></a>

```python
def reset_dns() -> None
```

##### `reset_dns_opts` <a name="reset_dns_opts" id="@cdktf/provider-docker.container.Container.resetDnsOpts"></a>

```python
def reset_dns_opts() -> None
```

##### `reset_dns_search` <a name="reset_dns_search" id="@cdktf/provider-docker.container.Container.resetDnsSearch"></a>

```python
def reset_dns_search() -> None
```

##### `reset_domainname` <a name="reset_domainname" id="@cdktf/provider-docker.container.Container.resetDomainname"></a>

```python
def reset_domainname() -> None
```

##### `reset_entrypoint` <a name="reset_entrypoint" id="@cdktf/provider-docker.container.Container.resetEntrypoint"></a>

```python
def reset_entrypoint() -> None
```

##### `reset_env` <a name="reset_env" id="@cdktf/provider-docker.container.Container.resetEnv"></a>

```python
def reset_env() -> None
```

##### `reset_gpus` <a name="reset_gpus" id="@cdktf/provider-docker.container.Container.resetGpus"></a>

```python
def reset_gpus() -> None
```

##### `reset_group_add` <a name="reset_group_add" id="@cdktf/provider-docker.container.Container.resetGroupAdd"></a>

```python
def reset_group_add() -> None
```

##### `reset_healthcheck` <a name="reset_healthcheck" id="@cdktf/provider-docker.container.Container.resetHealthcheck"></a>

```python
def reset_healthcheck() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktf/provider-docker.container.Container.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_hostname` <a name="reset_hostname" id="@cdktf/provider-docker.container.Container.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-docker.container.Container.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_init` <a name="reset_init" id="@cdktf/provider-docker.container.Container.resetInit"></a>

```python
def reset_init() -> None
```

##### `reset_ipc_mode` <a name="reset_ipc_mode" id="@cdktf/provider-docker.container.Container.resetIpcMode"></a>

```python
def reset_ipc_mode() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-docker.container.Container.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_log_driver` <a name="reset_log_driver" id="@cdktf/provider-docker.container.Container.resetLogDriver"></a>

```python
def reset_log_driver() -> None
```

##### `reset_log_opts` <a name="reset_log_opts" id="@cdktf/provider-docker.container.Container.resetLogOpts"></a>

```python
def reset_log_opts() -> None
```

##### `reset_logs` <a name="reset_logs" id="@cdktf/provider-docker.container.Container.resetLogs"></a>

```python
def reset_logs() -> None
```

##### `reset_max_retry_count` <a name="reset_max_retry_count" id="@cdktf/provider-docker.container.Container.resetMaxRetryCount"></a>

```python
def reset_max_retry_count() -> None
```

##### `reset_memory` <a name="reset_memory" id="@cdktf/provider-docker.container.Container.resetMemory"></a>

```python
def reset_memory() -> None
```

##### `reset_memory_swap` <a name="reset_memory_swap" id="@cdktf/provider-docker.container.Container.resetMemorySwap"></a>

```python
def reset_memory_swap() -> None
```

##### `reset_mounts` <a name="reset_mounts" id="@cdktf/provider-docker.container.Container.resetMounts"></a>

```python
def reset_mounts() -> None
```

##### `reset_must_run` <a name="reset_must_run" id="@cdktf/provider-docker.container.Container.resetMustRun"></a>

```python
def reset_must_run() -> None
```

##### `reset_network_mode` <a name="reset_network_mode" id="@cdktf/provider-docker.container.Container.resetNetworkMode"></a>

```python
def reset_network_mode() -> None
```

##### `reset_networks_advanced` <a name="reset_networks_advanced" id="@cdktf/provider-docker.container.Container.resetNetworksAdvanced"></a>

```python
def reset_networks_advanced() -> None
```

##### `reset_pid_mode` <a name="reset_pid_mode" id="@cdktf/provider-docker.container.Container.resetPidMode"></a>

```python
def reset_pid_mode() -> None
```

##### `reset_ports` <a name="reset_ports" id="@cdktf/provider-docker.container.Container.resetPorts"></a>

```python
def reset_ports() -> None
```

##### `reset_privileged` <a name="reset_privileged" id="@cdktf/provider-docker.container.Container.resetPrivileged"></a>

```python
def reset_privileged() -> None
```

##### `reset_publish_all_ports` <a name="reset_publish_all_ports" id="@cdktf/provider-docker.container.Container.resetPublishAllPorts"></a>

```python
def reset_publish_all_ports() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-docker.container.Container.resetReadOnly"></a>

```python
def reset_read_only() -> None
```

##### `reset_remove_volumes` <a name="reset_remove_volumes" id="@cdktf/provider-docker.container.Container.resetRemoveVolumes"></a>

```python
def reset_remove_volumes() -> None
```

##### `reset_restart` <a name="reset_restart" id="@cdktf/provider-docker.container.Container.resetRestart"></a>

```python
def reset_restart() -> None
```

##### `reset_rm` <a name="reset_rm" id="@cdktf/provider-docker.container.Container.resetRm"></a>

```python
def reset_rm() -> None
```

##### `reset_runtime` <a name="reset_runtime" id="@cdktf/provider-docker.container.Container.resetRuntime"></a>

```python
def reset_runtime() -> None
```

##### `reset_security_opts` <a name="reset_security_opts" id="@cdktf/provider-docker.container.Container.resetSecurityOpts"></a>

```python
def reset_security_opts() -> None
```

##### `reset_shm_size` <a name="reset_shm_size" id="@cdktf/provider-docker.container.Container.resetShmSize"></a>

```python
def reset_shm_size() -> None
```

##### `reset_start` <a name="reset_start" id="@cdktf/provider-docker.container.Container.resetStart"></a>

```python
def reset_start() -> None
```

##### `reset_stdin_open` <a name="reset_stdin_open" id="@cdktf/provider-docker.container.Container.resetStdinOpen"></a>

```python
def reset_stdin_open() -> None
```

##### `reset_stop_signal` <a name="reset_stop_signal" id="@cdktf/provider-docker.container.Container.resetStopSignal"></a>

```python
def reset_stop_signal() -> None
```

##### `reset_stop_timeout` <a name="reset_stop_timeout" id="@cdktf/provider-docker.container.Container.resetStopTimeout"></a>

```python
def reset_stop_timeout() -> None
```

##### `reset_storage_opts` <a name="reset_storage_opts" id="@cdktf/provider-docker.container.Container.resetStorageOpts"></a>

```python
def reset_storage_opts() -> None
```

##### `reset_sysctls` <a name="reset_sysctls" id="@cdktf/provider-docker.container.Container.resetSysctls"></a>

```python
def reset_sysctls() -> None
```

##### `reset_tmpfs` <a name="reset_tmpfs" id="@cdktf/provider-docker.container.Container.resetTmpfs"></a>

```python
def reset_tmpfs() -> None
```

##### `reset_tty` <a name="reset_tty" id="@cdktf/provider-docker.container.Container.resetTty"></a>

```python
def reset_tty() -> None
```

##### `reset_ulimit` <a name="reset_ulimit" id="@cdktf/provider-docker.container.Container.resetUlimit"></a>

```python
def reset_ulimit() -> None
```

##### `reset_upload` <a name="reset_upload" id="@cdktf/provider-docker.container.Container.resetUpload"></a>

```python
def reset_upload() -> None
```

##### `reset_user` <a name="reset_user" id="@cdktf/provider-docker.container.Container.resetUser"></a>

```python
def reset_user() -> None
```

##### `reset_userns_mode` <a name="reset_userns_mode" id="@cdktf/provider-docker.container.Container.resetUsernsMode"></a>

```python
def reset_userns_mode() -> None
```

##### `reset_volumes` <a name="reset_volumes" id="@cdktf/provider-docker.container.Container.resetVolumes"></a>

```python
def reset_volumes() -> None
```

##### `reset_wait` <a name="reset_wait" id="@cdktf/provider-docker.container.Container.resetWait"></a>

```python
def reset_wait() -> None
```

##### `reset_wait_timeout` <a name="reset_wait_timeout" id="@cdktf/provider-docker.container.Container.resetWaitTimeout"></a>

```python
def reset_wait_timeout() -> None
```

##### `reset_working_dir` <a name="reset_working_dir" id="@cdktf/provider-docker.container.Container.resetWorkingDir"></a>

```python
def reset_working_dir() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.Container.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.container.Container.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Container resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-docker.container.Container.isConstruct"></a>

```python
from cdktf_cdktf_provider_docker import container

container.Container.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-docker.container.Container.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_docker import container

container.Container.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.container.Container.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-docker.container.Container.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_docker import container

container.Container.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.container.Container.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-docker.container.Container.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_docker import container

container.Container.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Container resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.container.Container.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-docker.container.Container.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Container to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-docker.container.Container.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Container that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.container.Container.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Container to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.Container.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.bridge">bridge</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.capabilities">capabilities</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference">ContainerCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.containerLogs">container_logs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.devices">devices</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList">ContainerDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.exitCode">exit_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.healthcheck">healthcheck</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference">ContainerHealthcheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.host">host</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerHostList">ContainerHostList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList">ContainerLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.mounts">mounts</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsList">ContainerMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.networkData">network_data</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList">ContainerNetworkDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.networksAdvanced">networks_advanced</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList">ContainerNetworksAdvancedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.ports">ports</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerPortsList">ContainerPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.ulimit">ulimit</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList">ContainerUlimitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.upload">upload</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerUploadList">ContainerUploadList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList">ContainerVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.attachInput">attach_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.capabilitiesInput">capabilities_input</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cgroupnsModeInput">cgroupns_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.containerReadRefreshTimeoutMillisecondsInput">container_read_refresh_timeout_milliseconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cpuSetInput">cpu_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cpuSharesInput">cpu_shares_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cpusInput">cpus_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.destroyGraceSecondsInput">destroy_grace_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.devicesInput">devices_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.dnsInput">dns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.dnsOptsInput">dns_opts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.dnsSearchInput">dns_search_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.domainnameInput">domainname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.entrypointInput">entrypoint_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.envInput">env_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.gpusInput">gpus_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.groupAddInput">group_add_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.healthcheckInput">healthcheck_input</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.hostInput">host_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.initInput">init_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.ipcModeInput">ipc_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.labelsInput">labels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.logDriverInput">log_driver_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.logOptsInput">log_opts_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.logsInput">logs_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.maxRetryCountInput">max_retry_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.memoryInput">memory_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.memorySwapInput">memory_swap_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.mountsInput">mounts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.mustRunInput">must_run_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.networkModeInput">network_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.networksAdvancedInput">networks_advanced_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.pidModeInput">pid_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.portsInput">ports_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.privilegedInput">privileged_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.publishAllPortsInput">publish_all_ports_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.removeVolumesInput">remove_volumes_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.restartInput">restart_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.rmInput">rm_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.runtimeInput">runtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.securityOptsInput">security_opts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.shmSizeInput">shm_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.startInput">start_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.stdinOpenInput">stdin_open_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.stopSignalInput">stop_signal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.stopTimeoutInput">stop_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.storageOptsInput">storage_opts_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.sysctlsInput">sysctls_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.tmpfsInput">tmpfs_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.ttyInput">tty_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.ulimitInput">ulimit_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.uploadInput">upload_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.usernsModeInput">userns_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.volumesInput">volumes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.waitInput">wait_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.waitTimeoutInput">wait_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.workingDirInput">working_dir_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.attach">attach</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cgroupnsMode">cgroupns_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.containerReadRefreshTimeoutMilliseconds">container_read_refresh_timeout_milliseconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cpus">cpus</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cpuSet">cpu_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cpuShares">cpu_shares</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.destroyGraceSeconds">destroy_grace_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.dns">dns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.dnsOpts">dns_opts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.dnsSearch">dns_search</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.domainname">domainname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.entrypoint">entrypoint</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.env">env</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.gpus">gpus</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.groupAdd">group_add</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.init">init</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.ipcMode">ipc_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.logDriver">log_driver</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.logOpts">log_opts</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.logs">logs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.maxRetryCount">max_retry_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.memory">memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.memorySwap">memory_swap</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.mustRun">must_run</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.networkMode">network_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.pidMode">pid_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.privileged">privileged</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.publishAllPorts">publish_all_ports</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.removeVolumes">remove_volumes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.restart">restart</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.rm">rm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.securityOpts">security_opts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.shmSize">shm_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.start">start</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.stdinOpen">stdin_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.stopSignal">stop_signal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.stopTimeout">stop_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.storageOpts">storage_opts</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.sysctls">sysctls</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.tmpfs">tmpfs</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.tty">tty</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.usernsMode">userns_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.wait">wait</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.waitTimeout">wait_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.workingDir">working_dir</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-docker.container.Container.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-docker.container.Container.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.Container.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-docker.container.Container.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-docker.container.Container.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-docker.container.Container.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-docker.container.Container.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.container.Container.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.container.Container.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-docker.container.Container.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-docker.container.Container.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.container.Container.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.container.Container.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.container.Container.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bridge`<sup>Required</sup> <a name="bridge" id="@cdktf/provider-docker.container.Container.property.bridge"></a>

```python
bridge: str
```

- *Type:* str

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-docker.container.Container.property.capabilities"></a>

```python
capabilities: ContainerCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference">ContainerCapabilitiesOutputReference</a>

---

##### `container_logs`<sup>Required</sup> <a name="container_logs" id="@cdktf/provider-docker.container.Container.property.containerLogs"></a>

```python
container_logs: str
```

- *Type:* str

---

##### `devices`<sup>Required</sup> <a name="devices" id="@cdktf/provider-docker.container.Container.property.devices"></a>

```python
devices: ContainerDevicesList
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerDevicesList">ContainerDevicesList</a>

---

##### `exit_code`<sup>Required</sup> <a name="exit_code" id="@cdktf/provider-docker.container.Container.property.exitCode"></a>

```python
exit_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `healthcheck`<sup>Required</sup> <a name="healthcheck" id="@cdktf/provider-docker.container.Container.property.healthcheck"></a>

```python
healthcheck: ContainerHealthcheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference">ContainerHealthcheckOutputReference</a>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-docker.container.Container.property.host"></a>

```python
host: ContainerHostList
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerHostList">ContainerHostList</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-docker.container.Container.property.labels"></a>

```python
labels: ContainerLabelsList
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerLabelsList">ContainerLabelsList</a>

---

##### `mounts`<sup>Required</sup> <a name="mounts" id="@cdktf/provider-docker.container.Container.property.mounts"></a>

```python
mounts: ContainerMountsList
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsList">ContainerMountsList</a>

---

##### `network_data`<sup>Required</sup> <a name="network_data" id="@cdktf/provider-docker.container.Container.property.networkData"></a>

```python
network_data: ContainerNetworkDataList
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerNetworkDataList">ContainerNetworkDataList</a>

---

##### `networks_advanced`<sup>Required</sup> <a name="networks_advanced" id="@cdktf/provider-docker.container.Container.property.networksAdvanced"></a>

```python
networks_advanced: ContainerNetworksAdvancedList
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList">ContainerNetworksAdvancedList</a>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-docker.container.Container.property.ports"></a>

```python
ports: ContainerPortsList
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerPortsList">ContainerPortsList</a>

---

##### `ulimit`<sup>Required</sup> <a name="ulimit" id="@cdktf/provider-docker.container.Container.property.ulimit"></a>

```python
ulimit: ContainerUlimitList
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerUlimitList">ContainerUlimitList</a>

---

##### `upload`<sup>Required</sup> <a name="upload" id="@cdktf/provider-docker.container.Container.property.upload"></a>

```python
upload: ContainerUploadList
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerUploadList">ContainerUploadList</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-docker.container.Container.property.volumes"></a>

```python
volumes: ContainerVolumesList
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerVolumesList">ContainerVolumesList</a>

---

##### `attach_input`<sup>Optional</sup> <a name="attach_input" id="@cdktf/provider-docker.container.Container.property.attachInput"></a>

```python
attach_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `capabilities_input`<sup>Optional</sup> <a name="capabilities_input" id="@cdktf/provider-docker.container.Container.property.capabilitiesInput"></a>

```python
capabilities_input: ContainerCapabilities
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a>

---

##### `cgroupns_mode_input`<sup>Optional</sup> <a name="cgroupns_mode_input" id="@cdktf/provider-docker.container.Container.property.cgroupnsModeInput"></a>

```python
cgroupns_mode_input: str
```

- *Type:* str

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktf/provider-docker.container.Container.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_read_refresh_timeout_milliseconds_input`<sup>Optional</sup> <a name="container_read_refresh_timeout_milliseconds_input" id="@cdktf/provider-docker.container.Container.property.containerReadRefreshTimeoutMillisecondsInput"></a>

```python
container_read_refresh_timeout_milliseconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_set_input`<sup>Optional</sup> <a name="cpu_set_input" id="@cdktf/provider-docker.container.Container.property.cpuSetInput"></a>

```python
cpu_set_input: str
```

- *Type:* str

---

##### `cpu_shares_input`<sup>Optional</sup> <a name="cpu_shares_input" id="@cdktf/provider-docker.container.Container.property.cpuSharesInput"></a>

```python
cpu_shares_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpus_input`<sup>Optional</sup> <a name="cpus_input" id="@cdktf/provider-docker.container.Container.property.cpusInput"></a>

```python
cpus_input: str
```

- *Type:* str

---

##### `destroy_grace_seconds_input`<sup>Optional</sup> <a name="destroy_grace_seconds_input" id="@cdktf/provider-docker.container.Container.property.destroyGraceSecondsInput"></a>

```python
destroy_grace_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `devices_input`<sup>Optional</sup> <a name="devices_input" id="@cdktf/provider-docker.container.Container.property.devicesInput"></a>

```python
devices_input: typing.Union[IResolvable, typing.List[ContainerDevices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a>]]

---

##### `dns_input`<sup>Optional</sup> <a name="dns_input" id="@cdktf/provider-docker.container.Container.property.dnsInput"></a>

```python
dns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_opts_input`<sup>Optional</sup> <a name="dns_opts_input" id="@cdktf/provider-docker.container.Container.property.dnsOptsInput"></a>

```python
dns_opts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_search_input`<sup>Optional</sup> <a name="dns_search_input" id="@cdktf/provider-docker.container.Container.property.dnsSearchInput"></a>

```python
dns_search_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domainname_input`<sup>Optional</sup> <a name="domainname_input" id="@cdktf/provider-docker.container.Container.property.domainnameInput"></a>

```python
domainname_input: str
```

- *Type:* str

---

##### `entrypoint_input`<sup>Optional</sup> <a name="entrypoint_input" id="@cdktf/provider-docker.container.Container.property.entrypointInput"></a>

```python
entrypoint_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktf/provider-docker.container.Container.property.envInput"></a>

```python
env_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `gpus_input`<sup>Optional</sup> <a name="gpus_input" id="@cdktf/provider-docker.container.Container.property.gpusInput"></a>

```python
gpus_input: str
```

- *Type:* str

---

##### `group_add_input`<sup>Optional</sup> <a name="group_add_input" id="@cdktf/provider-docker.container.Container.property.groupAddInput"></a>

```python
group_add_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `healthcheck_input`<sup>Optional</sup> <a name="healthcheck_input" id="@cdktf/provider-docker.container.Container.property.healthcheckInput"></a>

```python
healthcheck_input: ContainerHealthcheck
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a>

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-docker.container.Container.property.hostInput"></a>

```python
host_input: typing.Union[IResolvable, typing.List[ContainerHost]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a>]]

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-docker.container.Container.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-docker.container.Container.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-docker.container.Container.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `init_input`<sup>Optional</sup> <a name="init_input" id="@cdktf/provider-docker.container.Container.property.initInput"></a>

```python
init_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ipc_mode_input`<sup>Optional</sup> <a name="ipc_mode_input" id="@cdktf/provider-docker.container.Container.property.ipcModeInput"></a>

```python
ipc_mode_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-docker.container.Container.property.labelsInput"></a>

```python
labels_input: typing.Union[IResolvable, typing.List[ContainerLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a>]]

---

##### `log_driver_input`<sup>Optional</sup> <a name="log_driver_input" id="@cdktf/provider-docker.container.Container.property.logDriverInput"></a>

```python
log_driver_input: str
```

- *Type:* str

---

##### `log_opts_input`<sup>Optional</sup> <a name="log_opts_input" id="@cdktf/provider-docker.container.Container.property.logOptsInput"></a>

```python
log_opts_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `logs_input`<sup>Optional</sup> <a name="logs_input" id="@cdktf/provider-docker.container.Container.property.logsInput"></a>

```python
logs_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_retry_count_input`<sup>Optional</sup> <a name="max_retry_count_input" id="@cdktf/provider-docker.container.Container.property.maxRetryCountInput"></a>

```python
max_retry_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktf/provider-docker.container.Container.property.memoryInput"></a>

```python
memory_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_swap_input`<sup>Optional</sup> <a name="memory_swap_input" id="@cdktf/provider-docker.container.Container.property.memorySwapInput"></a>

```python
memory_swap_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mounts_input`<sup>Optional</sup> <a name="mounts_input" id="@cdktf/provider-docker.container.Container.property.mountsInput"></a>

```python
mounts_input: typing.Union[IResolvable, typing.List[ContainerMounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a>]]

---

##### `must_run_input`<sup>Optional</sup> <a name="must_run_input" id="@cdktf/provider-docker.container.Container.property.mustRunInput"></a>

```python
must_run_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-docker.container.Container.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_mode_input`<sup>Optional</sup> <a name="network_mode_input" id="@cdktf/provider-docker.container.Container.property.networkModeInput"></a>

```python
network_mode_input: str
```

- *Type:* str

---

##### `networks_advanced_input`<sup>Optional</sup> <a name="networks_advanced_input" id="@cdktf/provider-docker.container.Container.property.networksAdvancedInput"></a>

```python
networks_advanced_input: typing.Union[IResolvable, typing.List[ContainerNetworksAdvanced]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a>]]

---

##### `pid_mode_input`<sup>Optional</sup> <a name="pid_mode_input" id="@cdktf/provider-docker.container.Container.property.pidModeInput"></a>

```python
pid_mode_input: str
```

- *Type:* str

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktf/provider-docker.container.Container.property.portsInput"></a>

```python
ports_input: typing.Union[IResolvable, typing.List[ContainerPorts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a>]]

---

##### `privileged_input`<sup>Optional</sup> <a name="privileged_input" id="@cdktf/provider-docker.container.Container.property.privilegedInput"></a>

```python
privileged_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `publish_all_ports_input`<sup>Optional</sup> <a name="publish_all_ports_input" id="@cdktf/provider-docker.container.Container.property.publishAllPortsInput"></a>

```python
publish_all_ports_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-docker.container.Container.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `remove_volumes_input`<sup>Optional</sup> <a name="remove_volumes_input" id="@cdktf/provider-docker.container.Container.property.removeVolumesInput"></a>

```python
remove_volumes_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `restart_input`<sup>Optional</sup> <a name="restart_input" id="@cdktf/provider-docker.container.Container.property.restartInput"></a>

```python
restart_input: str
```

- *Type:* str

---

##### `rm_input`<sup>Optional</sup> <a name="rm_input" id="@cdktf/provider-docker.container.Container.property.rmInput"></a>

```python
rm_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `runtime_input`<sup>Optional</sup> <a name="runtime_input" id="@cdktf/provider-docker.container.Container.property.runtimeInput"></a>

```python
runtime_input: str
```

- *Type:* str

---

##### `security_opts_input`<sup>Optional</sup> <a name="security_opts_input" id="@cdktf/provider-docker.container.Container.property.securityOptsInput"></a>

```python
security_opts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shm_size_input`<sup>Optional</sup> <a name="shm_size_input" id="@cdktf/provider-docker.container.Container.property.shmSizeInput"></a>

```python
shm_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktf/provider-docker.container.Container.property.startInput"></a>

```python
start_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `stdin_open_input`<sup>Optional</sup> <a name="stdin_open_input" id="@cdktf/provider-docker.container.Container.property.stdinOpenInput"></a>

```python
stdin_open_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `stop_signal_input`<sup>Optional</sup> <a name="stop_signal_input" id="@cdktf/provider-docker.container.Container.property.stopSignalInput"></a>

```python
stop_signal_input: str
```

- *Type:* str

---

##### `stop_timeout_input`<sup>Optional</sup> <a name="stop_timeout_input" id="@cdktf/provider-docker.container.Container.property.stopTimeoutInput"></a>

```python
stop_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_opts_input`<sup>Optional</sup> <a name="storage_opts_input" id="@cdktf/provider-docker.container.Container.property.storageOptsInput"></a>

```python
storage_opts_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `sysctls_input`<sup>Optional</sup> <a name="sysctls_input" id="@cdktf/provider-docker.container.Container.property.sysctlsInput"></a>

```python
sysctls_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tmpfs_input`<sup>Optional</sup> <a name="tmpfs_input" id="@cdktf/provider-docker.container.Container.property.tmpfsInput"></a>

```python
tmpfs_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tty_input`<sup>Optional</sup> <a name="tty_input" id="@cdktf/provider-docker.container.Container.property.ttyInput"></a>

```python
tty_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ulimit_input`<sup>Optional</sup> <a name="ulimit_input" id="@cdktf/provider-docker.container.Container.property.ulimitInput"></a>

```python
ulimit_input: typing.Union[IResolvable, typing.List[ContainerUlimit]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a>]]

---

##### `upload_input`<sup>Optional</sup> <a name="upload_input" id="@cdktf/provider-docker.container.Container.property.uploadInput"></a>

```python
upload_input: typing.Union[IResolvable, typing.List[ContainerUpload]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a>]]

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-docker.container.Container.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `userns_mode_input`<sup>Optional</sup> <a name="userns_mode_input" id="@cdktf/provider-docker.container.Container.property.usernsModeInput"></a>

```python
userns_mode_input: str
```

- *Type:* str

---

##### `volumes_input`<sup>Optional</sup> <a name="volumes_input" id="@cdktf/provider-docker.container.Container.property.volumesInput"></a>

```python
volumes_input: typing.Union[IResolvable, typing.List[ContainerVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a>]]

---

##### `wait_input`<sup>Optional</sup> <a name="wait_input" id="@cdktf/provider-docker.container.Container.property.waitInput"></a>

```python
wait_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `wait_timeout_input`<sup>Optional</sup> <a name="wait_timeout_input" id="@cdktf/provider-docker.container.Container.property.waitTimeoutInput"></a>

```python
wait_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `working_dir_input`<sup>Optional</sup> <a name="working_dir_input" id="@cdktf/provider-docker.container.Container.property.workingDirInput"></a>

```python
working_dir_input: str
```

- *Type:* str

---

##### `attach`<sup>Required</sup> <a name="attach" id="@cdktf/provider-docker.container.Container.property.attach"></a>

```python
attach: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cgroupns_mode`<sup>Required</sup> <a name="cgroupns_mode" id="@cdktf/provider-docker.container.Container.property.cgroupnsMode"></a>

```python
cgroupns_mode: str
```

- *Type:* str

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-docker.container.Container.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_read_refresh_timeout_milliseconds`<sup>Required</sup> <a name="container_read_refresh_timeout_milliseconds" id="@cdktf/provider-docker.container.Container.property.containerReadRefreshTimeoutMilliseconds"></a>

```python
container_read_refresh_timeout_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpus`<sup>Required</sup> <a name="cpus" id="@cdktf/provider-docker.container.Container.property.cpus"></a>

```python
cpus: str
```

- *Type:* str

---

##### `cpu_set`<sup>Required</sup> <a name="cpu_set" id="@cdktf/provider-docker.container.Container.property.cpuSet"></a>

```python
cpu_set: str
```

- *Type:* str

---

##### `cpu_shares`<sup>Required</sup> <a name="cpu_shares" id="@cdktf/provider-docker.container.Container.property.cpuShares"></a>

```python
cpu_shares: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `destroy_grace_seconds`<sup>Required</sup> <a name="destroy_grace_seconds" id="@cdktf/provider-docker.container.Container.property.destroyGraceSeconds"></a>

```python
destroy_grace_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-docker.container.Container.property.dns"></a>

```python
dns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_opts`<sup>Required</sup> <a name="dns_opts" id="@cdktf/provider-docker.container.Container.property.dnsOpts"></a>

```python
dns_opts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_search`<sup>Required</sup> <a name="dns_search" id="@cdktf/provider-docker.container.Container.property.dnsSearch"></a>

```python
dns_search: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domainname`<sup>Required</sup> <a name="domainname" id="@cdktf/provider-docker.container.Container.property.domainname"></a>

```python
domainname: str
```

- *Type:* str

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@cdktf/provider-docker.container.Container.property.entrypoint"></a>

```python
entrypoint: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-docker.container.Container.property.env"></a>

```python
env: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `gpus`<sup>Required</sup> <a name="gpus" id="@cdktf/provider-docker.container.Container.property.gpus"></a>

```python
gpus: str
```

- *Type:* str

---

##### `group_add`<sup>Required</sup> <a name="group_add" id="@cdktf/provider-docker.container.Container.property.groupAdd"></a>

```python
group_add: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-docker.container.Container.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.container.Container.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-docker.container.Container.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `init`<sup>Required</sup> <a name="init" id="@cdktf/provider-docker.container.Container.property.init"></a>

```python
init: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ipc_mode`<sup>Required</sup> <a name="ipc_mode" id="@cdktf/provider-docker.container.Container.property.ipcMode"></a>

```python
ipc_mode: str
```

- *Type:* str

---

##### `log_driver`<sup>Required</sup> <a name="log_driver" id="@cdktf/provider-docker.container.Container.property.logDriver"></a>

```python
log_driver: str
```

- *Type:* str

---

##### `log_opts`<sup>Required</sup> <a name="log_opts" id="@cdktf/provider-docker.container.Container.property.logOpts"></a>

```python
log_opts: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `logs`<sup>Required</sup> <a name="logs" id="@cdktf/provider-docker.container.Container.property.logs"></a>

```python
logs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_retry_count`<sup>Required</sup> <a name="max_retry_count" id="@cdktf/provider-docker.container.Container.property.maxRetryCount"></a>

```python
max_retry_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-docker.container.Container.property.memory"></a>

```python
memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_swap`<sup>Required</sup> <a name="memory_swap" id="@cdktf/provider-docker.container.Container.property.memorySwap"></a>

```python
memory_swap: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `must_run`<sup>Required</sup> <a name="must_run" id="@cdktf/provider-docker.container.Container.property.mustRun"></a>

```python
must_run: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.container.Container.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_mode`<sup>Required</sup> <a name="network_mode" id="@cdktf/provider-docker.container.Container.property.networkMode"></a>

```python
network_mode: str
```

- *Type:* str

---

##### `pid_mode`<sup>Required</sup> <a name="pid_mode" id="@cdktf/provider-docker.container.Container.property.pidMode"></a>

```python
pid_mode: str
```

- *Type:* str

---

##### `privileged`<sup>Required</sup> <a name="privileged" id="@cdktf/provider-docker.container.Container.property.privileged"></a>

```python
privileged: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `publish_all_ports`<sup>Required</sup> <a name="publish_all_ports" id="@cdktf/provider-docker.container.Container.property.publishAllPorts"></a>

```python
publish_all_ports: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-docker.container.Container.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `remove_volumes`<sup>Required</sup> <a name="remove_volumes" id="@cdktf/provider-docker.container.Container.property.removeVolumes"></a>

```python
remove_volumes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `restart`<sup>Required</sup> <a name="restart" id="@cdktf/provider-docker.container.Container.property.restart"></a>

```python
restart: str
```

- *Type:* str

---

##### `rm`<sup>Required</sup> <a name="rm" id="@cdktf/provider-docker.container.Container.property.rm"></a>

```python
rm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-docker.container.Container.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `security_opts`<sup>Required</sup> <a name="security_opts" id="@cdktf/provider-docker.container.Container.property.securityOpts"></a>

```python
security_opts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shm_size`<sup>Required</sup> <a name="shm_size" id="@cdktf/provider-docker.container.Container.property.shmSize"></a>

```python
shm_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-docker.container.Container.property.start"></a>

```python
start: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `stdin_open`<sup>Required</sup> <a name="stdin_open" id="@cdktf/provider-docker.container.Container.property.stdinOpen"></a>

```python
stdin_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `stop_signal`<sup>Required</sup> <a name="stop_signal" id="@cdktf/provider-docker.container.Container.property.stopSignal"></a>

```python
stop_signal: str
```

- *Type:* str

---

##### `stop_timeout`<sup>Required</sup> <a name="stop_timeout" id="@cdktf/provider-docker.container.Container.property.stopTimeout"></a>

```python
stop_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_opts`<sup>Required</sup> <a name="storage_opts" id="@cdktf/provider-docker.container.Container.property.storageOpts"></a>

```python
storage_opts: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `sysctls`<sup>Required</sup> <a name="sysctls" id="@cdktf/provider-docker.container.Container.property.sysctls"></a>

```python
sysctls: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tmpfs`<sup>Required</sup> <a name="tmpfs" id="@cdktf/provider-docker.container.Container.property.tmpfs"></a>

```python
tmpfs: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tty`<sup>Required</sup> <a name="tty" id="@cdktf/provider-docker.container.Container.property.tty"></a>

```python
tty: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-docker.container.Container.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `userns_mode`<sup>Required</sup> <a name="userns_mode" id="@cdktf/provider-docker.container.Container.property.usernsMode"></a>

```python
userns_mode: str
```

- *Type:* str

---

##### `wait`<sup>Required</sup> <a name="wait" id="@cdktf/provider-docker.container.Container.property.wait"></a>

```python
wait: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `wait_timeout`<sup>Required</sup> <a name="wait_timeout" id="@cdktf/provider-docker.container.Container.property.waitTimeout"></a>

```python
wait_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `working_dir`<sup>Required</sup> <a name="working_dir" id="@cdktf/provider-docker.container.Container.property.workingDir"></a>

```python
working_dir: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.Container.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-docker.container.Container.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerCapabilities <a name="ContainerCapabilities" id="@cdktf/provider-docker.container.ContainerCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerCapabilities.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerCapabilities(
  add: typing.List[str] = None,
  drop: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilities.property.add">add</a></code> | <code>typing.List[str]</code> | List of linux capabilities to add. |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilities.property.drop">drop</a></code> | <code>typing.List[str]</code> | List of linux capabilities to drop. |

---

##### `add`<sup>Optional</sup> <a name="add" id="@cdktf/provider-docker.container.ContainerCapabilities.property.add"></a>

```python
add: typing.List[str]
```

- *Type:* typing.List[str]

List of linux capabilities to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#add Container#add}

---

##### `drop`<sup>Optional</sup> <a name="drop" id="@cdktf/provider-docker.container.ContainerCapabilities.property.drop"></a>

```python
drop: typing.List[str]
```

- *Type:* typing.List[str]

List of linux capabilities to drop.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#drop Container#drop}

---

### ContainerConfig <a name="ContainerConfig" id="@cdktf/provider-docker.container.ContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  image: str,
  name: str,
  attach: typing.Union[bool, IResolvable] = None,
  capabilities: ContainerCapabilities = None,
  cgroupns_mode: str = None,
  command: typing.List[str] = None,
  container_read_refresh_timeout_milliseconds: typing.Union[int, float] = None,
  cpus: str = None,
  cpu_set: str = None,
  cpu_shares: typing.Union[int, float] = None,
  destroy_grace_seconds: typing.Union[int, float] = None,
  devices: typing.Union[IResolvable, typing.List[ContainerDevices]] = None,
  dns: typing.List[str] = None,
  dns_opts: typing.List[str] = None,
  dns_search: typing.List[str] = None,
  domainname: str = None,
  entrypoint: typing.List[str] = None,
  env: typing.List[str] = None,
  gpus: str = None,
  group_add: typing.List[str] = None,
  healthcheck: ContainerHealthcheck = None,
  host: typing.Union[IResolvable, typing.List[ContainerHost]] = None,
  hostname: str = None,
  id: str = None,
  init: typing.Union[bool, IResolvable] = None,
  ipc_mode: str = None,
  labels: typing.Union[IResolvable, typing.List[ContainerLabels]] = None,
  log_driver: str = None,
  log_opts: typing.Mapping[str] = None,
  logs: typing.Union[bool, IResolvable] = None,
  max_retry_count: typing.Union[int, float] = None,
  memory: typing.Union[int, float] = None,
  memory_swap: typing.Union[int, float] = None,
  mounts: typing.Union[IResolvable, typing.List[ContainerMounts]] = None,
  must_run: typing.Union[bool, IResolvable] = None,
  network_mode: str = None,
  networks_advanced: typing.Union[IResolvable, typing.List[ContainerNetworksAdvanced]] = None,
  pid_mode: str = None,
  ports: typing.Union[IResolvable, typing.List[ContainerPorts]] = None,
  privileged: typing.Union[bool, IResolvable] = None,
  publish_all_ports: typing.Union[bool, IResolvable] = None,
  read_only: typing.Union[bool, IResolvable] = None,
  remove_volumes: typing.Union[bool, IResolvable] = None,
  restart: str = None,
  rm: typing.Union[bool, IResolvable] = None,
  runtime: str = None,
  security_opts: typing.List[str] = None,
  shm_size: typing.Union[int, float] = None,
  start: typing.Union[bool, IResolvable] = None,
  stdin_open: typing.Union[bool, IResolvable] = None,
  stop_signal: str = None,
  stop_timeout: typing.Union[int, float] = None,
  storage_opts: typing.Mapping[str] = None,
  sysctls: typing.Mapping[str] = None,
  tmpfs: typing.Mapping[str] = None,
  tty: typing.Union[bool, IResolvable] = None,
  ulimit: typing.Union[IResolvable, typing.List[ContainerUlimit]] = None,
  upload: typing.Union[IResolvable, typing.List[ContainerUpload]] = None,
  user: str = None,
  userns_mode: str = None,
  volumes: typing.Union[IResolvable, typing.List[ContainerVolumes]] = None,
  wait: typing.Union[bool, IResolvable] = None,
  wait_timeout: typing.Union[int, float] = None,
  working_dir: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.image">image</a></code> | <code>str</code> | The ID of the image to back this container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.name">name</a></code> | <code>str</code> | The name of the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.attach">attach</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true` attach to the container after its creation and waits the end of its execution. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.capabilities">capabilities</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a></code> | capabilities block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.cgroupnsMode">cgroupns_mode</a></code> | <code>str</code> | Cgroup namespace mode to use for the container. Possible values are: `private`, `host`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.command">command</a></code> | <code>typing.List[str]</code> | The command to use to start the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.containerReadRefreshTimeoutMilliseconds">container_read_refresh_timeout_milliseconds</a></code> | <code>typing.Union[int, float]</code> | The total number of milliseconds to wait for the container to reach status 'running'. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.cpus">cpus</a></code> | <code>str</code> | Specify how much of the available CPU resources a container can use. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.cpuSet">cpu_set</a></code> | <code>str</code> | A comma-separated list or hyphen-separated range of CPUs a container can use, e.g. `0-1`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.cpuShares">cpu_shares</a></code> | <code>typing.Union[int, float]</code> | CPU shares (relative weight) for the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.destroyGraceSeconds">destroy_grace_seconds</a></code> | <code>typing.Union[int, float]</code> | If defined will attempt to stop the container before destroying. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.devices">devices</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a>]]</code> | devices block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.dns">dns</a></code> | <code>typing.List[str]</code> | DNS servers to use. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.dnsOpts">dns_opts</a></code> | <code>typing.List[str]</code> | DNS options used by the DNS provider(s), see `resolv.conf` documentation for valid list of options. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.dnsSearch">dns_search</a></code> | <code>typing.List[str]</code> | DNS search domains that are used when bare unqualified hostnames are used inside of the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.domainname">domainname</a></code> | <code>str</code> | Domain name of the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.entrypoint">entrypoint</a></code> | <code>typing.List[str]</code> | The command to use as the Entrypoint for the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.env">env</a></code> | <code>typing.List[str]</code> | Environment variables to set in the form of `KEY=VALUE`, e.g. `DEBUG=0`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.gpus">gpus</a></code> | <code>str</code> | GPU devices to add to the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.groupAdd">group_add</a></code> | <code>typing.List[str]</code> | Additional groups for the container user. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.healthcheck">healthcheck</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a></code> | healthcheck block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.host">host</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a>]]</code> | host block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.hostname">hostname</a></code> | <code>str</code> | Hostname of the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#id Container#id}. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.init">init</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Configured whether an init process should be injected for this container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.ipcMode">ipc_mode</a></code> | <code>str</code> | IPC sharing mode for the container. Possible values are: `none`, `private`, `shareable`, `container:<name\|id>` or `host`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.labels">labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a>]]</code> | labels block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.logDriver">log_driver</a></code> | <code>str</code> | The logging driver to use for the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.logOpts">log_opts</a></code> | <code>typing.Mapping[str]</code> | Key/value pairs to use as options for the logging driver. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.logs">logs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Save the container logs (`attach` must be enabled). Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.maxRetryCount">max_retry_count</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of times to an attempt a restart when `restart` is set to 'on-failure'. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.memory">memory</a></code> | <code>typing.Union[int, float]</code> | The memory limit for the container in MBs. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.memorySwap">memory_swap</a></code> | <code>typing.Union[int, float]</code> | The total memory limit (memory + swap) for the container in MBs. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.mounts">mounts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a>]]</code> | mounts block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.mustRun">must_run</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, then the Docker container will be kept running. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.networkMode">network_mode</a></code> | <code>str</code> | Network mode of the container. See https://docs.docker.com/engine/network/ for more information. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.networksAdvanced">networks_advanced</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a>]]</code> | networks_advanced block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.pidMode">pid_mode</a></code> | <code>str</code> | he PID (Process) Namespace mode for the container. Either `container:<name\|id>` or `host`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.ports">ports</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a>]]</code> | ports block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.privileged">privileged</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, the container runs in privileged mode. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.publishAllPorts">publish_all_ports</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Publish all ports of the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, the container will be started as readonly. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.removeVolumes">remove_volumes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, it will remove anonymous volumes associated with the container. Defaults to `true`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.restart">restart</a></code> | <code>str</code> | The restart policy for the container. Must be one of 'no', 'on-failure', 'always', 'unless-stopped'. Defaults to `no`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.rm">rm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, then the container will be automatically removed when it exits. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.runtime">runtime</a></code> | <code>str</code> | Runtime to use for the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.securityOpts">security_opts</a></code> | <code>typing.List[str]</code> | List of string values to customize labels for MLS systems, such as SELinux. See https://docs.docker.com/engine/reference/run/#security-configuration. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.shmSize">shm_size</a></code> | <code>typing.Union[int, float]</code> | Size of `/dev/shm` in MBs. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.start">start</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, then the Docker container will be started after creation. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.stdinOpen">stdin_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, keep STDIN open even if not attached (`docker run -i`). Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.stopSignal">stop_signal</a></code> | <code>str</code> | Signal to stop a container (default `SIGTERM`). |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.stopTimeout">stop_timeout</a></code> | <code>typing.Union[int, float]</code> | Timeout (in seconds) to stop a container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.storageOpts">storage_opts</a></code> | <code>typing.Mapping[str]</code> | Key/value pairs for the storage driver options, e.g. `size`: `120G`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.sysctls">sysctls</a></code> | <code>typing.Mapping[str]</code> | A map of kernel parameters (sysctls) to set in the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.tmpfs">tmpfs</a></code> | <code>typing.Mapping[str]</code> | A map of container directories which should be replaced by `tmpfs mounts`, and their corresponding mount options. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.tty">tty</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, allocate a pseudo-tty (`docker run -t`). Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.ulimit">ulimit</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a>]]</code> | ulimit block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.upload">upload</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a>]]</code> | upload block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.user">user</a></code> | <code>str</code> | User used for run the first process. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.usernsMode">userns_mode</a></code> | <code>str</code> | Sets the usernamespace mode for the container when usernamespace remapping option is enabled. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.volumes">volumes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a>]]</code> | volumes block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.wait">wait</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, then the Docker container is waited for being healthy state after creation. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.waitTimeout">wait_timeout</a></code> | <code>typing.Union[int, float]</code> | The timeout in seconds to wait the container to be healthy after creation. Defaults to `60`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.workingDir">working_dir</a></code> | <code>str</code> | The working directory for commands to run in. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.container.ContainerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.container.ContainerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-docker.container.ContainerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-docker.container.ContainerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.container.ContainerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.container.ContainerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.container.ContainerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-docker.container.ContainerConfig.property.image"></a>

```python
image: str
```

- *Type:* str

The ID of the image to back this container.

The easiest way to get this value is to use the `image_id` attribute of the `docker_image` resource as is shown in the example.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#image Container#image}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.container.ContainerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#name Container#name}

---

##### `attach`<sup>Optional</sup> <a name="attach" id="@cdktf/provider-docker.container.ContainerConfig.property.attach"></a>

```python
attach: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true` attach to the container after its creation and waits the end of its execution. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#attach Container#attach}

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktf/provider-docker.container.ContainerConfig.property.capabilities"></a>

```python
capabilities: ContainerCapabilities
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a>

capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#capabilities Container#capabilities}

---

##### `cgroupns_mode`<sup>Optional</sup> <a name="cgroupns_mode" id="@cdktf/provider-docker.container.ContainerConfig.property.cgroupnsMode"></a>

```python
cgroupns_mode: str
```

- *Type:* str

Cgroup namespace mode to use for the container. Possible values are: `private`, `host`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#cgroupns_mode Container#cgroupns_mode}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-docker.container.ContainerConfig.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

The command to use to start the container.

For example, to run `/usr/bin/myprogram -f baz.conf` set the command to be `["/usr/bin/myprogram","-f","baz.conf"]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#command Container#command}

---

##### `container_read_refresh_timeout_milliseconds`<sup>Optional</sup> <a name="container_read_refresh_timeout_milliseconds" id="@cdktf/provider-docker.container.ContainerConfig.property.containerReadRefreshTimeoutMilliseconds"></a>

```python
container_read_refresh_timeout_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The total number of milliseconds to wait for the container to reach status 'running'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#container_read_refresh_timeout_milliseconds Container#container_read_refresh_timeout_milliseconds}

---

##### `cpus`<sup>Optional</sup> <a name="cpus" id="@cdktf/provider-docker.container.ContainerConfig.property.cpus"></a>

```python
cpus: str
```

- *Type:* str

Specify how much of the available CPU resources a container can use.

e.g a value of 1.5 means the container is guaranteed at most one and a half of the CPUs

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#cpus Container#cpus}

---

##### `cpu_set`<sup>Optional</sup> <a name="cpu_set" id="@cdktf/provider-docker.container.ContainerConfig.property.cpuSet"></a>

```python
cpu_set: str
```

- *Type:* str

A comma-separated list or hyphen-separated range of CPUs a container can use, e.g. `0-1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#cpu_set Container#cpu_set}

---

##### `cpu_shares`<sup>Optional</sup> <a name="cpu_shares" id="@cdktf/provider-docker.container.ContainerConfig.property.cpuShares"></a>

```python
cpu_shares: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

CPU shares (relative weight) for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#cpu_shares Container#cpu_shares}

---

##### `destroy_grace_seconds`<sup>Optional</sup> <a name="destroy_grace_seconds" id="@cdktf/provider-docker.container.ContainerConfig.property.destroyGraceSeconds"></a>

```python
destroy_grace_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If defined will attempt to stop the container before destroying.

Container will be destroyed after `n` seconds or on successful stop.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#destroy_grace_seconds Container#destroy_grace_seconds}

---

##### `devices`<sup>Optional</sup> <a name="devices" id="@cdktf/provider-docker.container.ContainerConfig.property.devices"></a>

```python
devices: typing.Union[IResolvable, typing.List[ContainerDevices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a>]]

devices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#devices Container#devices}

---

##### `dns`<sup>Optional</sup> <a name="dns" id="@cdktf/provider-docker.container.ContainerConfig.property.dns"></a>

```python
dns: typing.List[str]
```

- *Type:* typing.List[str]

DNS servers to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#dns Container#dns}

---

##### `dns_opts`<sup>Optional</sup> <a name="dns_opts" id="@cdktf/provider-docker.container.ContainerConfig.property.dnsOpts"></a>

```python
dns_opts: typing.List[str]
```

- *Type:* typing.List[str]

DNS options used by the DNS provider(s), see `resolv.conf` documentation for valid list of options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#dns_opts Container#dns_opts}

---

##### `dns_search`<sup>Optional</sup> <a name="dns_search" id="@cdktf/provider-docker.container.ContainerConfig.property.dnsSearch"></a>

```python
dns_search: typing.List[str]
```

- *Type:* typing.List[str]

DNS search domains that are used when bare unqualified hostnames are used inside of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#dns_search Container#dns_search}

---

##### `domainname`<sup>Optional</sup> <a name="domainname" id="@cdktf/provider-docker.container.ContainerConfig.property.domainname"></a>

```python
domainname: str
```

- *Type:* str

Domain name of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#domainname Container#domainname}

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@cdktf/provider-docker.container.ContainerConfig.property.entrypoint"></a>

```python
entrypoint: typing.List[str]
```

- *Type:* typing.List[str]

The command to use as the Entrypoint for the container.

The Entrypoint allows you to configure a container to run as an executable. For example, to run `/usr/bin/myprogram` when starting a container, set the entrypoint to be `"/usr/bin/myprogram"]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#entrypoint Container#entrypoint}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-docker.container.ContainerConfig.property.env"></a>

```python
env: typing.List[str]
```

- *Type:* typing.List[str]

Environment variables to set in the form of `KEY=VALUE`, e.g. `DEBUG=0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#env Container#env}

---

##### `gpus`<sup>Optional</sup> <a name="gpus" id="@cdktf/provider-docker.container.ContainerConfig.property.gpus"></a>

```python
gpus: str
```

- *Type:* str

GPU devices to add to the container.

Currently, only the value `all` is supported. Passing any other value will result in unexpected behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#gpus Container#gpus}

---

##### `group_add`<sup>Optional</sup> <a name="group_add" id="@cdktf/provider-docker.container.ContainerConfig.property.groupAdd"></a>

```python
group_add: typing.List[str]
```

- *Type:* typing.List[str]

Additional groups for the container user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#group_add Container#group_add}

---

##### `healthcheck`<sup>Optional</sup> <a name="healthcheck" id="@cdktf/provider-docker.container.ContainerConfig.property.healthcheck"></a>

```python
healthcheck: ContainerHealthcheck
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a>

healthcheck block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#healthcheck Container#healthcheck}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-docker.container.ContainerConfig.property.host"></a>

```python
host: typing.Union[IResolvable, typing.List[ContainerHost]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a>]]

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#host Container#host}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-docker.container.ContainerConfig.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Hostname of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#hostname Container#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.container.ContainerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#id Container#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `init`<sup>Optional</sup> <a name="init" id="@cdktf/provider-docker.container.ContainerConfig.property.init"></a>

```python
init: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Configured whether an init process should be injected for this container.

If unset this will default to the `dockerd` defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#init Container#init}

---

##### `ipc_mode`<sup>Optional</sup> <a name="ipc_mode" id="@cdktf/provider-docker.container.ContainerConfig.property.ipcMode"></a>

```python
ipc_mode: str
```

- *Type:* str

IPC sharing mode for the container. Possible values are: `none`, `private`, `shareable`, `container:<name|id>` or `host`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#ipc_mode Container#ipc_mode}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.container.ContainerConfig.property.labels"></a>

```python
labels: typing.Union[IResolvable, typing.List[ContainerLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a>]]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#labels Container#labels}

---

##### `log_driver`<sup>Optional</sup> <a name="log_driver" id="@cdktf/provider-docker.container.ContainerConfig.property.logDriver"></a>

```python
log_driver: str
```

- *Type:* str

The logging driver to use for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#log_driver Container#log_driver}

---

##### `log_opts`<sup>Optional</sup> <a name="log_opts" id="@cdktf/provider-docker.container.ContainerConfig.property.logOpts"></a>

```python
log_opts: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Key/value pairs to use as options for the logging driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#log_opts Container#log_opts}

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktf/provider-docker.container.ContainerConfig.property.logs"></a>

```python
logs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Save the container logs (`attach` must be enabled). Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#logs Container#logs}

---

##### `max_retry_count`<sup>Optional</sup> <a name="max_retry_count" id="@cdktf/provider-docker.container.ContainerConfig.property.maxRetryCount"></a>

```python
max_retry_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum amount of times to an attempt a restart when `restart` is set to 'on-failure'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#max_retry_count Container#max_retry_count}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-docker.container.ContainerConfig.property.memory"></a>

```python
memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The memory limit for the container in MBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#memory Container#memory}

---

##### `memory_swap`<sup>Optional</sup> <a name="memory_swap" id="@cdktf/provider-docker.container.ContainerConfig.property.memorySwap"></a>

```python
memory_swap: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The total memory limit (memory + swap) for the container in MBs.

This setting may compute to `-1` after `terraform apply` if the target host doesn't support memory swap, when that is the case docker will use a soft limitation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#memory_swap Container#memory_swap}

---

##### `mounts`<sup>Optional</sup> <a name="mounts" id="@cdktf/provider-docker.container.ContainerConfig.property.mounts"></a>

```python
mounts: typing.Union[IResolvable, typing.List[ContainerMounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a>]]

mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#mounts Container#mounts}

---

##### `must_run`<sup>Optional</sup> <a name="must_run" id="@cdktf/provider-docker.container.ContainerConfig.property.mustRun"></a>

```python
must_run: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, then the Docker container will be kept running.

If `false`, then as long as the container exists, Terraform assumes it is successful. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#must_run Container#must_run}

---

##### `network_mode`<sup>Optional</sup> <a name="network_mode" id="@cdktf/provider-docker.container.ContainerConfig.property.networkMode"></a>

```python
network_mode: str
```

- *Type:* str

Network mode of the container. See https://docs.docker.com/engine/network/ for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#network_mode Container#network_mode}

---

##### `networks_advanced`<sup>Optional</sup> <a name="networks_advanced" id="@cdktf/provider-docker.container.ContainerConfig.property.networksAdvanced"></a>

```python
networks_advanced: typing.Union[IResolvable, typing.List[ContainerNetworksAdvanced]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a>]]

networks_advanced block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#networks_advanced Container#networks_advanced}

---

##### `pid_mode`<sup>Optional</sup> <a name="pid_mode" id="@cdktf/provider-docker.container.ContainerConfig.property.pidMode"></a>

```python
pid_mode: str
```

- *Type:* str

he PID (Process) Namespace mode for the container. Either `container:<name|id>` or `host`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#pid_mode Container#pid_mode}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-docker.container.ContainerConfig.property.ports"></a>

```python
ports: typing.Union[IResolvable, typing.List[ContainerPorts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a>]]

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#ports Container#ports}

---

##### `privileged`<sup>Optional</sup> <a name="privileged" id="@cdktf/provider-docker.container.ContainerConfig.property.privileged"></a>

```python
privileged: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, the container runs in privileged mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#privileged Container#privileged}

---

##### `publish_all_ports`<sup>Optional</sup> <a name="publish_all_ports" id="@cdktf/provider-docker.container.ContainerConfig.property.publishAllPorts"></a>

```python
publish_all_ports: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Publish all ports of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#publish_all_ports Container#publish_all_ports}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-docker.container.ContainerConfig.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, the container will be started as readonly. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#read_only Container#read_only}

---

##### `remove_volumes`<sup>Optional</sup> <a name="remove_volumes" id="@cdktf/provider-docker.container.ContainerConfig.property.removeVolumes"></a>

```python
remove_volumes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, it will remove anonymous volumes associated with the container. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#remove_volumes Container#remove_volumes}

---

##### `restart`<sup>Optional</sup> <a name="restart" id="@cdktf/provider-docker.container.ContainerConfig.property.restart"></a>

```python
restart: str
```

- *Type:* str

The restart policy for the container. Must be one of 'no', 'on-failure', 'always', 'unless-stopped'. Defaults to `no`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#restart Container#restart}

---

##### `rm`<sup>Optional</sup> <a name="rm" id="@cdktf/provider-docker.container.ContainerConfig.property.rm"></a>

```python
rm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, then the container will be automatically removed when it exits. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#rm Container#rm}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-docker.container.ContainerConfig.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

Runtime to use for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#runtime Container#runtime}

---

##### `security_opts`<sup>Optional</sup> <a name="security_opts" id="@cdktf/provider-docker.container.ContainerConfig.property.securityOpts"></a>

```python
security_opts: typing.List[str]
```

- *Type:* typing.List[str]

List of string values to customize labels for MLS systems, such as SELinux. See https://docs.docker.com/engine/reference/run/#security-configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#security_opts Container#security_opts}

---

##### `shm_size`<sup>Optional</sup> <a name="shm_size" id="@cdktf/provider-docker.container.ContainerConfig.property.shmSize"></a>

```python
shm_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Size of `/dev/shm` in MBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#shm_size Container#shm_size}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-docker.container.ContainerConfig.property.start"></a>

```python
start: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, then the Docker container will be started after creation.

If `false`, then the container is only created. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#start Container#start}

---

##### `stdin_open`<sup>Optional</sup> <a name="stdin_open" id="@cdktf/provider-docker.container.ContainerConfig.property.stdinOpen"></a>

```python
stdin_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, keep STDIN open even if not attached (`docker run -i`). Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#stdin_open Container#stdin_open}

---

##### `stop_signal`<sup>Optional</sup> <a name="stop_signal" id="@cdktf/provider-docker.container.ContainerConfig.property.stopSignal"></a>

```python
stop_signal: str
```

- *Type:* str

Signal to stop a container (default `SIGTERM`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#stop_signal Container#stop_signal}

---

##### `stop_timeout`<sup>Optional</sup> <a name="stop_timeout" id="@cdktf/provider-docker.container.ContainerConfig.property.stopTimeout"></a>

```python
stop_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Timeout (in seconds) to stop a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#stop_timeout Container#stop_timeout}

---

##### `storage_opts`<sup>Optional</sup> <a name="storage_opts" id="@cdktf/provider-docker.container.ContainerConfig.property.storageOpts"></a>

```python
storage_opts: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Key/value pairs for the storage driver options, e.g. `size`: `120G`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#storage_opts Container#storage_opts}

---

##### `sysctls`<sup>Optional</sup> <a name="sysctls" id="@cdktf/provider-docker.container.ContainerConfig.property.sysctls"></a>

```python
sysctls: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of kernel parameters (sysctls) to set in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#sysctls Container#sysctls}

---

##### `tmpfs`<sup>Optional</sup> <a name="tmpfs" id="@cdktf/provider-docker.container.ContainerConfig.property.tmpfs"></a>

```python
tmpfs: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of container directories which should be replaced by `tmpfs mounts`, and their corresponding mount options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#tmpfs Container#tmpfs}

---

##### `tty`<sup>Optional</sup> <a name="tty" id="@cdktf/provider-docker.container.ContainerConfig.property.tty"></a>

```python
tty: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, allocate a pseudo-tty (`docker run -t`). Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#tty Container#tty}

---

##### `ulimit`<sup>Optional</sup> <a name="ulimit" id="@cdktf/provider-docker.container.ContainerConfig.property.ulimit"></a>

```python
ulimit: typing.Union[IResolvable, typing.List[ContainerUlimit]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a>]]

ulimit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#ulimit Container#ulimit}

---

##### `upload`<sup>Optional</sup> <a name="upload" id="@cdktf/provider-docker.container.ContainerConfig.property.upload"></a>

```python
upload: typing.Union[IResolvable, typing.List[ContainerUpload]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a>]]

upload block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#upload Container#upload}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-docker.container.ContainerConfig.property.user"></a>

```python
user: str
```

- *Type:* str

User used for run the first process.

Format is `user` or `user:group` which user and group can be passed literraly or by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#user Container#user}

---

##### `userns_mode`<sup>Optional</sup> <a name="userns_mode" id="@cdktf/provider-docker.container.ContainerConfig.property.usernsMode"></a>

```python
userns_mode: str
```

- *Type:* str

Sets the usernamespace mode for the container when usernamespace remapping option is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#userns_mode Container#userns_mode}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-docker.container.ContainerConfig.property.volumes"></a>

```python
volumes: typing.Union[IResolvable, typing.List[ContainerVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a>]]

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#volumes Container#volumes}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-docker.container.ContainerConfig.property.wait"></a>

```python
wait: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, then the Docker container is waited for being healthy state after creation.

This requires your container to have a healthcheck, otherwise this provider will error. If `false`, then the container health state is not checked. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#wait Container#wait}

---

##### `wait_timeout`<sup>Optional</sup> <a name="wait_timeout" id="@cdktf/provider-docker.container.ContainerConfig.property.waitTimeout"></a>

```python
wait_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The timeout in seconds to wait the container to be healthy after creation. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#wait_timeout Container#wait_timeout}

---

##### `working_dir`<sup>Optional</sup> <a name="working_dir" id="@cdktf/provider-docker.container.ContainerConfig.property.workingDir"></a>

```python
working_dir: str
```

- *Type:* str

The working directory for commands to run in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#working_dir Container#working_dir}

---

### ContainerDevices <a name="ContainerDevices" id="@cdktf/provider-docker.container.ContainerDevices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerDevices.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerDevices(
  host_path: str,
  container_path: str = None,
  permissions: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevices.property.hostPath">host_path</a></code> | <code>str</code> | The path on the host where the device is located. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevices.property.containerPath">container_path</a></code> | <code>str</code> | The path in the container where the device will be bound. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevices.property.permissions">permissions</a></code> | <code>str</code> | The cgroup permissions given to the container to access the device. Defaults to `rwm`. |

---

##### `host_path`<sup>Required</sup> <a name="host_path" id="@cdktf/provider-docker.container.ContainerDevices.property.hostPath"></a>

```python
host_path: str
```

- *Type:* str

The path on the host where the device is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#host_path Container#host_path}

---

##### `container_path`<sup>Optional</sup> <a name="container_path" id="@cdktf/provider-docker.container.ContainerDevices.property.containerPath"></a>

```python
container_path: str
```

- *Type:* str

The path in the container where the device will be bound.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#container_path Container#container_path}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-docker.container.ContainerDevices.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

The cgroup permissions given to the container to access the device. Defaults to `rwm`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#permissions Container#permissions}

---

### ContainerHealthcheck <a name="ContainerHealthcheck" id="@cdktf/provider-docker.container.ContainerHealthcheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerHealthcheck.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerHealthcheck(
  test: typing.List[str],
  interval: str = None,
  retries: typing.Union[int, float] = None,
  start_interval: str = None,
  start_period: str = None,
  timeout: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck.property.test">test</a></code> | <code>typing.List[str]</code> | Command to run to check health. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck.property.interval">interval</a></code> | <code>str</code> | Time between running the check (ms\|s\|m\|h). Defaults to `0s`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | Consecutive failures needed to report unhealthy. Defaults to `0`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck.property.startInterval">start_interval</a></code> | <code>str</code> | Interval before the healthcheck starts (ms\|s\|m\|h). Defaults to `0s`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck.property.startPeriod">start_period</a></code> | <code>str</code> | Start period for the container to initialize before counting retries towards unstable (ms\|s\|m\|h). Defaults to `0s`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck.property.timeout">timeout</a></code> | <code>str</code> | Maximum time to allow one check to run (ms\|s\|m\|h). Defaults to `0s`. |

---

##### `test`<sup>Required</sup> <a name="test" id="@cdktf/provider-docker.container.ContainerHealthcheck.property.test"></a>

```python
test: typing.List[str]
```

- *Type:* typing.List[str]

Command to run to check health.

For example, to run `curl -f localhost/health` set the command to be `["CMD", "curl", "-f", "localhost/health"]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#test Container#test}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-docker.container.ContainerHealthcheck.property.interval"></a>

```python
interval: str
```

- *Type:* str

Time between running the check (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#interval Container#interval}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-docker.container.ContainerHealthcheck.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Consecutive failures needed to report unhealthy. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#retries Container#retries}

---

##### `start_interval`<sup>Optional</sup> <a name="start_interval" id="@cdktf/provider-docker.container.ContainerHealthcheck.property.startInterval"></a>

```python
start_interval: str
```

- *Type:* str

Interval before the healthcheck starts (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#start_interval Container#start_interval}

---

##### `start_period`<sup>Optional</sup> <a name="start_period" id="@cdktf/provider-docker.container.ContainerHealthcheck.property.startPeriod"></a>

```python
start_period: str
```

- *Type:* str

Start period for the container to initialize before counting retries towards unstable (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#start_period Container#start_period}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-docker.container.ContainerHealthcheck.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

Maximum time to allow one check to run (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#timeout Container#timeout}

---

### ContainerHost <a name="ContainerHost" id="@cdktf/provider-docker.container.ContainerHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerHost.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerHost(
  host: str,
  ip: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHost.property.host">host</a></code> | <code>str</code> | Hostname to add. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHost.property.ip">ip</a></code> | <code>str</code> | IP address this hostname should resolve to. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-docker.container.ContainerHost.property.host"></a>

```python
host: str
```

- *Type:* str

Hostname to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#host Container#host}

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-docker.container.ContainerHost.property.ip"></a>

```python
ip: str
```

- *Type:* str

IP address this hostname should resolve to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#ip Container#ip}

---

### ContainerLabels <a name="ContainerLabels" id="@cdktf/provider-docker.container.ContainerLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerLabels(
  label: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabels.property.label">label</a></code> | <code>str</code> | Name of the label. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabels.property.value">value</a></code> | <code>str</code> | Value of the label. |

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.container.ContainerLabels.property.label"></a>

```python
label: str
```

- *Type:* str

Name of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#label Container#label}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.ContainerLabels.property.value"></a>

```python
value: str
```

- *Type:* str

Value of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#value Container#value}

---

### ContainerMounts <a name="ContainerMounts" id="@cdktf/provider-docker.container.ContainerMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerMounts.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerMounts(
  target: str,
  type: str,
  bind_options: ContainerMountsBindOptions = None,
  read_only: typing.Union[bool, IResolvable] = None,
  source: str = None,
  tmpfs_options: ContainerMountsTmpfsOptions = None,
  volume_options: ContainerMountsVolumeOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMounts.property.target">target</a></code> | <code>str</code> | Container path. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMounts.property.type">type</a></code> | <code>str</code> | The mount type. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMounts.property.bindOptions">bind_options</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions">ContainerMountsBindOptions</a></code> | bind_options block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMounts.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the mount should be read-only. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMounts.property.source">source</a></code> | <code>str</code> | Mount source (e.g. a volume name, a host path). |
| <code><a href="#@cdktf/provider-docker.container.ContainerMounts.property.tmpfsOptions">tmpfs_options</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions">ContainerMountsTmpfsOptions</a></code> | tmpfs_options block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMounts.property.volumeOptions">volume_options</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions">ContainerMountsVolumeOptions</a></code> | volume_options block. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-docker.container.ContainerMounts.property.target"></a>

```python
target: str
```

- *Type:* str

Container path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#target Container#target}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-docker.container.ContainerMounts.property.type"></a>

```python
type: str
```

- *Type:* str

The mount type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#type Container#type}

---

##### `bind_options`<sup>Optional</sup> <a name="bind_options" id="@cdktf/provider-docker.container.ContainerMounts.property.bindOptions"></a>

```python
bind_options: ContainerMountsBindOptions
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions">ContainerMountsBindOptions</a>

bind_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#bind_options Container#bind_options}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-docker.container.ContainerMounts.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the mount should be read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#read_only Container#read_only}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-docker.container.ContainerMounts.property.source"></a>

```python
source: str
```

- *Type:* str

Mount source (e.g. a volume name, a host path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#source Container#source}

---

##### `tmpfs_options`<sup>Optional</sup> <a name="tmpfs_options" id="@cdktf/provider-docker.container.ContainerMounts.property.tmpfsOptions"></a>

```python
tmpfs_options: ContainerMountsTmpfsOptions
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions">ContainerMountsTmpfsOptions</a>

tmpfs_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#tmpfs_options Container#tmpfs_options}

---

##### `volume_options`<sup>Optional</sup> <a name="volume_options" id="@cdktf/provider-docker.container.ContainerMounts.property.volumeOptions"></a>

```python
volume_options: ContainerMountsVolumeOptions
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions">ContainerMountsVolumeOptions</a>

volume_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#volume_options Container#volume_options}

---

### ContainerMountsBindOptions <a name="ContainerMountsBindOptions" id="@cdktf/provider-docker.container.ContainerMountsBindOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerMountsBindOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerMountsBindOptions(
  propagation: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions.property.propagation">propagation</a></code> | <code>str</code> | A propagation mode with the value. |

---

##### `propagation`<sup>Optional</sup> <a name="propagation" id="@cdktf/provider-docker.container.ContainerMountsBindOptions.property.propagation"></a>

```python
propagation: str
```

- *Type:* str

A propagation mode with the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#propagation Container#propagation}

---

### ContainerMountsTmpfsOptions <a name="ContainerMountsTmpfsOptions" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerMountsTmpfsOptions(
  mode: typing.Union[int, float] = None,
  size_bytes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions.property.mode">mode</a></code> | <code>typing.Union[int, float]</code> | The permission mode for the tmpfs mount in an integer. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions.property.sizeBytes">size_bytes</a></code> | <code>typing.Union[int, float]</code> | The size for the tmpfs mount in bytes. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptions.property.mode"></a>

```python
mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The permission mode for the tmpfs mount in an integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#mode Container#mode}

---

##### `size_bytes`<sup>Optional</sup> <a name="size_bytes" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptions.property.sizeBytes"></a>

```python
size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size for the tmpfs mount in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#size_bytes Container#size_bytes}

---

### ContainerMountsVolumeOptions <a name="ContainerMountsVolumeOptions" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerMountsVolumeOptions(
  driver_name: str = None,
  driver_options: typing.Mapping[str] = None,
  labels: typing.Union[IResolvable, typing.List[ContainerMountsVolumeOptionsLabels]] = None,
  no_copy: typing.Union[bool, IResolvable] = None,
  subpath: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.driverName">driver_name</a></code> | <code>str</code> | Name of the driver to use to create the volume. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.driverOptions">driver_options</a></code> | <code>typing.Mapping[str]</code> | key/value map of driver specific options. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.labels">labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels">ContainerMountsVolumeOptionsLabels</a>]]</code> | labels block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.noCopy">no_copy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Populate volume with data from the target. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.subpath">subpath</a></code> | <code>str</code> | Path within the volume to mount. Requires docker server version 1.45 or higher. |

---

##### `driver_name`<sup>Optional</sup> <a name="driver_name" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.driverName"></a>

```python
driver_name: str
```

- *Type:* str

Name of the driver to use to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#driver_name Container#driver_name}

---

##### `driver_options`<sup>Optional</sup> <a name="driver_options" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.driverOptions"></a>

```python
driver_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

key/value map of driver specific options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#driver_options Container#driver_options}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.labels"></a>

```python
labels: typing.Union[IResolvable, typing.List[ContainerMountsVolumeOptionsLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels">ContainerMountsVolumeOptionsLabels</a>]]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#labels Container#labels}

---

##### `no_copy`<sup>Optional</sup> <a name="no_copy" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.noCopy"></a>

```python
no_copy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Populate volume with data from the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#no_copy Container#no_copy}

---

##### `subpath`<sup>Optional</sup> <a name="subpath" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.subpath"></a>

```python
subpath: str
```

- *Type:* str

Path within the volume to mount. Requires docker server version 1.45 or higher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#subpath Container#subpath}

---

### ContainerMountsVolumeOptionsLabels <a name="ContainerMountsVolumeOptionsLabels" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerMountsVolumeOptionsLabels(
  label: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels.property.label">label</a></code> | <code>str</code> | Name of the label. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels.property.value">value</a></code> | <code>str</code> | Value of the label. |

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels.property.label"></a>

```python
label: str
```

- *Type:* str

Name of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#label Container#label}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels.property.value"></a>

```python
value: str
```

- *Type:* str

Value of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#value Container#value}

---

### ContainerNetworkData <a name="ContainerNetworkData" id="@cdktf/provider-docker.container.ContainerNetworkData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerNetworkData.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerNetworkData()
```


### ContainerNetworksAdvanced <a name="ContainerNetworksAdvanced" id="@cdktf/provider-docker.container.ContainerNetworksAdvanced"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerNetworksAdvanced.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerNetworksAdvanced(
  name: str,
  aliases: typing.List[str] = None,
  ipv4_address: str = None,
  ipv6_address: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.name">name</a></code> | <code>str</code> | The name or id of the network to use. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.aliases">aliases</a></code> | <code>typing.List[str]</code> | The network aliases of the container in the specific network. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.ipv4Address">ipv4_address</a></code> | <code>str</code> | The IPV4 address of the container in the specific network. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | The IPV6 address of the container in the specific network. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.name"></a>

```python
name: str
```

- *Type:* str

The name or id of the network to use.

You can use `name` or `id` attribute from a `docker_network` resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#name Container#name}

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.aliases"></a>

```python
aliases: typing.List[str]
```

- *Type:* typing.List[str]

The network aliases of the container in the specific network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#aliases Container#aliases}

---

##### `ipv4_address`<sup>Optional</sup> <a name="ipv4_address" id="@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.ipv4Address"></a>

```python
ipv4_address: str
```

- *Type:* str

The IPV4 address of the container in the specific network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#ipv4_address Container#ipv4_address}

---

##### `ipv6_address`<sup>Optional</sup> <a name="ipv6_address" id="@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

The IPV6 address of the container in the specific network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#ipv6_address Container#ipv6_address}

---

### ContainerPorts <a name="ContainerPorts" id="@cdktf/provider-docker.container.ContainerPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerPorts.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerPorts(
  internal: typing.Union[int, float],
  external: typing.Union[int, float] = None,
  ip: str = None,
  protocol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerPorts.property.internal">internal</a></code> | <code>typing.Union[int, float]</code> | Port within the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPorts.property.external">external</a></code> | <code>typing.Union[int, float]</code> | Port exposed out of the container. If not given a free random port `>= 32768` will be used. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPorts.property.ip">ip</a></code> | <code>str</code> | IP address/mask that can access this port. Defaults to `0.0.0.0`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPorts.property.protocol">protocol</a></code> | <code>str</code> | Protocol that can be used over this port. Defaults to `tcp`. |

---

##### `internal`<sup>Required</sup> <a name="internal" id="@cdktf/provider-docker.container.ContainerPorts.property.internal"></a>

```python
internal: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port within the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#internal Container#internal}

---

##### `external`<sup>Optional</sup> <a name="external" id="@cdktf/provider-docker.container.ContainerPorts.property.external"></a>

```python
external: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port exposed out of the container. If not given a free random port `>= 32768` will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#external Container#external}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-docker.container.ContainerPorts.property.ip"></a>

```python
ip: str
```

- *Type:* str

IP address/mask that can access this port. Defaults to `0.0.0.0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#ip Container#ip}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-docker.container.ContainerPorts.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Protocol that can be used over this port. Defaults to `tcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#protocol Container#protocol}

---

### ContainerUlimit <a name="ContainerUlimit" id="@cdktf/provider-docker.container.ContainerUlimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerUlimit.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerUlimit(
  hard: typing.Union[int, float],
  name: str,
  soft: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimit.property.hard">hard</a></code> | <code>typing.Union[int, float]</code> | The hard limit. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimit.property.name">name</a></code> | <code>str</code> | The name of the ulimit. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimit.property.soft">soft</a></code> | <code>typing.Union[int, float]</code> | The soft limit. |

---

##### `hard`<sup>Required</sup> <a name="hard" id="@cdktf/provider-docker.container.ContainerUlimit.property.hard"></a>

```python
hard: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The hard limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#hard Container#hard}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.container.ContainerUlimit.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the ulimit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#name Container#name}

---

##### `soft`<sup>Required</sup> <a name="soft" id="@cdktf/provider-docker.container.ContainerUlimit.property.soft"></a>

```python
soft: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The soft limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#soft Container#soft}

---

### ContainerUpload <a name="ContainerUpload" id="@cdktf/provider-docker.container.ContainerUpload"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerUpload.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerUpload(
  file: str,
  content: str = None,
  content_base64: str = None,
  executable: typing.Union[bool, IResolvable] = None,
  permissions: str = None,
  source: str = None,
  source_hash: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUpload.property.file">file</a></code> | <code>str</code> | Path to the file in the container where is upload goes to. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUpload.property.content">content</a></code> | <code>str</code> | Literal string value to use as the object content, which will be uploaded as UTF-8-encoded text. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUpload.property.contentBase64">content_base64</a></code> | <code>str</code> | Base64-encoded data that will be decoded and uploaded as raw bytes for the object content. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUpload.property.executable">executable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, the file will be uploaded with user executable permission. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUpload.property.permissions">permissions</a></code> | <code>str</code> | The permission mode for the file in the container. Has precedence over `executable`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUpload.property.source">source</a></code> | <code>str</code> | A filename that references a file which will be uploaded as the object content. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUpload.property.sourceHash">source_hash</a></code> | <code>str</code> | If using `source`, this will force an update if the file content has updated but the filename has not. |

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-docker.container.ContainerUpload.property.file"></a>

```python
file: str
```

- *Type:* str

Path to the file in the container where is upload goes to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#file Container#file}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-docker.container.ContainerUpload.property.content"></a>

```python
content: str
```

- *Type:* str

Literal string value to use as the object content, which will be uploaded as UTF-8-encoded text.

Conflicts with `content_base64` & `source`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#content Container#content}

---

##### `content_base64`<sup>Optional</sup> <a name="content_base64" id="@cdktf/provider-docker.container.ContainerUpload.property.contentBase64"></a>

```python
content_base64: str
```

- *Type:* str

Base64-encoded data that will be decoded and uploaded as raw bytes for the object content.

This allows safely uploading non-UTF8 binary data, but is recommended only for larger binary content such as the result of the `base64encode` interpolation function. See [here](https://github.com/terraform-providers/terraform-provider-docker/issues/48#issuecomment-374174588) for the reason. Conflicts with `content` & `source`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#content_base64 Container#content_base64}

---

##### `executable`<sup>Optional</sup> <a name="executable" id="@cdktf/provider-docker.container.ContainerUpload.property.executable"></a>

```python
executable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, the file will be uploaded with user executable permission. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#executable Container#executable}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-docker.container.ContainerUpload.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

The permission mode for the file in the container. Has precedence over `executable`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#permissions Container#permissions}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-docker.container.ContainerUpload.property.source"></a>

```python
source: str
```

- *Type:* str

A filename that references a file which will be uploaded as the object content.

This allows for large file uploads that do not get stored in state. Conflicts with `content` & `content_base64`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#source Container#source}

---

##### `source_hash`<sup>Optional</sup> <a name="source_hash" id="@cdktf/provider-docker.container.ContainerUpload.property.sourceHash"></a>

```python
source_hash: str
```

- *Type:* str

If using `source`, this will force an update if the file content has updated but the filename has not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#source_hash Container#source_hash}

---

### ContainerVolumes <a name="ContainerVolumes" id="@cdktf/provider-docker.container.ContainerVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerVolumes.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerVolumes(
  container_path: str = None,
  from_container: str = None,
  host_path: str = None,
  read_only: typing.Union[bool, IResolvable] = None,
  volume_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumes.property.containerPath">container_path</a></code> | <code>str</code> | The path in the container where the volume will be mounted. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumes.property.fromContainer">from_container</a></code> | <code>str</code> | The container where the volume is coming from. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumes.property.hostPath">host_path</a></code> | <code>str</code> | The path on the host where the volume is coming from. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumes.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, this volume will be readonly. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumes.property.volumeName">volume_name</a></code> | <code>str</code> | The name of the docker volume which should be mounted. |

---

##### `container_path`<sup>Optional</sup> <a name="container_path" id="@cdktf/provider-docker.container.ContainerVolumes.property.containerPath"></a>

```python
container_path: str
```

- *Type:* str

The path in the container where the volume will be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#container_path Container#container_path}

---

##### `from_container`<sup>Optional</sup> <a name="from_container" id="@cdktf/provider-docker.container.ContainerVolumes.property.fromContainer"></a>

```python
from_container: str
```

- *Type:* str

The container where the volume is coming from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#from_container Container#from_container}

---

##### `host_path`<sup>Optional</sup> <a name="host_path" id="@cdktf/provider-docker.container.ContainerVolumes.property.hostPath"></a>

```python
host_path: str
```

- *Type:* str

The path on the host where the volume is coming from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#host_path Container#host_path}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-docker.container.ContainerVolumes.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, this volume will be readonly. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#read_only Container#read_only}

---

##### `volume_name`<sup>Optional</sup> <a name="volume_name" id="@cdktf/provider-docker.container.ContainerVolumes.property.volumeName"></a>

```python
volume_name: str
```

- *Type:* str

The name of the docker volume which should be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#volume_name Container#volume_name}

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerCapabilitiesOutputReference <a name="ContainerCapabilitiesOutputReference" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.resetAdd">reset_add</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.resetDrop">reset_drop</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_add` <a name="reset_add" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.resetAdd"></a>

```python
def reset_add() -> None
```

##### `reset_drop` <a name="reset_drop" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.resetDrop"></a>

```python
def reset_drop() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.addInput">add_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.dropInput">drop_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.add">add</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.drop">drop</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `add_input`<sup>Optional</sup> <a name="add_input" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.addInput"></a>

```python
add_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `drop_input`<sup>Optional</sup> <a name="drop_input" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.dropInput"></a>

```python
drop_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.add"></a>

```python
add: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `drop`<sup>Required</sup> <a name="drop" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.drop"></a>

```python
drop: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: ContainerCapabilities
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a>

---


### ContainerDevicesList <a name="ContainerDevicesList" id="@cdktf/provider-docker.container.ContainerDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerDevicesList.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerDevicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.container.ContainerDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-docker.container.ContainerDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-docker.container.ContainerDevicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-docker.container.ContainerDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.container.ContainerDevicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerDevicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerDevicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.container.ContainerDevicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerDevicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerDevicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.container.ContainerDevicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerDevicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.container.ContainerDevicesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerDevices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a>]]

---


### ContainerDevicesOutputReference <a name="ContainerDevicesOutputReference" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerDevicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.resetContainerPath">reset_container_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.resetPermissions">reset_permissions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_container_path` <a name="reset_container_path" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.resetContainerPath"></a>

```python
def reset_container_path() -> None
```

##### `reset_permissions` <a name="reset_permissions" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.resetPermissions"></a>

```python
def reset_permissions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.containerPathInput">container_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.hostPathInput">host_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.permissionsInput">permissions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.containerPath">container_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.hostPath">host_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.permissions">permissions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_path_input`<sup>Optional</sup> <a name="container_path_input" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.containerPathInput"></a>

```python
container_path_input: str
```

- *Type:* str

---

##### `host_path_input`<sup>Optional</sup> <a name="host_path_input" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.hostPathInput"></a>

```python
host_path_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.permissionsInput"></a>

```python
permissions_input: str
```

- *Type:* str

---

##### `container_path`<sup>Required</sup> <a name="container_path" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.containerPath"></a>

```python
container_path: str
```

- *Type:* str

---

##### `host_path`<sup>Required</sup> <a name="host_path" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.hostPath"></a>

```python
host_path: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerDevices]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a>]

---


### ContainerHealthcheckOutputReference <a name="ContainerHealthcheckOutputReference" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerHealthcheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetRetries">reset_retries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetStartInterval">reset_start_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetStartPeriod">reset_start_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_interval` <a name="reset_interval" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_retries` <a name="reset_retries" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetRetries"></a>

```python
def reset_retries() -> None
```

##### `reset_start_interval` <a name="reset_start_interval" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetStartInterval"></a>

```python
def reset_start_interval() -> None
```

##### `reset_start_period` <a name="reset_start_period" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetStartPeriod"></a>

```python
def reset_start_period() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.intervalInput">interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.retriesInput">retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.startIntervalInput">start_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.startPeriodInput">start_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.testInput">test_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.timeoutInput">timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.interval">interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.startInterval">start_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.startPeriod">start_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.test">test</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.timeout">timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.intervalInput"></a>

```python
interval_input: str
```

- *Type:* str

---

##### `retries_input`<sup>Optional</sup> <a name="retries_input" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.retriesInput"></a>

```python
retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_interval_input`<sup>Optional</sup> <a name="start_interval_input" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.startIntervalInput"></a>

```python
start_interval_input: str
```

- *Type:* str

---

##### `start_period_input`<sup>Optional</sup> <a name="start_period_input" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.startPeriodInput"></a>

```python
start_period_input: str
```

- *Type:* str

---

##### `test_input`<sup>Optional</sup> <a name="test_input" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.testInput"></a>

```python
test_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.timeoutInput"></a>

```python
timeout_input: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.interval"></a>

```python
interval: str
```

- *Type:* str

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_interval`<sup>Required</sup> <a name="start_interval" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.startInterval"></a>

```python
start_interval: str
```

- *Type:* str

---

##### `start_period`<sup>Required</sup> <a name="start_period" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.startPeriod"></a>

```python
start_period: str
```

- *Type:* str

---

##### `test`<sup>Required</sup> <a name="test" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.test"></a>

```python
test: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.internalValue"></a>

```python
internal_value: ContainerHealthcheck
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a>

---


### ContainerHostList <a name="ContainerHostList" id="@cdktf/provider-docker.container.ContainerHostList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerHostList.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerHostList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.container.ContainerHostList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerHostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-docker.container.ContainerHostList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-docker.container.ContainerHostList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-docker.container.ContainerHostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.container.ContainerHostList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerHostList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerHostList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.container.ContainerHostList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerHostList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerHostOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerHostList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.container.ContainerHostList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerHostList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.container.ContainerHostList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerHost]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a>]]

---


### ContainerHostOutputReference <a name="ContainerHostOutputReference" id="@cdktf/provider-docker.container.ContainerHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerHostOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.container.ContainerHostOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerHostOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerHostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.container.ContainerHostOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.property.ipInput">ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.container.ContainerHostOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerHostOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-docker.container.ContainerHostOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktf/provider-docker.container.ContainerHostOutputReference.property.ipInput"></a>

```python
ip_input: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-docker.container.ContainerHostOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-docker.container.ContainerHostOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.container.ContainerHostOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerHost]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a>]

---


### ContainerLabelsList <a name="ContainerLabelsList" id="@cdktf/provider-docker.container.ContainerLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerLabelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.container.ContainerLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-docker.container.ContainerLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-docker.container.ContainerLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-docker.container.ContainerLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.container.ContainerLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.container.ContainerLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.container.ContainerLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.container.ContainerLabelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a>]]

---


### ContainerLabelsOutputReference <a name="ContainerLabelsOutputReference" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerLabels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a>]

---


### ContainerMountsBindOptionsOutputReference <a name="ContainerMountsBindOptionsOutputReference" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerMountsBindOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.resetPropagation">reset_propagation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_propagation` <a name="reset_propagation" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.resetPropagation"></a>

```python
def reset_propagation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.propagationInput">propagation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.propagation">propagation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions">ContainerMountsBindOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `propagation_input`<sup>Optional</sup> <a name="propagation_input" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.propagationInput"></a>

```python
propagation_input: str
```

- *Type:* str

---

##### `propagation`<sup>Required</sup> <a name="propagation" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.propagation"></a>

```python
propagation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.internalValue"></a>

```python
internal_value: ContainerMountsBindOptions
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions">ContainerMountsBindOptions</a>

---


### ContainerMountsList <a name="ContainerMountsList" id="@cdktf/provider-docker.container.ContainerMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerMountsList.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerMountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.container.ContainerMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-docker.container.ContainerMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-docker.container.ContainerMountsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-docker.container.ContainerMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.container.ContainerMountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerMountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerMountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.container.ContainerMountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerMountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerMountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.container.ContainerMountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerMountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.container.ContainerMountsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerMounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a>]]

---


### ContainerMountsOutputReference <a name="ContainerMountsOutputReference" id="@cdktf/provider-docker.container.ContainerMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerMountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.putBindOptions">put_bind_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.putTmpfsOptions">put_tmpfs_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.putVolumeOptions">put_volume_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.resetBindOptions">reset_bind_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.resetTmpfsOptions">reset_tmpfs_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.resetVolumeOptions">reset_volume_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bind_options` <a name="put_bind_options" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.putBindOptions"></a>

```python
def put_bind_options(
  propagation: str = None
) -> None
```

###### `propagation`<sup>Optional</sup> <a name="propagation" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.putBindOptions.parameter.propagation"></a>

- *Type:* str

A propagation mode with the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#propagation Container#propagation}

---

##### `put_tmpfs_options` <a name="put_tmpfs_options" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.putTmpfsOptions"></a>

```python
def put_tmpfs_options(
  mode: typing.Union[int, float] = None,
  size_bytes: typing.Union[int, float] = None
) -> None
```

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.putTmpfsOptions.parameter.mode"></a>

- *Type:* typing.Union[int, float]

The permission mode for the tmpfs mount in an integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#mode Container#mode}

---

###### `size_bytes`<sup>Optional</sup> <a name="size_bytes" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.putTmpfsOptions.parameter.sizeBytes"></a>

- *Type:* typing.Union[int, float]

The size for the tmpfs mount in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#size_bytes Container#size_bytes}

---

##### `put_volume_options` <a name="put_volume_options" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.putVolumeOptions"></a>

```python
def put_volume_options(
  driver_name: str = None,
  driver_options: typing.Mapping[str] = None,
  labels: typing.Union[IResolvable, typing.List[ContainerMountsVolumeOptionsLabels]] = None,
  no_copy: typing.Union[bool, IResolvable] = None,
  subpath: str = None
) -> None
```

###### `driver_name`<sup>Optional</sup> <a name="driver_name" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.putVolumeOptions.parameter.driverName"></a>

- *Type:* str

Name of the driver to use to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#driver_name Container#driver_name}

---

###### `driver_options`<sup>Optional</sup> <a name="driver_options" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.putVolumeOptions.parameter.driverOptions"></a>

- *Type:* typing.Mapping[str]

key/value map of driver specific options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#driver_options Container#driver_options}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.putVolumeOptions.parameter.labels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels">ContainerMountsVolumeOptionsLabels</a>]]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#labels Container#labels}

---

###### `no_copy`<sup>Optional</sup> <a name="no_copy" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.putVolumeOptions.parameter.noCopy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Populate volume with data from the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#no_copy Container#no_copy}

---

###### `subpath`<sup>Optional</sup> <a name="subpath" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.putVolumeOptions.parameter.subpath"></a>

- *Type:* str

Path within the volume to mount. Requires docker server version 1.45 or higher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/container#subpath Container#subpath}

---

##### `reset_bind_options` <a name="reset_bind_options" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.resetBindOptions"></a>

```python
def reset_bind_options() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_tmpfs_options` <a name="reset_tmpfs_options" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.resetTmpfsOptions"></a>

```python
def reset_tmpfs_options() -> None
```

##### `reset_volume_options` <a name="reset_volume_options" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.resetVolumeOptions"></a>

```python
def reset_volume_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.bindOptions">bind_options</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference">ContainerMountsBindOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.tmpfsOptions">tmpfs_options</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference">ContainerMountsTmpfsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.volumeOptions">volume_options</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference">ContainerMountsVolumeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.bindOptionsInput">bind_options_input</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions">ContainerMountsBindOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.tmpfsOptionsInput">tmpfs_options_input</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions">ContainerMountsTmpfsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.volumeOptionsInput">volume_options_input</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions">ContainerMountsVolumeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bind_options`<sup>Required</sup> <a name="bind_options" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.bindOptions"></a>

```python
bind_options: ContainerMountsBindOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference">ContainerMountsBindOptionsOutputReference</a>

---

##### `tmpfs_options`<sup>Required</sup> <a name="tmpfs_options" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.tmpfsOptions"></a>

```python
tmpfs_options: ContainerMountsTmpfsOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference">ContainerMountsTmpfsOptionsOutputReference</a>

---

##### `volume_options`<sup>Required</sup> <a name="volume_options" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.volumeOptions"></a>

```python
volume_options: ContainerMountsVolumeOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference">ContainerMountsVolumeOptionsOutputReference</a>

---

##### `bind_options_input`<sup>Optional</sup> <a name="bind_options_input" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.bindOptionsInput"></a>

```python
bind_options_input: ContainerMountsBindOptions
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions">ContainerMountsBindOptions</a>

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `tmpfs_options_input`<sup>Optional</sup> <a name="tmpfs_options_input" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.tmpfsOptionsInput"></a>

```python
tmpfs_options_input: ContainerMountsTmpfsOptions
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions">ContainerMountsTmpfsOptions</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `volume_options_input`<sup>Optional</sup> <a name="volume_options_input" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.volumeOptionsInput"></a>

```python
volume_options_input: ContainerMountsVolumeOptions
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions">ContainerMountsVolumeOptions</a>

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerMounts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a>]

---


### ContainerMountsTmpfsOptionsOutputReference <a name="ContainerMountsTmpfsOptionsOutputReference" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerMountsTmpfsOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.resetSizeBytes">reset_size_bytes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_size_bytes` <a name="reset_size_bytes" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.resetSizeBytes"></a>

```python
def reset_size_bytes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.modeInput">mode_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.sizeBytesInput">size_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.mode">mode</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.sizeBytes">size_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions">ContainerMountsTmpfsOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.modeInput"></a>

```python
mode_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_bytes_input`<sup>Optional</sup> <a name="size_bytes_input" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.sizeBytesInput"></a>

```python
size_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.mode"></a>

```python
mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_bytes`<sup>Required</sup> <a name="size_bytes" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.sizeBytes"></a>

```python
size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.internalValue"></a>

```python
internal_value: ContainerMountsTmpfsOptions
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions">ContainerMountsTmpfsOptions</a>

---


### ContainerMountsVolumeOptionsLabelsList <a name="ContainerMountsVolumeOptionsLabelsList" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerMountsVolumeOptionsLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerMountsVolumeOptionsLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels">ContainerMountsVolumeOptionsLabels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerMountsVolumeOptionsLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels">ContainerMountsVolumeOptionsLabels</a>]]

---


### ContainerMountsVolumeOptionsLabelsOutputReference <a name="ContainerMountsVolumeOptionsLabelsOutputReference" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerMountsVolumeOptionsLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels">ContainerMountsVolumeOptionsLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerMountsVolumeOptionsLabels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels">ContainerMountsVolumeOptionsLabels</a>]

---


### ContainerMountsVolumeOptionsOutputReference <a name="ContainerMountsVolumeOptionsOutputReference" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerMountsVolumeOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.putLabels">put_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetDriverName">reset_driver_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetDriverOptions">reset_driver_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetNoCopy">reset_no_copy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetSubpath">reset_subpath</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_labels` <a name="put_labels" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.putLabels"></a>

```python
def put_labels(
  value: typing.Union[IResolvable, typing.List[ContainerMountsVolumeOptionsLabels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.putLabels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels">ContainerMountsVolumeOptionsLabels</a>]]

---

##### `reset_driver_name` <a name="reset_driver_name" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetDriverName"></a>

```python
def reset_driver_name() -> None
```

##### `reset_driver_options` <a name="reset_driver_options" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetDriverOptions"></a>

```python
def reset_driver_options() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_no_copy` <a name="reset_no_copy" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetNoCopy"></a>

```python
def reset_no_copy() -> None
```

##### `reset_subpath` <a name="reset_subpath" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetSubpath"></a>

```python
def reset_subpath() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList">ContainerMountsVolumeOptionsLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverNameInput">driver_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverOptionsInput">driver_options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels">ContainerMountsVolumeOptionsLabels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.noCopyInput">no_copy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.subpathInput">subpath_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverName">driver_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverOptions">driver_options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.noCopy">no_copy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.subpath">subpath</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions">ContainerMountsVolumeOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.labels"></a>

```python
labels: ContainerMountsVolumeOptionsLabelsList
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList">ContainerMountsVolumeOptionsLabelsList</a>

---

##### `driver_name_input`<sup>Optional</sup> <a name="driver_name_input" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverNameInput"></a>

```python
driver_name_input: str
```

- *Type:* str

---

##### `driver_options_input`<sup>Optional</sup> <a name="driver_options_input" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverOptionsInput"></a>

```python
driver_options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Union[IResolvable, typing.List[ContainerMountsVolumeOptionsLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels">ContainerMountsVolumeOptionsLabels</a>]]

---

##### `no_copy_input`<sup>Optional</sup> <a name="no_copy_input" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.noCopyInput"></a>

```python
no_copy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subpath_input`<sup>Optional</sup> <a name="subpath_input" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.subpathInput"></a>

```python
subpath_input: str
```

- *Type:* str

---

##### `driver_name`<sup>Required</sup> <a name="driver_name" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverName"></a>

```python
driver_name: str
```

- *Type:* str

---

##### `driver_options`<sup>Required</sup> <a name="driver_options" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverOptions"></a>

```python
driver_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `no_copy`<sup>Required</sup> <a name="no_copy" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.noCopy"></a>

```python
no_copy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subpath`<sup>Required</sup> <a name="subpath" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.subpath"></a>

```python
subpath: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.internalValue"></a>

```python
internal_value: ContainerMountsVolumeOptions
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions">ContainerMountsVolumeOptions</a>

---


### ContainerNetworkDataList <a name="ContainerNetworkDataList" id="@cdktf/provider-docker.container.ContainerNetworkDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerNetworkDataList.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerNetworkDataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.container.ContainerNetworkDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerNetworkDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-docker.container.ContainerNetworkDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-docker.container.ContainerNetworkDataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-docker.container.ContainerNetworkDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.container.ContainerNetworkDataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerNetworkDataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerNetworkDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.container.ContainerNetworkDataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerNetworkDataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerNetworkDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerNetworkDataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.container.ContainerNetworkDataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerNetworkDataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ContainerNetworkDataOutputReference <a name="ContainerNetworkDataOutputReference" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerNetworkDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.gateway">gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.globalIpv6Address">global_ipv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.globalIpv6PrefixLength">global_ipv6_prefix_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.ipPrefixLength">ip_prefix_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.ipv6Gateway">ipv6_gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.macAddress">mac_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.networkName">network_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerNetworkData">ContainerNetworkData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.gateway"></a>

```python
gateway: str
```

- *Type:* str

---

##### `global_ipv6_address`<sup>Required</sup> <a name="global_ipv6_address" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.globalIpv6Address"></a>

```python
global_ipv6_address: str
```

- *Type:* str

---

##### `global_ipv6_prefix_length`<sup>Required</sup> <a name="global_ipv6_prefix_length" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.globalIpv6PrefixLength"></a>

```python
global_ipv6_prefix_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `ip_prefix_length`<sup>Required</sup> <a name="ip_prefix_length" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.ipPrefixLength"></a>

```python
ip_prefix_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_gateway`<sup>Required</sup> <a name="ipv6_gateway" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.ipv6Gateway"></a>

```python
ipv6_gateway: str
```

- *Type:* str

---

##### `mac_address`<sup>Required</sup> <a name="mac_address" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.macAddress"></a>

```python
mac_address: str
```

- *Type:* str

---

##### `network_name`<sup>Required</sup> <a name="network_name" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.networkName"></a>

```python
network_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.internalValue"></a>

```python
internal_value: ContainerNetworkData
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerNetworkData">ContainerNetworkData</a>

---


### ContainerNetworksAdvancedList <a name="ContainerNetworksAdvancedList" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerNetworksAdvancedList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerNetworksAdvancedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerNetworksAdvanced]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a>]]

---


### ContainerNetworksAdvancedOutputReference <a name="ContainerNetworksAdvancedOutputReference" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerNetworksAdvancedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resetAliases">reset_aliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resetIpv4Address">reset_ipv4_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resetIpv6Address">reset_ipv6_address</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aliases` <a name="reset_aliases" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resetAliases"></a>

```python
def reset_aliases() -> None
```

##### `reset_ipv4_address` <a name="reset_ipv4_address" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resetIpv4Address"></a>

```python
def reset_ipv4_address() -> None
```

##### `reset_ipv6_address` <a name="reset_ipv6_address" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resetIpv6Address"></a>

```python
def reset_ipv6_address() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.aliasesInput">aliases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv4AddressInput">ipv4_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv6AddressInput">ipv6_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.aliases">aliases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv4Address">ipv4_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aliases_input`<sup>Optional</sup> <a name="aliases_input" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.aliasesInput"></a>

```python
aliases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv4_address_input`<sup>Optional</sup> <a name="ipv4_address_input" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv4AddressInput"></a>

```python
ipv4_address_input: str
```

- *Type:* str

---

##### `ipv6_address_input`<sup>Optional</sup> <a name="ipv6_address_input" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv6AddressInput"></a>

```python
ipv6_address_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.aliases"></a>

```python
aliases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv4_address`<sup>Required</sup> <a name="ipv4_address" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv4Address"></a>

```python
ipv4_address: str
```

- *Type:* str

---

##### `ipv6_address`<sup>Required</sup> <a name="ipv6_address" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerNetworksAdvanced]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a>]

---


### ContainerPortsList <a name="ContainerPortsList" id="@cdktf/provider-docker.container.ContainerPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerPortsList.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerPortsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.container.ContainerPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-docker.container.ContainerPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-docker.container.ContainerPortsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-docker.container.ContainerPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.container.ContainerPortsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerPortsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerPortsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.container.ContainerPortsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerPortsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerPortsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.container.ContainerPortsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerPortsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.container.ContainerPortsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerPorts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a>]]

---


### ContainerPortsOutputReference <a name="ContainerPortsOutputReference" id="@cdktf/provider-docker.container.ContainerPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerPortsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.resetExternal">reset_external</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.resetIp">reset_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_external` <a name="reset_external" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.resetExternal"></a>

```python
def reset_external() -> None
```

##### `reset_ip` <a name="reset_ip" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.resetIp"></a>

```python
def reset_ip() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.externalInput">external_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.internalInput">internal_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.ipInput">ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.external">external</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.internal">internal</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_input`<sup>Optional</sup> <a name="external_input" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.externalInput"></a>

```python
external_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_input`<sup>Optional</sup> <a name="internal_input" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.internalInput"></a>

```python
internal_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.ipInput"></a>

```python
ip_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `external`<sup>Required</sup> <a name="external" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.external"></a>

```python
external: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal`<sup>Required</sup> <a name="internal" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.internal"></a>

```python
internal: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerPorts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a>]

---


### ContainerUlimitList <a name="ContainerUlimitList" id="@cdktf/provider-docker.container.ContainerUlimitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerUlimitList.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerUlimitList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.container.ContainerUlimitList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerUlimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-docker.container.ContainerUlimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-docker.container.ContainerUlimitList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-docker.container.ContainerUlimitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.container.ContainerUlimitList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerUlimitList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerUlimitList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.container.ContainerUlimitList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerUlimitList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerUlimitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerUlimitList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.container.ContainerUlimitList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerUlimitList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.container.ContainerUlimitList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerUlimit]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a>]]

---


### ContainerUlimitOutputReference <a name="ContainerUlimitOutputReference" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerUlimitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.hardInput">hard_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.softInput">soft_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.hard">hard</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.soft">soft</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hard_input`<sup>Optional</sup> <a name="hard_input" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.hardInput"></a>

```python
hard_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `soft_input`<sup>Optional</sup> <a name="soft_input" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.softInput"></a>

```python
soft_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hard`<sup>Required</sup> <a name="hard" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.hard"></a>

```python
hard: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `soft`<sup>Required</sup> <a name="soft" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.soft"></a>

```python
soft: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerUlimit]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a>]

---


### ContainerUploadList <a name="ContainerUploadList" id="@cdktf/provider-docker.container.ContainerUploadList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerUploadList.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerUploadList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.container.ContainerUploadList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerUploadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-docker.container.ContainerUploadList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-docker.container.ContainerUploadList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-docker.container.ContainerUploadList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.container.ContainerUploadList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerUploadList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerUploadList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.container.ContainerUploadList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerUploadList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerUploadOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerUploadList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.container.ContainerUploadList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerUploadList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.container.ContainerUploadList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerUpload]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a>]]

---


### ContainerUploadOutputReference <a name="ContainerUploadOutputReference" id="@cdktf/provider-docker.container.ContainerUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerUploadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.resetContentBase64">reset_content_base64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.resetExecutable">reset_executable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.resetSourceHash">reset_source_hash</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content` <a name="reset_content" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_content_base64` <a name="reset_content_base64" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.resetContentBase64"></a>

```python
def reset_content_base64() -> None
```

##### `reset_executable` <a name="reset_executable" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.resetExecutable"></a>

```python
def reset_executable() -> None
```

##### `reset_permissions` <a name="reset_permissions" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_source_hash` <a name="reset_source_hash" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.resetSourceHash"></a>

```python
def reset_source_hash() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.contentBase64Input">content_base64_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.executableInput">executable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.fileInput">file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.permissionsInput">permissions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.sourceHashInput">source_hash_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.contentBase64">content_base64</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.executable">executable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.file">file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.permissions">permissions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.sourceHash">source_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_base64_input`<sup>Optional</sup> <a name="content_base64_input" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.contentBase64Input"></a>

```python
content_base64_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `executable_input`<sup>Optional</sup> <a name="executable_input" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.executableInput"></a>

```python
executable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.fileInput"></a>

```python
file_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.permissionsInput"></a>

```python
permissions_input: str
```

- *Type:* str

---

##### `source_hash_input`<sup>Optional</sup> <a name="source_hash_input" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.sourceHashInput"></a>

```python
source_hash_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_base64`<sup>Required</sup> <a name="content_base64" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.contentBase64"></a>

```python
content_base64: str
```

- *Type:* str

---

##### `executable`<sup>Required</sup> <a name="executable" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.executable"></a>

```python
executable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.file"></a>

```python
file: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `source_hash`<sup>Required</sup> <a name="source_hash" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.sourceHash"></a>

```python
source_hash: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerUpload]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a>]

---


### ContainerVolumesList <a name="ContainerVolumesList" id="@cdktf/provider-docker.container.ContainerVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerVolumesList.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.container.ContainerVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-docker.container.ContainerVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-docker.container.ContainerVolumesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-docker.container.ContainerVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.container.ContainerVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.container.ContainerVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.container.ContainerVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.container.ContainerVolumesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a>]]

---


### ContainerVolumesOutputReference <a name="ContainerVolumesOutputReference" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import container

container.ContainerVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetContainerPath">reset_container_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetFromContainer">reset_from_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetHostPath">reset_host_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetVolumeName">reset_volume_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_container_path` <a name="reset_container_path" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetContainerPath"></a>

```python
def reset_container_path() -> None
```

##### `reset_from_container` <a name="reset_from_container" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetFromContainer"></a>

```python
def reset_from_container() -> None
```

##### `reset_host_path` <a name="reset_host_path" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetHostPath"></a>

```python
def reset_host_path() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```

##### `reset_volume_name` <a name="reset_volume_name" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetVolumeName"></a>

```python
def reset_volume_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.containerPathInput">container_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.fromContainerInput">from_container_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.hostPathInput">host_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.volumeNameInput">volume_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.containerPath">container_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.fromContainer">from_container</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.hostPath">host_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.volumeName">volume_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_path_input`<sup>Optional</sup> <a name="container_path_input" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.containerPathInput"></a>

```python
container_path_input: str
```

- *Type:* str

---

##### `from_container_input`<sup>Optional</sup> <a name="from_container_input" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.fromContainerInput"></a>

```python
from_container_input: str
```

- *Type:* str

---

##### `host_path_input`<sup>Optional</sup> <a name="host_path_input" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.hostPathInput"></a>

```python
host_path_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `volume_name_input`<sup>Optional</sup> <a name="volume_name_input" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.volumeNameInput"></a>

```python
volume_name_input: str
```

- *Type:* str

---

##### `container_path`<sup>Required</sup> <a name="container_path" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.containerPath"></a>

```python
container_path: str
```

- *Type:* str

---

##### `from_container`<sup>Required</sup> <a name="from_container" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.fromContainer"></a>

```python
from_container: str
```

- *Type:* str

---

##### `host_path`<sup>Required</sup> <a name="host_path" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.hostPath"></a>

```python
host_path: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `volume_name`<sup>Required</sup> <a name="volume_name" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.volumeName"></a>

```python
volume_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerVolumes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a>]

---



