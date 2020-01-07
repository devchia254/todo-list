import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid"; // this just creates a random unique id, initiated by a function
import "./App.css";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = e => {
    this.setState({ item: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault(); // prevent refresh page when submitting

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    const updatedItems = [...this.state.items, newItem]; // updates the state from a new array instead of the state itself (since immutable)

    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    });

    // console.log(newItem);
  };

  clearList = () => {
    this.setState({ items: [] });
  };

  // This function behaves by prop drilling (not advisable). Redux & Context API prevents this
  handleDelete = id => {
    //Match the items id with the items id from the state
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({ items: filteredItems });
  };

  handleEdit = id => {};

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-captilalize text-center">Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
