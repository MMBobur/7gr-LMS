import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ service, id }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Delete = () => {
      service.delete(id).then(
        setOpen(false)
      )
      window.location.reload(false);
  }

  return (
    <div>
      <Button onClick={handleOpen} variant='outlined' sx={{color:'red', border:'1px solid red', '&:hover':{background:'red', color:'white', border:'1px solid red'} }}><DeleteOutlineOutlinedIcon/> delete</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" align='center' component="h2">
            Olib tashlashni istaysizmi?
          </Typography>
          <Box sx={{display:'flex', justifyContent:'center', marginTop:'5%'}}>
            <Button variant='outlined' onClick={handleClose}>Bekor qilish</Button>
            <Button variant='outlined' onClick={Delete} sx={{marginLeft:'10%'}}>Istayman</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
