import { FaSnowflake } from 'react-icons/fa';

const Loader = () => {
  return (
    <>
      {
        <div className="loader">
          <FaSnowflake className="text-success" size={'5rem'} />
        </div>
      }
    </>
  );
};

export default Loader;
