import { Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import './App.css';
import { 

  Button, 
} from '@chakra-ui/react'
import SignUpModal from "./components/SignUpModal";
import { useDisclosure } from '@chakra-ui/react'
import { TestFunc1 } from "./modalFunction";

function App() {
  function auau(){
    alert("nha");
  }
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
