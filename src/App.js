import GameCatalog from "./components/GameCatalog";
import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import GameCreate from "./components/GameCreate";
// import GameEdit from "./components/GameEdit";
// import GameDetails from "./components/GameDetails";
// import GameCatalog from "./components/GameCatalog";

const routes = {
  '/home': <WelcomeWorld />,
  '/games': <GameCatalog/>,
  '/create-game': <GameCreate/>,
}
function App() {
  return (
    <div id="box">
      <Header />

      <main id="main-content"></main>

        <WelcomeWorld />

    </div>
  );
}

export default App;
