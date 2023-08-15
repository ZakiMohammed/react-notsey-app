import { useContext } from 'react';
import NoteContext from '../context/note/NoteContext';
import { FaDove } from 'react-icons/fa';

const Empty = () => {
  const { loader, notes } = useContext(NoteContext);

  return (
    <>
      {!loader && notes && notes.length === 0 && (
        <div className="text-center p-3 text-muted">
          <h1 className="display-4 text-secondary">
            <FaDove className="me-2" />
          </h1>
          No notes found
        </div>
      )}
    </>
  );
};

export default Empty;
