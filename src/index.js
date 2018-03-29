import readlineSync from 'readline-sync';

const welcome = (str) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${str}`);
  const user = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${user}\n`);
  return user;
};
// export const startGame = (func) => {
//   for (let i = 0; i < 3; i += 1) {
//     if (!func) {
//       console.log("Let's try again");
//       return;
//     }
//   }
//   console.log('Congratulations');
// };
export default welcome;
