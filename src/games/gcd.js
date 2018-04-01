import { cons } from 'hexlet-pairs';
import startGame from '../index';


const gcd = (num1, num2) => {
  if (num2 === 0) return num1;
  return gcd(num2, num1 % num2);
};

export const questAndAns = () => {
  const num1 = Math.round((Math.random() * 20));
  const num2 = Math.round((Math.random() * 20));
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return cons(question, correctAnswer);
};

const gcdGame = () => {
  const taskForGame = 'Find the greatest common divisor of given numbers.';
  startGame(taskForGame, questAndAns);
};

export default gcdGame;
