// https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DockerProviderConfig {
  /**
  * PEM-encoded content of Docker host CA certificate
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs#ca_material DockerProvider#ca_material}
  */
  readonly caMaterial?: string;
  /**
  * PEM-encoded content of Docker client certificate
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs#cert_material DockerProvider#cert_material}
  */
  readonly certMaterial?: string;
  /**
  * Path to directory with Docker TLS config
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs#cert_path DockerProvider#cert_path}
  */
  readonly certPath?: string;
  /**
  * The Docker daemon address
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs#host DockerProvider#host}
  */
  readonly host?: string;
  /**
  * PEM-encoded content of Docker client private key
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs#key_material DockerProvider#key_material}
  */
  readonly keyMaterial?: string;
  /**
  * Additional SSH option flags to be appended when using `ssh://` protocol
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs#ssh_opts DockerProvider#ssh_opts}
  */
  readonly sshOpts?: string[];
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs#alias DockerProvider#alias}
  */
  readonly alias?: string;
  /**
  * registry_auth block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs#registry_auth DockerProvider#registry_auth}
  */
  readonly registryAuth?: DockerProviderRegistryAuth[] | cdktf.IResolvable;
}
export interface DockerProviderRegistryAuth {
  /**
  * Address of the registry
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs#address DockerProvider#address}
  */
  readonly address: string;
  /**
  * Setting this to `true` will tell the provider that this registry does not need authentication. Due to the docker internals, the provider will use dummy credentials (see https://github.com/kreuzwerker/terraform-provider-docker/issues/470 for more information). Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs#auth_disabled DockerProvider#auth_disabled}
  */
  readonly authDisabled?: boolean | cdktf.IResolvable;
  /**
  * Path to docker json file for registry auth. Defaults to `~/.docker/config.json`. If `DOCKER_CONFIG` is set, the value of `DOCKER_CONFIG` is used as the path. `config_file` has predencen over all other options.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs#config_file DockerProvider#config_file}
  */
  readonly configFile?: string;
  /**
  * Plain content of the docker json file for registry auth. `config_file_content` has precedence over username/password.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs#config_file_content DockerProvider#config_file_content}
  */
  readonly configFileContent?: string;
  /**
  * Password for the registry. Defaults to `DOCKER_REGISTRY_PASS` env variable if set.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs#password DockerProvider#password}
  */
  readonly password?: string;
  /**
  * Username for the registry. Defaults to `DOCKER_REGISTRY_USER` env variable if set.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs#username DockerProvider#username}
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


/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs docker}
*/
export class DockerProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "docker";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs docker} Resource
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
        providerVersion: '3.0.2',
        providerVersionConstraint: '~> 3.0'
      },
      terraformProviderSource: 'kreuzwerker/docker'
    });
    this._caMaterial = config.caMaterial;
    this._certMaterial = config.certMaterial;
    this._certPath = config.certPath;
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
      host: cdktf.stringToTerraform(this._host),
      key_material: cdktf.stringToTerraform(this._keyMaterial),
      ssh_opts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshOpts),
      alias: cdktf.stringToTerraform(this._alias),
      registry_auth: cdktf.listMapper(dockerProviderRegistryAuthToTerraform, true)(this._registryAuth),
    };
  }
}
