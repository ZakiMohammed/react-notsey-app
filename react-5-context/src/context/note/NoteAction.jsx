export const noteActions = {
  getAll: notes => ({
    type: 'getAll',
    payload: notes,
  }),
  add: note => ({
    type: 'add',
    payload: note,
  }),
  remove: id => ({
    type: 'remove',
    payload: id,
  }),
  load: state => ({
    type: 'load',
    payload: state,
  }),
};
