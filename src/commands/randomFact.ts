import {Command, flags} from '@oclif/command'

export default class RandomFact extends Command {
  static description = 'get a random fact'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
  }

  static facts = [
    "If you have 3 quarters, 4 dimes, and 4 pennies, you have $1.19. You also have the largest amount of money in coins without being able to make change for a dollar.",
    "The numbers '172' can be found on the back of the U.S. $5 dollar bill in the bushes at the base of the Lincoln Memorial.",
    "President Kennedy was the fastest random speaker in the world with upwards of 350 words per minute.",
    "In the average lifetime, a person will walk the equivalent of 5 times around the equator.",
    "Odontophobia is the fear of teeth.",
    "The 57 on Heinz ketchup bottles represents the number of varieties of pickles the company once had.",
    "In the early days of the telephone, operators would pick up a call and use the phrase, 'Well, are you there?'. It wasn't until 1895 that someone suggested answering the phone with the phrase 'number please?'",
    "The surface area of an average-sized brick is 79 cm squared.",
    "According to suicide statistics, Monday is the favored day for self-destruction.",
    "Cats sleep 16 to 18 hours per day."
  ];
  static args = [{name: 'file'}]

  async run() {
    const fact = RandomFact.facts[Math.floor(Math.random()*RandomFact.facts.length)]
    this.log(fact);



  }
}