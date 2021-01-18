import './App.css';
import React, { Component} from 'react';
import Person from './components/person'
import Input from './components/input'
import Char from './components/char'


class App extends Component {

constructor(props) {
  super(props);
  let randomWords = require('random-words');
  let word = randomWords();
  word = word.toUpperCase();
  let chars = word.split("");
  let displayedChars = [];

  for (let i = 0; i < chars.length; i++) {
    displayedChars.push('_')
  }

  this.state = {
    word : word,
    possibleChars : chars,
    displayedChars : displayedChars,
    lives : 4,
    playerWon : false
  }

}
  

  flex = {
display : 'flex',
justifyContent : 'center'
  }



    resetGame = () => window.location.reload(false)
    

    generateChars = () => {
        let words = this.state.displayedChars;

        return (
          words.map((char) => (
            <Char char = {char}  correct = {false}></Char>
          ))
        );
  }



checkAns = (e) => {
  

  if(e.keyCode >= 65 && e.keyCode <= 122 ) {
    let pressedKey = e.key;
    pressedKey = pressedKey.toUpperCase();

 

    let userAnswer = pressedKey;
    let possibleAnswers = this.state.possibleChars;
    
    let correct = false;
  
    for (let i = 0; i < possibleAnswers.length; i++) {
      if (possibleAnswers[i] === userAnswer) {
        console.log('correct')
        let list = this.state.displayedChars;
        list[i] = userAnswer;
  
        this.setState ({
          displayedChars : list
        })
  
        console.log(this.state)
  
        correct = true;
  
      }
    }
    
    if (correct === false) {
      console.log('wrong')
      let lives = this.state.lives - 1;
      this.setState(
        {
          lives : lives
        }
      )
    }
  
    if (this.state.displayedChars.includes('_') === false) {
      console.log('hi')
      this.setState(
        {
          playerWon : true
        }
      )
    }
  }

  else {

  }

  

}



  render() {

    console.log(this.state)

    if (this.state.lives > 0) {

      if (this.state.playerWon === true) {
        return (
          <div className="App">
          <h1>{this.state.words}</h1>
          <Person lives = {this.state.lives} ></Person>
         
         <div style = {this.flex}>
          {this.generateChars()}
        </div>
        <h1>YOU HAVE WON</h1>
          </div>
        )
      }
else if (this.state.playerWon === false) {
    return (
      <div className="App">
        <h1>{this.state.words}</h1>
        <Person lives = {this.state.lives} ></Person>
       
       <div style = {this.flex}>
        {this.generateChars()}
      </div>
        <Input checkAnswer = {this.checkAns} ></Input>
      </div>
    );

    }
  }

    else  {
      return (
        <div className = "App">
            <Person lives = {0} ></Person> 
            <h1>THE CORRECT ANSWER WAS: {this.state.word}</h1>
            <button onClick={ this.resetGame } >Play Again?</button>
        </div>
      )
    }

  }


}

export default App;
