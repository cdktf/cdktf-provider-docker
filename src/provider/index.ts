// https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DockerProviderConfig {
  /**
  * PEM-encoded content of Docker host CA certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs#ca_material DockerProvider#ca_material}
  */
  readonly caMaterial?: string;
  /**
  * PEM-encoded content of Docker client certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs#cert_material DockerProvider#cert_material}
  */
  readonly certMaterial?: string;
  /**
  * Path to directory with Docker TLS config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs#cert_path DockerProvider#cert_path}
  */
  readonly certPath?: string;
  /**
  * The name of the Docker context to use. Can also be set via `DOCKER_CONTEXT` environment variable. Overrides the `host` if set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs#context DockerProvider#context}
  */
  readonly context?: string;
  /**
  * If set to `true`, the provider will not check if the Docker daemon is running. This is useful for resources/data_sourcess that do not require a running Docker daemon, such as the data source `docker_registry_image`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs#disable_docker_daemon_check DockerProvider#disable_docker_daemon_check}
  */
  readonly disableDockerDaemonCheck?: boolean | cdktf.IResolvable;
  /**
  * The Docker daemon address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs#host DockerProvider#host}
  */
  readonly host?: string;
  /**
  * PEM-encoded content of Docker client private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs#key_material DockerProvider#key_material}
  */
  readonly keyMaterial?: string;
  /**
  * Additional SSH option flags to be appended when using `ssh://` protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs#ssh_opts DockerProvider#ssh_opts}
  */
  readonly sshOpts?: string[];
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs#alias DockerProvider#alias}
  */
  readonly alias?: string;
  /**
  * registry_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs#registry_auth DockerProvider#registry_auth}
  */
  readonly registryAuth?: DockerProviderRegistryAuth[] | cdktf.IResolvable;
}
export interface DockerProviderRegistryAuth {
  /**
  * Address of the registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs#address DockerProvider#address}
  */
  readonly address: string;
  /**
  * Setting this to `true` will tell the provider that this registry does not need authentication. Due to the docker internals, the provider will use dummy credentials (see https://github.com/kreuzwerker/terraform-provider-docker/issues/470 for more information). Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs#auth_disabled DockerProvider#auth_disabled}
  */
  readonly authDisabled?: boolean | cdktf.IResolvable;
  /**
  * Path to docker json file for registry auth. Defaults to `~/.docker/config.json`. If `DOCKER_CONFIG` is set, the value of `DOCKER_CONFIG` is used as the path. `config_file` has predencen over all other options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs#config_file DockerProvider#config_file}
  */
  readonly configFile?: string;
  /**
  * Plain content of the docker json file for registry auth. `config_file_content` has precedence over username/password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs#config_file_content DockerProvider#config_file_content}
  */
  readonly configFileContent?: string;
  /**
  * Password for the registry. Defaults to `DOCKER_REGISTRY_PASS` env variable if set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs#password DockerProvider#password}
  */
  readonly password?: string;
  /**
  * Username for the registry. Defaults to `DOCKER_REGISTRY_USER` env variable if set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs#username DockerProvider#username}
  */
  readonly username?: string;
}

