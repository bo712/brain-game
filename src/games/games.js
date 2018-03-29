import readlineSync from 'readline-sync';
// import evenGame from './even';
import calcGame from './calc';

const game = () => {
  console.log('What kind of game do you want?');
  console.log('Type "1" if you want to play in even-game');
  console.log('Type "2" if you want to play in calc-game');
  const choose = readlineSync.question('Your choose: ');
  console.log(choose);
  if (choose === 1) calcGame();
  // return choose;

  // evenGame();
  // calcGame();
};
export default game;
