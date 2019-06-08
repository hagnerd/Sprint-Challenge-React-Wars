import React from "react";
import "./App.css";
import DogList from "./components/DogList";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      breeds: []
    };
  }

  componentDidMount() {
    this.getAllDogs();
  }

  getAllDogs = () => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json())
      .then(data => {

        let arr = Object.entries(data.message).map(
          ([breedName, subBreeds]) => ({
            breed: breedName,
            subBreeds: subBreeds
          })
        );

        this.setState({
          breeds: arr,
          isLoading: false
        });
      })
      .catch(error => {
        throw new Error(error);
      });
  };

  render() {
    return (
      <div className="page-container">
        <header>
          <h1 className="title card">All Dog Breeds</h1>
        </header>
        <main className="app">
          {this.state.isLoading ? null : <DogList breeds={this.state.breeds} />}
        </main>
      </div>
    );
  }
}
