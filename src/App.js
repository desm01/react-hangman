
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

  let chars = word.split("");

  this.state = {
    word : word,
    possibleChars : chars,
    lives : 4
  }
}
  

   state = {
    word : 'null',
    possibleChars : ['n','u','l','l'],
    lives : 4
  }

    generateChars = () => {
      let words = this.state.possibleChars;

        return (
          words.map((char) => (
            <Char char = {char}  ></Char>
          ))
        );
  }

checkAns = (e) => {
  let pressedKey = e.key;
  console.log(pressedKey);
  let userAnswer = pressedKey;
  let possibleAnswers = this.state.possibleChars;
  console.log(possibleAnswers);
  
  let correct = false;

  for (let i = 0; i < possibleAnswers.length; i++) {
    if (possibleAnswers[i] === userAnswer) {
      console.log('correct');
      correct = true;
    }
  }
  
  if (correct === false) {
    console.log('wrong')
  }
}

  render() {
    return (
      <div className="App">
        <h1>{this.state.words}</h1>
        <Person></Person>
        {this.generateChars()}
        <Input checkAnswer = {this.checkAns} ></Input>
      </div>
    );

  }


}

export default App;
