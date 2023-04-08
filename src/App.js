import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListTaskComponent from "./Components/ListTaskComponent";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import CreateTaskComponent from "./Components/CreateTaskComponent";
import UpdateTaskComponent from "./Components/UpdateTaskComponent";
import SurveyComponent from "./Components/SurveyComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <div>
                <ListTaskComponent />
                <SurveyComponent />
              </div>
            </Route>
            <Route path="/tasks" component={ListTaskComponent}></Route>
            <Route path="/add-task" component={CreateTaskComponent}></Route>
            <Route
              path="/update-task/:id"
              component={UpdateTaskComponent}
            ></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
