// eslint-disable-next-line @typescript-eslint/no-var-requires
const cracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        source: 'tsconfig',
        // baseUrl SHOULD be specified
        // plugin does not take it from tsconfig
        baseUrl: './src',
        /* tsConfigPath should point to the file where "baseUrl" and "paths" 
             are specified*/
        tsConfigPath: './tsconfig.paths.json'
      }
    }
  ]
};
