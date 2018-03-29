import readlineSync from 'readline-sync';
import welcome, { startGame } from '../index';

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
  const typeOfGame = 'Answer "yes" if number even otherwise answer "no".\n';
  const userName = welcome(typeOfGame);
  startGame(question, userName);
};

export default evenGame;
