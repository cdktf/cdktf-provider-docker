/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BuildxBuilderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Append a node to builder instead of changing it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#append BuildxBuilder#append}
  */
  readonly append?: boolean | cdktf.IResolvable;
  /**
  * Automatically boot the builder after creation. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#bootstrap BuildxBuilder#bootstrap}
  */
  readonly bootstrap?: boolean | cdktf.IResolvable;
  /**
  * BuildKit daemon config file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#buildkit_config BuildxBuilder#buildkit_config}
  */
  readonly buildkitConfig?: string;
  /**
  * BuildKit flags to set for the builder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#buildkit_flags BuildxBuilder#buildkit_flags}
  */
  readonly buildkitFlags?: string;
  /**
  * The driver to use for the Buildx builder (e.g., docker-container, kubernetes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#driver BuildxBuilder#driver}
  */
  readonly driver?: string;
  /**
  * Additional options for the Buildx driver in the form of `key=value,...`. These options are driver-specific.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#driver_options BuildxBuilder#driver_options}
  */
  readonly driverOptions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#id BuildxBuilder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Buildx builder. IF not specified, a random name will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#name BuildxBuilder#name}
  */
  readonly name?: string;
  /**
  * Create/modify node with given name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#node BuildxBuilder#node}
  */
  readonly nodeAttribute?: string;
  /**
  * Fixed platforms for current node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#platform BuildxBuilder#platform}
  */
  readonly platform?: string[];
  /**
  * Set the current builder instance as the default for the current context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#use BuildxBuilder#use}
  */
  readonly use?: boolean | cdktf.IResolvable;
  /**
  * docker_container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#docker_container BuildxBuilder#docker_container}
  */
  readonly dockerContainer?: BuildxBuilderDockerContainer;
  /**
  * kubernetes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#kubernetes BuildxBuilder#kubernetes}
  */
  readonly kubernetes?: BuildxBuilderKubernetes;
  /**
  * remote block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#remote BuildxBuilder#remote}
  */
  readonly remote?: BuildxBuilderRemote;
}
export interface BuildxBuilderDockerContainer {
  /**
  * Sets the cgroup parent of the container if Docker is using the "cgroupfs" driver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#cgroup_parent BuildxBuilder#cgroup_parent}
  */
  readonly cgroupParent?: string;
  /**
  * Sets the CPU CFS scheduler period for the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#cpu_period BuildxBuilder#cpu_period}
  */
  readonly cpuPeriod?: string;
  /**
  * Imposes a CPU CFS quota on the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#cpu_quota BuildxBuilder#cpu_quota}
  */
  readonly cpuQuota?: string;
  /**
  * Configures CPU shares (relative weight) of the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#cpu_shares BuildxBuilder#cpu_shares}
  */
  readonly cpuShares?: string;
  /**
  * Limits the set of CPU cores the container can use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#cpuset_cpus BuildxBuilder#cpuset_cpus}
  */
  readonly cpusetCpus?: string;
  /**
  * Limits the set of CPU memory nodes the container can use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#cpuset_mems BuildxBuilder#cpuset_mems}
  */
  readonly cpusetMems?: string;
  /**
  * Automatically load images to the Docker Engine image store. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#default_load BuildxBuilder#default_load}
  */
  readonly defaultLoad?: boolean | cdktf.IResolvable;
  /**
  * Sets environment variables in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#env BuildxBuilder#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Sets the BuildKit image to use for the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#image BuildxBuilder#image}
  */
  readonly image?: string;
  /**
  * Sets the amount of memory the container can use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#memory BuildxBuilder#memory}
  */
  readonly memory?: string;
  /**
  * Sets the memory swap limit for the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#memory_swap BuildxBuilder#memory_swap}
  */
  readonly memorySwap?: string;
  /**
  * Sets the network mode for the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#network BuildxBuilder#network}
  */
  readonly network?: string;
  /**
  * Sets the container's restart policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#restart_policy BuildxBuilder#restart_policy}
  */
  readonly restartPolicy?: string;
}

