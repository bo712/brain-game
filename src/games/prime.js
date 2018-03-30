import startGame from '../index';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export const questAndAns = () => {
  const num = Math.round((Math.random() * 200));
  const question = `${num}`;
  const correctAnswer = (isPrime(num)) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const primeGame = () => {
  const taskForGame = 'Is this number prime?';
  startGame(taskForGame, questAndAns);
};

export default primeGame;
