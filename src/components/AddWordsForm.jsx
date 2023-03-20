import { Button, TextField } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const AddWordsForm = () => {
  return (
    <form
      style={{
        padding: '24px',
        backgroundColor: 'white',
      }}
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />

      <Button startIcon={<AddCircleOutlineIcon />} variant="contained">
        Add
      </Button>
      <Button>????</Button>
    </form>
  );
};
