import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./style.scss";
import Seats from "./pages/Seats";
import Ticket from "./pages/Ticket";
import Book from "./pages/Book";
import Pay from "./pages/Pay";
import Welcome from "./pages/Welcome";
import Contact from "./pages/Contact";
import History from "./pages/History";
import Aboutus from "./pages/Aboutus";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
    
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/event/:id",
        element: <Single />,
      },
      {
        path: "/book",
        element: <Book/>,
      },
      {
        path: "/seats",
        element: <Seats />,
      },
      {
        path: "/pay",
        element: <Pay/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/history",
        element: <History/>,
      },
      {
        path: "/ticket",
        element: <Ticket/>,
      },
      {
        path: "/about",
        element: <Aboutus/>,
      },
    ],
  },
   {
           path:"/",
           element:<Welcome/>
   },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Welcome />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
