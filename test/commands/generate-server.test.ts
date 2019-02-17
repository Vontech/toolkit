import {expect, test} from '@oclif/test'

describe('generate-server', () => {
  test
    .stdout()
    .command(['generate-server'])
    .it('runs hello', ctx => {
      expect(ctx.stdout).to.contain('hello world')
    })

  test
    .stdout()
    .command(['generate-server', '--name', 'jeff'])
    .it('runs hello --name jeff', ctx => {
      expect(ctx.stdout).to.contain('hello jeff')
    })
})
