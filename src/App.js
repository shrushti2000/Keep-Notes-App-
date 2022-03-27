import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Sidebar from "./components/Sidebar/Sidebar";
import Archive from "./pages/Archive/Archive";
import Signin from "./pages/Signin/Signin";
import Trash from "./pages/Trash/Trash";

function App() {
  return (
    <>
  
   <Header/>
    <Routes>
  
      <Route exact path='/signin' element={<Signin/>}/>
      <Route exact path='/' element={<Homepage/>}/>
      <Route exact path='/trash' element={<Trash/>}/>
      <Route exact path='/archive' element={<Archive/>}/>
    
    </Routes>
    </>
  );
}

export default App;
