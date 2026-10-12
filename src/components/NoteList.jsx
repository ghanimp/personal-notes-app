import PropTypes from 'prop-types';
import NoteItem from './NoteItem';
import { noteShape } from '../utils/propTypes';

function NoteList({ notes, emptyMessage }) {
  if (notes.length === 0) {
    return (
      <div className="notes-list-empty">
        <p>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(noteShape).isRequired,
  emptyMessage: PropTypes.string,
};

NoteList.defaultProps = {
  emptyMessage: 'Tidak ada catatan',
};

export default NoteList;