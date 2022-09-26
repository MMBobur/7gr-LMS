import  React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius:'15px',
  boxShadow: 24,
  p: 4,
  textAlign:'center',
};

export default function BasicModal({ochirish, children, ...props}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function Del () {
    ochirish();
    handleClose();
  }
  
  return (
    <div>
      <Button {...props} onClick={handleOpen}>{children}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h5" component="h2"  sx={{ mt: 2, fontWeight:'bold' }}>
            Ma'lumot o'chirilsinmi?
          </Typography>
          <Box sx={{columnGap:"30%", display:'flex', mt:5}}>
            <Button variant="outlined" id="btnplus" sx={{width:'35%'}}  onClick={handleClose}>Bekor qilish</Button>
            <Button variant="outlined" id="btnDel"sx={{width:'35%'}}  onClick={() => Del()}>O'chirish</Button>
        </Box>
        </Box>
      </Modal>
    </div>
  );
}
