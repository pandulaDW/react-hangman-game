import React from "react";
import uuid from "uuid";

import "./letter.styles.scss";

class Letters extends React.Component {
  render() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return (
      <div className="Letter">
        {alphabet.split("").map(el => (
          <p key={uuid()} onClick={this.props.handleClick.bind(el)}>
            {el}
          </p>
        ))}
      </div>
    );
  }
}

export default Letters;
