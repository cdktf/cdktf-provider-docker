/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/tag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TagConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/tag#id Tag#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the source image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/tag#source_image Tag#source_image}
  */
  readonly sourceImage: string;
  /**
  * List of values which cause the tag to be (re)created. This is useful for triggering a new tag when the source image changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/tag#tag_triggers Tag#tag_triggers}
  */
  readonly tagTriggers?: string[];
  /**
  * Name of the target image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/tag#target_image Tag#target_image}
  */
  readonly targetImage: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/tag docker_tag}
*/
export class Tag extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "docker_tag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Tag resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Tag to import
  * @param importFromId The id of the existing Tag that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/tag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Tag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_tag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/tag docker_tag} Resource
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
        providerVersion: '3.6.2',
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
    this._tagTriggers = config.tagTriggers;
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

  // tag_triggers - computed: false, optional: true, required: false
  private _tagTriggers?: string[]; 
  public get tagTriggers() {
    return cdktf.Fn.tolist(this.getListAttribute('tag_triggers'));
  }
  public set tagTriggers(value: string[]) {
    this._tagTriggers = value;
  }
  public resetTagTriggers() {
    this._tagTriggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagTriggersInput() {
    return this._tagTriggers;
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
      tag_triggers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagTriggers),
      target_image: cdktf.stringToTerraform(this._targetImage),
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
      source_image: {
        value: cdktf.stringToHclTerraform(this._sourceImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_triggers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagTriggers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target_image: {
        value: cdktf.stringToHclTerraform(this._targetImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
