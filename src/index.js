import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const startGame = (taskForGame, questAndAns) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${taskForGame}`);
  const user = readlineSync.question('May I have your name?\n');
  console.log(`\nHello, ${user}!\n`);

  for (let i = 0; i < 3; i += 1) {
    const pair = questAndAns();
    const question = car(pair);
    const correctAnswer = cdr(pair);
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log("Let's try again!");
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${user}!`);
};
export default startGame;
