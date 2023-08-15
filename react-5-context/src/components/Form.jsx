import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import { v4 as uuid } from 'uuid';
import NoteContext from '../context/note/NoteContext';
import NoteService from '../services/NoteService';
import { noteActions } from '../context/note/NoteAction';

const Form = () => {
  const [note, setNote] = useState('');
  const { dispatch } = useContext(NoteContext);

  const handleSubmit = async event => {
    try {
      event.preventDefault();

      if (note === '') {
        window.alert('Please fill the form');
        return;
      }

      const newNote = {
        id: uuid(),
        note,
      };

      dispatch(noteActions.load(true));

      const data = await NoteService.add(newNote);
      
      dispatch(noteActions.add(data));
    } catch (error) {
      window.alert(`Error Occurred: ${error.message}`);
    } finally {
      setNote('');
      dispatch(noteActions.load(false));
    }
  };

  const handleNoteChange = event => {
    setNote(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Write some notes..."
            value={note}
            onChange={handleNoteChange}
          />
          <button className="btn btn-success" type="submit">
            <FaPlus />
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;

Form.propTypes = {
  add: PropTypes.func,
};
