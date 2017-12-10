import React, { Component } from "react";
import emojiJson from "./emojiList";

class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>💪Emoji search💪</h1>
        <input style={{ width: "100%" }} />
        {emojiJson.map(emoji => (
          <div style={{ borderBottom: "1px solid grey" }} key={emoji.title}>
            {emoji.symbol}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
