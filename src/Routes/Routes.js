import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
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
        path: '/blogs',
        element: <Blogs></Blogs>
      }
    ]
  },
  {
    path: `/projectDetails/:id`,
    element: <ProjectDetails></ProjectDetails>
  }
])

export default router;