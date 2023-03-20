import { FormControlLabel, Checkbox, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

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
        <Button startIcon={<AutoFixHighIcon />}>Edit</Button>
        <Button startIcon={<DeleteIcon />}>Delete</Button>
      </div>
    </li>
  );
};
