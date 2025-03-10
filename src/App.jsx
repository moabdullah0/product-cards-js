import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/Navbar";
import FetchProject from "./Products/FetchProject";

function App() {
  return (
    <>
      <Navbar />

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
