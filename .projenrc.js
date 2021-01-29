const { CdktfProviderProject } = require('@cdktf/provider-project');
const { Semver } = require('projen');

const project = new CdktfProviderProject({
  terraformProvider: 'terraform-providers/docker@~> 2.0',
  eslint: false,
});

project.synth();
