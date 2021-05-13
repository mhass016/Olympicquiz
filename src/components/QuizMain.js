import React, { Component } from 'react';
import Question from './question/Question';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Img from './media/usian.gif'
import Answer from './Answer/Answer';
import './QuizMain.css';

export default class Quiz extends Component {
  // initiating the local state
  state = {
    questions: {
      1: 'When and where did the first modern Olympic games take place?',
      2: 'How many summer Olympics took place before Tokyo 2020?',
      3: 'Which country won the most medals in the summer Olympics?',
      4: 'Who is the athlete who won the most medals in the summer Olympics?',
      5: 'Which continent never hosted the Olympic games?',
      6: 'Which of the following sports featured in every summer Olympics?',
      7: 'Which city hosted more editions of the summer Olympics?',
      8: 'Which of these countries competed in every edition of the summer Olympics?',
      9:'This summer Tokyo will host the Olympics for the second time, when was the first time?',
      10:'Who is the most decorated female athlete in the Olympic games?'
    },

    answers: {
      1: {
        1: 'Paris 1900',
        2: 'Athens 1896',
        3: 'London 1908',
        4: 'Stockholm 1912'
      },
      2: {
        1: '19',
        2: '30',
        3: '28',
        4: '33'
      },
      3: {
        1: 'China',
        2: 'United States',
        3: 'Great Britain',
        4: 'Russia'
      },
      4: {
        1: 'Usain Bolt',
        2: 'Carl Lewis',
        3: 'Nadia Comăneci',
        4: 'Michael Phelps'
      },
      5: {
        1: 'Asia',
        2: 'South America',
        3: 'North America',
        4: 'Africa'
      },
      6: {
        1: 'Football',
        2: 'Tennis',
        3: 'Wrestling',
        4: 'Fencing'
      },
      7: {
        1: 'Paris',
        2: 'Los Angeles',
        3: 'London',
        4: 'Athens'
      },
      8: {
        1: 'Greece',
        2: 'United States',
        3: 'Spain',
        4: 'Russia'
      },
      9: {
        1: '1964',
        2: '1980',
        3: '1956',
        4: '1976'
      },
      10: {
        1: 'Simone Biles',
        2: 'Larisa Latynina',
        3: 'Allyson Felix',
        4: 'Isabell Werth'
      }
    },
    correctAnswers: {
      1: '2',
      2: '3',
      3: '2',
      4: '4',
      5: '4',
      6: '4',
      7: '3',
      8: '1',
      9: '1',
      10:'2'
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0

  }

checkAnswer = answer => {
  const { correctAnswers, step, score } = this.state;
  if(answer === correctAnswers[step]){
    this.setState({
      score: score + 1,
      correctAnswer: correctAnswers[step],
      clickedAnswer: answer
    });
  }else{
    this.setState ({
      correctAnswer: 0,
      clickedAnswer: answer

    });
  }
}
nextStep= step => {
  this.setState({
    step: step + 1,
    correctAnswer: 0,
    clickedAnswer: 0

  });
}
  render(){
    let { questions, answers, correctAnswer,clickedAnswer, step, score } = this.state
    return(
      <div className="Content">
      {step <= Object.keys(questions).length ?
        (<>
      <Question
      question={questions[step]}
/>
<Answer
answer={answers[step]}
step={step}
checkAnswer={this.checkAnswer}
correctAnswer={correctAnswer}
clickedAnswer={clickedAnswer}
 />
 <button
 className="NextStep"
 disabled={
   clickedAnswer && Object.keys(questions).length >= step
   ? false : true
 }
 onClick={() => this.nextStep(step)}

 >
 Next

 </button>
</>) : (
  <div className="finalPage">
  <h1><b>Well Done! You Have Completed The Quiz!</b></h1>
  <div class="fakeimg"> <img src={Img} /> </div>
  <p><b> Your score is: {score} of {Object.keys(questions).length}</b></p>
  <button className="playagain"><Link to="/" style={{ textDecoration: 'none',  color: 'white' }}>
    Play Again!
    </Link></button>
    <button className="NextStep"><Link to="/answers" style={{ textDecoration: 'none',  color: 'white' }}>
      View Correct Answers
      </Link></button>
  </div>
)
}
      </div>
    );
  }
}
