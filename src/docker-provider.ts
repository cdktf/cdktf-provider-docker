// https://www.terraform.io/docs/providers/docker/r/docker_provider.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformProvider } from 'cdktf';

// Configuration

export interface DockerProviderConfig {
  /** PEM-encoded content of Docker host CA certificate */
  readonly caMaterial?: string;
  /** PEM-encoded content of Docker client certificate */
  readonly certMaterial?: string;
  /** Path to directory with Docker TLS config */
  readonly certPath?: string;
  /** The Docker daemon address */
  readonly host?: string;
  /** PEM-encoded content of Docker client private key */
  readonly keyMaterial?: string;
  /** Alias name */
  readonly alias?: string;
  /** registry_auth block */
  readonly registryAuth?: DockerProviderRegistryAuth[];
}
export interface DockerProviderRegistryAuth {
  /** Address of the registry */
  readonly address: string;
  /** Path to docker json file for registry auth */
  readonly configFile?: string;
  /** Plain content of the docker json file for registry auth */
  readonly configFileContent?: string;
  /** Password for the registry */
  readonly password?: string;
  /** Username for the registry */
  readonly username?: string;
}

// Resource

export class DockerProvider extends TerraformProvider {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DockerProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'docker',
      terraformGeneratorMetadata: {
        providerName: 'docker',
        providerVersionConstraint: '~> 2.0'
      },
      terraformProviderSource: 'terraform-providers/docker'
    });
    this._caMaterial = config.caMaterial;
    this._certMaterial = config.certMaterial;
    this._certPath = config.certPath;
    this._host = config.host;
    this._keyMaterial = config.keyMaterial;
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

  // cert_material - computed: false, optional: true, required: false
  private _certMaterial?: string;
  public get certMaterial() {
    return this._certMaterial;
  }
  public set certMaterial(value: string | undefined) {
    this._certMaterial = value;
  }

  // cert_path - computed: false, optional: true, required: false
  private _certPath?: string;
  public get certPath() {
    return this._certPath;
  }
  public set certPath(value: string | undefined) {
    this._certPath = value;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string;
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }

  // key_material - computed: false, optional: true, required: false
  private _keyMaterial?: string;
  public get keyMaterial() {
    return this._keyMaterial;
  }
  public set keyMaterial(value: string | undefined) {
    this._keyMaterial = value;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string;
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }

  // registry_auth - computed: false, optional: true, required: false
  private _registryAuth?: DockerProviderRegistryAuth[];
  public get registryAuth() {
    return this._registryAuth;
  }
  public set registryAuth(value: DockerProviderRegistryAuth[] | undefined) {
    this._registryAuth = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_material: this._caMaterial,
      cert_material: this._certMaterial,
      cert_path: this._certPath,
      host: this._host,
      key_material: this._keyMaterial,
      alias: this._alias,
      registry_auth: this._registryAuth,
    };
  }
}
