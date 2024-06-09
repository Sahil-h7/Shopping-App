import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"

const App = () => {
  return (
    <div className="w-screen h-screen bg-gray-50">
        <div className="bg-slate-900">
          <Navbar/>
        </div>
        <div className="bg-gray-50"  >
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </div>
    </div>
    )
};

export default App;
