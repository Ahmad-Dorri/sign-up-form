import { Box } from '@mui/material';

import CustomTextField from './components/custom-text-field';

const inputs = [
  {
    label: 'firstname',
    type: 'text',
    placeholder: 'Your name',
    errMsg: 'invalid firstname',
  },
  {
    label: 'lastname',
    type: 'text',
    placeholder: 'Your lastname',
    errMsg: 'invalid lastname',
  },
  {
    label: 'email',
    type: 'email',
    placeholder: 'Your email',
    errMsg: 'invalid email',
  },
];

function App() {
  return (
    <Box component={'form'}>
      {inputs.map((input) => (
        <CustomTextField
          type={input.type}
          placeholder={input.placeholder}
          key={input.label}
          label={input.label}
          errMsg={input.errMsg}
        />
      ))}
    </Box>
  );
}

export default App;
