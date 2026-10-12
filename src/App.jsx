import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import AddNotePage from './pages/AddNotePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="app-container">
      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/archived" element={<ArchivePage />} />

          <Route path="/notes/new" element={<AddNotePage />} />

          <Route path="/notes/:id" element={<DetailPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;