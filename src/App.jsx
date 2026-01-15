import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import VideoPromotions from './pages/VideoPromotions';
import DigitalMarketing from './pages/DigitalMarketing';
import MusicDistribution from './pages/MusicDistribution';
import WhatsAppMarketing from './pages/WhatsAppMarketing';
import BulkSMS from './pages/BulkSMS';
import VoiceCalls from './pages/VoiceCalls';
import AppMarketing from './pages/AppMarketing';
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
          <Route path="/video-promotions" element={<VideoPromotions />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/music-distribution" element={<MusicDistribution />} />
          <Route path="/services/whatsapp-marketing" element={<WhatsAppMarketing />} />
          <Route path="/services/bulk-sms" element={<BulkSMS />} />
          <Route path="/services/voice-calls" element={<VoiceCalls />} />
          <Route path="/services/app-marketing" element={<AppMarketing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
