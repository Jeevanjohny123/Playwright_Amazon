module.exports = {
  default: {
    require: ['src/step-definitions/*.ts', 'src/hooks/*.ts'],
    format: ['progress', 'allure-cucumberjs/reporter'],
    paths: ['src/features/*.feature'],
    requireModule: ['ts-node/register'],
    timeout: 60000
  }
};