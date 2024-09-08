import './App.scss';
import './Adaptive.scss'
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Masters from './Components/Masters';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Uslugi from './Components/Uslugi';
import Galereya from './Components/Galereya';
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Uslugi/>
      {/* <Galereya/> */}
      {/* <Masters/> */}
      <About/>
      <Contact/>
      <Footer/>
      <ToastContainer />

    </div>
  );
}

export default App;
