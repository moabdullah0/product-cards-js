import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import FetchProject from "../Products/FetchProject";
import ProductDetailes from "../Products/ProductDetailes";
import Home from "../layout/Home";
import Checkout from "../components/Checkout";
import ProfilePage from "../auth/ProfilePage";
import LoginPage from "../auth/loginpage";
import Slider from "../slider/Slider";

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
