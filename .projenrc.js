const { CdktfProviderProject } = require('@cdktf/provider-project');
const { Semver } = require('projen');

const project = new CdktfProviderProject({
  terraformProvider: 'kreuzwerker/docker@~> 2.12',
  eslint: false,
});

project.synth();
