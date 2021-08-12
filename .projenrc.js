const { CdktfProviderProject } = require('@cdktf/provider-project');
const project = new CdktfProviderProject({
  terraformProvider: "kreuzwerker/docker@~> 2.12"
});

project.synth();
