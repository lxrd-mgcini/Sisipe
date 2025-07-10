import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";

import { Products } from "./pages/Products";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="products">
          <Route index element={<Products />} />
          <Route path=":productId" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
