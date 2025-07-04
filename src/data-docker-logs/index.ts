/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDockerLogsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#details DataDockerLogs#details}
  */
  readonly details?: boolean | cdktf.IResolvable;
  /**
  * Discard headers that docker appends to each log entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#discard_headers DataDockerLogs#discard_headers}
  */
  readonly discardHeaders?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#follow DataDockerLogs#follow}
  */
  readonly follow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#id DataDockerLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If true populate computed value `logs_list_string`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#logs_list_string_enabled DataDockerLogs#logs_list_string_enabled}
  */
  readonly logsListStringEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the Docker Container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#name DataDockerLogs#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#show_stderr DataDockerLogs#show_stderr}
  */
  readonly showStderr?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#show_stdout DataDockerLogs#show_stdout}
  */
  readonly showStdout?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#since DataDockerLogs#since}
  */
  readonly since?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#tail DataDockerLogs#tail}
  */
  readonly tail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#timestamps DataDockerLogs#timestamps}
  */
  readonly timestamps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#until DataDockerLogs#until}
  */
  readonly until?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs docker_logs}
*/
export class DataDockerLogs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "docker_logs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDockerLogs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDockerLogs to import
  * @param importFromId The id of the existing DataDockerLogs that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDockerLogs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_logs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs docker_logs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDockerLogsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDockerLogsConfig) {
    super(scope, id, {
      terraformResourceType: 'docker_logs',
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
    this._details = config.details;
    this._discardHeaders = config.discardHeaders;
    this._follow = config.follow;
    this._id = config.id;
    this._logsListStringEnabled = config.logsListStringEnabled;
    this._name = config.name;
    this._showStderr = config.showStderr;
    this._showStdout = config.showStdout;
    this._since = config.since;
    this._tail = config.tail;
    this._timestamps = config.timestamps;
    this._until = config.until;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // details - computed: false, optional: true, required: false
  private _details?: boolean | cdktf.IResolvable; 
  public get details() {
    return this.getBooleanAttribute('details');
  }
  public set details(value: boolean | cdktf.IResolvable) {
    this._details = value;
  }
  public resetDetails() {
    this._details = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details;
  }

  // discard_headers - computed: false, optional: true, required: false
  private _discardHeaders?: boolean | cdktf.IResolvable; 
  public get discardHeaders() {
    return this.getBooleanAttribute('discard_headers');
  }
  public set discardHeaders(value: boolean | cdktf.IResolvable) {
    this._discardHeaders = value;
  }
  public resetDiscardHeaders() {
    this._discardHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardHeadersInput() {
    return this._discardHeaders;
  }

  // follow - computed: false, optional: true, required: false
  private _follow?: boolean | cdktf.IResolvable; 
  public get follow() {
    return this.getBooleanAttribute('follow');
  }
  public set follow(value: boolean | cdktf.IResolvable) {
    this._follow = value;
  }
  public resetFollow() {
    this._follow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followInput() {
    return this._follow;
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

  // logs_list_string - computed: true, optional: false, required: false
  public get logsListString() {
    return this.getListAttribute('logs_list_string');
  }

  // logs_list_string_enabled - computed: false, optional: true, required: false
  private _logsListStringEnabled?: boolean | cdktf.IResolvable; 
  public get logsListStringEnabled() {
    return this.getBooleanAttribute('logs_list_string_enabled');
  }
  public set logsListStringEnabled(value: boolean | cdktf.IResolvable) {
    this._logsListStringEnabled = value;
  }
  public resetLogsListStringEnabled() {
    this._logsListStringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsListStringEnabledInput() {
    return this._logsListStringEnabled;
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

  // show_stderr - computed: false, optional: true, required: false
  private _showStderr?: boolean | cdktf.IResolvable; 
  public get showStderr() {
    return this.getBooleanAttribute('show_stderr');
  }
  public set showStderr(value: boolean | cdktf.IResolvable) {
    this._showStderr = value;
  }
  public resetShowStderr() {
    this._showStderr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showStderrInput() {
    return this._showStderr;
  }

  // show_stdout - computed: false, optional: true, required: false
  private _showStdout?: boolean | cdktf.IResolvable; 
  public get showStdout() {
    return this.getBooleanAttribute('show_stdout');
  }
  public set showStdout(value: boolean | cdktf.IResolvable) {
    this._showStdout = value;
  }
  public resetShowStdout() {
    this._showStdout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showStdoutInput() {
    return this._showStdout;
  }

  // since - computed: false, optional: true, required: false
  private _since?: string; 
  public get since() {
    return this.getStringAttribute('since');
  }
  public set since(value: string) {
    this._since = value;
  }
  public resetSince() {
    this._since = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sinceInput() {
    return this._since;
  }

  // tail - computed: false, optional: true, required: false
  private _tail?: string; 
  public get tail() {
    return this.getStringAttribute('tail');
  }
  public set tail(value: string) {
    this._tail = value;
  }
  public resetTail() {
    this._tail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tailInput() {
    return this._tail;
  }

  // timestamps - computed: false, optional: true, required: false
  private _timestamps?: boolean | cdktf.IResolvable; 
  public get timestamps() {
    return this.getBooleanAttribute('timestamps');
  }
  public set timestamps(value: boolean | cdktf.IResolvable) {
    this._timestamps = value;
  }
  public resetTimestamps() {
    this._timestamps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampsInput() {
    return this._timestamps;
  }

  // until - computed: false, optional: true, required: false
  private _until?: string; 
  public get until() {
    return this.getStringAttribute('until');
  }
  public set until(value: string) {
    this._until = value;
  }
  public resetUntil() {
    this._until = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untilInput() {
    return this._until;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      details: cdktf.booleanToTerraform(this._details),
      discard_headers: cdktf.booleanToTerraform(this._discardHeaders),
      follow: cdktf.booleanToTerraform(this._follow),
      id: cdktf.stringToTerraform(this._id),
      logs_list_string_enabled: cdktf.booleanToTerraform(this._logsListStringEnabled),
      name: cdktf.stringToTerraform(this._name),
      show_stderr: cdktf.booleanToTerraform(this._showStderr),
      show_stdout: cdktf.booleanToTerraform(this._showStdout),
      since: cdktf.stringToTerraform(this._since),
      tail: cdktf.stringToTerraform(this._tail),
      timestamps: cdktf.booleanToTerraform(this._timestamps),
      until: cdktf.stringToTerraform(this._until),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      details: {
        value: cdktf.booleanToHclTerraform(this._details),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      discard_headers: {
        value: cdktf.booleanToHclTerraform(this._discardHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      follow: {
        value: cdktf.booleanToHclTerraform(this._follow),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logs_list_string_enabled: {
        value: cdktf.booleanToHclTerraform(this._logsListStringEnabled),
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
      show_stderr: {
        value: cdktf.booleanToHclTerraform(this._showStderr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_stdout: {
        value: cdktf.booleanToHclTerraform(this._showStdout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      since: {
        value: cdktf.stringToHclTerraform(this._since),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tail: {
        value: cdktf.stringToHclTerraform(this._tail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timestamps: {
        value: cdktf.booleanToHclTerraform(this._timestamps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      until: {
        value: cdktf.stringToHclTerraform(this._until),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
