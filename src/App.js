import './App.css';
import { Home } from './pages/Home';
import { Route,Routes } from 'react-router-dom';
import { Contact } from './pages/Contact';
import Careers from './pages/Careers';
import { About } from './pages/About';

function App() {
  return (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>

  );
}

export default App;
