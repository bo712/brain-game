import { cons } from 'hexlet-pairs';
import startGame from '../index';

const questAndAns = () => {
  const num = Math.round((Math.random() * 100));
  const correctAnswer = (num % 2 === 0) ? 'yes' : 'no';
  return cons(num, correctAnswer);
};

const evenGame = () => {
  const taskForGame = 'Answer "yes" if number even otherwise answer "no".';
  startGame(taskForGame, questAndAns);
};

export default evenGame;
