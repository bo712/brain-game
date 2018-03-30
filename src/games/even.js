import welcome from '../index';

const questAndAns = () => {
  const num = Math.round((Math.random() * 100));
  const correctAnswer = (num % 2 === 0) ? 'yes' : 'no';
  return [num, correctAnswer];
};

const evenGame = () => {
  const typeOfGame = 'Answer "yes" if number even otherwise answer "no".\n';
  welcome(typeOfGame, questAndAns);
};

export default evenGame;
