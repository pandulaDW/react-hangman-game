import React from "react";
import "./App.css";

import Letters from "./components/letter/letter.component";
import Hangman from "./components/hangman/hangman.component";
import Words from "./components/display-words/word.component";
import WinnerOrLoser from "./components/decision/decision.component";

import random_words from "./words";

class App extends React.Component {
  constructor() {
    super();
    this.random_word =
      random_words[Math.floor(Math.random() * random_words.length)];

    this.wordPositions = Object.fromEntries(
      new Map(this.random_word.split("").map((_, id) => [`word${id}`, null]))
    );

    this.state = {
      randomWord: this.random_word,
      currentWord: this.random_word.split(""),
      clickedLetter: null,
      clickedCount: 0,
      wrongClicks: 0,
      correctClicks: 0,
      correctLetter: null,
      wordPositions: this.wordPositions
    };
  }

  handleClick = event => {
    let clickedLetter = event.target.textContent;
    const idx = this.state.currentWord.indexOf(clickedLetter);

    const wrongClicks = this.state.currentWord.includes(clickedLetter)
      ? this.state.wrongClicks
      : this.state.wrongClicks + 1;

    const correctLetter = this.state.currentWord.includes(clickedLetter)
      ? clickedLetter
      : null;

    const wordPositionsCopy = { ...this.state.wordPositions };

    if (correctLetter) {
      const noOfOccurences = this.state.randomWord
        .split("")
        .reduce((acc, curr) => (curr === correctLetter ? acc + 1 : acc), 0);

      let wordIdx;
      if (noOfOccurences > 1) {
        wordIdx = this.state.randomWord.indexOf(
          correctLetter,
          Object.values(wordPositionsCopy).lastIndexOf(correctLetter) + 1
        );
      } else wordIdx = this.state.randomWord.indexOf(correctLetter, 0);

      wordPositionsCopy[`word${wordIdx}`] = clickedLetter;
    }

    let correctClicks = this.state.correctClicks;
    if (idx !== -1) {
      correctClicks++;
      this.state.currentWord.splice(idx, 1);
    }

    this.setState({
      clickedLetter: clickedLetter,
      clickedCount: this.state.clickedCount + 1,
      wrongClicks: wrongClicks,
      correctClicks: correctClicks,
      correctLetter: correctLetter,
      wordPositions: wordPositionsCopy
    });
  };

  handleReset = () => {
    window.location.reload();
  };

  render() {
    return (
      <div className="App">
        <div className="game">
          <div className="game-left">
            <WinnerOrLoser
              currentWord={this.state.currentWord}
              wrongClicks={this.state.wrongClicks}
              handleReset={this.handleReset}
            />
            <Words
              randomWord={this.state.randomWord}
              correctLetter={this.state.correctLetter}
              wordPositions={this.state.wordPositions}
            />
            <div className="letter-set" />
            <Letters
              handleClick={this.handleClick}
              clickedCount={this.state.clickedCount}
            />
          </div>
          <Hangman wrongClicks={this.state.wrongClicks} />
        </div>
      </div>
    );
  }
}

export default App;
