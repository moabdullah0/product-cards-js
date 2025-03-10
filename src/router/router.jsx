import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import FetchProject from "../project/FetchProject";
import ProductDetailes from "../project/ProductDetailes";
import LoginPage from "../auth/LoginPage";
import Home from "../layout/Home";
import Checkout from "../components/Checkout";
import ProfilePage from "../auth/ProfilePage"; // Fixed capitalization in import

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
        path:'profile',
        element: <ProfilePage />,
      },
      {
        path:'login',
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
    ],
  },
]);
export default router;
