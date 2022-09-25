import * as React from 'react';
<<<<<<< HEAD
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open draggable dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Eslatma !
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Siz rosttan ham bu o'quvchi o'chirishnio hoxlaysizmi?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
           <Link state={false}>Yo'q</Link>
          </Button>
          <Button onClick={handleClose}><Link state={true}>Ha</Link></Button>
        </DialogActions>
      </Dialog>
=======
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
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

export default function BasicModal({ochirish, children}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={handleOpen}>{children}</Button>
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
            <Button variant="outlined" id="btnplus" sx={{width:'35%'}} onClick={() => navigate("/guruh")}>Bekor qilish</Button>
            <Button variant="outlined" id="btnDel"sx={{width:'35%'}} onClick={ochirish}>O'chirish</Button>
        </Box>
        </Box>
      </Modal>
>>>>>>> 96f6d0380a724fc808db44dade636207b3e979e0
    </div>
  );
}
