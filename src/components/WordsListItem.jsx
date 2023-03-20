import { FormControlLabel, Checkbox, Button } from '@mui/material';

export const WordsListItem = () => {
  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <span>1</span>
      <span>UA</span>
      <span>ENG</span>
      <div>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </div>
    </li>
  );
};
