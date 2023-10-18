import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '@/view/Home';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
