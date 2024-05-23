// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import 'react-quill/dist/quill.snow.css';
// import ReactDOM from 'react-dom/client'
// import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { RouterProvider } from 'react-router-dom';
// import { router } from './routes/routes';
// import { Provider } from "react-redux";
// import { store } from "./redux/store";
// import { ToastContainer } from 'react-toastify'; // Import ToastContainer
// import 'react-toastify/dist/ReactToastify.css'; // Import ToastContainer CSS

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <RouterProvider router={router} />
//     <ToastContainer />
//   </Provider>
// )


import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-quill/dist/quill.snow.css';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// import ScrollToTop from 'react-scroll-to-top';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(

  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />

    </Provider>
  </QueryClientProvider>

);
