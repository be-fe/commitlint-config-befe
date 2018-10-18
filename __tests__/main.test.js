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

it('should `Feat:abc` fails', async function() {
  expect((await lint('Feat:abc')).errors).toEqual([
    { level: 2, message: 'message may not be empty', name: 'subject-empty', valid: false },
    { level: 2, message: 'type may not be empty', name: 'type-empty', valid: false }
  ])
  expect((await lint('feat:')).errors.length).toBe(2)
})

it('should `Feat: 哈哈哈` works', async function() {
  expect((await lint('Feat: 哈哈哈')).errors).toEqual([])
})

it('should `Feet: 哈哈哈` fails', async function() {
  expect((await lint('Feet: 哈哈哈')).errors).toEqual([
    {
      level: 2,
      message:
        'type must be one of [build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test, temp, Build, Chore, Ci, Docs, Feat, Fix, Perf, Refactor, Revert, Style, Test, Temp]',
      name: 'type-enum',
      valid: false
    }
  ])
})

it('should `Feat(123): anc` success', async function() {
  expect((await lint('Feat(123): anc')).errors).toEqual([])
})

it('should `Test(123): anc` success', async function() {
  expect((await lint('Test(123): anc')).errors).toEqual([])
})

it('should `test(说说): a 收拾收拾是 nc` success', async function() {
  expect((await lint('test(说说): a 收拾收拾是 nc')).errors).toEqual([])
})

it('should `Feat(你好): 你好` success', async function() {
  expect((await lint('Feat(你好): 你好')).errors).toEqual([])
})

it('should `feat(你好): 你好 & chore: abc & feat: something here` success', async function() {
  expect((await lint('feat(你好): 你好 & chore: abc & feat: something here')).errors).toEqual([])
})

it('should `feat(你好): 你好 \nchore: abc \nfeat: something here` success', async function() {
  expect((await lint('feat(你好): 你好 \nchore: abc \nfeat: something here')).errors).toEqual([])
})
