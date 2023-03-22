import { FormControlLabel, Checkbox, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

export const WordsListItem = ({
  word: { ukrWord, engWord, checked },
  number,
}) => {
  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <FormControlLabel
        control={<Checkbox Checked={checked} />}
        label="Label"
      />
      <span>{number}</span>
      <span>{ukrWord}</span>
      <span>{engWord}</span>
      <div>
        <Button startIcon={<AutoFixHighIcon />}>Edit</Button>
        <Button startIcon={<DeleteIcon />}>Delete</Button>
      </div>
    </li>
  );
};
