import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import VideoPromotions from './pages/VideoPromotions';
import DigitalMarketing from './pages/DigitalMarketing';
import ContentAggregation from './pages/ContentAggregation';
import WhatsAppMarketing from './pages/WhatsAppMarketing';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/video-promotions" element={<VideoPromotions />} />
          <Route path="/services/content-aggregation" element={<ContentAggregation />} />
          <Route path="/services/whatsapp-marketing" element={<WhatsAppMarketing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
