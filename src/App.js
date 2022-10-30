import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import AddUser from './components/AddUser';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/user/add',
      element: <AddUser></AddUser>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
