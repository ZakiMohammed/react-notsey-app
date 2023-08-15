import { useState } from 'react';
import Form from './../components/Form';
import List from './../components/List';
import Empty from './../components/Empty';

const Home = () => {
  const [notes, setNotes] = useState();

  const getAll = notes => {
    setNotes(notes);
  };
  const add = newNote => {
    setNotes([newNote, ...notes]);
  };
  const remove = id => {
    setNotes(notes.filter(i => i.id !== id));
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <Form add={add} />
          <List notes={notes} remove={remove} getAll={getAll} />
          <Empty notes={notes} />
        </div>
      </div>
    </>
  );
};

export default Home;
