import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import Navbar from './layout/Navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);


function App() {
  return (
    <div>
      <Navbar />
     <RouterProvider router={router} />
    </div>
 
  );
}

export default App;
