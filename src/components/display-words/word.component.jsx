import React from "react";

import "./word.styles.scss";

class Words extends React.Component {
  render() {
    return (
      <div className="Words">
        {Object.values(this.props.wordPositions).map((el, id) => {
          return (
            <div className={`word`} key={id}>
              {this.props.wordPositions[`word${id}`]}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Words;
