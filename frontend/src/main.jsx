import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import UploadVideo from './pages/uploadVideo/UploadVideo.jsx';
import ListVideosByUser from './pages/listVideosByUser/ListVideosByUser.jsx';
import NotFound from './pages/notFoundPage/NotFoundPage.jsx';
import WatchVideo from './pages/watchVideo/WatchVideo.jsx';

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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
