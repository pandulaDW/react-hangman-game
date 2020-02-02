import React from "react";
import uuid from "uuid";

import "./letter.styles.scss";

class Letters extends React.Component {
  render() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return (
      <div className="Letter">
        {alphabet.split("").map((el, id, arr) => {
          const idx = arr.indexOf(this.props.clickedLetter);
          let visitedClass = null;
          if (idx === id) visitedClass = "visited";
          console.log(visitedClass);
          return (
            <p
              className={`letter-button letter-button-${id} ${visitedClass}`}
              key={uuid()}
              onClick={this.props.handleClick.bind(el)}
            >
              {el}
            </p>
          );
        })}
      </div>
    );
  }
}

export default Letters;
