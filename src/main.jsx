
import ReactDOM from 'react-dom/client'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
