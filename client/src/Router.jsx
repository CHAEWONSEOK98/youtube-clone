import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Video from './pages/Video';
import SignIn from './pages/SignIn';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        index: true,
        element: <Home type="random" />,
      },
      {
        path: '/trends',
        element: <Home type="trend" />,
      },
      {
        path: '/subscriptions',
        element: <Home type="sub" />,
      },
      {
        path: '/video/:id',
        element: <Video />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
