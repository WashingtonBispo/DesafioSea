import { Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import './App.css';
import Header from "./components/Header"

function App() {
  function auau(){
    alert("nha");
  }


  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
