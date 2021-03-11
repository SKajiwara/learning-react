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

  state = {
    characters: [
      {
        name: "Charlie",
        job: "Janitor"
      },
      {
        name: "Mac",
        job: "Bouncer"
      },
      {
        name: "Dee",
        job: "Aspring actress"
      },
      {
        name: "Dennis",
        job: "Bartender"
      }
    ]
  };
  render() {
    const { characters } = this.state;
    return (
      <div className="Container">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form />
      </div>
    );
  }
}
export default App;
