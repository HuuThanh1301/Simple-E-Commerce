import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import ShopContextProvider from "./context/shop-context";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [
        { path: "", element: <Shop /> },
        { path: "cart", element: <Cart /> },
      ],
    },
  ]);
  return (
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
  );
}

export default App;
