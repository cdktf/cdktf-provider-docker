// https://www.terraform.io/docs/providers/docker/r/image.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#keep_locally Image#keep_locally}
  */
  readonly keepLocally?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#name Image#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#pull_trigger Image#pull_trigger}
  */
  readonly pullTrigger?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/image.html#pull_triggers Image#pull_triggers}
  */
  readonly pullTriggers?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/docker/r/image.html docker_image}
*/
export class Image extends cdktf.TerraformResource {

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
    this._keepLocally = config.keepLocally;
    this._name = config.name;
    this._pullTrigger = config.pullTrigger;
    this._pullTriggers = config.pullTriggers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keep_locally - computed: false, optional: true, required: false
  private _keepLocally?: boolean;
  public get keepLocally() {
    return this.getBooleanAttribute('keep_locally');
  }
  public set keepLocally(value: boolean ) {
    this._keepLocally = value;
  }
  public resetKeepLocally() {
    this._keepLocally = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepLocallyInput() {
    return this._keepLocally
  }

  // latest - computed: true, optional: false, required: false
  public get latest() {
    return this.getStringAttribute('latest');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // pull_trigger - computed: false, optional: true, required: false
  private _pullTrigger?: string;
  public get pullTrigger() {
    return this.getStringAttribute('pull_trigger');
  }
  public set pullTrigger(value: string ) {
    this._pullTrigger = value;
  }
  public resetPullTrigger() {
    this._pullTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullTriggerInput() {
    return this._pullTrigger
  }

  // pull_triggers - computed: false, optional: true, required: false
  private _pullTriggers?: string[];
  public get pullTriggers() {
    return this.getListAttribute('pull_triggers');
  }
  public set pullTriggers(value: string[] ) {
    this._pullTriggers = value;
  }
  public resetPullTriggers() {
    this._pullTriggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullTriggersInput() {
    return this._pullTriggers
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      keep_locally: cdktf.booleanToTerraform(this._keepLocally),
      name: cdktf.stringToTerraform(this._name),
      pull_trigger: cdktf.stringToTerraform(this._pullTrigger),
      pull_triggers: cdktf.listMapper(cdktf.stringToTerraform)(this._pullTriggers),
    };
  }
}
