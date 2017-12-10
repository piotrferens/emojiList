import React, { Component } from "react";
import emojiJson from "./emojiList";

class App extends Component {
  render() {
    return (
      <div className="App">
        {emojiJson.map(emoji => <div key={emoji.title}>{emoji.symbol}</div>)}
      </div>
    );
  }
}

export default App;
