import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <h1>Hello From Todo List</h1>
        <div className="container">
          <div className="row">
            <div className="col">
              <TodoItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
