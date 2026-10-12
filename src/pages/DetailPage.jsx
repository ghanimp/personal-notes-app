import { useNavigate, useParams } from 'react-router-dom';
import { useNotes } from '../context/NotesContext';
import { getNote } from '../utils/local-data';
import { showFormattedDate } from '../utils/index';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { notes, deleteNote, archiveNote, unarchiveNote } = useNotes();

  void notes;
  const note = getNote(id);

  if (!note) {
    return (
      <div className="detail-page">
        <div className="empty-state">
          <h3>Catatan tidak ditemukan</h3>
          <p>Tidak ada catatan dengan id &quot;{id}&quot;.</p>
          <button
            type="button"
            className="btn btn--outline"
            onClick={() => navigate('/')}
          >
            Kembali ke Daftar
          </button>
        </div>
      </div>
    );
  }

  const handleDelete = () => {
    if (window.confirm('Yakin ingin menghapus catatan ini?')) {
      deleteNote(note.id);
      navigate('/');
    }
  };

  const handleToggleArchive = () => {
    if (note.archived) {
      unarchiveNote(note.id);
    } else {
      archiveNote(note.id);
    }
  };

  return (
    <div className="detail-page">
      <button
        type="button"
        className="back-button"
        onClick={() => navigate(-1)}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Kembali
      </button>

      <h3 className="detail-page__title">{note.title}</h3>
      <p className="detail-page__createdAt">
        {showFormattedDate(note.createdAt)}
        {note.archived && <span className="detail-page__badge">Terarsip</span>}
      </p>

      <div className="detail-page__body">{note.body}</div>

      <div className="detail-page__actions">
        <button
          type="button"
          className="btn btn--outline"
          onClick={handleToggleArchive}
        >
          {note.archived ? (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18" />
                <path d="M18 9l-5 5-3-3-4 4" />
              </svg>
              Batalkan Arsip
            </>
          ) : (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="5" rx="1" />
                <path d="M4 9v10a1 1 0 001 1h14a1 1 0 001-1V9M10 13h4" />
              </svg>
              Arsipkan
            </>
          )}
        </button>

        <button
          type="button"
          className="btn btn--danger"
          onClick={handleDelete}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h18M8 6V4a1 1 0 011-1h6a1 1 0 011 1v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
            <path d="M10 11v6M14 11v6" />
          </svg>
          Hapus
        </button>
      </div>
    </div>
  );
}

export default DetailPage;