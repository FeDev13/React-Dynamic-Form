import "./App.css";

import Data from "./components/Data";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </>
  );
}

export default App;
