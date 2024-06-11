
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserContextProvider } from './context/UserContext.jsx';
import App from './App.jsx';
import UploadVideo from './pages/uploadVideo/UploadVideo.jsx';
import ListVideosByUser from './pages/listVideosByUser/ListVideosByUser.jsx';
import NotFound from './pages/notFoundPage/NotFoundPage.jsx';
import WatchVideo from './pages/watchVideo/WatchVideo.jsx';
import Profile from './pages/profile/Profile.jsx';
import Layout from './components/layout/Layout.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><App /></Layout>,
  },
  {
    path: '/profile',
    element: <Layout><Profile /></Layout>,
  },
  {
    path: '/upload-video',
    element: <Layout><UploadVideo /></Layout>,
  },
  {
    path: '/list-videos/:usernameChannel',
    element: <Layout><ListVideosByUser /></Layout>,
  },
  {
    path: '/watch-video/:videoId',
    element: <Layout><WatchVideo /></Layout>,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>,
);