import { Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import './App.css';
import Header from "./components/Header"
import Profile from "./pages/profile";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/profile" exact element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
