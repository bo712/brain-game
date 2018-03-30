import welcome from '../index';

const nod = (num1, num2) => {
  if (num2 === 0) return num1;
  return nod(num2, num1 % num2);
};

export const questAndAns = () => {
  const num1 = Math.round((Math.random() * 20));
  const num2 = Math.round((Math.random() * 20));
  const question = `${num1} ${num2}`;
  const correctAnswer = String(nod(num1, num2));
  return [question, correctAnswer];
};

const gcdGame = () => {
  const typeOfGame = 'Find the greatest common divisor of given numbers.\n';
  welcome(typeOfGame, questAndAns);
};

export default gcdGame;
