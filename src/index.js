import readlineSync from 'readline-sync';

const welcome = (str) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${str}`);
  const user = readlineSync.question('May I have your name?\n');
  console.log(`\nHello, ${user}!\n`);
  return user;
};
export const startGame = (func, userName) => {
  for (let i = 0; i < 3; i += 1) {
    if (!func()) return;
  }
  console.log(`Congratulations, ${userName}!`);
};
export default welcome;
