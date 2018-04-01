import { cons } from 'hexlet-pairs';
import startGame from '../index';

const balance = (num) => {
  const str = String(num);
  let sumOfDigs = 0;
  for (let i = 0; i < str.length; i += 1) {
    sumOfDigs += Number(str[i]);
  }
  const preresult = Math.floor(sumOfDigs / str.length);
  let stringPreresult = '';
  for (let i = 0; i < str.length; i += 1) {
    stringPreresult += preresult;
  }

  const remains = sumOfDigs % str.length;
  let result = '';
  for (let i = 0; i < remains; i += 1) {
    result += 1;
  }
  return String(Number(stringPreresult) + Number(result));
};

export const questAndAns = () => {
  const num = Math.round((Math.random() * 712));
  const question = `${num}`;
  const correctAnswer = balance(num);
  return cons(question, correctAnswer);
};

const balance2Game = () => {
  const taskForGame = 'Balance the given number.';
  startGame(taskForGame, questAndAns);
};

export default balance2Game;
