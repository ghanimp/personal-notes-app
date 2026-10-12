import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import {
  addNote as addNoteToData,
  archiveNote as archiveNoteToData,
  deleteNote as deleteNoteToData,
  getAllNotes,
  unarchiveNote as unarchiveNoteToData,
} from '../utils/local-data';

const NotesContext = createContext(null);

function NotesProvider({ children }) {
  const [notes, setNotes] = useState(() => getAllNotes());

  const sync = useCallback(() => {
    setNotes([...getAllNotes()]);
  }, []);

  const addNote = useCallback(
    (data) => {
      addNoteToData(data);
      sync();
    },
    [sync],
  );

  const deleteNote = useCallback(
    (id) => {
      deleteNoteToData(id);
      sync();
    },
    [sync],
  );

  const archiveNote = useCallback(
    (id) => {
      archiveNoteToData(id);
      sync();
    },
    [sync],
  );

  const unarchiveNote = useCallback(
    (id) => {
      unarchiveNoteToData(id);
      sync();
    },
    [sync],
  );

  const value = useMemo(
    () => ({ notes, addNote, deleteNote, archiveNote, unarchiveNote }),
    [notes, addNote, deleteNote, archiveNote, unarchiveNote],
  );

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
}

NotesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useNotes() {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes harus dipakai di dalam NotesProvider');
  }
  return context;
}

export { NotesProvider, useNotes };