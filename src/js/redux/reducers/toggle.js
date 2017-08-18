const initial = {
  signup: false
};

export default function reduce(state=initial, action) {
  switch (action.type) {
    case 'TOGGLE_SIGNUP':
      return {
        ...state,
        signup: !state.signup
      };

    case 'RESET_SIGNUP':
      return {
        ...state
      };
  }

  return state;
}
