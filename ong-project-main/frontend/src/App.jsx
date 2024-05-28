import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import SearchBar from "./components/SearchBar.jsx";
import "./App.css";
import Login from "./routes/Login.jsx";
import { useContext } from "react";
import { AuthContext } from "./main.jsx";

function App() {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Login />;
  }

  return (
    <div className="App">
      <div className="searchContainer">
        <SearchBar />
      </div>
      <div className="container">
        <div className="navContainer">
          <Navbar />
        </div>
        <div className="outletContainer">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