export function dockerProviderRegistryAuthToTerraform(struct?: DockerProviderRegistryAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    auth_disabled: cdktf.booleanToTerraform(struct!.authDisabled),
    config_file: cdktf.stringToTerraform(struct!.configFile),
    config_file_content: cdktf.stringToTerraform(struct!.configFileContent),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dockerProviderRegistryAuthToHclTerraform(struct?: DockerProviderRegistryAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.authDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    config_file: {
      value: cdktf.stringToHclTerraform(struct!.configFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_file_content: {
      value: cdktf.stringToHclTerraform(struct!.configFileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs docker}
*/
export class DockerProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "docker";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DockerProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DockerProvider to import
  * @param importFromId The id of the existing DockerProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DockerProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs docker} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DockerProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DockerProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'docker',
      terraformGeneratorMetadata: {
        providerName: 'docker',
        providerVersion: '3.4.0',
        providerVersionConstraint: '~> 3.0'
      },
      terraformProviderSource: 'kreuzwerker/docker'
    });
    this._caMaterial = config.caMaterial;
    this._certMaterial = config.certMaterial;
    this._certPath = config.certPath;
    this._context = config.context;
    this._disableDockerDaemonCheck = config.disableDockerDaemonCheck;
    this._host = config.host;
    this._keyMaterial = config.keyMaterial;
    this._sshOpts = config.sshOpts;
    this._alias = config.alias;
    this._registryAuth = config.registryAuth;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_material - computed: false, optional: true, required: false
  private _caMaterial?: string; 
  public get caMaterial() {
    return this._caMaterial;
  }
  public set caMaterial(value: string | undefined) {
    this._caMaterial = value;
  }
  public resetCaMaterial() {
    this._caMaterial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caMaterialInput() {
    return this._caMaterial;
  }

  // cert_material - computed: false, optional: true, required: false
  private _certMaterial?: string; 
  public get certMaterial() {
    return this._certMaterial;
  }
  public set certMaterial(value: string | undefined) {
    this._certMaterial = value;
  }
  public resetCertMaterial() {
    this._certMaterial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certMaterialInput() {
    return this._certMaterial;
  }

  // cert_path - computed: false, optional: true, required: false
  private _certPath?: string; 
  public get certPath() {
    return this._certPath;
  }
  public set certPath(value: string | undefined) {
    this._certPath = value;
  }
  public resetCertPath() {
    this._certPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certPathInput() {
    return this._certPath;
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this._context;
  }
  public set context(value: string | undefined) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // disable_docker_daemon_check - computed: false, optional: true, required: false
  private _disableDockerDaemonCheck?: boolean | cdktf.IResolvable; 
  public get disableDockerDaemonCheck() {
    return this._disableDockerDaemonCheck;
  }
  public set disableDockerDaemonCheck(value: boolean | cdktf.IResolvable | undefined) {
    this._disableDockerDaemonCheck = value;
  }
  public resetDisableDockerDaemonCheck() {
    this._disableDockerDaemonCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDockerDaemonCheckInput() {
    return this._disableDockerDaemonCheck;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // key_material - computed: false, optional: true, required: false
  private _keyMaterial?: string; 
  public get keyMaterial() {
    return this._keyMaterial;
  }
  public set keyMaterial(value: string | undefined) {
    this._keyMaterial = value;
  }
  public resetKeyMaterial() {
    this._keyMaterial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyMaterialInput() {
    return this._keyMaterial;
  }

  // ssh_opts - computed: false, optional: true, required: false
  private _sshOpts?: string[]; 
  public get sshOpts() {
    return this._sshOpts;
  }
  public set sshOpts(value: string[] | undefined) {
    this._sshOpts = value;
  }
  public resetSshOpts() {
    this._sshOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshOptsInput() {
    return this._sshOpts;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // registry_auth - computed: false, optional: true, required: false
  private _registryAuth?: DockerProviderRegistryAuth[] | cdktf.IResolvable; 
  public get registryAuth() {
    return this._registryAuth;
  }
  public set registryAuth(value: DockerProviderRegistryAuth[] | cdktf.IResolvable | undefined) {
    this._registryAuth = value;
  }
  public resetRegistryAuth() {
    this._registryAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryAuthInput() {
    return this._registryAuth;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_material: cdktf.stringToTerraform(this._caMaterial),
      cert_material: cdktf.stringToTerraform(this._certMaterial),
      cert_path: cdktf.stringToTerraform(this._certPath),
      context: cdktf.stringToTerraform(this._context),
      disable_docker_daemon_check: cdktf.booleanToTerraform(this._disableDockerDaemonCheck),
      host: cdktf.stringToTerraform(this._host),
      key_material: cdktf.stringToTerraform(this._keyMaterial),
      ssh_opts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshOpts),
      alias: cdktf.stringToTerraform(this._alias),
      registry_auth: cdktf.listMapper(dockerProviderRegistryAuthToTerraform, true)(this._registryAuth),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_material: {
        value: cdktf.stringToHclTerraform(this._caMaterial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_material: {
        value: cdktf.stringToHclTerraform(this._certMaterial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_path: {
        value: cdktf.stringToHclTerraform(this._certPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context: {
        value: cdktf.stringToHclTerraform(this._context),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_docker_daemon_check: {
        value: cdktf.booleanToHclTerraform(this._disableDockerDaemonCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_material: {
        value: cdktf.stringToHclTerraform(this._keyMaterial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_opts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshOpts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_auth: {
        value: cdktf.listMapperHcl(dockerProviderRegistryAuthToHclTerraform, true)(this._registryAuth),
        isBlock: true,
        type: "set",
        storageClassType: "DockerProviderRegistryAuthList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
