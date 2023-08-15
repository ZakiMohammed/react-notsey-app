import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import NoteService from '../services/NoteService';

const Item = ({ note, remove, loader }) => {
  const handleRemove = async () => {
    try {
      loader(true);

      await NoteService.remove(note.id);

      remove(note.id);
    } catch (error) {
      window.alert(`Error Occurred: ${error.message}`);
    } finally {
      loader(false);
    }
  };

  return (
    <>
      <div className="card bg-body-secondary border-0 mb-2">
        <div className="card-body">
          <p className="card-text">
            <span className="d-flex justify-content-between align-items-center">
              <span>{note.note}</span>
              <button
                type="button"
                className="btn btn-light ms-3"
                onClick={handleRemove}>
                <FaTrash size={'1rem'} className='text-danger' />
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
  remove: PropTypes.func,
  loader: PropTypes.func,
};
