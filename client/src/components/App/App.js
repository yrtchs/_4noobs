import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Auth from "../../pages/Auth/Auth";
import Blog from "../../pages/Blog/Blog";
import "./App.module.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth" exact>
          <Auth />
        </Route>
        <Route path="/" exact>
          <Blog />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
