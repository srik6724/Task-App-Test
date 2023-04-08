import React, { Component } from "react";
import TaskService from "../Services/TaskService";
import ClockComponent from "./ClockComponent";
import DueDateComponent from "./DueDateComponent";
import CheckMarkComponent from "./CheckMarkComponent";
import RemainingTimeComponent from "./RemainingTimeComponent";
import "./ListTask.css";
class ListTaskComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };

    this.addTask = this.addTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  componentDidMount() {
    //Retrieving data from database
    //and storing that into array
    TaskService.getTasks().then((res) => {
      this.setState({ tasks: res.data });
    });
  }

  addTask() {
    window.open("/add-task");
  }

  updateTask(id) {
    window.open(`/update-task/${id}`);
  }

  deleteTask(id) {
    TaskService.deleteTask(id).then((res) => {
      this.setState({
        tasks: this.state.tasks.filter((task) => task.id != id),
      });
    });
  }

  render() {
    return (
      <html>
        <div>
          <h2 className="text-center">Task To-Do List</h2>
          <div className="row">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="#">
                This is an app for users to customize their own task list for
                the day.
              </a>
            </nav>
            <button className="btn btn-primary " onClick={this.addTask}>
              Add Task
            </button>
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Name Of Task</th>
                  <th>Length Of Task</th>
                  <th>Description Of Task</th>
                  <th>Update Task</th>
                  <th>Delete Task</th>
                  <th>Current Time</th>
                  <th>Due Date Of Tasks</th>
                  <th>Remaining Time Left </th>
                  <th>Completion of Task</th>
                </tr>
              </thead>
              <tbody>
                {this.state.tasks.map((task) => (
                  <tr key={task.id}>
                    <td>{task.firstName}</td>
                    <td>{task.lastName}</td>
                    <td>{task.taskName}</td>
                    <td>{task.lengthOfTask} minutes</td>
                    <td>{task.description}</td>
                    <td>
                      <button
                        onClick={() => this.updateTask(task.id)}
                        className="btn btn-info"
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => this.deleteTask(task.id)}
                        className="btn btn-info"
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <ClockComponent />
                    </td>
                    <td>
                      <DueDateComponent />
                    </td>
                    <td>
                      <RemainingTimeComponent />
                    </td>
                    <td>
                      <CheckMarkComponent />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </html>
    );
  }
}

export default ListTaskComponent;
