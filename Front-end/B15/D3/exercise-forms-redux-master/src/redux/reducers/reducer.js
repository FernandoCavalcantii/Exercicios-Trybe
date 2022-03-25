import { BTN_PERSONALSUBMIT, BTN_WORKSUBMIT } from '../actions/action';

const INITIAL_STATE = {
  // nome: '',
  // email: '',
  // cpf: '',
  // endereco: '',
  // cidade: '',
  // estado: '',
  personalInfo: {

  },
  workInfo: {

  },
};

function myReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case BTN_PERSONALSUBMIT:
    return {
      ...state,
      personalInfo: action.info,
    };
  case BTN_WORKSUBMIT:
    return {
      ...state,
      workInfo: action.info,
    };
  default: return state;
  }
}

export default myReducer;
