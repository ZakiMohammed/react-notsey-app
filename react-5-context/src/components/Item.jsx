import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import NoteContext from '../context/note/NoteContext';
import { useContext } from 'react';
import NoteService from '../services/NoteService';
import { noteActions } from '../context/note/NoteAction';

const Item = ({ note }) => {
  const { dispatch } = useContext(NoteContext);

  const handleRemove = async () => {
    try {
      dispatch(noteActions.load(true));

      await NoteService.remove(note.id);
      
      dispatch(noteActions.remove(note.id));
    } catch (error) {
      window.alert(`Error Occurred: ${error.message}`);
    } finally {
      dispatch(noteActions.load(false));
    }
  };

  return (
    <>
      <div className="card bg-light bg-body-secondary border-0 mb-2">
        <div className="card-body">
          <p className="card-text">
            <span className="d-flex justify-content-between align-items-center">
              <span>{note.note}</span>
              <button
                type="button"
                className="btn btn-light ms-3"
                onClick={handleRemove}>
                <FaTrash size={'1rem'} className="text-danger" />
              </button>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Item;

Item.propTypes = {
  note: PropTypes.object,
};
