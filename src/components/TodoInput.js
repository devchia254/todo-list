import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange } = this.props;

    return (
      <div className="card card-body my-3">
        <form>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="Add a Todo Item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-block btn-primary mt-3 text-capitalize"
          >
            add item
          </button>
        </form>
      </div>
    );
  }
}
