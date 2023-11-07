import { TextField } from '@mui/material';
import { useReducer } from 'react';
import { isInputValid } from '../lib/lib';

const formReducer = (state, action) => {
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

const CustomTextField = ({ label, type, placeholder, errMsg }) => {
  const [state, dispatch] = useReducer(formReducer, {
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  return (
    <TextField
      onChange={(e) => dispatch({ type: label, payload: e.target.value })}
      label={label}
      value={state[label]}
      type={type}
      placeholder={placeholder}
      error={state[label] !== '' && !isInputValid(state[label], label)}
      helperText={
        state[label] !== '' && !isInputValid(state[label], label) && errMsg
      }
    />
  );
};

export default CustomTextField;
