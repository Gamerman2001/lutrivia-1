import React from 'react';
import './App.css';
import Question from './Question.js'

export default class QuestionsContainer extends React.Component{

  state = {
    questionLength: 1
  }

  incrementQuestion = () => {
    this.setState({
    questionLength: this.state.questionLength === 5 ?  this.props.endGame /* this is not doing anything*/ : this.state.questionLength + 1
    })
    console.log(this.props)
    debugger 
  }
  allQuestions = (questions)=>(
    questions.map(q=>(
      <Question incrementQuestion={this.incrementQuestion} updateScore={this.props.updateScore} score={this.props.score} text={q.text} answer={q.answer} />
    ))
  )
   
  
  render(){ 

    return (
      <div>
        <p>Score: {this.props.score}</p>
        <ul>
          {this.allQuestions(this.props.question).slice(0,this.state.questionLength)}
        </ul>
      </div>
    );
  }
}
