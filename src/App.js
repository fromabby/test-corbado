import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Provider from './providers'

const CORBADO_PROJECT_ID = process.env.REACT_APP_CORBADO_PROJECT_ID;

const RouteProvider = () => {
  const routes = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/profile',
      element: <div>Profile</div>,
    },
  ];

  return <RouterProvider router={createBrowserRouter(routes)} />;
};

function App() {
  return (
    <div className='App'>
      <Provider>
        <RouteProvider />
      </Provider>
      <p>learn react</p>
    </div>
  )
}

export default App