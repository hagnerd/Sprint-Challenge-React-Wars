import React, { Component } from "react";
import StarWarsCharacterList from "./components/StarWarsCharacterList";
import Pagination from "./components/Pagination";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      isLoading: true,
      currentLink: "https://swapi.co/api/people/",
      prevLink: null,
      nextLink: null
    };
  }

  componentDidMount() {
    this.getCharacters(this.state.currentLink);
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.

    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          starwarsChars: data.results,
          isLoading: false,
          prevLink: data.previous,
          nextLink: data.next
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  handleNextLinkClick = () => {
    this.getCharacters(this.state.nextLink);
  };

  handlePrevLinkClick = () => {
    this.getCharacters(this.state.prevLink);
  };

  render() {
    const { starwarsChars, isLoading, nextLink, prevLink } = this.state;

    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>

        {isLoading ? null : (
          <StarWarsCharacterList characters={starwarsChars} />
        )}

        <Pagination
          handlePrevClick={this.handlePrevLinkClick}
          handleNextClick={this.handleNextLinkClick}
          isPrevLinkDisabled={prevLink === null || isLoading}
          isNextLinkDisabled={nextLink === null || isLoading}
        />
      </div>
    );
  }
}

export default App;
