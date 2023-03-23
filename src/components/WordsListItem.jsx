import { FormControlLabel, Checkbox, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { useDispatch } from 'react-redux';
import { deleteWord, editWord, toggleCompleted } from 'redux/wordSlice';
import { useState } from 'react';

export const WordsListItem = ({
  word: { ukrWord, engWord, checked, id },
  number,
}) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [ukrVariant, setUkrVariant] = useState(ukrWord);
  const [engVariant, setEngVariant] = useState(engWord);
  const [isToggle, setToggle] = useState(false);

  const handleToggle = e => {
    if (isToggle) {
      dispatch(
        toggleCompleted({
          id,
          ukrWord: ukrVariant,
          engWord: engVariant,
          checked: !checked,
        })
      );
      setToggle(false);
      return;
    }
    setToggle(true);
  };

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
        onChange={handleToggle}
      />
      <span>{number}</span>
      {isEdit ? (
        <input
          type="text"
          value={ukrWord}
          onChange={e => {
            setUkrVariant(e.target.value);
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
            setEngVariant(e.target.value);
          }}
        />
      ) : (
        <span>{engWord}</span>
      )}
      <div>
        <Button onClick={handleEdit} startIcon={<AutoFixHighIcon />}>
          {isEdit ? 'Save' : 'Edit'}
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
