import { FormControlLabel, Checkbox, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { useDispatch } from 'react-redux';
import { deleteWord, editWord } from 'redux/wordSlice';
import { useState } from 'react';

export const WordsListItem = ({
  word: { ukrWord, engWord, checked, id },
  number,
}) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [ukrVariant, setUkrVariant] = useState(ukrWord);
  const [engVariant, setEngVariant] = useState(engWord);

  const handleEdit = e => {
    if (isEdit) {
      dispatch(
        editWord({ id, ukrWord: ukrVariant, engWord: engVariant, checked })
      );
      setIsEdit(false);
      return;
    }
    setIsEdit(true);
  };

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
      {isEdit ? (
        <input
          type="text"
          value={ukrWord}
          onChange={e => {
            setUkrVariant(e.targetvalue);
          }}
        />
      ) : (
        <span>{ukrWord}</span>
      )}
      {isEdit ? (
        <input
          type="text"
          value={engWord}
          onChange={e => {
            setEngVariant(e.targetvalue);
          }}
        />
      ) : (
        <span>{engWord}</span>
      )}
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
