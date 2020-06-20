import React from 'react';
import Modal from '@material-ui/core/Modal';
import {Button} from '@material-ui/core';
import './remote.css';

export default function SimpleModal() {
  // getModalStyle is not a pure function, we roll the style only on the first render
  
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className='Middle'>
      <h2 id="simple-modal-title" className='Center'>Remote for Equipment</h2>
      <h3>Temprature Bar</h3>
      <h3>Fan Speed</h3>
      
      
    </div>
  );

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Remote
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
