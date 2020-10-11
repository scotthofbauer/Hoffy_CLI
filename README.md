hoffy_cli
=========

test CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/hoffy_cli.svg)](https://npmjs.org/package/hoffy_cli)
[![Downloads/week](https://img.shields.io/npm/dw/hoffy_cli.svg)](https://npmjs.org/package/hoffy_cli)
[![License](https://img.shields.io/npm/l/hoffy_cli.svg)](https://github.com/scotthofbauer/hoffy_cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g hoffy_cli
$ hoffy COMMAND
running command...
$ hoffy (-v|--version|version)
hoffy_cli/1.0.0 darwin-x64 node-v12.18.3
$ hoffy --help [COMMAND]
USAGE
  $ hoffy COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`hoffy goodbye [FILE]`](#hoffy-goodbye-file)
* [`hoffy hello [FILE]`](#hoffy-hello-file)
* [`hoffy help [COMMAND]`](#hoffy-help-command)
* [`hoffy multiply [FILE]`](#hoffy-multiply-file)
* [`hoffy randomFact [FILE]`](#hoffy-randomfact-file)

## `hoffy goodbye [FILE]`

say goodbye with name

```
USAGE
  $ hoffy goodbye [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/goodbye.ts](https://github.com/scotthofbauer/hoffy_cli/blob/v1.0.0/src/commands/goodbye.ts)_

## `hoffy hello [FILE]`

say hello with name

```
USAGE
  $ hoffy hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ hoffy hello --name <insert name>
```

_See code: [src/commands/hello.ts](https://github.com/scotthofbauer/hoffy_cli/blob/v1.0.0/src/commands/hello.ts)_

## `hoffy help [COMMAND]`

display help for hoffy

```
USAGE
  $ hoffy help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `hoffy multiply [FILE]`

describe the command here

```
USAGE
  $ hoffy multiply [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/multiply.ts](https://github.com/scotthofbauer/hoffy_cli/blob/v1.0.0/src/commands/multiply.ts)_

## `hoffy randomFact [FILE]`

get a random fact

```
USAGE
  $ hoffy randomFact [FILE]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/randomFact.ts](https://github.com/scotthofbauer/hoffy_cli/blob/v1.0.0/src/commands/randomFact.ts)_
<!-- commandsstop -->
