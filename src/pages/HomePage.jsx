import { Link, useSearchParams } from 'react-router-dom';
import { useNotes } from '../context/NotesContext';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { getActiveNotes } from '../utils/local-data';

function HomePage() {
  const { notes } = useNotes();
  void notes;

  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') ?? '';

  const activeNotes = getActiveNotes();
  const filteredNotes = activeNotes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase()),
  );

  const handleSearch = (value) => {
    if (value.trim() === '') {
      setSearchParams({}, { replace: true });
    } else {
      setSearchParams({ keyword: value }, { replace: true });
    }
  };

  const emptyMessage =
    keyword.trim() !== ''
      ? `Tidak ada catatan dengan judul mengandung "${keyword}"`
      : 'Tidak ada catatan';

  return (
    <div className="homepage">
      <div className="homepage__header">
        <div>
          <h2>Catatan Aktif</h2>
          <p className="homepage__subtitle">
            {filteredNotes.length} catatan
          </p>
        </div>

        <Link to="/notes/new" className="btn btn--primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
          Tulis Catatan
        </Link>
      </div>

      <SearchBar
        keyword={keyword}
        onSearch={handleSearch}
        placeholder="Cari judul catatan..."
      />

      <NoteList notes={filteredNotes} emptyMessage={emptyMessage} />
    </div>
  );
}

export default HomePage;