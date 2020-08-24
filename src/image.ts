// https://www.terraform.io/docs/providers/docker/r/image.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ImageConfig extends TerraformMetaArguments {
  readonly keepLocally?: boolean;
  readonly name: string;
  readonly pullTrigger?: string;
  readonly pullTriggers?: string[];
}

// Resource

export class Image extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // keep_locally - computed: false, optional: true, required: false
  private _keepLocally?: boolean;
  public get keepLocally() {
    return this._keepLocally;
  }
  public set keepLocally(value: boolean | undefined) {
    this._keepLocally = value;
  }

  // latest - computed: true, optional: false, required: true
  public get latest() {
    return this.getStringAttribute('latest');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // pull_trigger - computed: false, optional: true, required: false
  private _pullTrigger?: string;
  public get pullTrigger() {
    return this._pullTrigger;
  }
  public set pullTrigger(value: string | undefined) {
    this._pullTrigger = value;
  }

  // pull_triggers - computed: false, optional: true, required: false
  private _pullTriggers?: string[];
  public get pullTriggers() {
    return this._pullTriggers;
  }
  public set pullTriggers(value: string[] | undefined) {
    this._pullTriggers = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      keep_locally: this._keepLocally,
      name: this._name,
      pull_trigger: this._pullTrigger,
      pull_triggers: this._pullTriggers,
    };
  }
}
