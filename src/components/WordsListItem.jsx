import { FormControlLabel, Checkbox, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { useDispatch } from 'react-redux';
import { deleteWord, editWord } from 'redux/wordSlice';

export const WordsListItem = ({
  word: { ukrWord, engWord, checked, id },
  number,
}) => {
  const dispatch = useDispatch();
  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <FormControlLabel
        control={<Checkbox checked={checked} />}
        label="Label"
      />
      <span>{number}</span>
      <span>{ukrWord}</span>
      <span>{engWord}</span>
      <div>
        <Button
          onClick={() => dispatch(editWord(id))}
          startIcon={<AutoFixHighIcon />}
        >
          Edit
        </Button>
        <Button
          onClick={() => dispatch(deleteWord(id))}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </div>
    </li>
  );
};
