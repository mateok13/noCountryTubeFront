import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserContextProvider } from './context/UserContext.jsx';
import NavBar from './components/navBar/NavBar.jsx';
import App from './App.jsx'
import UploadVideo from './pages/uploadVideo/UploadVideo.jsx';
import ListVideosByUser from './pages/listVideosByUser/ListVideosByUser.jsx';
import NotFound from './pages/notFoundPage/NotFoundPage.jsx';
import WatchVideo from './pages/watchVideo/WatchVideo.jsx';
import Profile from './pages/profile/Profile.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/upload-video',
    element: <UploadVideo />,
  },
  {
    path: '/list-videos/:usernameChannel',
    element: <ListVideosByUser />,
  },
  {
    path: '/watch-video/:videoId',
    element: <WatchVideo />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <NavBar />
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>,
);