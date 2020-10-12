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

  async noArgs() {
    const test = await cli.prompt("You didn't add arguments dumbass");
    return 1;
  }
  async getMissingNumber() {
    const num = await cli.prompt("Input a number");
    return num;
  }


  async run() {


    const {args} = this.parse(Multiply)
    let answer;
    let num1 = args.num1;
    let num2 = args.num2;

  
    if(!num1 && !num2){
      answer = await this.noArgs();
    }else if(!args.num1 && args.num2 || args.num1 && !args.num2){
      num1 = await this.getMissingNumber();
    }

    answer = args.num1 * args.num2;
    


    if(args.round){
      answer = parseFloat(answer.toFixed(args.round));
    }
    
    this.log(`Answer: ${answer}`);
  }
}
