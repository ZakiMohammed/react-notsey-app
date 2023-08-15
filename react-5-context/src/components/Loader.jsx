import { useContext } from 'react';
import { FaSnowflake } from 'react-icons/fa';
import noteContext from '../context/note/NoteContext';

const Loader = () => {
  const { loader } = useContext(noteContext);

  return (
    <>
      {loader && (
        <div className='loader'>
          <FaSnowflake className="text-success" size={'5rem'} />
        </div>
      )}
    </>
  );
};

export default Loader;
