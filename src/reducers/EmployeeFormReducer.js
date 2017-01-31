import EMPLOYLEE_UPDATE from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYLEE_UPDATE:
      const { prop, value } = action.payload
      return { ...state, [prop]: value };
    default:
      return state;
  }
}
