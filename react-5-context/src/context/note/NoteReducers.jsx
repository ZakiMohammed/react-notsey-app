export const noteReducers = (state, { type, payload }) => {
  switch (type) {
    case 'getAll':
      return {
        ...state,
        notes: payload,
      };
    case 'add':
      return {
        ...state,
        notes: [payload, ...state.notes],
      };
    case 'remove':
      return {
        ...state,
        notes: state.notes.filter(i => i.id !== payload),
      };
    case 'load':
      return {
        ...state,
        loader: payload,
      };
    default:
      return state;
  }
};
