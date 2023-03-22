import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import "./Layout.css";
import { Toolbar, Typography } from "@material-ui/core";
import {
  AppBar,
  Button,
  Stack,
  Avatar,
  CardMedia,
  useTheme,
  useMediaQuery,
  Grid,
  Tabs,
  Tab,
  FormControl,
  Select,
  MenuItem,
  Badge,
  Modal,
  Backdrop,
  Fade,
  TextField,
  Box,
} from "@mui/material";

const Layout = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const gotoCall = () => {};
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography>
            <nav>
              <ul >
                <li
                  onClick={gotoCall}
                  style={{
                    width: 60,

                    justifyContent: "center",
                  }}
                >
                  <Link to="/">Menu</Link>
                </li>
                <li
                  style={{
                    width: 60,

                    textDecoration: "none",
                  }}
                >
                  <Link to="/Home">Home</Link>
                </li>
                <li
                  style={{
                    width: 60,

                    textDecoration: "none",
                  }}
                >
                  <Link to="/Contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </Typography>
        </Toolbar>
      </AppBar>

      {/* <nav>
        <ul className="rowMenu">
          <li>
            <Link to="/">Layout</Link>
          </li>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}
      <Outlet />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
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
          <Fade in={open}></Fade>
          <div>fffff</div>
        </Box>
      </Modal>
    </>
  );
};

export default Layout;
