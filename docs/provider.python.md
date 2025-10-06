# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-docker.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DockerProvider <a name="DockerProvider" id="@cdktf/provider-docker.provider.DockerProvider"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs docker}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.provider.DockerProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import provider

provider.DockerProvider(
  scope: Construct,
  id: str,
  alias: str = None,
  ca_material: str = None,
  cert_material: str = None,
  cert_path: str = None,
  context: str = None,
  disable_docker_daemon_check: bool | IResolvable = None,
  host: str = None,
  key_material: str = None,
  registry_auth: IResolvable | typing.List[DockerProviderRegistryAuth] = None,
  ssh_opts: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.caMaterial">ca_material</a></code> | <code>str</code> | PEM-encoded content of Docker host CA certificate. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.certMaterial">cert_material</a></code> | <code>str</code> | PEM-encoded content of Docker client certificate. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.certPath">cert_path</a></code> | <code>str</code> | Path to directory with Docker TLS config. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.context">context</a></code> | <code>str</code> | The name of the Docker context to use. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.disableDockerDaemonCheck">disable_docker_daemon_check</a></code> | <code>bool \| cdktf.IResolvable</code> | If set to `true`, the provider will not check if the Docker daemon is running. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.host">host</a></code> | <code>str</code> | The Docker daemon address. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.keyMaterial">key_material</a></code> | <code>str</code> | PEM-encoded content of Docker client private key. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.registryAuth">registry_auth</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth">DockerProviderRegistryAuth</a>]</code> | registry_auth block. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.sshOpts">ssh_opts</a></code> | <code>typing.List[str]</code> | Additional SSH option flags to be appended when using `ssh://` protocol. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#alias DockerProvider#alias}

---

##### `ca_material`<sup>Optional</sup> <a name="ca_material" id="@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.caMaterial"></a>

- *Type:* str

PEM-encoded content of Docker host CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#ca_material DockerProvider#ca_material}

---

##### `cert_material`<sup>Optional</sup> <a name="cert_material" id="@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.certMaterial"></a>

- *Type:* str

PEM-encoded content of Docker client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#cert_material DockerProvider#cert_material}

---

##### `cert_path`<sup>Optional</sup> <a name="cert_path" id="@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.certPath"></a>

- *Type:* str

Path to directory with Docker TLS config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#cert_path DockerProvider#cert_path}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.context"></a>

- *Type:* str

The name of the Docker context to use.

Can also be set via `DOCKER_CONTEXT` environment variable. Overrides the `host` if set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#context DockerProvider#context}

---

##### `disable_docker_daemon_check`<sup>Optional</sup> <a name="disable_docker_daemon_check" id="@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.disableDockerDaemonCheck"></a>

- *Type:* bool | cdktf.IResolvable

If set to `true`, the provider will not check if the Docker daemon is running.

This is useful for resources/data_sourcess that do not require a running Docker daemon, such as the data source `docker_registry_image`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#disable_docker_daemon_check DockerProvider#disable_docker_daemon_check}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.host"></a>

- *Type:* str

The Docker daemon address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#host DockerProvider#host}

---

##### `key_material`<sup>Optional</sup> <a name="key_material" id="@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.keyMaterial"></a>

- *Type:* str

PEM-encoded content of Docker client private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#key_material DockerProvider#key_material}

---

##### `registry_auth`<sup>Optional</sup> <a name="registry_auth" id="@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.registryAuth"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth">DockerProviderRegistryAuth</a>]

registry_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#registry_auth DockerProvider#registry_auth}

---

##### `ssh_opts`<sup>Optional</sup> <a name="ssh_opts" id="@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.sshOpts"></a>

- *Type:* typing.List[str]

Additional SSH option flags to be appended when using `ssh://` protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#ssh_opts DockerProvider#ssh_opts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetCaMaterial">reset_ca_material</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetCertMaterial">reset_cert_material</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetCertPath">reset_cert_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetContext">reset_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetDisableDockerDaemonCheck">reset_disable_docker_daemon_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetKeyMaterial">reset_key_material</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetRegistryAuth">reset_registry_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetSshOpts">reset_ssh_opts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.provider.DockerProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-docker.provider.DockerProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.provider.DockerProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.provider.DockerProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-docker.provider.DockerProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-docker.provider.DockerProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-docker.provider.DockerProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-docker.provider.DockerProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-docker.provider.DockerProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-docker.provider.DockerProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-docker.provider.DockerProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_ca_material` <a name="reset_ca_material" id="@cdktf/provider-docker.provider.DockerProvider.resetCaMaterial"></a>

```python
def reset_ca_material() -> None
```

##### `reset_cert_material` <a name="reset_cert_material" id="@cdktf/provider-docker.provider.DockerProvider.resetCertMaterial"></a>

```python
def reset_cert_material() -> None
```

##### `reset_cert_path` <a name="reset_cert_path" id="@cdktf/provider-docker.provider.DockerProvider.resetCertPath"></a>

```python
def reset_cert_path() -> None
```

##### `reset_context` <a name="reset_context" id="@cdktf/provider-docker.provider.DockerProvider.resetContext"></a>

```python
def reset_context() -> None
```

##### `reset_disable_docker_daemon_check` <a name="reset_disable_docker_daemon_check" id="@cdktf/provider-docker.provider.DockerProvider.resetDisableDockerDaemonCheck"></a>

```python
def reset_disable_docker_daemon_check() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktf/provider-docker.provider.DockerProvider.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_key_material` <a name="reset_key_material" id="@cdktf/provider-docker.provider.DockerProvider.resetKeyMaterial"></a>

```python
def reset_key_material() -> None
```

##### `reset_registry_auth` <a name="reset_registry_auth" id="@cdktf/provider-docker.provider.DockerProvider.resetRegistryAuth"></a>

```python
def reset_registry_auth() -> None
```

##### `reset_ssh_opts` <a name="reset_ssh_opts" id="@cdktf/provider-docker.provider.DockerProvider.resetSshOpts"></a>

```python
def reset_ssh_opts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DockerProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-docker.provider.DockerProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_docker import provider

provider.DockerProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.provider.DockerProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-docker.provider.DockerProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_docker import provider

provider.DockerProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.provider.DockerProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-docker.provider.DockerProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_docker import provider

provider.DockerProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.provider.DockerProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-docker.provider.DockerProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_docker import provider

provider.DockerProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DockerProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.provider.DockerProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-docker.provider.DockerProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DockerProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-docker.provider.DockerProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DockerProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.provider.DockerProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DockerProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.caMaterialInput">ca_material_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.certMaterialInput">cert_material_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.certPathInput">cert_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.contextInput">context_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.disableDockerDaemonCheckInput">disable_docker_daemon_check_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.keyMaterialInput">key_material_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.registryAuthInput">registry_auth_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth">DockerProviderRegistryAuth</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.sshOptsInput">ssh_opts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.caMaterial">ca_material</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.certMaterial">cert_material</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.certPath">cert_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.context">context</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.disableDockerDaemonCheck">disable_docker_daemon_check</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.keyMaterial">key_material</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.registryAuth">registry_auth</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth">DockerProviderRegistryAuth</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.sshOpts">ssh_opts</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-docker.provider.DockerProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-docker.provider.DockerProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.provider.DockerProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-docker.provider.DockerProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-docker.provider.DockerProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-docker.provider.DockerProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-docker.provider.DockerProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-docker.provider.DockerProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-docker.provider.DockerProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-docker.provider.DockerProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `ca_material_input`<sup>Optional</sup> <a name="ca_material_input" id="@cdktf/provider-docker.provider.DockerProvider.property.caMaterialInput"></a>

```python
ca_material_input: str
```

- *Type:* str

---

##### `cert_material_input`<sup>Optional</sup> <a name="cert_material_input" id="@cdktf/provider-docker.provider.DockerProvider.property.certMaterialInput"></a>

```python
cert_material_input: str
```

- *Type:* str

---

##### `cert_path_input`<sup>Optional</sup> <a name="cert_path_input" id="@cdktf/provider-docker.provider.DockerProvider.property.certPathInput"></a>

```python
cert_path_input: str
```

- *Type:* str

---

##### `context_input`<sup>Optional</sup> <a name="context_input" id="@cdktf/provider-docker.provider.DockerProvider.property.contextInput"></a>

```python
context_input: str
```

- *Type:* str

---

##### `disable_docker_daemon_check_input`<sup>Optional</sup> <a name="disable_docker_daemon_check_input" id="@cdktf/provider-docker.provider.DockerProvider.property.disableDockerDaemonCheckInput"></a>

```python
disable_docker_daemon_check_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-docker.provider.DockerProvider.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `key_material_input`<sup>Optional</sup> <a name="key_material_input" id="@cdktf/provider-docker.provider.DockerProvider.property.keyMaterialInput"></a>

```python
key_material_input: str
```

- *Type:* str

---

##### `registry_auth_input`<sup>Optional</sup> <a name="registry_auth_input" id="@cdktf/provider-docker.provider.DockerProvider.property.registryAuthInput"></a>

```python
registry_auth_input: IResolvable | typing.List[DockerProviderRegistryAuth]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth">DockerProviderRegistryAuth</a>]

---

##### `ssh_opts_input`<sup>Optional</sup> <a name="ssh_opts_input" id="@cdktf/provider-docker.provider.DockerProvider.property.sshOptsInput"></a>

```python
ssh_opts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ca_material`<sup>Optional</sup> <a name="ca_material" id="@cdktf/provider-docker.provider.DockerProvider.property.caMaterial"></a>

```python
ca_material: str
```

- *Type:* str

---

##### `cert_material`<sup>Optional</sup> <a name="cert_material" id="@cdktf/provider-docker.provider.DockerProvider.property.certMaterial"></a>

```python
cert_material: str
```

- *Type:* str

---

##### `cert_path`<sup>Optional</sup> <a name="cert_path" id="@cdktf/provider-docker.provider.DockerProvider.property.certPath"></a>

```python
cert_path: str
```

- *Type:* str

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-docker.provider.DockerProvider.property.context"></a>

```python
context: str
```

- *Type:* str

---

##### `disable_docker_daemon_check`<sup>Optional</sup> <a name="disable_docker_daemon_check" id="@cdktf/provider-docker.provider.DockerProvider.property.disableDockerDaemonCheck"></a>

```python
disable_docker_daemon_check: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-docker.provider.DockerProvider.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `key_material`<sup>Optional</sup> <a name="key_material" id="@cdktf/provider-docker.provider.DockerProvider.property.keyMaterial"></a>

```python
key_material: str
```

- *Type:* str

---

##### `registry_auth`<sup>Optional</sup> <a name="registry_auth" id="@cdktf/provider-docker.provider.DockerProvider.property.registryAuth"></a>

```python
registry_auth: IResolvable | typing.List[DockerProviderRegistryAuth]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth">DockerProviderRegistryAuth</a>]

---

##### `ssh_opts`<sup>Optional</sup> <a name="ssh_opts" id="@cdktf/provider-docker.provider.DockerProvider.property.sshOpts"></a>

```python
ssh_opts: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-docker.provider.DockerProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DockerProviderConfig <a name="DockerProviderConfig" id="@cdktf/provider-docker.provider.DockerProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.provider.DockerProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import provider

provider.DockerProviderConfig(
  alias: str = None,
  ca_material: str = None,
  cert_material: str = None,
  cert_path: str = None,
  context: str = None,
  disable_docker_daemon_check: bool | IResolvable = None,
  host: str = None,
  key_material: str = None,
  registry_auth: IResolvable | typing.List[DockerProviderRegistryAuth] = None,
  ssh_opts: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.caMaterial">ca_material</a></code> | <code>str</code> | PEM-encoded content of Docker host CA certificate. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.certMaterial">cert_material</a></code> | <code>str</code> | PEM-encoded content of Docker client certificate. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.certPath">cert_path</a></code> | <code>str</code> | Path to directory with Docker TLS config. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.context">context</a></code> | <code>str</code> | The name of the Docker context to use. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.disableDockerDaemonCheck">disable_docker_daemon_check</a></code> | <code>bool \| cdktf.IResolvable</code> | If set to `true`, the provider will not check if the Docker daemon is running. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.host">host</a></code> | <code>str</code> | The Docker daemon address. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.keyMaterial">key_material</a></code> | <code>str</code> | PEM-encoded content of Docker client private key. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.registryAuth">registry_auth</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth">DockerProviderRegistryAuth</a>]</code> | registry_auth block. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.sshOpts">ssh_opts</a></code> | <code>typing.List[str]</code> | Additional SSH option flags to be appended when using `ssh://` protocol. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#alias DockerProvider#alias}

---

##### `ca_material`<sup>Optional</sup> <a name="ca_material" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.caMaterial"></a>

```python
ca_material: str
```

- *Type:* str

PEM-encoded content of Docker host CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#ca_material DockerProvider#ca_material}

---

##### `cert_material`<sup>Optional</sup> <a name="cert_material" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.certMaterial"></a>

```python
cert_material: str
```

- *Type:* str

PEM-encoded content of Docker client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#cert_material DockerProvider#cert_material}

---

##### `cert_path`<sup>Optional</sup> <a name="cert_path" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.certPath"></a>

```python
cert_path: str
```

- *Type:* str

Path to directory with Docker TLS config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#cert_path DockerProvider#cert_path}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.context"></a>

```python
context: str
```

- *Type:* str

The name of the Docker context to use.

Can also be set via `DOCKER_CONTEXT` environment variable. Overrides the `host` if set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#context DockerProvider#context}

---

##### `disable_docker_daemon_check`<sup>Optional</sup> <a name="disable_docker_daemon_check" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.disableDockerDaemonCheck"></a>

```python
disable_docker_daemon_check: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If set to `true`, the provider will not check if the Docker daemon is running.

This is useful for resources/data_sourcess that do not require a running Docker daemon, such as the data source `docker_registry_image`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#disable_docker_daemon_check DockerProvider#disable_docker_daemon_check}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.host"></a>

```python
host: str
```

- *Type:* str

The Docker daemon address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#host DockerProvider#host}

---

##### `key_material`<sup>Optional</sup> <a name="key_material" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.keyMaterial"></a>

```python
key_material: str
```

- *Type:* str

PEM-encoded content of Docker client private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#key_material DockerProvider#key_material}

---

##### `registry_auth`<sup>Optional</sup> <a name="registry_auth" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.registryAuth"></a>

```python
registry_auth: IResolvable | typing.List[DockerProviderRegistryAuth]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth">DockerProviderRegistryAuth</a>]

registry_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#registry_auth DockerProvider#registry_auth}

---

##### `ssh_opts`<sup>Optional</sup> <a name="ssh_opts" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.sshOpts"></a>

```python
ssh_opts: typing.List[str]
```

- *Type:* typing.List[str]

Additional SSH option flags to be appended when using `ssh://` protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#ssh_opts DockerProvider#ssh_opts}

---

### DockerProviderRegistryAuth <a name="DockerProviderRegistryAuth" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import provider

provider.DockerProviderRegistryAuth(
  address: str,
  auth_disabled: bool | IResolvable = None,
  config_file: str = None,
  config_file_content: str = None,
  password: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.address">address</a></code> | <code>str</code> | Address of the registry. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.authDisabled">auth_disabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Setting this to `true` will tell the provider that this registry does not need authentication. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.configFile">config_file</a></code> | <code>str</code> | Path to docker json file for registry auth. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.configFileContent">config_file_content</a></code> | <code>str</code> | Plain content of the docker json file for registry auth. `config_file_content` has precedence over username/password. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.password">password</a></code> | <code>str</code> | Password for the registry. Defaults to `DOCKER_REGISTRY_PASS` env variable if set. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.username">username</a></code> | <code>str</code> | Username for the registry. Defaults to `DOCKER_REGISTRY_USER` env variable if set. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.address"></a>

```python
address: str
```

- *Type:* str

Address of the registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#address DockerProvider#address}

---

##### `auth_disabled`<sup>Optional</sup> <a name="auth_disabled" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.authDisabled"></a>

```python
auth_disabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Setting this to `true` will tell the provider that this registry does not need authentication.

Due to the docker internals, the provider will use dummy credentials (see https://github.com/kreuzwerker/terraform-provider-docker/issues/470 for more information). Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#auth_disabled DockerProvider#auth_disabled}

---

##### `config_file`<sup>Optional</sup> <a name="config_file" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.configFile"></a>

```python
config_file: str
```

- *Type:* str

Path to docker json file for registry auth.

Defaults to `~/.docker/config.json`. If `DOCKER_CONFIG` is set, the value of `DOCKER_CONFIG` is used as the path. `config_file` has predencen over all other options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#config_file DockerProvider#config_file}

---

##### `config_file_content`<sup>Optional</sup> <a name="config_file_content" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.configFileContent"></a>

```python
config_file_content: str
```

- *Type:* str

Plain content of the docker json file for registry auth. `config_file_content` has precedence over username/password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#config_file_content DockerProvider#config_file_content}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.password"></a>

```python
password: str
```

- *Type:* str

Password for the registry. Defaults to `DOCKER_REGISTRY_PASS` env variable if set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#password DockerProvider#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.username"></a>

```python
username: str
```

- *Type:* str

Username for the registry. Defaults to `DOCKER_REGISTRY_USER` env variable if set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#username DockerProvider#username}

---



