import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  LoginSignUp,
  EmailSent,
  SuccessOnRegistration,
  PageNotFound,
} from "./routes";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sign-in">
          <LoginSignUp />
        </Route>
        <Route path="/email-sent">
          <EmailSent />
        </Route>
        <Route path="/success">
          <SuccessOnRegistration />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
