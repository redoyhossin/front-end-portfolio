import { ToastContainer } from 'react-toastify';
import './App.css';
import Router from './Router/Router';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer position="top-center"/>
      <Router/>
   </div>
  );
}

export default App;
