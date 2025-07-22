import "./addTaskButton.css";

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {useState} from "react";

import {useDispatch} from "react-redux";

import validateNewPassword from "../../modules/validate new password/ValidateNewPassword.ts";

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

export default function AddPasswordButton() {

    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [error, setError] = useState("");

    const isLogin = localStorage.getItem("isLogin");

    const getUserInfo = async() => {

        const username = localStorage.getItem("username");

        fetch('http://localhost:3000/getInfo/getInfo', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username: username})
        })
            .then((res) => res.json())
            .then((data) => {
                if (data !== "Ошибка на сервере") {
                    dispatch({type: "SET_PASSWORDS_ARRAY", payload: data});
                }
            })
    }

    const addPassword = async() => {

        const username = localStorage.getItem('username');

        const serviceName = document.getElementById('serviceName') as HTMLInputElement;
        const password = document.getElementById("password") as HTMLInputElement;
        const passwordRepeat = document.getElementById("passwordRepeat") as HTMLInputElement;
        const id:number = Date.now();

        if (validateNewPassword(serviceName.value, password.value, passwordRepeat.value) === true) {
            fetch('http://localhost:3000/passwords/addNewPassword', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({serviceName: serviceName.value, password: password.value, id: id, username: username}),
            })
            .then(res => res.json())
            .then(data => {
                if (data.message === "Задача добавлена") {
                    getUserInfo();
                    setOpen(false);
                }
            })
        } else {
            setError(String(validateNewPassword(serviceName.value, password.value, passwordRepeat.value)));
        }
    }

    const userRole:any = localStorage.getItem("role");

    return (
        <div className="addPasswordButton">
            <Button onClick={handleOpen} className="addPasswordExternalButton">
                <FontAwesomeIcon icon={faPlus} color="inherit" />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="box">
                    <div style={{display: 'grid'}} className="newPasswordsInputs">
                        {isLogin === "true" && userRole === "user" ? (
                            <div>
                                <Typography id="modal-modal-title" variant="h4" component="h2" style={{color: "white"}}>
                                    Add new task
                                </Typography>
                                <div style={{marginTop: '10%'}}>
                                    <input placeholder="service name" id="serviceName" style={{
                                        width: '80%',
                                        height: "40px",
                                        borderRadius: '10px',
                                        border: 'none'
                                    }}/>
                                </div>
                                <div style={{marginTop: '10%'}}>
                                    <input placeholder="password" id="password" style={{
                                        width: '80%',
                                        height: "40px",
                                        borderRadius: '10px',
                                        border: 'none'
                                    }}/>
                                </div>
                                <div style={{marginTop: '10%'}}>
                                    <input placeholder="password repeat" id="passwordRepeat" style={{
                                        width: '80%',
                                        height: "40px",
                                        borderRadius: '10px',
                                        border: 'none'
                                    }}/>
                                </div>
                                <div style={{marginTop: '10%'}}>
                                    {error.length > 0 ? (
                                        <div>
                                            <p style={{color: "red"}}>{error}</p>
                                        </div>
                                    ) : (
                                        <div>

                                        </div>
                                    )}
                                </div>
                                <div style={{marginTop: '10%'}} className="finishPasswordButton">
                                    <button onClick={() => addPassword()}>
                                        Add password
                                    </button>
                                </div>
                            </div>
                        ) : isLogin === "true" && userRole === "admin" ? (
                            <div>
                                <h2 style={{color: "white", fontSize: "23px"}}>unavailable feature for administrator</h2>
                            </div>
                        ) : (
                            <div>
                                <h1 style={{color: "white"}}>You must login</h1>
                                <h1 style={{color: "white"}}>for add new task</h1>
                            </div>
                        )}
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
