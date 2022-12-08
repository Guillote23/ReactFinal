import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/layout/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FaqPage from './pages/FaqPage';
import NftPage from './pages/NftPage';
import ContactPage from './pages/ContactPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/nft" element={<NftPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
