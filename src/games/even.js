import readlineSync from 'readline-sync';
import { welcome, greeting } from '../index';

const question = () => {
  const num = Math.round((Math.random() * 100));
  const answer = readlineSync.question(`Question: ${num}\nYour answer: `);
  const correctAnswer = (answer === 'yes') ? 'no' : 'yes';
  if ((num % 2 === 0 && answer === 'yes') || (num % 2 === 1 && answer === 'no')) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const evenGame = () => {
  welcome();
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const userName = readlineSync.question('May I have your name?');
  greeting(userName);

  for (let i = 0; i < 3; i += 1) {
    if (!question()) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default evenGame;
