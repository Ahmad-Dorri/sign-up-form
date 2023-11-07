export const formReducer = (state, action) => {
  switch (action.type) {
    case 'firstname':
      return {
        ...state,
        firstname: action.payload,
      };
    case 'lastname':
      return {
        ...state,
        lastname: action.payload,
      };
    case 'email':
      return {
        ...state,
        email: action.payload,
      };
    case 'phoneNumber':
      return {
        ...state,
        phoneNumber: action.payload,
      };
    case 'password':
      return {
        ...state,
        password: action.payload,
      };
    case 'confirmPassword':
      return {
        ...state,
        confirmPassword: action.payload,
      };
    default:
      return state;
  }
};
