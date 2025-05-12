import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import SignIn from './components/SignIn';
import GetProducts from './components/GetProducts';
import AddProduct from './components/AddProduct';
import SingleProduct from './components/SingleProduct';
import AboutUs from './components/AboutUs';
import "bootstrap-icons/font/bootstrap-icons.min.css";
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Contact from './components/Contact';







function App() {
  return (

      <Router>
        <div className="App">
          {/*  */}

          <Routes>
            <Route path='signup' element={<SignUp />} />
            <Route path='signin' element={<SignIn />} />
            <Route path='/' element={<GetProducts />} />
            <Route path='addproduct' element={<AddProduct />} />
            <Route path='singleproduct' element={<SingleProduct />} />
            <Route path='aboutus' element={<AboutUs />} />
            <Route path='faqs' element={<FrequentlyAskedQuestions />} />
            <Route path='/contact' element={<Contact/>}/>
            
           
            
          </Routes>
        </div>
      </Router>
    
  );
}

export default App;
