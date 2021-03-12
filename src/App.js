import React, { Component } from "react";
import Table from "./Table.js";
import Form from "./Form.js";

class App extends Component {
  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  };

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  state = {
    characters: []
  };
  render() {
    const { characters } = this.state;
    return (
      <div className="Container">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default App;
