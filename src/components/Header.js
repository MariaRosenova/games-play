import { NavLink } from "react-router-dom";

const Header = () => {

  return (
    <header>
      <h1>
        
        <NavLink className="home" to="/">
          GamesPlay
        </NavLink>
      </h1>
      <nav>
        <NavLink activeStyle={{border:'1px outset #02072F'}} to="/games">All games</NavLink>

        <div id="user">
          <NavLink activeStyle={{border:'1px outset #02072F'}} to="/create-game">Create Game</NavLink>
          <NavLink activeStyle={{border:'1px outset #02072F'}} to="/logout">Logout</NavLink>
        </div>

        <div id="guest">
          <NavLink activeStyle={{border:'1px outset #02072F'}} to="/login">Login</NavLink>
          <NavLink activeStyle={{border:'1px outset #02072F'}} to="/register">Register</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
