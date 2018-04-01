import { cons } from 'hexlet-pairs';
import startGame from '../index';

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
const questAndAns = () => {
  const num1 = Math.round((Math.random() * 20));
  const num2 = Math.round((Math.random() * 20));
  const oper = operatorGenerator();
  const question = `${num1} ${oper} ${num2}`;
  const correctAnswer = String(calculator(num1, num2, oper));
  return cons(question, correctAnswer);
};

const calcGame = () => {
  const taskForGame = 'What is the result of the expression?';
  startGame(taskForGame, questAndAns);
};

export default calcGame;
