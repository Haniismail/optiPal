import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../slices/modals';
import useAuth from '../../hooks/useAuth';
import ModalExample from '../Modals/ModalExample';

const ModalsProvider = (props) => {
  const { isAuthenticated } = useAuth();
  const { modals } = useSelector((state) => state.modals);
  const dispatch = useDispatch();
  const modalState = (id, key) => {
    const res = modals.find((modal) => modal.id === id);
    return res[key];
  };
  const handleClose = (id) => {
    dispatch(closeModal(id));
  };
  return isAuthenticated ? (
    <>
      <ModalExample
        id="modal-example"
        open={modalState('modal-example', 'open')}
        data={modalState('modal-example', 'data')}
        handleClose={handleClose}
      />
    </>
  ) : null;
};

export default ModalsProvider;
