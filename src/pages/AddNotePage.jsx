import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNotes } from '../context/NotesContext';

function AddNotePage() {
  const { addNote } = useNotes();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (title.trim() === '' || body.trim() === '') {
      setError('Judul dan isi catatan tidak boleh kosong.');
      return;
    }

    addNote({ title: title.trim(), body: body.trim() });
    navigate('/');
  };

  const handleCancel = () => navigate(-1);

  return (
    <div className="add-new-page">
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

      <form onSubmit={onSubmitHandler} className="add-new-page__form">
        <div className="add-new-page__input">
          <input
            type="text"
            className="add-new-page__input__title"
            placeholder="Judul catatan..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="add-new-page__input__body"
            placeholder="Tulis isi catatan di sini..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        {error && <p className="form-error">{error}</p>}

        <div className="add-new-page__actions">
          <button
            type="button"
            className="btn btn--ghost"
            onClick={handleCancel}
          >
            Batal
          </button>
          <button type="submit" className="btn btn--primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
              <path d="M17 21v-8H7v8M7 3v5h8" />
            </svg>
            Simpan Catatan
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNotePage;