import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import FetchProject from "../Products/FetchProduct";
import ProductDetailes from "../Products/ProductDetails/ProductDetailes";
import Checkout from "../Checkout/Checkout";
import ProfilePage from "../auth/ProfilePage";
import LoginPage from "../auth/LoginPage";
import Slider from "../slider/Slider";
import Home from "../Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "products",
        element: <FetchProject />,
      },
      {
        path: "product/:id",
        element: <ProductDetailes />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "slider",
        element: <Slider />,
      },
    ],
  },
]);
export default router;
