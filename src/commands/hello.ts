import {Command, flags} from '@oclif/command'

export default class Hello extends Command {
  static description = 'say hello with name'

  static examples = [
    `$ hoffy hello --name <insert name>`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Hello)

    const name = flags.name ?? 'world'
    this.log(`hello ${name}`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
