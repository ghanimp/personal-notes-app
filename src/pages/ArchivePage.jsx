import { useSearchParams } from 'react-router-dom';
import { useNotes } from '../context/NotesContext';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { getArchivedNotes } from '../utils/local-data';

function ArchivePage() {
  const { notes } = useNotes();
  void notes;

  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') ?? '';

  const archivedNotes = getArchivedNotes();
  const filteredNotes = archivedNotes.filter((note) =>
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
      ? `Tidak ada catatan terarsip dengan judul mengandung "${keyword}"`
      : 'Arsip kosong';

  return (
    <div className="archive-page">
      <div className="homepage__header">
        <div>
          <h2>Arsip Catatan</h2>
          <p className="homepage__subtitle">
            {filteredNotes.length} catatan
          </p>
        </div>
      </div>

      <SearchBar
        keyword={keyword}
        onSearch={handleSearch}
        placeholder="Cari judul catatan terarsip..."
      />

      <NoteList notes={filteredNotes} emptyMessage={emptyMessage} />
    </div>
  );
}

export default ArchivePage;