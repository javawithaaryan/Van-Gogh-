import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import ArtworkDetail from './pages/ArtworkDetail';
import Stories from './pages/Stories';
import Kids from './pages/Kids';
import Timeline from './pages/Timeline';
import Letters from './pages/Letters';
import Legacy from './pages/Legacy';
import History from './pages/History';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/artwork/:id" element={<ArtworkDetail />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/letters" element={<Letters />} />
          <Route path="/legacy" element={<Legacy />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
