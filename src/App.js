import React from "react";
import "./App.css";

import Letters from "./components/letter/letter.component";
import Hangman from "./components/hangman/hangman.component";
import Words from "./components/display-words/word.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      randomWord: "apple",
      currentWord: "apple".split(""),
      clickedLetter: null,
      clickedCount: 0,
      wrongClicks: 0,
      correctLetter: null
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

    if (idx !== -1) this.state.currentWord.splice(idx, 1);

    this.setState({
      clickedLetter: clickedLetter,
      clickedCount: this.state.clickedCount + 1,
      wrongClicks: wrongClicks,
      correctLetter: correctLetter
    });
  };

  render() {
    return (
      <div className="App">
        <div className="game">
          <div className="game-left">
            <Words
              randomWord={this.state.randomWord}
              correctLetter={this.state.correctLetter}
              clickedCount={this.state.clickedCount}
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
