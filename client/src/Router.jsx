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
        path: '',
        element: <Home />,
      },
      {
        path: '/video/test',
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
