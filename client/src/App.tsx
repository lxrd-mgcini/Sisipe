import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import Home from "./pages/Home";
import { Products } from "./pages/Products";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { useLayoutEffect } from "react";

type ScrollToTopWrapperProps = {
  children: React.ReactNode;
};

const ScrollToTopWrapper: React.FC<ScrollToTopWrapperProps> = ({
  children,
}) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTopWrapper>
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
      </ScrollToTopWrapper>
    </BrowserRouter>
  );
}

export default App;
