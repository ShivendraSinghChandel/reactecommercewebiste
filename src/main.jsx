import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/r1.css';
import {Provider} from 'react-redux';
import Store from './Store.jsx';


createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <App />
  </Provider>
)
