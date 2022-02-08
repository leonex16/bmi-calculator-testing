import React from 'react';
import ReactDOM from 'react-dom';

import { Flip, ToastContainer, ToastContainerProps } from 'react-toastify';

import { Home } from './pages/home/Home';

import 'react-toastify/dist/ReactToastify.css';
import './main.css';

const toastContainerProps: ToastContainerProps = {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  draggable: true,
  pauseOnHover: false,
  limit: 1,
  closeButton: false,
  transition: Flip,
};

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer { ...toastContainerProps } />
    <Home />
  </React.StrictMode>,
  document.getElementById( 'root' ),
);
