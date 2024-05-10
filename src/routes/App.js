import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Login />
    },
    {
      path:"/home",
      element:<Home/>
    },
    {
      path:"/signUp",
      element:<SignUp/>
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
    
  );
}

export default App;
