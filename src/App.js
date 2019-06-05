import React from 'react';
import './App.css';
import data from './data.js';
import QuestionsContainer from './QuestionsContainer.js'

export default class App extends React.Component {

  state = {
    inProgress: false,
    score: 0
  }

  newGame = (e) => {
    this.setState({
      inProgress: true
    })
  }
  updateScore = () => {
    this.setState({
      score: this.state.score + 1
    })
  }

  // endGame = () => {
  //   this.setState({
  //     inProgress: false
  //   })
  // }

  renderStartPage = () => {
    
      
  }

  render(){
    return (
      <div className="App">
        <h1>Lutrivia</h1>
        {
          !this.state.inProgress ? <button onClick={this.newGame}>New Game</button> : null
        }
        {
          this.state.inProgress ? <QuestionsContainer renderStartPage={this.renderStartPage} updateScore={this.updateScore} score={this.state.score} question={data.questions} endGame={this.endGame} isIn={this.state.inProgress} /> : null
        }
        {
          this.state.inProgress ? <form><input placeholder="Name" /><input type="submit"/></form> : null
        }
      </div>
    );
  }
}
