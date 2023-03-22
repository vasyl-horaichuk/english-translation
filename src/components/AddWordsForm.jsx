import { Button, TextField } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import { blue } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { addWord } from 'redux/wordSlice';
import { nanoid } from '@reduxjs/toolkit';

export const AddWordsForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const ukrWord = e.currentTarget.elements.uk.value;
    const engWord = e.currentTarget.elements.en.value;
    // e.target.reset();
    dispatch(addWord({ id: nanoid(), ukrWord, engWord, checked: false }));
  };

  return (
    <form
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        padding: '40px',
        backgroundColor: 'white',
      }}
      onSubmit={handleSubmit}
    >
      <TextField name="uk" label="Ukrainian word" size="small" />
      <GTranslateIcon sx={{ color: blue[500] }} />
      <TextField name="en" label="English word" size="small" />

      <Button
        startIcon={<AddCircleOutlineIcon />}
        variant="contained"
        type="submit"
      >
        Add
      </Button>
      <Button>????</Button>
    </form>
  );
};
