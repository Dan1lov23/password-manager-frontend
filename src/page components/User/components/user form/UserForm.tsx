import "./userForm.css";

import Button from "../../../../UI components/button/Button.tsx";

import {faPencil} from "@fortawesome/free-solid-svg-icons";

import {useState, useEffect} from "react";

export default function UserForm() {
    const [isEditingUsername, setIsEditingUsername] = useState(false);
    const [isEditingPassword, setIsEditingPassword] = useState(false);
    const [username, setUsername] = useState(localStorage.getItem("username") || "");
    const [password, setPassword] = useState(localStorage.getItem("password") || "");

    const toggleEditUsername = () => {
        setIsEditingUsername(!isEditingUsername);
    };

    const toggleEditPassword = () => {
        setIsEditingPassword(!isEditingPassword);
    };

    const changeProfile = () => {
        fetch('http://localhost:3000/userProfile/updateParams', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                newUsername: username,
                newPassword: password,
                username: localStorage.getItem("username"),
            }),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        console.log(localStorage.getItem("username"));
        console.log(localStorage.getItem("password"));
    };

    useEffect(() => {
        if (!isEditingUsername) {
            setUsername(localStorage.getItem("username") || "");
        }
    }, [isEditingUsername]);

    useEffect(() => {
        if (!isEditingPassword) {
            setPassword(localStorage.getItem("password") || "");
        }
    }, [isEditingPassword]);

    return (
        <>
            <div className="userForm">
                <div className="container">
                    <div className="title">
                        <h1>User profile</h1>
                    </div>
                    <div className="userFormInput">
                        <input
                            value={username}
                            id="newUsername"
                            disabled={!isEditingUsername}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder={isEditingUsername ? "Введите новое имя пользователя" : ""}
                        />
                        <Button buttonIcon={faPencil} onClickFunction={toggleEditUsername} />
                    </div>
                    <div className="userFormInput">
                        <input
                            value={password}
                            id="newPassword"
                            disabled={!isEditingPassword}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder={isEditingPassword ? "Введите новый пароль" : ""}
                        />
                        <Button buttonIcon={faPencil} onClickFunction={toggleEditPassword} />
                    </div>
                    <div className="userFormFinishButton">
                        <button onClick={changeProfile}>Change</button>
                    </div>
                </div>
            </div>
        </>
    );
}
