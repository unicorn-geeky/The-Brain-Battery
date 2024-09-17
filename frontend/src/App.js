import { lazy,Suspense  } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import './App.css';
import '../src/assets/index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './components/landingPage';
import About from './components/about';

// In your entry file (e.g., App.js)
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const SignUp = lazy(() => import('./components/Auth/signUp'))
const SignIn = lazy(() => import('./components/Auth/signIn'))

function App() {
  return (
    <Suspense fallback={<div className="d-flex justify-content-center align-items-center">Loading...</div>}>

      <div className="App">
        <Router>
          <Routes>
            <Route path="/register" element={<SignUp/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/about" element={<About/>} />
            {/* <Route path="*" element={<SignIn/>} />  //pagenot found */}


          </Routes>
        </Router>
        <ToastContainer />
      </div>
    </Suspense>
  );
}

export default App;
