import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Archive from "./pages/Archive/Archive";
import LabelFilter from "./pages/LabelFilter/LabelFilter";
import LandingPage from "./pages/LandingPage/LandingPage";
import Signin from "./pages/Signin/Signin";
import Trash from "./pages/Trash/Trash";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/signin' element={<Signin />} />
        <Route exact path='/homepage' element={<Homepage />} />
        <Route exact path='/trash' element={<Trash />} />
        <Route exact path='/archive' element={<Archive />} />
        <Route exact path='/labelfilter' element={<LabelFilter />} />
      </Routes>
    </>
  );
}

export default App;
