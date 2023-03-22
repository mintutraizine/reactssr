import { Backdrop, Box, Fade, Modal } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const ContactModal = () => {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        //onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            //maxWidth: 740,
            // margin: "auto",
            // marginTop: 6,
            border: "1 px solid black",

            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            // width: 720,
            bgcolor: "background.paper",
            // border: "2px solid #000",
            boxShadow: 24,
          }}
        >
          <Link to="/ContactModal/Home">go to home</Link>
          <Link to="/ContactModal/ModalHome">go to modal home </Link>
          <Outlet />
        </Box>
      </Modal>
    </div>
  );
};

export default ContactModal;
