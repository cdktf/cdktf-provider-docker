/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDockerRegistryImageManifestsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#id DataDockerRegistryImageManifests#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#insecure_skip_verify DataDockerRegistryImageManifests#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * The name of the Docker image, including any tags. e.g. `alpine:latest`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#name DataDockerRegistryImageManifests#name}
  */
  readonly name: string;
  /**
  * auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#auth_config DataDockerRegistryImageManifests#auth_config}
  */
  readonly authConfig?: DataDockerRegistryImageManifestsAuthConfig;
}
export interface DataDockerRegistryImageManifestsManifests {
}

export function dataDockerRegistryImageManifestsManifestsToTerraform(struct?: DataDockerRegistryImageManifestsManifests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDockerRegistryImageManifestsManifestsToHclTerraform(struct?: DataDockerRegistryImageManifestsManifests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDockerRegistryImageManifestsManifestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDockerRegistryImageManifestsManifests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDockerRegistryImageManifestsManifests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // architecture - computed: true, optional: false, required: false
  public get architecture() {
    return this.getStringAttribute('architecture');
  }

  // media_type - computed: true, optional: false, required: false
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }

  // os - computed: true, optional: false, required: false
  public get os() {
    return this.getStringAttribute('os');
  }

  // sha256_digest - computed: true, optional: false, required: false
  public get sha256Digest() {
    return this.getStringAttribute('sha256_digest');
  }
}

export class DataDockerRegistryImageManifestsManifestsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDockerRegistryImageManifestsManifestsOutputReference {
    return new DataDockerRegistryImageManifestsManifestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDockerRegistryImageManifestsAuthConfig {
  /**
  * The address of the Docker registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#address DataDockerRegistryImageManifests#address}
  */
  readonly address: string;
  /**
  * The password for the Docker registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#password DataDockerRegistryImageManifests#password}
  */
  readonly password: string;
  /**
  * The username for the Docker registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#username DataDockerRegistryImageManifests#username}
  */
  readonly username: string;
}

export function dataDockerRegistryImageManifestsAuthConfigToTerraform(struct?: DataDockerRegistryImageManifestsAuthConfigOutputReference | DataDockerRegistryImageManifestsAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataDockerRegistryImageManifestsAuthConfigToHclTerraform(struct?: DataDockerRegistryImageManifestsAuthConfigOutputReference | DataDockerRegistryImageManifestsAuthConfig): any {
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

export class DataDockerRegistryImageManifestsAuthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDockerRegistryImageManifestsAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDockerRegistryImageManifestsAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests docker_registry_image_manifests}
*/
export class DataDockerRegistryImageManifests extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "docker_registry_image_manifests";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDockerRegistryImageManifests resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDockerRegistryImageManifests to import
  * @param importFromId The id of the existing DataDockerRegistryImageManifests that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDockerRegistryImageManifests to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_registry_image_manifests", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests docker_registry_image_manifests} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDockerRegistryImageManifestsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDockerRegistryImageManifestsConfig) {
    super(scope, id, {
      terraformResourceType: 'docker_registry_image_manifests',
      terraformGeneratorMetadata: {
        providerName: 'docker',
        providerVersion: '3.6.1',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._insecureSkipVerify = config.insecureSkipVerify;
    this._name = config.name;
    this._authConfig.internalValue = config.authConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // manifests - computed: true, optional: false, required: false
  private _manifests = new DataDockerRegistryImageManifestsManifestsList(this, "manifests", true);
  public get manifests() {
    return this._manifests;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // auth_config - computed: false, optional: true, required: false
  private _authConfig = new DataDockerRegistryImageManifestsAuthConfigOutputReference(this, "auth_config");
  public get authConfig() {
    return this._authConfig;
  }
  public putAuthConfig(value: DataDockerRegistryImageManifestsAuthConfig) {
    this._authConfig.internalValue = value;
  }
  public resetAuthConfig() {
    this._authConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authConfigInput() {
    return this._authConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      insecure_skip_verify: cdktf.booleanToTerraform(this._insecureSkipVerify),
      name: cdktf.stringToTerraform(this._name),
      auth_config: dataDockerRegistryImageManifestsAuthConfigToTerraform(this._authConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure_skip_verify: {
        value: cdktf.booleanToHclTerraform(this._insecureSkipVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_config: {
        value: dataDockerRegistryImageManifestsAuthConfigToHclTerraform(this._authConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDockerRegistryImageManifestsAuthConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
