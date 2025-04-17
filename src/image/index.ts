/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, then the image is removed forcibly when the resource is destroyed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#force_remove Image#force_remove}
  */
  readonly forceRemove?: boolean | cdktf.IResolvable;
  /**
  * If true, then the Docker image won't be deleted on destroy operation. If this is false, it will delete the image from the docker local storage on destroy operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#keep_locally Image#keep_locally}
  */
  readonly keepLocally?: boolean | cdktf.IResolvable;
  /**
  * The name of the Docker image, including any tags or SHA256 repo digests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#name Image#name}
  */
  readonly name: string;
  /**
  * The platform to use when pulling the image. Defaults to the platform of the current machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#platform Image#platform}
  */
  readonly platform?: string;
  /**
  * List of values which cause an image pull when changed. This is used to store the image digest from the registry when using the [docker_registry_image](../data-sources/registry_image.md).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#pull_triggers Image#pull_triggers}
  */
  readonly pullTriggers?: string[];
  /**
  * A map of arbitrary strings that, when changed, will force the `docker_image` resource to be replaced. This can be used to rebuild an image when contents of source code folders change
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#triggers Image#triggers}
  */
  readonly triggers?: { [key: string]: string };
  /**
  * build block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#build Image#build}
  */
  readonly buildAttribute?: ImageBuild;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#timeouts Image#timeouts}
  */
  readonly timeouts?: ImageTimeouts;
}
export interface ImageBuildAuthConfig {
  /**
  * the auth token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#auth Image#auth}
  */
  readonly auth?: string;
  /**
  * the user emal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#email Image#email}
  */
  readonly email?: string;
  /**
  * hostname of the registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#host_name Image#host_name}
  */
  readonly hostName: string;
  /**
  * the identity token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#identity_token Image#identity_token}
  */
  readonly identityToken?: string;
  /**
  * the registry password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#password Image#password}
  */
  readonly password?: string;
  /**
  * the registry token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#registry_token Image#registry_token}
  */
  readonly registryToken?: string;
  /**
  * the server address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#server_address Image#server_address}
  */
  readonly serverAddress?: string;
  /**
  * the registry user name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#user_name Image#user_name}
  */
  readonly userName?: string;
}

