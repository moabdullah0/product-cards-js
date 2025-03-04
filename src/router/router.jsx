import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import FetchProject from "../project/FetchProject";
import ProductDetailes from "../project/ProductDetailes";
import LoginPage from "../auth/LoginPage";
import Home from "../layout/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:'home',
        element: <Home />,
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
    ],
  },
]);
export default router;
