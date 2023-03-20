import { Button, TextField } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import { blue } from '@mui/material/colors';

export const AddWordsForm = () => {
  return (
    <form
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        padding: '24px',
        backgroundColor: 'white',
      }}
    >
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        size="small"
      />
      <GTranslateIcon sx={{ color: blue[500] }} />
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        size="small"
      />

      <Button startIcon={<AddCircleOutlineIcon />} variant="contained">
        Add
      </Button>
      <Button>????</Button>
    </form>
  );
};
