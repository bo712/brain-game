import { cons } from 'hexlet-pairs';
import startGame from '../index';

const questAndAns = () => {
  const startNum = Math.round((Math.random() * 20)) + 1;
  const stepOfProgress = Math.round((Math.random() * 5)) + 1;
  const numOfSteps = 10;
  const stepHole = Math.ceil(((1 + Math.random()) * 4));
  let leftNum;

  let result = `${startNum} `;
  let currentNum = startNum;
  for (let i = 2; i <= numOfSteps; i += 1) {
    if (i === stepHole) {
      currentNum += stepOfProgress;
      leftNum = currentNum;
      result += '.. ';
    } else {
      currentNum += stepOfProgress;
      result += `${currentNum} `;
    }
  }
  const question = `${result}`;
  const correctAnswer = String(leftNum);
  return cons(question, correctAnswer);
};

const progressionGame = () => {
  const taskForGame = 'What number is missing in this progression?';
  startGame(taskForGame, questAndAns);
};

export default progressionGame;
