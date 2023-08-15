import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import NoteService from '../services/NoteService';

const List = ({ notes, remove, getAll, loader }) => {
  useEffect(() => {
    const getAllNotes = async () => {
      try {
        loader(true);

        const data = await NoteService.getAll();
        const notesAll = data.reverse();

        getAll(notesAll);
      } catch (error) {
        window.alert(`Error Occurred: ${error.message}`);
      } finally {
        loader(false);
      }
    };

    getAllNotes();
  }, []);

  return (
    <>
      {notes &&
        notes.map(note => (
          <Item note={note} remove={remove} loader={loader} key={note.id}></Item>
        ))}
    </>
  );
};

export default List;

List.propTypes = {
  notes: PropTypes.array,
  remove: PropTypes.func,
  getAll: PropTypes.func,
  loader: PropTypes.func,
};
