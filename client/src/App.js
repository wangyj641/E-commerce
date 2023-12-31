import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from "./scenes/home/Home";
import ItemDetail from "./scenes/home/itemDetail/ItemDetail";
import Checkout from "./scenes/home/checkout/Checkout";
import Confirmation from "./scenes/home/checkout/Confirmation";
import Navbar from "./scenes/home/global/Navbar";

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null;
}


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='item/:itemId' element={<ItemDetail />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='checkout/success' element={<Confirmation />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