export function buildxBuilderDockerContainerToTerraform(struct?: BuildxBuilderDockerContainerOutputReference | BuildxBuilderDockerContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cgroup_parent: cdktf.stringToTerraform(struct!.cgroupParent),
    cpu_period: cdktf.stringToTerraform(struct!.cpuPeriod),
    cpu_quota: cdktf.stringToTerraform(struct!.cpuQuota),
    cpu_shares: cdktf.stringToTerraform(struct!.cpuShares),
    cpuset_cpus: cdktf.stringToTerraform(struct!.cpusetCpus),
    cpuset_mems: cdktf.stringToTerraform(struct!.cpusetMems),
    default_load: cdktf.booleanToTerraform(struct!.defaultLoad),
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
    image: cdktf.stringToTerraform(struct!.image),
    memory: cdktf.stringToTerraform(struct!.memory),
    memory_swap: cdktf.stringToTerraform(struct!.memorySwap),
    network: cdktf.stringToTerraform(struct!.network),
    restart_policy: cdktf.stringToTerraform(struct!.restartPolicy),
  }
}


export function buildxBuilderDockerContainerToHclTerraform(struct?: BuildxBuilderDockerContainerOutputReference | BuildxBuilderDockerContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cgroup_parent: {
      value: cdktf.stringToHclTerraform(struct!.cgroupParent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_period: {
      value: cdktf.stringToHclTerraform(struct!.cpuPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_quota: {
      value: cdktf.stringToHclTerraform(struct!.cpuQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_shares: {
      value: cdktf.stringToHclTerraform(struct!.cpuShares),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpuset_cpus: {
      value: cdktf.stringToHclTerraform(struct!.cpusetCpus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpuset_mems: {
      value: cdktf.stringToHclTerraform(struct!.cpusetMems),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_load: {
      value: cdktf.booleanToHclTerraform(struct!.defaultLoad),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_swap: {
      value: cdktf.stringToHclTerraform(struct!.memorySwap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restart_policy: {
      value: cdktf.stringToHclTerraform(struct!.restartPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BuildxBuilderDockerContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BuildxBuilderDockerContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cgroupParent !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgroupParent = this._cgroupParent;
    }
    if (this._cpuPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuPeriod = this._cpuPeriod;
    }
    if (this._cpuQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuQuota = this._cpuQuota;
    }
    if (this._cpuShares !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuShares = this._cpuShares;
    }
    if (this._cpusetCpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpusetCpus = this._cpusetCpus;
    }
    if (this._cpusetMems !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpusetMems = this._cpusetMems;
    }
    if (this._defaultLoad !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLoad = this._defaultLoad;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._memorySwap !== undefined) {
      hasAnyValues = true;
      internalValueResult.memorySwap = this._memorySwap;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._restartPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartPolicy = this._restartPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildxBuilderDockerContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cgroupParent = undefined;
      this._cpuPeriod = undefined;
      this._cpuQuota = undefined;
      this._cpuShares = undefined;
      this._cpusetCpus = undefined;
      this._cpusetMems = undefined;
      this._defaultLoad = undefined;
      this._env = undefined;
      this._image = undefined;
      this._memory = undefined;
      this._memorySwap = undefined;
      this._network = undefined;
      this._restartPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cgroupParent = value.cgroupParent;
      this._cpuPeriod = value.cpuPeriod;
      this._cpuQuota = value.cpuQuota;
      this._cpuShares = value.cpuShares;
      this._cpusetCpus = value.cpusetCpus;
      this._cpusetMems = value.cpusetMems;
      this._defaultLoad = value.defaultLoad;
      this._env = value.env;
      this._image = value.image;
      this._memory = value.memory;
      this._memorySwap = value.memorySwap;
      this._network = value.network;
      this._restartPolicy = value.restartPolicy;
    }
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

  // cpu_period - computed: false, optional: true, required: false
  private _cpuPeriod?: string; 
  public get cpuPeriod() {
    return this.getStringAttribute('cpu_period');
  }
  public set cpuPeriod(value: string) {
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
  private _cpuQuota?: string; 
  public get cpuQuota() {
    return this.getStringAttribute('cpu_quota');
  }
  public set cpuQuota(value: string) {
    this._cpuQuota = value;
  }
  public resetCpuQuota() {
    this._cpuQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuQuotaInput() {
    return this._cpuQuota;
  }

  // cpu_shares - computed: false, optional: true, required: false
  private _cpuShares?: string; 
  public get cpuShares() {
    return this.getStringAttribute('cpu_shares');
  }
  public set cpuShares(value: string) {
    this._cpuShares = value;
  }
  public resetCpuShares() {
    this._cpuShares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSharesInput() {
    return this._cpuShares;
  }

  // cpuset_cpus - computed: false, optional: true, required: false
  private _cpusetCpus?: string; 
  public get cpusetCpus() {
    return this.getStringAttribute('cpuset_cpus');
  }
  public set cpusetCpus(value: string) {
    this._cpusetCpus = value;
  }
  public resetCpusetCpus() {
    this._cpusetCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpusetCpusInput() {
    return this._cpusetCpus;
  }

  // cpuset_mems - computed: false, optional: true, required: false
  private _cpusetMems?: string; 
  public get cpusetMems() {
    return this.getStringAttribute('cpuset_mems');
  }
  public set cpusetMems(value: string) {
    this._cpusetMems = value;
  }
  public resetCpusetMems() {
    this._cpusetMems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpusetMemsInput() {
    return this._cpusetMems;
  }

  // default_load - computed: false, optional: true, required: false
  private _defaultLoad?: boolean | cdktf.IResolvable; 
  public get defaultLoad() {
    return this.getBooleanAttribute('default_load');
  }
  public set defaultLoad(value: boolean | cdktf.IResolvable) {
    this._defaultLoad = value;
  }
  public resetDefaultLoad() {
    this._defaultLoad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLoadInput() {
    return this._defaultLoad;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
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
  private _memorySwap?: string; 
  public get memorySwap() {
    return this.getStringAttribute('memory_swap');
  }
  public set memorySwap(value: string) {
    this._memorySwap = value;
  }
  public resetMemorySwap() {
    this._memorySwap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySwapInput() {
    return this._memorySwap;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // restart_policy - computed: false, optional: true, required: false
  private _restartPolicy?: string; 
  public get restartPolicy() {
    return this.getStringAttribute('restart_policy');
  }
  public set restartPolicy(value: string) {
    this._restartPolicy = value;
  }
  public resetRestartPolicy() {
    this._restartPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartPolicyInput() {
    return this._restartPolicy;
  }
}
export interface BuildxBuilderKubernetesLimits {
  /**
  * CPU limit for the Kubernetes pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#cpu BuildxBuilder#cpu}
  */
  readonly cpu?: string;
  /**
  * Ephemeral storage limit for the Kubernetes pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#ephemeral_storage BuildxBuilder#ephemeral_storage}
  */
  readonly ephemeralStorage?: string;
  /**
  * Memory limit for the Kubernetes pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#memory BuildxBuilder#memory}
  */
  readonly memory?: string;
}

export function buildxBuilderKubernetesLimitsToTerraform(struct?: BuildxBuilderKubernetesLimitsOutputReference | BuildxBuilderKubernetesLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    ephemeral_storage: cdktf.stringToTerraform(struct!.ephemeralStorage),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function buildxBuilderKubernetesLimitsToHclTerraform(struct?: BuildxBuilderKubernetesLimitsOutputReference | BuildxBuilderKubernetesLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ephemeral_storage: {
      value: cdktf.stringToHclTerraform(struct!.ephemeralStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BuildxBuilderKubernetesLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BuildxBuilderKubernetesLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._ephemeralStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralStorage = this._ephemeralStorage;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildxBuilderKubernetesLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._ephemeralStorage = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._ephemeralStorage = value.ephemeralStorage;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // ephemeral_storage - computed: false, optional: true, required: false
  private _ephemeralStorage?: string; 
  public get ephemeralStorage() {
    return this.getStringAttribute('ephemeral_storage');
  }
  public set ephemeralStorage(value: string) {
    this._ephemeralStorage = value;
  }
  public resetEphemeralStorage() {
    this._ephemeralStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageInput() {
    return this._ephemeralStorage;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface BuildxBuilderKubernetesQemu {
  /**
  * Sets the QEMU emulation image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#image BuildxBuilder#image}
  */
  readonly image?: string;
  /**
  * Install QEMU emulation for multi-platform support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#install BuildxBuilder#install}
  */
  readonly install?: boolean | cdktf.IResolvable;
}

export function buildxBuilderKubernetesQemuToTerraform(struct?: BuildxBuilderKubernetesQemuOutputReference | BuildxBuilderKubernetesQemu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    install: cdktf.booleanToTerraform(struct!.install),
  }
}


export function buildxBuilderKubernetesQemuToHclTerraform(struct?: BuildxBuilderKubernetesQemuOutputReference | BuildxBuilderKubernetesQemu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    install: {
      value: cdktf.booleanToHclTerraform(struct!.install),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BuildxBuilderKubernetesQemuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BuildxBuilderKubernetesQemu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._install !== undefined) {
      hasAnyValues = true;
      internalValueResult.install = this._install;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildxBuilderKubernetesQemu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._image = undefined;
      this._install = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._image = value.image;
      this._install = value.install;
    }
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // install - computed: false, optional: true, required: false
  private _install?: boolean | cdktf.IResolvable; 
  public get install() {
    return this.getBooleanAttribute('install');
  }
  public set install(value: boolean | cdktf.IResolvable) {
    this._install = value;
  }
  public resetInstall() {
    this._install = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installInput() {
    return this._install;
  }
}
export interface BuildxBuilderKubernetesRequests {
  /**
  * CPU limit for the Kubernetes pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#cpu BuildxBuilder#cpu}
  */
  readonly cpu?: string;
  /**
  * Ephemeral storage limit for the Kubernetes pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#ephemeral_storage BuildxBuilder#ephemeral_storage}
  */
  readonly ephemeralStorage?: string;
  /**
  * Memory limit for the Kubernetes pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#memory BuildxBuilder#memory}
  */
  readonly memory?: string;
}

export function buildxBuilderKubernetesRequestsToTerraform(struct?: BuildxBuilderKubernetesRequestsOutputReference | BuildxBuilderKubernetesRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    ephemeral_storage: cdktf.stringToTerraform(struct!.ephemeralStorage),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function buildxBuilderKubernetesRequestsToHclTerraform(struct?: BuildxBuilderKubernetesRequestsOutputReference | BuildxBuilderKubernetesRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ephemeral_storage: {
      value: cdktf.stringToHclTerraform(struct!.ephemeralStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BuildxBuilderKubernetesRequestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BuildxBuilderKubernetesRequests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._ephemeralStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralStorage = this._ephemeralStorage;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildxBuilderKubernetesRequests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._ephemeralStorage = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._ephemeralStorage = value.ephemeralStorage;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // ephemeral_storage - computed: false, optional: true, required: false
  private _ephemeralStorage?: string; 
  public get ephemeralStorage() {
    return this.getStringAttribute('ephemeral_storage');
  }
  public set ephemeralStorage(value: string) {
    this._ephemeralStorage = value;
  }
  public resetEphemeralStorage() {
    this._ephemeralStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageInput() {
    return this._ephemeralStorage;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface BuildxBuilderKubernetes {
  /**
  * Sets additional annotations on the deployments and pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#annotations BuildxBuilder#annotations}
  */
  readonly annotations?: string;
  /**
  * Automatically load images to the Docker Engine image store. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#default_load BuildxBuilder#default_load}
  */
  readonly defaultLoad?: boolean | cdktf.IResolvable;
  /**
  * Sets the image to use for running BuildKit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#image BuildxBuilder#image}
  */
  readonly image?: string;
  /**
  * Sets additional labels on the deployments and pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#labels BuildxBuilder#labels}
  */
  readonly labels?: string;
  /**
  * Load-balancing strategy (sticky or random).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#loadbalance BuildxBuilder#loadbalance}
  */
  readonly loadbalance?: string;
  /**
  * Sets the Kubernetes namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#namespace BuildxBuilder#namespace}
  */
  readonly namespace?: string;
  /**
  * Sets the pod's nodeSelector label(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#nodeselector BuildxBuilder#nodeselector}
  */
  readonly nodeselector?: string;
  /**
  * Sets the number of Pod replicas to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#replicas BuildxBuilder#replicas}
  */
  readonly replicas?: number;
  /**
  * Run the container as a non-root user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#rootless BuildxBuilder#rootless}
  */
  readonly rootless?: boolean | cdktf.IResolvable;
  /**
  * Sets the scheduler responsible for scheduling the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#schedulername BuildxBuilder#schedulername}
  */
  readonly schedulername?: string;
  /**
  * Sets the pod's serviceAccountName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#serviceaccount BuildxBuilder#serviceaccount}
  */
  readonly serviceaccount?: string;
  /**
  * Set the timeout limit for pod provisioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#timeout BuildxBuilder#timeout}
  */
  readonly timeout?: string;
  /**
  * Configures the pod's taint toleration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#tolerations BuildxBuilder#tolerations}
  */
  readonly tolerations?: string;
  /**
  * limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#limits BuildxBuilder#limits}
  */
  readonly limits?: BuildxBuilderKubernetesLimits;
  /**
  * qemu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#qemu BuildxBuilder#qemu}
  */
  readonly qemu?: BuildxBuilderKubernetesQemu;
  /**
  * requests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#requests BuildxBuilder#requests}
  */
  readonly requests?: BuildxBuilderKubernetesRequests;
}

export function buildxBuilderKubernetesToTerraform(struct?: BuildxBuilderKubernetesOutputReference | BuildxBuilderKubernetes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.stringToTerraform(struct!.annotations),
    default_load: cdktf.booleanToTerraform(struct!.defaultLoad),
    image: cdktf.stringToTerraform(struct!.image),
    labels: cdktf.stringToTerraform(struct!.labels),
    loadbalance: cdktf.stringToTerraform(struct!.loadbalance),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    nodeselector: cdktf.stringToTerraform(struct!.nodeselector),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    rootless: cdktf.booleanToTerraform(struct!.rootless),
    schedulername: cdktf.stringToTerraform(struct!.schedulername),
    serviceaccount: cdktf.stringToTerraform(struct!.serviceaccount),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    tolerations: cdktf.stringToTerraform(struct!.tolerations),
    limits: buildxBuilderKubernetesLimitsToTerraform(struct!.limits),
    qemu: buildxBuilderKubernetesQemuToTerraform(struct!.qemu),
    requests: buildxBuilderKubernetesRequestsToTerraform(struct!.requests),
  }
}


export function buildxBuilderKubernetesToHclTerraform(struct?: BuildxBuilderKubernetesOutputReference | BuildxBuilderKubernetes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.stringToHclTerraform(struct!.annotations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_load: {
      value: cdktf.booleanToHclTerraform(struct!.defaultLoad),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.stringToHclTerraform(struct!.labels),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loadbalance: {
      value: cdktf.stringToHclTerraform(struct!.loadbalance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodeselector: {
      value: cdktf.stringToHclTerraform(struct!.nodeselector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rootless: {
      value: cdktf.booleanToHclTerraform(struct!.rootless),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schedulername: {
      value: cdktf.stringToHclTerraform(struct!.schedulername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serviceaccount: {
      value: cdktf.stringToHclTerraform(struct!.serviceaccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tolerations: {
      value: cdktf.stringToHclTerraform(struct!.tolerations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limits: {
      value: buildxBuilderKubernetesLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "list",
      storageClassType: "BuildxBuilderKubernetesLimitsList",
    },
    qemu: {
      value: buildxBuilderKubernetesQemuToHclTerraform(struct!.qemu),
      isBlock: true,
      type: "list",
      storageClassType: "BuildxBuilderKubernetesQemuList",
    },
    requests: {
      value: buildxBuilderKubernetesRequestsToHclTerraform(struct!.requests),
      isBlock: true,
      type: "list",
      storageClassType: "BuildxBuilderKubernetesRequestsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BuildxBuilderKubernetesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BuildxBuilderKubernetes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._defaultLoad !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLoad = this._defaultLoad;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._loadbalance !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadbalance = this._loadbalance;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._nodeselector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeselector = this._nodeselector;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._rootless !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootless = this._rootless;
    }
    if (this._schedulername !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulername = this._schedulername;
    }
    if (this._serviceaccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceaccount = this._serviceaccount;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._tolerations !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations;
    }
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    if (this._qemu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qemu = this._qemu?.internalValue;
    }
    if (this._requests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildxBuilderKubernetes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._defaultLoad = undefined;
      this._image = undefined;
      this._labels = undefined;
      this._loadbalance = undefined;
      this._namespace = undefined;
      this._nodeselector = undefined;
      this._replicas = undefined;
      this._rootless = undefined;
      this._schedulername = undefined;
      this._serviceaccount = undefined;
      this._timeout = undefined;
      this._tolerations = undefined;
      this._limits.internalValue = undefined;
      this._qemu.internalValue = undefined;
      this._requests.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._defaultLoad = value.defaultLoad;
      this._image = value.image;
      this._labels = value.labels;
      this._loadbalance = value.loadbalance;
      this._namespace = value.namespace;
      this._nodeselector = value.nodeselector;
      this._replicas = value.replicas;
      this._rootless = value.rootless;
      this._schedulername = value.schedulername;
      this._serviceaccount = value.serviceaccount;
      this._timeout = value.timeout;
      this._tolerations = value.tolerations;
      this._limits.internalValue = value.limits;
      this._qemu.internalValue = value.qemu;
      this._requests.internalValue = value.requests;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: string; 
  public get annotations() {
    return this.getStringAttribute('annotations');
  }
  public set annotations(value: string) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // default_load - computed: false, optional: true, required: false
  private _defaultLoad?: boolean | cdktf.IResolvable; 
  public get defaultLoad() {
    return this.getBooleanAttribute('default_load');
  }
  public set defaultLoad(value: boolean | cdktf.IResolvable) {
    this._defaultLoad = value;
  }
  public resetDefaultLoad() {
    this._defaultLoad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLoadInput() {
    return this._defaultLoad;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string; 
  public get labels() {
    return this.getStringAttribute('labels');
  }
  public set labels(value: string) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // loadbalance - computed: false, optional: true, required: false
  private _loadbalance?: string; 
  public get loadbalance() {
    return this.getStringAttribute('loadbalance');
  }
  public set loadbalance(value: string) {
    this._loadbalance = value;
  }
  public resetLoadbalance() {
    this._loadbalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalanceInput() {
    return this._loadbalance;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // nodeselector - computed: false, optional: true, required: false
  private _nodeselector?: string; 
  public get nodeselector() {
    return this.getStringAttribute('nodeselector');
  }
  public set nodeselector(value: string) {
    this._nodeselector = value;
  }
  public resetNodeselector() {
    this._nodeselector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeselectorInput() {
    return this._nodeselector;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // rootless - computed: false, optional: true, required: false
  private _rootless?: boolean | cdktf.IResolvable; 
  public get rootless() {
    return this.getBooleanAttribute('rootless');
  }
  public set rootless(value: boolean | cdktf.IResolvable) {
    this._rootless = value;
  }
  public resetRootless() {
    this._rootless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootlessInput() {
    return this._rootless;
  }

  // schedulername - computed: false, optional: true, required: false
  private _schedulername?: string; 
  public get schedulername() {
    return this.getStringAttribute('schedulername');
  }
  public set schedulername(value: string) {
    this._schedulername = value;
  }
  public resetSchedulername() {
    this._schedulername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulernameInput() {
    return this._schedulername;
  }

  // serviceaccount - computed: false, optional: true, required: false
  private _serviceaccount?: string; 
  public get serviceaccount() {
    return this.getStringAttribute('serviceaccount');
  }
  public set serviceaccount(value: string) {
    this._serviceaccount = value;
  }
  public resetServiceaccount() {
    this._serviceaccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceaccountInput() {
    return this._serviceaccount;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations?: string; 
  public get tolerations() {
    return this.getStringAttribute('tolerations');
  }
  public set tolerations(value: string) {
    this._tolerations = value;
  }
  public resetTolerations() {
    this._tolerations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations;
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new BuildxBuilderKubernetesLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: BuildxBuilderKubernetesLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // qemu - computed: false, optional: true, required: false
  private _qemu = new BuildxBuilderKubernetesQemuOutputReference(this, "qemu");
  public get qemu() {
    return this._qemu;
  }
  public putQemu(value: BuildxBuilderKubernetesQemu) {
    this._qemu.internalValue = value;
  }
  public resetQemu() {
    this._qemu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qemuInput() {
    return this._qemu.internalValue;
  }

  // requests - computed: false, optional: true, required: false
  private _requests = new BuildxBuilderKubernetesRequestsOutputReference(this, "requests");
  public get requests() {
    return this._requests;
  }
  public putRequests(value: BuildxBuilderKubernetesRequests) {
    this._requests.internalValue = value;
  }
  public resetRequests() {
    this._requests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests.internalValue;
  }
}
export interface BuildxBuilderRemote {
  /**
  * Absolute path to the TLS certificate authority used for validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#cacert BuildxBuilder#cacert}
  */
  readonly cacert?: string;
  /**
  * Absolute path to the TLS client certificate to present to buildkitd.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#cert BuildxBuilder#cert}
  */
  readonly cert?: string;
  /**
  * Automatically load images to the Docker Engine image store. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#default_load BuildxBuilder#default_load}
  */
  readonly defaultLoad?: boolean | cdktf.IResolvable;
  /**
  * Sets the TLS client key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#key BuildxBuilder#key}
  */
  readonly key?: string;
  /**
  * TLS server name used in requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#servername BuildxBuilder#servername}
  */
  readonly servername?: string;
}

export function buildxBuilderRemoteToTerraform(struct?: BuildxBuilderRemoteOutputReference | BuildxBuilderRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cacert: cdktf.stringToTerraform(struct!.cacert),
    cert: cdktf.stringToTerraform(struct!.cert),
    default_load: cdktf.booleanToTerraform(struct!.defaultLoad),
    key: cdktf.stringToTerraform(struct!.key),
    servername: cdktf.stringToTerraform(struct!.servername),
  }
}


export function buildxBuilderRemoteToHclTerraform(struct?: BuildxBuilderRemoteOutputReference | BuildxBuilderRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cacert: {
      value: cdktf.stringToHclTerraform(struct!.cacert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_load: {
      value: cdktf.booleanToHclTerraform(struct!.defaultLoad),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servername: {
      value: cdktf.stringToHclTerraform(struct!.servername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BuildxBuilderRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BuildxBuilderRemote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacert = this._cacert;
    }
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._defaultLoad !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLoad = this._defaultLoad;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._servername !== undefined) {
      hasAnyValues = true;
      internalValueResult.servername = this._servername;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildxBuilderRemote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacert = undefined;
      this._cert = undefined;
      this._defaultLoad = undefined;
      this._key = undefined;
      this._servername = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacert = value.cacert;
      this._cert = value.cert;
      this._defaultLoad = value.defaultLoad;
      this._key = value.key;
      this._servername = value.servername;
    }
  }

  // cacert - computed: false, optional: true, required: false
  private _cacert?: string; 
  public get cacert() {
    return this.getStringAttribute('cacert');
  }
  public set cacert(value: string) {
    this._cacert = value;
  }
  public resetCacert() {
    this._cacert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertInput() {
    return this._cacert;
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // default_load - computed: false, optional: true, required: false
  private _defaultLoad?: boolean | cdktf.IResolvable; 
  public get defaultLoad() {
    return this.getBooleanAttribute('default_load');
  }
  public set defaultLoad(value: boolean | cdktf.IResolvable) {
    this._defaultLoad = value;
  }
  public resetDefaultLoad() {
    this._defaultLoad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLoadInput() {
    return this._defaultLoad;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // servername - computed: false, optional: true, required: false
  private _servername?: string; 
  public get servername() {
    return this.getStringAttribute('servername');
  }
  public set servername(value: string) {
    this._servername = value;
  }
  public resetServername() {
    this._servername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servernameInput() {
    return this._servername;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder docker_buildx_builder}
*/
export class BuildxBuilder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "docker_buildx_builder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BuildxBuilder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BuildxBuilder to import
  * @param importFromId The id of the existing BuildxBuilder that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BuildxBuilder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_buildx_builder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder docker_buildx_builder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BuildxBuilderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BuildxBuilderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'docker_buildx_builder',
      terraformGeneratorMetadata: {
        providerName: 'docker',
        providerVersion: '3.6.0',
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
    this._append = config.append;
    this._bootstrap = config.bootstrap;
    this._buildkitConfig = config.buildkitConfig;
    this._buildkitFlags = config.buildkitFlags;
    this._driver = config.driver;
    this._driverOptions = config.driverOptions;
    this._id = config.id;
    this._name = config.name;
    this._node = config.nodeAttribute;
    this._platform = config.platform;
    this._use = config.use;
    this._dockerContainer.internalValue = config.dockerContainer;
    this._kubernetes.internalValue = config.kubernetes;
    this._remote.internalValue = config.remote;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // append - computed: false, optional: true, required: false
  private _append?: boolean | cdktf.IResolvable; 
  public get append() {
    return this.getBooleanAttribute('append');
  }
  public set append(value: boolean | cdktf.IResolvable) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
  }

  // bootstrap - computed: false, optional: true, required: false
  private _bootstrap?: boolean | cdktf.IResolvable; 
  public get bootstrap() {
    return this.getBooleanAttribute('bootstrap');
  }
  public set bootstrap(value: boolean | cdktf.IResolvable) {
    this._bootstrap = value;
  }
  public resetBootstrap() {
    this._bootstrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapInput() {
    return this._bootstrap;
  }

  // buildkit_config - computed: false, optional: true, required: false
  private _buildkitConfig?: string; 
  public get buildkitConfig() {
    return this.getStringAttribute('buildkit_config');
  }
  public set buildkitConfig(value: string) {
    this._buildkitConfig = value;
  }
  public resetBuildkitConfig() {
    this._buildkitConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildkitConfigInput() {
    return this._buildkitConfig;
  }

  // buildkit_flags - computed: false, optional: true, required: false
  private _buildkitFlags?: string; 
  public get buildkitFlags() {
    return this.getStringAttribute('buildkit_flags');
  }
  public set buildkitFlags(value: string) {
    this._buildkitFlags = value;
  }
  public resetBuildkitFlags() {
    this._buildkitFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildkitFlagsInput() {
    return this._buildkitFlags;
  }

  // driver - computed: false, optional: true, required: false
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  public resetDriver() {
    this._driver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // driver_options - computed: false, optional: true, required: false
  private _driverOptions?: { [key: string]: string }; 
  public get driverOptions() {
    return this.getStringMapAttribute('driver_options');
  }
  public set driverOptions(value: { [key: string]: string }) {
    this._driverOptions = value;
  }
  public resetDriverOptions() {
    this._driverOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverOptionsInput() {
    return this._driverOptions;
  }

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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // node - computed: false, optional: true, required: false
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // platform - computed: false, optional: true, required: false
  private _platform?: string[]; 
  public get platform() {
    return this.getListAttribute('platform');
  }
  public set platform(value: string[]) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // use - computed: false, optional: true, required: false
  private _use?: boolean | cdktf.IResolvable; 
  public get use() {
    return this.getBooleanAttribute('use');
  }
  public set use(value: boolean | cdktf.IResolvable) {
    this._use = value;
  }
  public resetUse() {
    this._use = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInput() {
    return this._use;
  }

  // docker_container - computed: false, optional: true, required: false
  private _dockerContainer = new BuildxBuilderDockerContainerOutputReference(this, "docker_container");
  public get dockerContainer() {
    return this._dockerContainer;
  }
  public putDockerContainer(value: BuildxBuilderDockerContainer) {
    this._dockerContainer.internalValue = value;
  }
  public resetDockerContainer() {
    this._dockerContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerContainerInput() {
    return this._dockerContainer.internalValue;
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes = new BuildxBuilderKubernetesOutputReference(this, "kubernetes");
  public get kubernetes() {
    return this._kubernetes;
  }
  public putKubernetes(value: BuildxBuilderKubernetes) {
    this._kubernetes.internalValue = value;
  }
  public resetKubernetes() {
    this._kubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes.internalValue;
  }

  // remote - computed: false, optional: true, required: false
  private _remote = new BuildxBuilderRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: BuildxBuilderRemote) {
    this._remote.internalValue = value;
  }
  public resetRemote() {
    this._remote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      append: cdktf.booleanToTerraform(this._append),
      bootstrap: cdktf.booleanToTerraform(this._bootstrap),
      buildkit_config: cdktf.stringToTerraform(this._buildkitConfig),
      buildkit_flags: cdktf.stringToTerraform(this._buildkitFlags),
      driver: cdktf.stringToTerraform(this._driver),
      driver_options: cdktf.hashMapper(cdktf.stringToTerraform)(this._driverOptions),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      node: cdktf.stringToTerraform(this._node),
      platform: cdktf.listMapper(cdktf.stringToTerraform, false)(this._platform),
      use: cdktf.booleanToTerraform(this._use),
      docker_container: buildxBuilderDockerContainerToTerraform(this._dockerContainer.internalValue),
      kubernetes: buildxBuilderKubernetesToTerraform(this._kubernetes.internalValue),
      remote: buildxBuilderRemoteToTerraform(this._remote.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      append: {
        value: cdktf.booleanToHclTerraform(this._append),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bootstrap: {
        value: cdktf.booleanToHclTerraform(this._bootstrap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      buildkit_config: {
        value: cdktf.stringToHclTerraform(this._buildkitConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      buildkit_flags: {
        value: cdktf.stringToHclTerraform(this._buildkitFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      driver: {
        value: cdktf.stringToHclTerraform(this._driver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      driver_options: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._driverOptions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node: {
        value: cdktf.stringToHclTerraform(this._node),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._platform),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      use: {
        value: cdktf.booleanToHclTerraform(this._use),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      docker_container: {
        value: buildxBuilderDockerContainerToHclTerraform(this._dockerContainer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BuildxBuilderDockerContainerList",
      },
      kubernetes: {
        value: buildxBuilderKubernetesToHclTerraform(this._kubernetes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BuildxBuilderKubernetesList",
      },
      remote: {
        value: buildxBuilderRemoteToHclTerraform(this._remote.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BuildxBuilderRemoteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
