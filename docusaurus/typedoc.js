// @ts-check

/** @type {Partial<import('typedoc/dist/lib/utils').TypeDocOptions>} */
const options = {
  defaultCategory: 'Misc',
  categoryOrder: ['Hooks', 'EthersAppContext', 'ContractAppContext', 'Models', 'Helpers', 'TestUtils', '*'],
  categorizeByGroup: false,
  cleanOutputDir: true,
  readme: 'none',
  entryPoints: [
    '../src/helpers/typedoc/hooks.docs.ts',
    '../src/helpers/typedoc/ethersAppContext.docs.ts',
    '../src/helpers/typedoc/contractAppContext.docs.ts',
    '../src/helpers/typedoc/models.docs.ts',
    '../src/helpers/typedoc/functions.docs.ts',
    '../src/helpers/typedoc/helpers.docs.ts',
    '../src/helpers/typedoc/test-utils.docs.ts',
  ],
  entryPointStrategy: 'expand',
  hideGenerator: true,
  hideLegend: false,
  includeVersion: true,
  sort: ['source-order'],
  excludePrivate: true,
  excludeInternal: true,
  listInvalidSymbolLinks: true,
  logLevel: 'Verbose',
  excludeExternals: true,
  exclude: ['**/test/**', '**/test-files/**', '**/*.test.ts', '**/*.test.tsx'],
  externalPattern: ['**/node_modules/**', '**/test/**', '**/test-files/**'],
  plugin: ['typedoc-plugin-mermaid'],
  tsconfig: '../tsconfig.docs.json',
  treatWarningsAsErrors: true,
};

module.exports = options;
