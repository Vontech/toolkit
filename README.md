toolkit
=======

A toolkit for development at Vontech Software

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/toolkit.svg)](https://npmjs.org/package/toolkit)
[![Codecov](https://codecov.io/gh/Vontech/toolkit/branch/master/graph/badge.svg)](https://codecov.io/gh/Vontech/toolkit)
[![Downloads/week](https://img.shields.io/npm/dw/toolkit.svg)](https://npmjs.org/package/toolkit)
[![License](https://img.shields.io/npm/l/toolkit.svg)](https://github.com/Vontech/toolkit/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g toolkit
$ toolkit COMMAND
running command...
$ toolkit (-v|--version|version)
toolkit/0.0.0 darwin-x64 node-v9.11.2
$ toolkit --help [COMMAND]
USAGE
  $ toolkit COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`toolkit hello [FILE]`](#toolkit-hello-file)
* [`toolkit help [COMMAND]`](#toolkit-help-command)

## `toolkit hello [FILE]`

describe the command here

```
USAGE
  $ toolkit hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ toolkit hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/Vontech/toolkit/blob/v0.0.0/src/commands/hello.ts)_

## `toolkit help [COMMAND]`

display help for toolkit

```
USAGE
  $ toolkit help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_
<!-- commandsstop -->
