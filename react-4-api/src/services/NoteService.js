import axios from 'axios';

const client = axios.create({
  baseURL: `http://localhost:3000/notes/`,
});

const getAll = async () => {
  const response = await client.get();
  return response.data;
};

const add = async note => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await client.post('', note, options);
  return response.data;
};

const remove = async id => {
  const response = await client.delete(`${id}`);
  return response.data;
};

const NoteService = {
  getAll,
  add,
  remove,
};

export default NoteService;
