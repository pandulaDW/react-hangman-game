import React from "react";
import uuid from "uuid";

import noose from "../../imgs/noose.png";
import hangman1 from "../../imgs/hangman1.png";
import hangman2 from "../../imgs/hangman2.png";
import hangman3 from "../../imgs/hangman3.png";
import hangman4 from "../../imgs/hangman4.png";
import hangman5 from "../../imgs/hangman5.png";
import hangman6 from "../../imgs/hangman6.png";

import "./hangman.styles.scss";

class Hangman extends React.Component {
  imgObj = {
    hangman1,
    hangman2,
    hangman3,
    hangman4,
    hangman5,
    hangman6
  };

  outputClass = count => {
    const arr = new Array(6).fill(1);
    let arr1 = arr.slice(0, count);
    let arr2 = arr.slice(count);
    arr1 = arr1.map((el, id) => (
      <img src={this.imgObj[`hangman${id + 1}`]} alt="" className="visible" />
    ));
    arr2 = arr2.map((el, id) => (
      <img
        src={this.imgObj[`hangman${id + count + 1}`]}
        alt=""
        className={null}
      />
    ));
    return [...arr1, ...arr2];
  };

  render() {
    const imgComponent = this.outputClass(this.props.wrongClicks);
    return (
      <div className="Hangman">
        <img src={noose} alt="" />
        <div className="Hangman__images" key={uuid()}>
          {imgComponent}
        </div>
      </div>
    );
  }
}

export default Hangman;
