import Form from './../components/Form';
import List from './../components/List';
import Empty from './../components/Empty';
import NoteProvider from '../context/note/NoteProvider';
import Loader from '../components/Loader';

const Home = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <NoteProvider>
            <Form />
            <Loader />
            <List />
            <Empty />
          </NoteProvider>
        </div>
      </div>
    </>
  );
};

export default Home;
