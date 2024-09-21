import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainRoot from "../MainRoot/MainRoot";
import CategoriesCarts from "../Components/CategoriesCarts/CategoriesCarts";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRoot></MainRoot>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader : () => fetch('categories.json')
        },
        {
          path : "/categoriesCart",
          element : <CategoriesCarts></CategoriesCarts>,
        }
      ],
    },
  ]);

export default router;