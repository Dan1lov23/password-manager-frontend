import "./changePasswordButton.css";

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import {useDispatch} from 'react-redux';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencil} from "@fortawesome/free-solid-svg-icons";

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

export default function ChangePasswordButton({serviceName, password, passwordId}:{serviceName: string, password:string, passwordId:number}) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch();

    const getUserInfo = async() => {
        fetch('http://localhost:3000/getInfo/getInfo', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username: localStorage.getItem("username")}),
        })
        .then((res) => res.json())
        .then((data) => {
            if (data !== "Ошибка на сервере") {
                dispatch({type: "SET_PASSWORDS_ARRAY", payload: data});
                console.log(data);
            }
        })
    }

    const changePassword = (passwordId:number) => {
        const newServiceName = document.getElementById("newServiceName") as HTMLInputElement;
        const newPassword = document.getElementById("newPassword") as HTMLInputElement;

        if (newServiceName.value.length > 0 && newPassword.value.length > 0) {
            fetch(`http://localhost:3000/passwords/updatePassword`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({newServiceName: newServiceName.value, newPassword: newPassword.value, passwordId: passwordId}),
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        } else if (newServiceName.value.length === 0 && newPassword.value.length > 0) {
            const newServiceName:string = serviceName;
            fetch(`http://localhost:3000/passwords/updatePassword`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({newServiceName: newServiceName, newPassword: newPassword.value, passwordId: passwordId}),
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        } else if (newPassword.value.length === 0 && newServiceName.value.length > 0) {
            const newPassword:string = password;
            fetch(`http://localhost:3000/passwords/updatePassword`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({newServiceName: newServiceName.value, newPassword: newPassword, passwordId: passwordId}),
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        } else {
            const newServiceName:string = serviceName;
            const newPassword:string = password;
            fetch(`http://localhost:3000/passwords/updatePassword`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({newServiceName: newServiceName, newPassword: newPassword, passwordId: passwordId}),
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        }
        getUserInfo();
    }

    return (
        <>
            <div className="changePasswordButton">
                <div className="changePasswordExternalButton">
                   <button onClick={handleOpen}>
                       <FontAwesomeIcon icon={faPencil} color="inherit" />
                   </button>
                </div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} className="box">
                        <div style={{display: 'grid', justifyContent: 'center'}}>
                            <h1 style={{color: "white"}}>Change password</h1>
                            <input style={{width: "250px", height: "30px"}} placeholder={serviceName} id='newServiceName'/>
                            <input  style={{width: "250px", height: "30px", marginTop: "20px"}} placeholder={password} id='newPassword'/>
                            <button className="finishPasswordChangeButton" onClick={() => changePassword(passwordId)}>
                                Change
                            </button>
                        </div>
                    </Box>
                </Modal>
            </div>
        </>
    )
}