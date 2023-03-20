import { Button, TextField } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const AddWordsForm = () => {
  return (
    <form>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />

      <Button startIcon={<AddCircleOutlineIcon />} variant="contained">
        Add
      </Button>
      <Button>????</Button>
    </form>
  );
};
