var readlineSync = require('readline-sync');
var chalk = require('chalk');

var question = "Please enter your name to play the quiz:- ";
var userName = readlineSync.question(chalk.bold.hex('#fdcc06')(question));

console.log("\n" + "welcome! " + userName + ". How well do you know Shilpa?");

var score = 0;
var questionOne = {
  question: '1) ' + 'How many schools has shilpa gone to? ',
  answer: '2',
}
var questionTwo = {
  question: '2) ' + 'Who is the favourite actor of Shilpa? ',
  answer: 'Prabhas',
}
var questionThree = {
  question: '3) ' + 'How many siblings does Shilpa have? ',
  answer: '2',
}
var questionFour = {
  question: '4) ' + 'In which sport does Shilpa like to play? ',
  answer: 'Badminton',
}
var questionFive = {
  question: '5) ' + 'In which month does shilpa birthday come? ',
  answer: 'April',
}
var questionSix = {
  question: '6) ' + 'If Shilpa could wake up with a completely different permanent hair color, what would it be? ',
  answer: 'Brown',
}
var questionSeven = {
  question: '7) ' + 'where do Shilpa live? ',
  answer: 'Kurukshetra',
}

var quizQuestions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven];

function quiz(question, answer) {
  var userAnswer = readlineSync.question((chalk.bold.hex('#06fee7')(question)) + '\n' + "please type your answer:- ");
  if (answer.toLocaleUpperCase() === userAnswer.toLocaleUpperCase()) {
    console.log(chalk.bold.green("\n" + "Yay! You are right"));
    score = score + 1;
  }
  else {
    console.log(chalk.bold.hex('#f14633')("\n" + "Sorry! You are wrong"));
    score = score - 1;
  }
  return score;
}

for (var i = 0; i < quizQuestions.length; i++) {
  console.log('\n');
  quiz(quizQuestions[i].question, quizQuestions[i].answer);
  console.log('\n' + "------------------------End of question " + [i + 1] + "------------------------");
}
console.log("\n" + "Your Final score is: " + score);
var highScore={
  name:"Veronica",
  score:7,
}
var currentScore={
  name:"Kervin",
  score:5,
}
if (highScore.score > currentScore.score){
  console.log(chalk.bold.yellow("\n"+"The winner is:- " +highScore.name + " and the score is: " +highScore.score));
}
else{
  console.log(chalk.bold.yellow("\n"+"The winner is:- " +currentScore.name + " and the score is " + currentScore.score));
}

