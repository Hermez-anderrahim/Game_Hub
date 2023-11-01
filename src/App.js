import "./App.css";
import { Navbar } from "./components/navbar";
import { Route, Router, Routes } from "react-router-dom";
import { Card } from "./components/card";
import { MainPage } from "./components/mainPage";
import { LeaderBoard } from "./components/LeaderBoard";

function App() {
  return (
    <div className="">
      <LeaderBoard />
    </div>
  );
}

export default App;
