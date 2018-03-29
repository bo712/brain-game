import readlineSync from 'readline-sync';
import welcome, { startGame } from '../index';

const numGenerator = () => Math.round((Math.random() * 20));

const nod = (num1, num2) => {
  if (num2 === 0) return num1;
  return nod(num2, num1 % num2);
};
export const expression = () => {
  const num1 = numGenerator();
  const num2 = numGenerator();
  const answer = readlineSync.question(`Question: ${num1} ${num2}\nYour answer: `);
  const correctAnswer = nod(num1, num2);
  if (Number(answer) === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log("Let's try again!");
  return false;
};

const gcdGame = () => {
  const typeOfGame = 'Find the greatest common divisor of given numbers.\n';
  const userName = welcome(typeOfGame);
  startGame(expression, userName);
};

export default gcdGame;
