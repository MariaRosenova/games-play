import { useState } from 'react';
import GameCatalog from "./components/GameCatalog";
import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import GameCreate from "./components/GameCreate";
// import GameEdit from "./components/GameEdit";
// import GameDetails from "./components/GameDetails";
// import GameCatalog from "./components/GameCatalog";

function App() {

  const [page, setPage] = useState('/home');

  const routes = {
    '/home': <WelcomeWorld />,
    '/games': <GameCatalog/>,
    '/create-game': <GameCreate/>,
  };
  
  const navigationChangeHandler = (path) => {
    setPage(path);
  };

  return (
    <div id="box">
      <Header navigationChangeHandler={navigationChangeHandler}/>

      <main id="main-content">
        {routes[page] || <h2>No Page Found!</h2>}
      </main>

        <WelcomeWorld />

    </div>
  );
}

export default App;
