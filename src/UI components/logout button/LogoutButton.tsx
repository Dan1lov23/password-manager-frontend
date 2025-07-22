import "./logoutButton.css";

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'black',
    border: '2px solid #1e4adf',
    boxShadow: 24,
    p: 4,
    color: "black",
    textAlign: 'center',
    borderRadius: '10px',
};

export default function LogoutButton() {


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const isLogin = localStorage.getItem("isLogin");

    const logoutFunction = async() => {
        localStorage.setItem("isLogin", "false");
        localStorage.setItem("username", "");
        localStorage.setItem("password", "");
        localStorage.setItem("role", "");
        window.location.reload();
        handleClose();
    }

    return (
        <div className="logoutButton">
            <Button onClick={handleOpen} className="button">
                <FontAwesomeIcon icon={faRightFromBracket} />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="box">
                    {isLogin === "true" ? (
                        <div>
                            <Typography id="modal-modal-title" variant="h4" component="h1" style={{color: "white"}}>
                                <h3>Do you want logout?</h3>
                            </Typography>
                            <div style={{display: 'grid'}} className="logoutConfirmModal">
                                <div className="confirmLogoutButton">
                                    <button onClick={() => logoutFunction()}>
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <Typography id="modal-modal-title" variant="h4" component="h1" style={{color: "white"}}>
                                <h4>You are already logged out of your account</h4>
                            </Typography>
                        </div>
                    )}
                </Box>
            </Modal>
        </div>
    );
}
