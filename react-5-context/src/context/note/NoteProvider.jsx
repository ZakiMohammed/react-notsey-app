import PropTypes from 'prop-types';
import { useReducer } from 'react';
import NoteContext from './NoteContext';
import { noteReducers } from './NoteReducers';

const NoteProvider = ({ children }) => {
  const initialState = {
    notes: [],
    loader: false,
  };

  const [state, dispatch] = useReducer(noteReducers, initialState);

  const value = { ...state, dispatch };

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};

export default NoteProvider;

NoteProvider.propTypes = {
  children: PropTypes.any,
};
