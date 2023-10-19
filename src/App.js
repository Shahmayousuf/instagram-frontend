import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Profile from "./components/Profile/Profile";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/"></Route>
          <Route path='signin' element={<SignIn/>}></Route>
          <Route path='signup' element={<SignUp/>}></Route>
          <Route path='profile' element={<Profile/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
