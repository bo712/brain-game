import welcome from '../index';

// return array.join('');
const robinHood = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = Number(array[i]);
  }
  for (let i = 1; i < array.length; i += 1) {
    array.sort();
    if (array[i] > array[0] + 1) {
      array[0] += 1;
      array[i] -= 1;
      i = 1;
    }
  }
  return array;
};

export const questAndAns = () => {
  const str = String(Math.round((Math.random() * 1000)));
  const question = `${str}`;
  const array = str.split('');
  const correctAnswer = robinHood(array).join('');
  return [question, correctAnswer];
};

const balanceGame = () => {
  const typeOfGame = 'Balance the given number.\n';
  welcome(typeOfGame, questAndAns);
};

export default balanceGame;
