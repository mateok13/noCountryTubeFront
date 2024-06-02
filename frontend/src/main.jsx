import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserContextProvider } from './context/UserContext.jsx';
import App from './App.jsx'
import UploadVideo from './pages/uploadVideo/UploadVideo.jsx';
import ListVideosByUser from './pages/listVideosByUser/ListVideosByUser.jsx';
import NotFound from './pages/notFoundPage/NotFoundPage.jsx';
import WatchVideo from './pages/watchVideo/WatchVideo.jsx';
import NavBar from './components/navBar/NavBar.jsx';
import SideBar from './components/sideBar/SideBar.jsx';
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },

  {
    path: '/upload-video',
    element: <UploadVideo />,
  },
  {
    path: '/list-videos/:username',
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
      <SideBar />
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>,
);