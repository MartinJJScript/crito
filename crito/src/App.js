import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home.js';
import Contact from './views/Contact.js'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/contact" element= {<Contact />} />
      </Routes>

    </Router>
    
  );
}

export default App;
