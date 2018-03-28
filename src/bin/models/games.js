import { getName, greeting } from '../../index';

const games = () => {
  console.log('Welcome to the Brain Games\n');
  const userName = getName();
  greeting(userName);
};
export default games;
