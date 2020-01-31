import React from "react";
// import ReactDOM from "react-dom";

import "./word.styles.scss";

class Words extends React.Component {
  render() {
    return (
      <div className="Words">
        {this.props.randomWord.split("").map((el, id) => (
          <div className={`word`} key={id}>
            {this.props.correctLetter}
          </div>
        ))}
      </div>
    );
  }
}

export default Words;
