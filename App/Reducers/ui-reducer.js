export const TOGGLE_MODEL = 'TOGGLE_MODEL';
export const CLOSE_MODAL = ' CLOSE_MODEL';

const initialState = { showing: false, message: '', error: null};

export const toggleModel = (message, error) => ({
  type: TOGGLE_MODEL,
  message,
  error
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});

export default (state=initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODEL:
      return {showing: true, message: action.message, error: action.error};
    case CLOSE_MODAL:
      return initialState;
    default:
      return state;
  }
};
