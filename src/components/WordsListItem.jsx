import { FormControlLabel, Checkbox } from '@mui/material';

export const WordsListItem = () => {
  return (
    <li>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
    </li>
  );
};
