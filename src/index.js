import readlineSync from 'readline-sync';

const startGame = (taskForGame, questAndAns) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${taskForGame}`);
  const user = readlineSync.question('May I have your name?\n');
  console.log(`\nHello, ${user}!\n`);

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = questAndAns();
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log("Let's try again!");
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${user}!`);
};
export default startGame;
