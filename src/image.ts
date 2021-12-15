// https://www.terraform.io/docs/providers/docker/r/image.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, then the image is removed forcibly when the resource is destroyed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#force_remove Image#force_remove}
  */
  readonly forceRemove?: boolean | cdktf.IResolvable;
  /**
  * If true, then the Docker image won't be deleted on destroy operation. If this is false, it will delete the image from the docker local storage on destroy operation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#keep_locally Image#keep_locally}
  */
  readonly keepLocally?: boolean | cdktf.IResolvable;
  /**
  * The name of the Docker image, including any tags or SHA256 repo digests.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#name Image#name}
  */
  readonly name: string;
  /**
  * A value which cause an image pull when changed
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#pull_trigger Image#pull_trigger}
  */
  readonly pullTrigger?: string;
  /**
  * List of values which cause an image pull when changed. This is used to store the image digest from the registry when using the [docker_registry_image](../data-sources/registry_image.md).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#pull_triggers Image#pull_triggers}
  */
  readonly pullTriggers?: string[];
  /**
  * build block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#build Image#build}
  */
  readonly buildAttribute?: ImageBuild;
}
export interface ImageBuild {
  /**
  * Set build-time variables
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#build_arg Image#build_arg}
  */
  readonly buildArg?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Name of the Dockerfile. Defaults to `Dockerfile`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#dockerfile Image#dockerfile}
  */
  readonly dockerfile?: string;
  /**
  * Always remove intermediate containers
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#force_remove Image#force_remove}
  */
  readonly forceRemove?: boolean | cdktf.IResolvable;
  /**
  * Set metadata for an image
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#label Image#label}
  */
  readonly label?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Do not use cache when building the image
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#no_cache Image#no_cache}
  */
  readonly noCache?: boolean | cdktf.IResolvable;
  /**
  * Context path
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#path Image#path}
  */
  readonly path: string;
  /**
  * Remove intermediate containers after a successful build. Defaults to  `true`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#remove Image#remove}
  */
  readonly remove?: boolean | cdktf.IResolvable;
  /**
  * Name and optionally a tag in the 'name:tag' format
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#tag Image#tag}
  */
  readonly tag?: string[];
  /**
  * Set the target build stage to build
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#target Image#target}
  */
  readonly target?: string;
}

export function imageBuildToTerraform(struct?: ImageBuildOutputReference | ImageBuild): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_arg: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.buildArg),
    dockerfile: cdktf.stringToTerraform(struct!.dockerfile),
    force_remove: cdktf.booleanToTerraform(struct!.forceRemove),
    label: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.label),
    no_cache: cdktf.booleanToTerraform(struct!.noCache),
    path: cdktf.stringToTerraform(struct!.path),
    remove: cdktf.booleanToTerraform(struct!.remove),
    tag: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tag),
    target: cdktf.stringToTerraform(struct!.target),
  }
}

export class ImageBuildOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ImageBuild | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildArg !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildArg = this._buildArg;
    }
    if (this._dockerfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerfile = this._dockerfile;
    }
    if (this._forceRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceRemove = this._forceRemove;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._noCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCache = this._noCache;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageBuild | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._buildArg = undefined;
      this._dockerfile = undefined;
      this._forceRemove = undefined;
      this._label = undefined;
      this._noCache = undefined;
      this._path = undefined;
      this._remove = undefined;
      this._tag = undefined;
      this._target = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._buildArg = value.buildArg;
      this._dockerfile = value.dockerfile;
      this._forceRemove = value.forceRemove;
      this._label = value.label;
      this._noCache = value.noCache;
      this._path = value.path;
      this._remove = value.remove;
      this._tag = value.tag;
      this._target = value.target;
    }
  }

  // build_arg - computed: false, optional: true, required: false
  private _buildArg?: { [key: string]: string } | cdktf.IResolvable; 
  public get buildArg() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('build_arg') as any;
  }
  public set buildArg(value: { [key: string]: string } | cdktf.IResolvable) {
    this._buildArg = value;
  }
  public resetBuildArg() {
    this._buildArg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildArgInput() {
    return this._buildArg;
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

  // force_remove - computed: false, optional: true, required: false
  private _forceRemove?: boolean | cdktf.IResolvable; 
  public get forceRemove() {
    return this.getBooleanAttribute('force_remove') as any;
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

  // label - computed: false, optional: true, required: false
  private _label?: { [key: string]: string } | cdktf.IResolvable; 
  public get label() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('label') as any;
  }
  public set label(value: { [key: string]: string } | cdktf.IResolvable) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // no_cache - computed: false, optional: true, required: false
  private _noCache?: boolean | cdktf.IResolvable; 
  public get noCache() {
    return this.getBooleanAttribute('no_cache') as any;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // remove - computed: false, optional: true, required: false
  private _remove?: boolean | cdktf.IResolvable; 
  public get remove() {
    return this.getBooleanAttribute('remove') as any;
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/docker/r/image.html docker_image}
*/
export class Image extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "docker_image";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/docker/r/image.html docker_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImageConfig
  */
  public constructor(scope: Construct, id: string, config: ImageConfig) {
    super(scope, id, {
      terraformResourceType: 'docker_image',
      terraformGeneratorMetadata: {
        providerName: 'docker'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._forceRemove = config.forceRemove;
    this._keepLocally = config.keepLocally;
    this._name = config.name;
    this._pullTrigger = config.pullTrigger;
    this._pullTriggers = config.pullTriggers;
    this._build.internalValue = config.buildAttribute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // force_remove - computed: false, optional: true, required: false
  private _forceRemove?: boolean | cdktf.IResolvable; 
  public get forceRemove() {
    return this.getBooleanAttribute('force_remove') as any;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keep_locally - computed: false, optional: true, required: false
  private _keepLocally?: boolean | cdktf.IResolvable; 
  public get keepLocally() {
    return this.getBooleanAttribute('keep_locally') as any;
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

  // latest - computed: true, optional: false, required: false
  public get latest() {
    return this.getStringAttribute('latest');
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

  // output - computed: true, optional: false, required: false
  public get output() {
    return this.getStringAttribute('output');
  }

  // pull_trigger - computed: false, optional: true, required: false
  private _pullTrigger?: string; 
  public get pullTrigger() {
    return this.getStringAttribute('pull_trigger');
  }
  public set pullTrigger(value: string) {
    this._pullTrigger = value;
  }
  public resetPullTrigger() {
    this._pullTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullTriggerInput() {
    return this._pullTrigger;
  }

  // pull_triggers - computed: false, optional: true, required: false
  private _pullTriggers?: string[]; 
  public get pullTriggers() {
    return this.getListAttribute('pull_triggers');
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

  // build - computed: false, optional: true, required: false
  private _build = new ImageBuildOutputReference(this as any, "build", true);
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      force_remove: cdktf.booleanToTerraform(this._forceRemove),
      keep_locally: cdktf.booleanToTerraform(this._keepLocally),
      name: cdktf.stringToTerraform(this._name),
      pull_trigger: cdktf.stringToTerraform(this._pullTrigger),
      pull_triggers: cdktf.listMapper(cdktf.stringToTerraform)(this._pullTriggers),
      build: imageBuildToTerraform(this._build.internalValue),
    };
  }
}
