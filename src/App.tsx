import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import Favorites from './pages/Favorites';
import { FloatingNav } from './components/layout/FloatingNav';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <FloatingNav />
    </BrowserRouter>
  );
}

export default App;