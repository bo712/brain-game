import { cons } from 'hexlet-pairs';
import startGame from '../index';

const robinHood = (array) => {
  const arr = array;
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = Number(arr[i]);
  }
  for (let i = 1; i < arr.length; i += 1) {
    arr.sort();
    if (arr[i] > arr[0] + 1) {
      arr[0] += 1;
      arr[i] -= 1;
      i = 0;
    }
  }
  return arr;
};

export const questAndAns = () => {
  const str = String(Math.round((Math.random() * 712)));
  const question = `${str}`;
  const array = str.split('');
  const correctAnswer = robinHood(array).join('');
  return cons(question, correctAnswer);
};

const balanceGame = () => {
  const taskForGame = 'Balance the given number.';
  startGame(taskForGame, questAndAns);
};

export default balanceGame;
