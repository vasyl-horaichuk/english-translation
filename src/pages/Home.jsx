import { WordsList } from 'components/WordsList';
import { Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Backdrop } from '@mui/material';
import { useState } from 'react';
import { AddWordsForm } from 'components/AddWordsForm';

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = e => {
    if (e.target.classList.contains('MuiBackdrop-root')) {
      setOpen(open => !open);
      return;
    }
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
        {/* <CircularProgress color="inherit" /> */}
        <AddWordsForm />
      </Backdrop>
    </>
  );
};

export default Home;