export function imageBuildAuthConfigToTerraform(struct?: ImageBuildAuthConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: cdktf.stringToTerraform(struct!.auth),
    email: cdktf.stringToTerraform(struct!.email),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    identity_token: cdktf.stringToTerraform(struct!.identityToken),
    password: cdktf.stringToTerraform(struct!.password),
    registry_token: cdktf.stringToTerraform(struct!.registryToken),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function imageBuildAuthConfigToHclTerraform(struct?: ImageBuildAuthConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: cdktf.stringToHclTerraform(struct!.auth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_token: {
      value: cdktf.stringToHclTerraform(struct!.identityToken),
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
    registry_token: {
      value: cdktf.stringToHclTerraform(struct!.registryToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageBuildAuthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ImageBuildAuthConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._identityToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityToken = this._identityToken;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._registryToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryToken = this._registryToken;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageBuildAuthConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth = undefined;
      this._email = undefined;
      this._hostName = undefined;
      this._identityToken = undefined;
      this._password = undefined;
      this._registryToken = undefined;
      this._serverAddress = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth = value.auth;
      this._email = value.email;
      this._hostName = value.hostName;
      this._identityToken = value.identityToken;
      this._password = value.password;
      this._registryToken = value.registryToken;
      this._serverAddress = value.serverAddress;
      this._userName = value.userName;
    }
  }

  // auth - computed: false, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // identity_token - computed: false, optional: true, required: false
  private _identityToken?: string; 
  public get identityToken() {
    return this.getStringAttribute('identity_token');
  }
  public set identityToken(value: string) {
    this._identityToken = value;
  }
  public resetIdentityToken() {
    this._identityToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTokenInput() {
    return this._identityToken;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // registry_token - computed: false, optional: true, required: false
  private _registryToken?: string; 
  public get registryToken() {
    return this.getStringAttribute('registry_token');
  }
  public set registryToken(value: string) {
    this._registryToken = value;
  }
  public resetRegistryToken() {
    this._registryToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryTokenInput() {
    return this._registryToken;
  }

  // server_address - computed: false, optional: true, required: false
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  public resetServerAddress() {
    this._serverAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

export class ImageBuildAuthConfigList extends cdktf.ComplexList {
  public internalValue? : ImageBuildAuthConfig[] | cdktf.IResolvable

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
  public get(index: number): ImageBuildAuthConfigOutputReference {
    return new ImageBuildAuthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImageBuildSecrets {
  /**
  * Environment variable source of the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#env Image#env}
  */
  readonly env?: string;
  /**
  * ID of the secret. By default, secrets are mounted to /run/secrets/<id>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#id Image#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * File source of the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#src Image#src}
  */
  readonly src?: string;
}

export function imageBuildSecretsToTerraform(struct?: ImageBuildSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.stringToTerraform(struct!.env),
    id: cdktf.stringToTerraform(struct!.id),
    src: cdktf.stringToTerraform(struct!.src),
  }
}


export function imageBuildSecretsToHclTerraform(struct?: ImageBuildSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: cdktf.stringToHclTerraform(struct!.env),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src: {
      value: cdktf.stringToHclTerraform(struct!.src),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageBuildSecretsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ImageBuildSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._src !== undefined) {
      hasAnyValues = true;
      internalValueResult.src = this._src;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageBuildSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env = undefined;
      this._id = undefined;
      this._src = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env = value.env;
      this._id = value.id;
      this._src = value.src;
    }
  }

  // env - computed: false, optional: true, required: false
  private _env?: string; 
  public get env() {
    return this.getStringAttribute('env');
  }
  public set env(value: string) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // src - computed: false, optional: true, required: false
  private _src?: string; 
  public get src() {
    return this.getStringAttribute('src');
  }
  public set src(value: string) {
    this._src = value;
  }
  public resetSrc() {
    this._src = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src;
  }
}

export class ImageBuildSecretsList extends cdktf.ComplexList {
  public internalValue? : ImageBuildSecrets[] | cdktf.IResolvable

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
  public get(index: number): ImageBuildSecretsOutputReference {
    return new ImageBuildSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImageBuildUlimit {
  /**
  * soft limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#hard Image#hard}
  */
  readonly hard: number;
  /**
  * type of ulimit, e.g. `nofile`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#name Image#name}
  */
  readonly name: string;
  /**
  * hard limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#soft Image#soft}
  */
  readonly soft: number;
}

export function imageBuildUlimitToTerraform(struct?: ImageBuildUlimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hard: cdktf.numberToTerraform(struct!.hard),
    name: cdktf.stringToTerraform(struct!.name),
    soft: cdktf.numberToTerraform(struct!.soft),
  }
}


export function imageBuildUlimitToHclTerraform(struct?: ImageBuildUlimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hard: {
      value: cdktf.numberToHclTerraform(struct!.hard),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    soft: {
      value: cdktf.numberToHclTerraform(struct!.soft),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageBuildUlimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ImageBuildUlimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hard !== undefined) {
      hasAnyValues = true;
      internalValueResult.hard = this._hard;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._soft !== undefined) {
      hasAnyValues = true;
      internalValueResult.soft = this._soft;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageBuildUlimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hard = undefined;
      this._name = undefined;
      this._soft = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hard = value.hard;
      this._name = value.name;
      this._soft = value.soft;
    }
  }

  // hard - computed: false, optional: false, required: true
  private _hard?: number; 
  public get hard() {
    return this.getNumberAttribute('hard');
  }
  public set hard(value: number) {
    this._hard = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hardInput() {
    return this._hard;
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

  // soft - computed: false, optional: false, required: true
  private _soft?: number; 
  public get soft() {
    return this.getNumberAttribute('soft');
  }
  public set soft(value: number) {
    this._soft = value;
  }
  // Temporarily expose input value. Use with caution.
  public get softInput() {
    return this._soft;
  }
}

export class ImageBuildUlimitList extends cdktf.ComplexList {
  public internalValue? : ImageBuildUlimit[] | cdktf.IResolvable

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
  public get(index: number): ImageBuildUlimitOutputReference {
    return new ImageBuildUlimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImageBuild {
  /**
  * Pairs for build-time variables in the form of `ENDPOINT : "https://example.com"`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#build_args Image#build_args}
  */
  readonly buildArgs?: { [key: string]: string };
  /**
  * BuildID is an optional identifier that can be passed together with the build request. The same identifier can be used to gracefully cancel the build with the cancel request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#build_id Image#build_id}
  */
  readonly buildId?: string;
  /**
  * Images to consider as cache sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#cache_from Image#cache_from}
  */
  readonly cacheFrom?: string[];
  /**
  * Optional parent cgroup for the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#cgroup_parent Image#cgroup_parent}
  */
  readonly cgroupParent?: string;
  /**
  * Value to specify the build context. Currently, only a `PATH` context is supported. You can use the helper function '${path.cwd}/context-dir'. This always refers to the local working directory, even when building images on remote hosts. Please see https://docs.docker.com/build/building/context/ for more information about build contexts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#context Image#context}
  */
  readonly context: string;
  /**
  * The length of a CPU period in microseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#cpu_period Image#cpu_period}
  */
  readonly cpuPeriod?: number;
  /**
  * Microseconds of CPU time that the container can get in a CPU period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#cpu_quota Image#cpu_quota}
  */
  readonly cpuQuota?: number;
  /**
  * CPUs in which to allow execution (e.g., `0-3`, `0`, `1`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#cpu_set_cpus Image#cpu_set_cpus}
  */
  readonly cpuSetCpus?: string;
  /**
  * MEMs in which to allow execution (`0-3`, `0`, `1`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#cpu_set_mems Image#cpu_set_mems}
  */
  readonly cpuSetMems?: string;
  /**
  * CPU shares (relative weight)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#cpu_shares Image#cpu_shares}
  */
  readonly cpuShares?: number;
  /**
  * Name of the Dockerfile. Defaults to `Dockerfile`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#dockerfile Image#dockerfile}
  */
  readonly dockerfile?: string;
  /**
  * A list of hostnames/IP mappings to add to the container’s /etc/hosts file. Specified in the form ["hostname:IP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#extra_hosts Image#extra_hosts}
  */
  readonly extraHosts?: string[];
  /**
  * Always remove intermediate containers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#force_remove Image#force_remove}
  */
  readonly forceRemove?: boolean | cdktf.IResolvable;
  /**
  * Isolation represents the isolation technology of a container. The supported values are 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#isolation Image#isolation}
  */
  readonly isolation?: string;
  /**
  * Set metadata for an image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#label Image#label}
  */
  readonly label?: { [key: string]: string };
  /**
  * User-defined key/value metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#labels Image#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Set memory limit for build
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#memory Image#memory}
  */
  readonly memory?: number;
  /**
  * Total memory (memory + swap), -1 to enable unlimited swap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#memory_swap Image#memory_swap}
  */
  readonly memorySwap?: number;
  /**
  * Set the networking mode for the RUN instructions during build
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#network_mode Image#network_mode}
  */
  readonly networkMode?: string;
  /**
  * Do not use the cache when building the image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#no_cache Image#no_cache}
  */
  readonly noCache?: boolean | cdktf.IResolvable;
  /**
  * Set platform if server is multi-platform capable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#platform Image#platform}
  */
  readonly platform?: string;
  /**
  * Attempt to pull the image even if an older image exists locally
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#pull_parent Image#pull_parent}
  */
  readonly pullParent?: boolean | cdktf.IResolvable;
  /**
  * A Git repository URI or HTTP/HTTPS context URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#remote_context Image#remote_context}
  */
  readonly remoteContext?: string;
  /**
  * Remove intermediate containers after a successful build. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#remove Image#remove}
  */
  readonly remove?: boolean | cdktf.IResolvable;
  /**
  * The security options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#security_opt Image#security_opt}
  */
  readonly securityOpt?: string[];
  /**
  * Set an ID for the build session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#session_id Image#session_id}
  */
  readonly sessionId?: string;
  /**
  * Size of /dev/shm in bytes. The size must be greater than 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#shm_size Image#shm_size}
  */
  readonly shmSize?: number;
  /**
  * If true the new layers are squashed into a new image with a single new layer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#squash Image#squash}
  */
  readonly squash?: boolean | cdktf.IResolvable;
  /**
  * Suppress the build output and print image ID on success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#suppress_output Image#suppress_output}
  */
  readonly suppressOutput?: boolean | cdktf.IResolvable;
  /**
  * Name and optionally a tag in the 'name:tag' format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#tag Image#tag}
  */
  readonly tag?: string[];
  /**
  * Set the target build stage to build
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#target Image#target}
  */
  readonly target?: string;
  /**
  * Version of the underlying builder to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#version Image#version}
  */
  readonly version?: string;
  /**
  * auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#auth_config Image#auth_config}
  */
  readonly authConfig?: ImageBuildAuthConfig[] | cdktf.IResolvable;
  /**
  * secrets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#secrets Image#secrets}
  */
  readonly secrets?: ImageBuildSecrets[] | cdktf.IResolvable;
  /**
  * ulimit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#ulimit Image#ulimit}
  */
  readonly ulimit?: ImageBuildUlimit[] | cdktf.IResolvable;
}

export function imageBuildToTerraform(struct?: ImageBuildOutputReference | ImageBuild): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.buildArgs),
    build_id: cdktf.stringToTerraform(struct!.buildId),
    cache_from: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cacheFrom),
    cgroup_parent: cdktf.stringToTerraform(struct!.cgroupParent),
    context: cdktf.stringToTerraform(struct!.context),
    cpu_period: cdktf.numberToTerraform(struct!.cpuPeriod),
    cpu_quota: cdktf.numberToTerraform(struct!.cpuQuota),
    cpu_set_cpus: cdktf.stringToTerraform(struct!.cpuSetCpus),
    cpu_set_mems: cdktf.stringToTerraform(struct!.cpuSetMems),
    cpu_shares: cdktf.numberToTerraform(struct!.cpuShares),
    dockerfile: cdktf.stringToTerraform(struct!.dockerfile),
    extra_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraHosts),
    force_remove: cdktf.booleanToTerraform(struct!.forceRemove),
    isolation: cdktf.stringToTerraform(struct!.isolation),
    label: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.label),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    memory: cdktf.numberToTerraform(struct!.memory),
    memory_swap: cdktf.numberToTerraform(struct!.memorySwap),
    network_mode: cdktf.stringToTerraform(struct!.networkMode),
    no_cache: cdktf.booleanToTerraform(struct!.noCache),
    platform: cdktf.stringToTerraform(struct!.platform),
    pull_parent: cdktf.booleanToTerraform(struct!.pullParent),
    remote_context: cdktf.stringToTerraform(struct!.remoteContext),
    remove: cdktf.booleanToTerraform(struct!.remove),
    security_opt: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityOpt),
    session_id: cdktf.stringToTerraform(struct!.sessionId),
    shm_size: cdktf.numberToTerraform(struct!.shmSize),
    squash: cdktf.booleanToTerraform(struct!.squash),
    suppress_output: cdktf.booleanToTerraform(struct!.suppressOutput),
    tag: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tag),
    target: cdktf.stringToTerraform(struct!.target),
    version: cdktf.stringToTerraform(struct!.version),
    auth_config: cdktf.listMapper(imageBuildAuthConfigToTerraform, true)(struct!.authConfig),
    secrets: cdktf.listMapper(imageBuildSecretsToTerraform, true)(struct!.secrets),
    ulimit: cdktf.listMapper(imageBuildUlimitToTerraform, true)(struct!.ulimit),
  }
}


export function imageBuildToHclTerraform(struct?: ImageBuildOutputReference | ImageBuild): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    build_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.buildArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    build_id: {
      value: cdktf.stringToHclTerraform(struct!.buildId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_from: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cacheFrom),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cgroup_parent: {
      value: cdktf.stringToHclTerraform(struct!.cgroupParent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_period: {
      value: cdktf.numberToHclTerraform(struct!.cpuPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_quota: {
      value: cdktf.numberToHclTerraform(struct!.cpuQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_set_cpus: {
      value: cdktf.stringToHclTerraform(struct!.cpuSetCpus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_set_mems: {
      value: cdktf.stringToHclTerraform(struct!.cpuSetMems),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_shares: {
      value: cdktf.numberToHclTerraform(struct!.cpuShares),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dockerfile: {
      value: cdktf.stringToHclTerraform(struct!.dockerfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    force_remove: {
      value: cdktf.booleanToHclTerraform(struct!.forceRemove),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    isolation: {
      value: cdktf.stringToHclTerraform(struct!.isolation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.label),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_swap: {
      value: cdktf.numberToHclTerraform(struct!.memorySwap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_mode: {
      value: cdktf.stringToHclTerraform(struct!.networkMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_cache: {
      value: cdktf.booleanToHclTerraform(struct!.noCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    platform: {
      value: cdktf.stringToHclTerraform(struct!.platform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_parent: {
      value: cdktf.booleanToHclTerraform(struct!.pullParent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remote_context: {
      value: cdktf.stringToHclTerraform(struct!.remoteContext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove: {
      value: cdktf.booleanToHclTerraform(struct!.remove),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_opt: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityOpt),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    session_id: {
      value: cdktf.stringToHclTerraform(struct!.sessionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shm_size: {
      value: cdktf.numberToHclTerraform(struct!.shmSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    squash: {
      value: cdktf.booleanToHclTerraform(struct!.squash),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    suppress_output: {
      value: cdktf.booleanToHclTerraform(struct!.suppressOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tag: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tag),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_config: {
      value: cdktf.listMapperHcl(imageBuildAuthConfigToHclTerraform, true)(struct!.authConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ImageBuildAuthConfigList",
    },
    secrets: {
      value: cdktf.listMapperHcl(imageBuildSecretsToHclTerraform, true)(struct!.secrets),
      isBlock: true,
      type: "list",
      storageClassType: "ImageBuildSecretsList",
    },
    ulimit: {
      value: cdktf.listMapperHcl(imageBuildUlimitToHclTerraform, true)(struct!.ulimit),
      isBlock: true,
      type: "list",
      storageClassType: "ImageBuildUlimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageBuildOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ImageBuild | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildArgs = this._buildArgs;
    }
    if (this._buildId !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildId = this._buildId;
    }
    if (this._cacheFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheFrom = this._cacheFrom;
    }
    if (this._cgroupParent !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgroupParent = this._cgroupParent;
    }
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._cpuPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuPeriod = this._cpuPeriod;
    }
    if (this._cpuQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuQuota = this._cpuQuota;
    }
    if (this._cpuSetCpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuSetCpus = this._cpuSetCpus;
    }
    if (this._cpuSetMems !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuSetMems = this._cpuSetMems;
    }
    if (this._cpuShares !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuShares = this._cpuShares;
    }
    if (this._dockerfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerfile = this._dockerfile;
    }
    if (this._extraHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraHosts = this._extraHosts;
    }
    if (this._forceRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceRemove = this._forceRemove;
    }
    if (this._isolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.isolation = this._isolation;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._memorySwap !== undefined) {
      hasAnyValues = true;
      internalValueResult.memorySwap = this._memorySwap;
    }
    if (this._networkMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkMode = this._networkMode;
    }
    if (this._noCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCache = this._noCache;
    }
    if (this._platform !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform;
    }
    if (this._pullParent !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullParent = this._pullParent;
    }
    if (this._remoteContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteContext = this._remoteContext;
    }
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._securityOpt !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityOpt = this._securityOpt;
    }
    if (this._sessionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionId = this._sessionId;
    }
    if (this._shmSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.shmSize = this._shmSize;
    }
    if (this._squash !== undefined) {
      hasAnyValues = true;
      internalValueResult.squash = this._squash;
    }
    if (this._suppressOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppressOutput = this._suppressOutput;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._authConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authConfig = this._authConfig?.internalValue;
    }
    if (this._secrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets?.internalValue;
    }
    if (this._ulimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ulimit = this._ulimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageBuild | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._buildArgs = undefined;
      this._buildId = undefined;
      this._cacheFrom = undefined;
      this._cgroupParent = undefined;
      this._context = undefined;
      this._cpuPeriod = undefined;
      this._cpuQuota = undefined;
      this._cpuSetCpus = undefined;
      this._cpuSetMems = undefined;
      this._cpuShares = undefined;
      this._dockerfile = undefined;
      this._extraHosts = undefined;
      this._forceRemove = undefined;
      this._isolation = undefined;
      this._label = undefined;
      this._labels = undefined;
      this._memory = undefined;
      this._memorySwap = undefined;
      this._networkMode = undefined;
      this._noCache = undefined;
      this._platform = undefined;
      this._pullParent = undefined;
      this._remoteContext = undefined;
      this._remove = undefined;
      this._securityOpt = undefined;
      this._sessionId = undefined;
      this._shmSize = undefined;
      this._squash = undefined;
      this._suppressOutput = undefined;
      this._tag = undefined;
      this._target = undefined;
      this._version = undefined;
      this._authConfig.internalValue = undefined;
      this._secrets.internalValue = undefined;
      this._ulimit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._buildArgs = value.buildArgs;
      this._buildId = value.buildId;
      this._cacheFrom = value.cacheFrom;
      this._cgroupParent = value.cgroupParent;
      this._context = value.context;
      this._cpuPeriod = value.cpuPeriod;
      this._cpuQuota = value.cpuQuota;
      this._cpuSetCpus = value.cpuSetCpus;
      this._cpuSetMems = value.cpuSetMems;
      this._cpuShares = value.cpuShares;
      this._dockerfile = value.dockerfile;
      this._extraHosts = value.extraHosts;
      this._forceRemove = value.forceRemove;
      this._isolation = value.isolation;
      this._label = value.label;
      this._labels = value.labels;
      this._memory = value.memory;
      this._memorySwap = value.memorySwap;
      this._networkMode = value.networkMode;
      this._noCache = value.noCache;
      this._platform = value.platform;
      this._pullParent = value.pullParent;
      this._remoteContext = value.remoteContext;
      this._remove = value.remove;
      this._securityOpt = value.securityOpt;
      this._sessionId = value.sessionId;
      this._shmSize = value.shmSize;
      this._squash = value.squash;
      this._suppressOutput = value.suppressOutput;
      this._tag = value.tag;
      this._target = value.target;
      this._version = value.version;
      this._authConfig.internalValue = value.authConfig;
      this._secrets.internalValue = value.secrets;
      this._ulimit.internalValue = value.ulimit;
    }
  }

  // build_args - computed: false, optional: true, required: false
  private _buildArgs?: { [key: string]: string }; 
  public get buildArgs() {
    return this.getStringMapAttribute('build_args');
  }
  public set buildArgs(value: { [key: string]: string }) {
    this._buildArgs = value;
  }
  public resetBuildArgs() {
    this._buildArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildArgsInput() {
    return this._buildArgs;
  }

  // build_id - computed: false, optional: true, required: false
  private _buildId?: string; 
  public get buildId() {
    return this.getStringAttribute('build_id');
  }
  public set buildId(value: string) {
    this._buildId = value;
  }
  public resetBuildId() {
    this._buildId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildIdInput() {
    return this._buildId;
  }

  // cache_from - computed: false, optional: true, required: false
  private _cacheFrom?: string[]; 
  public get cacheFrom() {
    return this.getListAttribute('cache_from');
  }
  public set cacheFrom(value: string[]) {
    this._cacheFrom = value;
  }
  public resetCacheFrom() {
    this._cacheFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheFromInput() {
    return this._cacheFrom;
  }

  // cgroup_parent - computed: false, optional: true, required: false
  private _cgroupParent?: string; 
  public get cgroupParent() {
    return this.getStringAttribute('cgroup_parent');
  }
  public set cgroupParent(value: string) {
    this._cgroupParent = value;
  }
  public resetCgroupParent() {
    this._cgroupParent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgroupParentInput() {
    return this._cgroupParent;
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // cpu_period - computed: false, optional: true, required: false
  private _cpuPeriod?: number; 
  public get cpuPeriod() {
    return this.getNumberAttribute('cpu_period');
  }
  public set cpuPeriod(value: number) {
    this._cpuPeriod = value;
  }
  public resetCpuPeriod() {
    this._cpuPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPeriodInput() {
    return this._cpuPeriod;
  }

  // cpu_quota - computed: false, optional: true, required: false
  private _cpuQuota?: number; 
  public get cpuQuota() {
    return this.getNumberAttribute('cpu_quota');
  }
  public set cpuQuota(value: number) {
    this._cpuQuota = value;
  }
  public resetCpuQuota() {
    this._cpuQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuQuotaInput() {
    return this._cpuQuota;
  }

  // cpu_set_cpus - computed: false, optional: true, required: false
  private _cpuSetCpus?: string; 
  public get cpuSetCpus() {
    return this.getStringAttribute('cpu_set_cpus');
  }
  public set cpuSetCpus(value: string) {
    this._cpuSetCpus = value;
  }
  public resetCpuSetCpus() {
    this._cpuSetCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSetCpusInput() {
    return this._cpuSetCpus;
  }

  // cpu_set_mems - computed: false, optional: true, required: false
  private _cpuSetMems?: string; 
  public get cpuSetMems() {
    return this.getStringAttribute('cpu_set_mems');
  }
  public set cpuSetMems(value: string) {
    this._cpuSetMems = value;
  }
  public resetCpuSetMems() {
    this._cpuSetMems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSetMemsInput() {
    return this._cpuSetMems;
  }

  // cpu_shares - computed: false, optional: true, required: false
  private _cpuShares?: number; 
  public get cpuShares() {
    return this.getNumberAttribute('cpu_shares');
  }
  public set cpuShares(value: number) {
    this._cpuShares = value;
  }
  public resetCpuShares() {
    this._cpuShares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSharesInput() {
    return this._cpuShares;
  }

  // dockerfile - computed: false, optional: true, required: false
  private _dockerfile?: string; 
  public get dockerfile() {
    return this.getStringAttribute('dockerfile');
  }
  public set dockerfile(value: string) {
    this._dockerfile = value;
  }
  public resetDockerfile() {
    this._dockerfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerfileInput() {
    return this._dockerfile;
  }

  // extra_hosts - computed: false, optional: true, required: false
  private _extraHosts?: string[]; 
  public get extraHosts() {
    return this.getListAttribute('extra_hosts');
  }
  public set extraHosts(value: string[]) {
    this._extraHosts = value;
  }
  public resetExtraHosts() {
    this._extraHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraHostsInput() {
    return this._extraHosts;
  }

  // force_remove - computed: false, optional: true, required: false
  private _forceRemove?: boolean | cdktf.IResolvable; 
  public get forceRemove() {
    return this.getBooleanAttribute('force_remove');
  }
  public set forceRemove(value: boolean | cdktf.IResolvable) {
    this._forceRemove = value;
  }
  public resetForceRemove() {
    this._forceRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRemoveInput() {
    return this._forceRemove;
  }

  // isolation - computed: false, optional: true, required: false
  private _isolation?: string; 
  public get isolation() {
    return this.getStringAttribute('isolation');
  }
  public set isolation(value: string) {
    this._isolation = value;
  }
  public resetIsolation() {
    this._isolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolationInput() {
    return this._isolation;
  }

  // label - computed: false, optional: true, required: false
  private _label?: { [key: string]: string }; 
  public get label() {
    return this.getStringMapAttribute('label');
  }
  public set label(value: { [key: string]: string }) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // memory_swap - computed: false, optional: true, required: false
  private _memorySwap?: number; 
  public get memorySwap() {
    return this.getNumberAttribute('memory_swap');
  }
  public set memorySwap(value: number) {
    this._memorySwap = value;
  }
  public resetMemorySwap() {
    this._memorySwap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySwapInput() {
    return this._memorySwap;
  }

  // network_mode - computed: false, optional: true, required: false
  private _networkMode?: string; 
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }
  public set networkMode(value: string) {
    this._networkMode = value;
  }
  public resetNetworkMode() {
    this._networkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeInput() {
    return this._networkMode;
  }

  // no_cache - computed: false, optional: true, required: false
  private _noCache?: boolean | cdktf.IResolvable; 
  public get noCache() {
    return this.getBooleanAttribute('no_cache');
  }
  public set noCache(value: boolean | cdktf.IResolvable) {
    this._noCache = value;
  }
  public resetNoCache() {
    this._noCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCacheInput() {
    return this._noCache;
  }

  // platform - computed: false, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // pull_parent - computed: false, optional: true, required: false
  private _pullParent?: boolean | cdktf.IResolvable; 
  public get pullParent() {
    return this.getBooleanAttribute('pull_parent');
  }
  public set pullParent(value: boolean | cdktf.IResolvable) {
    this._pullParent = value;
  }
  public resetPullParent() {
    this._pullParent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullParentInput() {
    return this._pullParent;
  }

  // remote_context - computed: false, optional: true, required: false
  private _remoteContext?: string; 
  public get remoteContext() {
    return this.getStringAttribute('remote_context');
  }
  public set remoteContext(value: string) {
    this._remoteContext = value;
  }
  public resetRemoteContext() {
    this._remoteContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteContextInput() {
    return this._remoteContext;
  }

  // remove - computed: false, optional: true, required: false
  private _remove?: boolean | cdktf.IResolvable; 
  public get remove() {
    return this.getBooleanAttribute('remove');
  }
  public set remove(value: boolean | cdktf.IResolvable) {
    this._remove = value;
  }
  public resetRemove() {
    this._remove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove;
  }

  // security_opt - computed: false, optional: true, required: false
  private _securityOpt?: string[]; 
  public get securityOpt() {
    return this.getListAttribute('security_opt');
  }
  public set securityOpt(value: string[]) {
    this._securityOpt = value;
  }
  public resetSecurityOpt() {
    this._securityOpt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityOptInput() {
    return this._securityOpt;
  }

  // session_id - computed: false, optional: true, required: false
  private _sessionId?: string; 
  public get sessionId() {
    return this.getStringAttribute('session_id');
  }
  public set sessionId(value: string) {
    this._sessionId = value;
  }
  public resetSessionId() {
    this._sessionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionIdInput() {
    return this._sessionId;
  }

  // shm_size - computed: false, optional: true, required: false
  private _shmSize?: number; 
  public get shmSize() {
    return this.getNumberAttribute('shm_size');
  }
  public set shmSize(value: number) {
    this._shmSize = value;
  }
  public resetShmSize() {
    this._shmSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shmSizeInput() {
    return this._shmSize;
  }

  // squash - computed: false, optional: true, required: false
  private _squash?: boolean | cdktf.IResolvable; 
  public get squash() {
    return this.getBooleanAttribute('squash');
  }
  public set squash(value: boolean | cdktf.IResolvable) {
    this._squash = value;
  }
  public resetSquash() {
    this._squash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get squashInput() {
    return this._squash;
  }

  // suppress_output - computed: false, optional: true, required: false
  private _suppressOutput?: boolean | cdktf.IResolvable; 
  public get suppressOutput() {
    return this.getBooleanAttribute('suppress_output');
  }
  public set suppressOutput(value: boolean | cdktf.IResolvable) {
    this._suppressOutput = value;
  }
  public resetSuppressOutput() {
    this._suppressOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressOutputInput() {
    return this._suppressOutput;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string[]; 
  public get tag() {
    return this.getListAttribute('tag');
  }
  public set tag(value: string[]) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // auth_config - computed: false, optional: true, required: false
  private _authConfig = new ImageBuildAuthConfigList(this, "auth_config", false);
  public get authConfig() {
    return this._authConfig;
  }
  public putAuthConfig(value: ImageBuildAuthConfig[] | cdktf.IResolvable) {
    this._authConfig.internalValue = value;
  }
  public resetAuthConfig() {
    this._authConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authConfigInput() {
    return this._authConfig.internalValue;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets = new ImageBuildSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: ImageBuildSecrets[] | cdktf.IResolvable) {
    this._secrets.internalValue = value;
  }
  public resetSecrets() {
    this._secrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }

  // ulimit - computed: false, optional: true, required: false
  private _ulimit = new ImageBuildUlimitList(this, "ulimit", false);
  public get ulimit() {
    return this._ulimit;
  }
  public putUlimit(value: ImageBuildUlimit[] | cdktf.IResolvable) {
    this._ulimit.internalValue = value;
  }
  public resetUlimit() {
    this._ulimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ulimitInput() {
    return this._ulimit.internalValue;
  }
}
export interface ImageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#create Image#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#delete Image#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#update Image#update}
  */
  readonly update?: string;
}

export function imageTimeoutsToTerraform(struct?: ImageTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function imageTimeoutsToHclTerraform(struct?: ImageTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImageTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image docker_image}
*/
export class Image extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "docker_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Image resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Image to import
  * @param importFromId The id of the existing Image that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Image to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/image docker_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImageConfig
  */
  public constructor(scope: Construct, id: string, config: ImageConfig) {
    super(scope, id, {
      terraformResourceType: 'docker_image',
      terraformGeneratorMetadata: {
        providerName: 'docker',
        providerVersion: '3.2.0',
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
    this._forceRemove = config.forceRemove;
    this._keepLocally = config.keepLocally;
    this._name = config.name;
    this._platform = config.platform;
    this._pullTriggers = config.pullTriggers;
    this._triggers = config.triggers;
    this._build.internalValue = config.buildAttribute;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // force_remove - computed: false, optional: true, required: false
  private _forceRemove?: boolean | cdktf.IResolvable; 
  public get forceRemove() {
    return this.getBooleanAttribute('force_remove');
  }
  public set forceRemove(value: boolean | cdktf.IResolvable) {
    this._forceRemove = value;
  }
  public resetForceRemove() {
    this._forceRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRemoveInput() {
    return this._forceRemove;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // keep_locally - computed: false, optional: true, required: false
  private _keepLocally?: boolean | cdktf.IResolvable; 
  public get keepLocally() {
    return this.getBooleanAttribute('keep_locally');
  }
  public set keepLocally(value: boolean | cdktf.IResolvable) {
    this._keepLocally = value;
  }
  public resetKeepLocally() {
    this._keepLocally = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepLocallyInput() {
    return this._keepLocally;
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

  // platform - computed: false, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // pull_triggers - computed: false, optional: true, required: false
  private _pullTriggers?: string[]; 
  public get pullTriggers() {
    return cdktf.Fn.tolist(this.getListAttribute('pull_triggers'));
  }
  public set pullTriggers(value: string[]) {
    this._pullTriggers = value;
  }
  public resetPullTriggers() {
    this._pullTriggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullTriggersInput() {
    return this._pullTriggers;
  }

  // repo_digest - computed: true, optional: false, required: false
  public get repoDigest() {
    return this.getStringAttribute('repo_digest');
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers?: { [key: string]: string }; 
  public get triggers() {
    return this.getStringMapAttribute('triggers');
  }
  public set triggers(value: { [key: string]: string }) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
  }

  // build - computed: false, optional: true, required: false
  private _build = new ImageBuildOutputReference(this, "build");
  public get buildAttribute() {
    return this._build;
  }
  public putBuildAttribute(value: ImageBuild) {
    this._build.internalValue = value;
  }
  public resetBuildAttribute() {
    this._build.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildAttributeInput() {
    return this._build.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ImageTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ImageTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      force_remove: cdktf.booleanToTerraform(this._forceRemove),
      keep_locally: cdktf.booleanToTerraform(this._keepLocally),
      name: cdktf.stringToTerraform(this._name),
      platform: cdktf.stringToTerraform(this._platform),
      pull_triggers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pullTriggers),
      triggers: cdktf.hashMapper(cdktf.stringToTerraform)(this._triggers),
      build: imageBuildToTerraform(this._build.internalValue),
      timeouts: imageTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      force_remove: {
        value: cdktf.booleanToHclTerraform(this._forceRemove),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      keep_locally: {
        value: cdktf.booleanToHclTerraform(this._keepLocally),
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
      platform: {
        value: cdktf.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pull_triggers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pullTriggers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      triggers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._triggers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      build: {
        value: imageBuildToHclTerraform(this._build.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ImageBuildList",
      },
      timeouts: {
        value: imageTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ImageTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
