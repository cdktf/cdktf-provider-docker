const { CdktfProviderProject } = require('@cdktf/provider-project');
const project = new CdktfProviderProject({
  terraformProvider: "kreuzwerker/docker@~> 2.12",
  cdktfVersion: '^0.6',
  constructsVersion: "^10.0.0",
  minNodeVersion: "12.19.0"
});

project.synth();
