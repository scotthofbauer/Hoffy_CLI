import {Command, flags} from '@oclif/command'
import cli from 'cli-ux'

export default class Multiply extends Command {
  static description = 'multiply two numbers with an optional rounding digit <num1> <num2> optional<Rounding digit>'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [
    {name: 'num1'},
    {name: 'num2'},
    {
      name: 'round',
      required: false,
    }
  ]


  async run() {

    const test = await cli.prompt("Write something?");

    const {args} = this.parse(Multiply)
    let answer = args.num1 * args.num2;


    if(args.round){
      answer = parseFloat(answer.toFixed(args.round));
    }
    
    this.log(`Answer: ${answer}, test: ${test}`);
  }
}
