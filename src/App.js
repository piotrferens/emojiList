import React, { Component } from "react";
import emojiJson from "./emojiList";

class App extends Component {
  state = {
    emojis: emojiJson.slice(0, 30),
    searchText: ""
  };

  onSearch = event => {
    const value = event.target.value;
    const filteredEmojis = emojiJson.filter(emoji =>
      emoji.title.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({ searchText: value, emojis: filteredEmojis.slice(0, 30) });
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>💪Emoji search💪</h1>
        <input
          style={{ width: "100%", marginBottom: 50 }}
          onChange={this.onSearch}
          value={this.state.searchText}
        />
        {this.state.emojis.map(emoji => (
          <div
            style={{
              borderBottom: "1px solid grey",
              padding: 10,
              fontSize: 32
            }}
            key={emoji.title}
          >
            {emoji.symbol} {emoji.title}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
