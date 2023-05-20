import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import ErrorPage from "./Components/ErorPage/ErrorPage";
import Reviews from "./Components/Reviews/Reviews";
import About from "./Components/About/About";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
