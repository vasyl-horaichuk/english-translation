import { WordsList } from 'components/WordsList';
import { Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from 'react';
import { Modal } from 'components/Modal';
import { Filter } from 'components/Filter';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleToggelModal = () => {
    setIsModalOpen(isModalOpen => !isModalOpen);
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Home page</h1>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
          }}
        >
          <Button
            startIcon={<AddCircleOutlineIcon />}
            variant="contained"
            onClick={handleToggelModal}
          >
            Add new words
          </Button>
          <Filter />
        </div>
        <WordsList />
      </div>
      {isModalOpen && <Modal onClose={handleToggelModal} />}
    </>
  );
};

export default Home;
