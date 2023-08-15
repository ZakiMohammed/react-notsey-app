import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Navbar />

        <div className="container my-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </>
  );
}

export default App;
