import { createBrowserRouter } from "react-router-dom";
import ProjectDetails from "../components/PorjectDetails/ProjectDetails";
import Main from "../layout/Main";
import Pages from "../Pages/Pages";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Pages></Pages>
      },
      {
        path: '/projectDetails',
        element: <ProjectDetails></ProjectDetails>
      }
    ]
  }
])

export default router;