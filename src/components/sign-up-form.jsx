import { Box, Button, TextField, useMediaQuery } from '@mui/material';
import { useReducer } from 'react';

import { isInputValid } from '../lib/lib';
import { inputs } from '../lib/inputs';
import { formReducer } from '../reducers/form-reducer';

const SignUpForm = () => {
  const [state, dispatch] = useReducer(formReducer, {
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const matches = useMediaQuery('(min-width:600px)');

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(state));
  };

  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexDirection: matches ? 'row' : 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Box component="img" alt="image" width={'250px'} src="/public/vite.svg" />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
          padding: '2rem',
          gap: '2rem',
          flex: 1,
        }}
        component={'form'}
        onSubmit={submitHandler}>
        {inputs.map((input) => (
          <TextField
            autoComplete={input.type === 'password' ? 'false' : 'true'}
            key={input.label}
            onChange={(e) =>
              dispatch({ type: input.label, payload: e.target.value })
            }
            label={input.label}
            value={state[input.label]}
            type={input.type}
            placeholder={input.placeholder}
            error={
              input.label !== 'confirmPassword' &&
              state[input.label] !== '' &&
              !isInputValid(state[input.label], input.label)
            }
            helperText={
              state[input.label] !== '' &&
              input.label !== 'confirmPassword' &&
              !isInputValid(state[input.label], input.label) &&
              input.errMsg
            }
          />
        ))}
        <Button type="submit" variant="contained">
          submit
        </Button>
      </Box>
    </Box>
  );
};

export default SignUpForm;
