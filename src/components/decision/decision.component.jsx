import React from "react";

import "./decision.styles.scss";
import Button from "../button/button.component";

class WinnerOrLoser extends React.Component {
  render() {
    let content;
    let showClass = null;
    if (this.props.currentWord.length === 0) {
      content = "You Win!!!";
      showClass = "show";
    } else if (this.props.wrongClicks === 6) {
      content = "You Lose!!!";
      showClass = "show";
    }

    return (
      <div className={`WinnerOrLoser ${showClass}`}>
        <Button handleClick={this.props.handleReset} />
        <div className={"text-content"}>
          <h1>{content}</h1>
        </div>
      </div>
    );
  }
}

export default WinnerOrLoser;
