import { Route, Switch } from "react-router-dom";

import ErrorPage from "./components/ErrorPage";
import GameCatalog from "./components/GameCatalog/GameCatalog.js";
import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import GameCreate from "./components/GameCreate";
import GameDetails from "./components/GameDetails";

function App() {
  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <Switch>
          <Route path="/" exact component={WelcomeWorld} />
          <Route path="/games" exact component={GameCatalog} />
          <Route path="/create-game" component={GameCreate} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={ErrorPage} />
          <Route path="/register" component={Register} />
          <Route path="/games/:gameId" component={GameDetails} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
