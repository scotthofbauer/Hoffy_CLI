import {Command, flags} from '@oclif/command'

export default class Multiply extends Command {
  static description = 'multiply two numbers'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [
    {name: 'num1'},
    {name: 'num2'}
  ]


  async run() {
    const {args, flags} = this.parse(Multiply)
    const answer = args.num1 * args.num2;

    const name = flags.name ?? 'world'
    this.log(`Answer: ${answer}`);
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
