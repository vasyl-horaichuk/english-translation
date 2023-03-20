import { WordsList } from 'components/WordsList';
import { Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(open => !open);
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Home page</h1>
        <Button
          startIcon={<AddCircleOutlineIcon />}
          variant="contained"
          onClick={handleToggle}
        >
          Add new words
        </Button>
        <WordsList />
      </div>
      <Backdrop
        sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleToggle}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default Home;
