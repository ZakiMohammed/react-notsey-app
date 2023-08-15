import Item from './Item';
import { useContext, useEffect } from 'react';
import NoteContext from '../context/note/NoteContext';
import NoteService from '../services/NoteService';
import { noteActions } from '../context/note/NoteAction';

const List = () => {
  const { notes, dispatch } = useContext(NoteContext);

  useEffect(() => {
    const getNotes = async () => {
      try {
        dispatch(noteActions.load(true));

        const data = await NoteService.getAll();
        const payload = data.slice().reverse();

        dispatch(noteActions.getAll(payload));
      } catch (error) {
        window.alert(`Error Occurred: ${error.message}`);
      } finally {
        dispatch(noteActions.load(false));
      }
    };

    getNotes();
  }, [dispatch]);

  return (
    <>{notes && notes.map(note => <Item note={note} key={note.id}></Item>)}</>
  );
};

export default List;
