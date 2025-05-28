import { createBrowserRouter, RouterProvider } from "react-router";
import Character from "../pages/Character";



const router = createBrowserRouter([
  {
    path:"/", element: <Character/>
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
