import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Store from "./Pages/Store";
import Error from "./Pages/Error";
import DetailsPage from "./Pages/DetailsPage";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/store" element={<Store />} />
        <Route path="/detailspage/:id" element={<DetailsPage />} />
        <Route path="/" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
