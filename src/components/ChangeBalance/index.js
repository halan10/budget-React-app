import React,{useState} from "react";
import { Modal } from "../Modal";
import Form from "../Form";

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 56,
  };

export const ChangeBalance = ({onChange}) => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
        
         <Fab color="primary" aria-label="add" sx={fabStyle} 
         onClick={()=>setOpenModal(true)}>
        <AddIcon />
      </Fab>
            <Modal open={openModal} onClose={()=>setOpenModal(false)}>
                <Form onChange={onChange} onCloseFormModal={()=>setOpenModal(false)}/>
            </Modal>
        </>
    )
}