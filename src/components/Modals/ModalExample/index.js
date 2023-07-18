import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import './_index.scss';

const ModalExample = ({ id, open, handleClose, data, ...rest }) => {
  return (
    <Dialog
      open={open}
      onClose={(e, reason) => {
        handleClose(id);
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className="ta-modal add-offer-modal"
    >
      <DialogContent className="ta-modal-content-scroll add-offer-modal-content">
        write code here ...
      </DialogContent>
    </Dialog>
  );
};

export default ModalExample;
