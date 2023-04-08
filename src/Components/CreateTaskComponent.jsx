import React, { Component } from "react";
import TaskService from "../Services/TaskService";
class CreateTaskComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      taskName: "",
      lengthOfTask: 0,
      description: "",
    };

    this.changefirstNameHandler = this.changefirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeNameOfTaskHandler = this.changeNameOfTaskHandler.bind(this);
    this.changeLengthOfTaskHandler = this.changeLengthOfTaskHandler.bind(this);
    this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
    this.saveTask = this.saveTask.bind(this);
  }

  saveTask = (e) => {
    e.preventDefault();

    let task = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      taskName: this.state.taskName,
      lengthOfTask: this.state.lengthOfTask,
      description: this.state.description,
    };
    console.log("task => " + JSON.stringify(task));

    TaskService.createTask(task).then((res) => {
      window.open("/tasks");
    });
  };

  changefirstNameHandler = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  changeLastNameHandler = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  changeNameOfTaskHandler = (event) => {
    this.setState({
      taskName: event.target.value,
    });
  };

  changeLengthOfTaskHandler = (event) => {
    this.setState({
      lengthOfTask: event.target.value,
    });
  };

  changeDescriptionHandler = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  cancel() {
    window.open("/tasks");
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Add Task</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    placeholder="First name"
                    name="firstName"
                    className="form-control"
                    value={this.state.firstName}
                    onChange={this.changefirstNameHandler}
                  ></input>
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    placeholder="Last name"
                    name="lastName"
                    className="form-control"
                    value={this.state.lastName}
                    onChange={this.changeLastNameHandler}
                  ></input>
                </div>
                <div className="form-group">
                  <label>Name Of Task</label>
                  <input
                    placeholder="Name Of Task"
                    name="nameOfTask"
                    className="form-control"
                    value={this.state.taskName}
                    onChange={this.changeNameOfTaskHandler}
                  ></input>
                </div>
                <div className="form-group">
                  <label>Length Of Task</label>
                  <input
                    placeholder="Length Of Task"
                    name="lengthOfTask"
                    className="form-control"
                    value={this.state.lengthOfTask}
                    onChange={this.changeLengthOfTaskHandler}
                  ></input>
                </div>
                <div className="form-group">
                  <label>Description Of Task</label>
                  <input
                    placeholder="Description Of Task"
                    name="description"
                    className="form-control"
                    value={this.state.description}
                    onChange={this.changeDescriptionHandler}
                  ></input>
                </div>

                <button className="btn btn-success" onClick={this.saveTask}>
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={this.cancel.bind(this)}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateTaskComponent;
