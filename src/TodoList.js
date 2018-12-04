import React, { Component } from "react";
import List from "./List";
import TodoForm from "./TodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    };
  }
  render() {
    return (
      <div className="todo-container">
        <h1 className="title">Todo App</h1>
        <TodoForm 
          onSubmit={this._onSubmit}
          term={this.state.term}
          onChange={(event) => this._onChange(event.target.value)}
        />
        <div>
          <List items={this.state.items} />
        </div>
      </div>
    );
  }

  _onChange = userInput => {
    // const userInput = event.target.value;
    console.log(userInput);
    this.setState({
      term: userInput
    }, () => {
      console.log('wheee! state is now updated');
    });
  };

  _onSubmit = event => {
    //puts on the brakes
    event.preventDefault();
    // console.log("submitted!");
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term]
    });
  };
}

export default TodoList;
