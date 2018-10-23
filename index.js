/**
 * @file index
 * @author imcuttle
 * @description
 */

var getTypes = require('conventional-commit-types-befe')

var types = getTypes().typeKeys

module.exports = {
  parserPreset: require.resolve('conventional-changelog-befe'),
  rules: {
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 72],
    'scope-case': [0, 'always', 'lower-case'],
    'scope-empty': [0, 'always'],
    'subject-case': [0, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', ['lower-case', 'pascal-case']],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', types]
  }
}
