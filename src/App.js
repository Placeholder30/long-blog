import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;
