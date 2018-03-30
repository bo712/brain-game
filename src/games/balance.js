import welcome from '../index';

  // return array.join('');
const robinHood = (array) => {
  for (let i = 1; i < array.length - 1; i += 1) {
    array.sort();
    if (array[i] > array[0] + 1) {
      array[0] = array[0] + 1;
      array[i] = array[i] - 1;
    }
  }
};

export const questAndAns = () => {
  const str = String(Math.round((Math.random() * 1000)));
  const array = str.split('');


  const question = `${str}`;
  const correctAnswer = String(sort(str));
  return [question, correctAnswer];
};

const balanceGame = () => {
  const typeOfGame = 'Balance the given number.\n';
  welcome(typeOfGame, questAndAns);
};

export default balanceGame;
