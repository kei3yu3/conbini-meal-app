import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import Favorites from './pages/Favorites';
import { FloatingNav } from './components/layout/FloatingNav';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <FloatingNav />
    </HashRouter>
  );
}

export default App;