
import './App.css'
import SignIn from "./pages/auth/SignIn.jsx";
import SignUp from "./pages/auth/SignUp.jsx";
import {BrowserRouter, Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Home from "./pages/Home.jsx";


function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={'/signin'} element={<SignIn />} />
                <Route path={'/signup'} element={<SignUp />} />
                <Route path={'/home'} element={<Home />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
