import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import ErrorComponent from './components/error-component/ErrorComponent';
import { Provider } from 'react-redux';
import { setupStore } from './app/store';
import App from './App';
import Home from './pages/home/Home';
import Authorisation from './pages/authorisation/Authorysation';
import Graphyql from './pages/graphyql/Graphyql';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorComponent />}>
      <Route index element={<Home />} />
      <Route path="auth" element={<Authorisation />} />
      <Route path="graphyql" element={<Graphyql />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
