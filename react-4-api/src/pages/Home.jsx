import { useState } from 'react';
import Form from './../components/Form';
import List from './../components/List';
import Empty from './../components/Empty';
import Loader from '../components/Loader';

const Home = () => {
  const [notes, setNotes] = useState();
  const [load, setLoad] = useState();

  const getAll = notes => {
    setNotes(notes);
  };
  const add = newNote => {
    setNotes([newNote, ...notes]);
  };
  const remove = id => {
    setNotes(notes.filter(i => i.id !== id));
  };
  const loader = state => {
    setLoad(state);
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <Form add={add} loader={loader} />
          <List notes={notes} remove={remove} getAll={getAll} loader={loader} />
          <Empty notes={notes} />
          {load && <Loader />}
        </div>
      </div>
    </>
  );
};

export default Home;
