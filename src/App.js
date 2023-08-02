import { useState } from "react";
import ErrorPage from "./components/ErrorPage";
import GameCatalog from "./components/GameCatalog/GameCatalog.js";
import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import GameCreate from "./components/GameCreate";
// import GameEdit from "./components/GameEdit";
import GameDetails from "./components/GameDetails";

function App() {
  const [page, setPage] = useState("/home");

  const navigationChangeHandler = (path) => {
    setPage(path);
  };

  const router = (path) => {
    let pathNames = path.split("/");
    let rootPath = pathNames[1];
    let argument = pathNames[2];


    const routes = {
      "home": <WelcomeWorld />,
      "games": <GameCatalog navigationChangeHandler={navigationChangeHandler} />,
      "create-game": <GameCreate />,
      "login": <Login />,
      "register": <Register />,
      "details": <GameDetails id={argument} />,
    };

    return routes[rootPath];
  };

  return (
    <div id="box">
      <Header navigationChangeHandler={navigationChangeHandler} />
      <main id="main-content">{router(page) || <ErrorPage />}</main>

      <WelcomeWorld />
    </div>
  );
}

export default App;
