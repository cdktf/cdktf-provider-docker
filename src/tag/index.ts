// https://www.terraform.io/docs/providers/docker/r/tag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TagConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/tag#id Tag#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the source image.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/tag#source_image Tag#source_image}
  */
  readonly sourceImage: string;
  /**
  * Name of the target image.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/tag#target_image Tag#target_image}
  */
  readonly targetImage: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/docker/r/tag docker_tag}
*/
export class Tag extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "docker_tag";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/docker/r/tag docker_tag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TagConfig
  */
  public constructor(scope: Construct, id: string, config: TagConfig) {
    super(scope, id, {
      terraformResourceType: 'docker_tag',
      terraformGeneratorMetadata: {
        providerName: 'docker',
        providerVersion: '3.0.2',
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
    this._sourceImage = config.sourceImage;
    this._targetImage = config.targetImage;
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

  // source_image - computed: false, optional: false, required: true
  private _sourceImage?: string; 
  public get sourceImage() {
    return this.getStringAttribute('source_image');
  }
  public set sourceImage(value: string) {
    this._sourceImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceImageInput() {
    return this._sourceImage;
  }

  // source_image_id - computed: true, optional: false, required: false
  public get sourceImageId() {
    return this.getStringAttribute('source_image_id');
  }

  // target_image - computed: false, optional: false, required: true
  private _targetImage?: string; 
  public get targetImage() {
    return this.getStringAttribute('target_image');
  }
  public set targetImage(value: string) {
    this._targetImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetImageInput() {
    return this._targetImage;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      source_image: cdktf.stringToTerraform(this._sourceImage),
      target_image: cdktf.stringToTerraform(this._targetImage),
    };
  }
}
