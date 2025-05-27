import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import PlaceHolder from "./pages/placeholder/PlaceHolder";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import LoginPopup from "./components/loginpopup/LoginPopup";

function App() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      {login ? <LoginPopup setLogin={setLogin} setUser={setUser} /> : <></>}
      <div className="app">
        <Navbar setLogin={setLogin} user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceHolder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
