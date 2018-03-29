import readlineSync from 'readline-sync';
import { welcome } from '../index';

const numGenerator = () => Math.round((Math.random() * 20));

const operatorGenerator = () => {
  const i = Math.random();
  if (i < 0.33) return '*';
  if (i > 0.66) return '+';
  return '-';
};

const calculator = (num1, num2, oper) => {
  switch (oper) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    default: return num1 * num2;
  }
};

const engineOfGame = () => {
  const num1 = numGenerator();
  const num2 = numGenerator();
  const oper = operatorGenerator();
  const answer = readlineSync.question(`Question: ${num1} ${oper} ${num2}\nYour answer: `);
  const correctAnswer = calculator(num1, num2, oper);
  if (Number(answer) === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};


const calcGame = () => {
  const typeOfGame = 'What is the result of the expression?\n';
  const userName = welcome(typeOfGame);
  const startGame = () => {
    for (let i = 0; i < 3; i += 1) {
      if (!engineOfGame()) {
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
    console.log(`Congratulations, ${userName}!`);
  };
  startGame();
};

export default calcGame;
