import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result'; // 空のファイルですがルーティングだけ先に行います
import Favorites from './pages/Favorites';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;