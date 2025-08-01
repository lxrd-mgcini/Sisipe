import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import { Products } from "./pages/Products";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="products">
          <Route index element={<Products />} />
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="admin" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
