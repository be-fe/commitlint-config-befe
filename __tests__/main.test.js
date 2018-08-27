/**
 * @file main
 * @author imcuttle
 * @date 2018/4/4
 */
const { join } = require('path')
const _lint = require('@commitlint/lint')
const { rules, parserPreset } = require('../')

let parseOpts, lint
beforeAll(function() {
  return require(parserPreset)
    .then(d => (parseOpts = d.parseOpts))
    .then(() => {
      lint = msg => _lint(msg, rules, { parseOpts })
    })
})

it('should `Feat: abc`', async function() {
  expect((await lint('Feat: abc')).errors.length).toBe(0)
  expect((await lint('feat: abc')).errors.length).toBe(0)
})

it('should `Feat:abc fail`', async function() {
  expect((await lint('Feat:abc')).errors).toEqual([
    { level: 2, message: 'message may not be empty', name: 'subject-empty', valid: false },
    { level: 2, message: 'type may not be empty', name: 'type-empty', valid: false }
  ])
  expect((await lint('feat:')).errors.length).toBe(2)
})

it('should `Feat: 哈哈哈` works`', async function() {
  expect((await lint('Feat: 哈哈哈')).errors).toEqual([])
})

it('should `Feet: 哈哈哈` fails`', async function() {
  expect((await lint('Feet: 哈哈哈')).errors).toEqual([
    {
      level: 2,
      message:
        'type must be one of [build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test, Build, Chore, Ci, Docs, Feat, Fix, Perf, Refactor, Revert, Style, Test]',
      name: 'type-enum',
      valid: false
    }
  ])
})
