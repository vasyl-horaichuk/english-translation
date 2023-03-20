import { FormControlLabel, Checkbox, Button } from '@mui/material';

export const WordsListItem = () => {
  return (
    <li>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <span>UA</span>
      <span>ENG</span>
      <Button>Edit</Button>
      <Button>Delete</Button>
    </li>
  );
};
