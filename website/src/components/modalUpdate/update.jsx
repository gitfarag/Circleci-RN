import React from 'react'
import { Modal } from 'react-bootstrap'
import FormUpdate from '../form/form-update';

const UpdateForm = ({ stat, setStat, item, getHandler }) => {
  const handleClose = () => setStat(false);
  // console.log(item)
  return (
    <>
      <Modal show={stat} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title className='text-black-50'>{item.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormUpdate
            item={item}
            getHandler={getHandler}
            handleClose={handleClose}
          /></Modal.Body>
      </Modal>
    </>
  )
}

export default UpdateForm