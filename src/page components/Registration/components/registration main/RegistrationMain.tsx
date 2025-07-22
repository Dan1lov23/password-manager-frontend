import "./registrationMain.css";

import {Link} from "react-router-dom";

import {useState} from "react";
import {useNavigate} from "react-router-dom";

import validateInputs from "../../../../modules/validate inputs/ValidateInputs.ts";

export default function RegistrationMain() {

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const registration = () => {

        const usernameInput = document.getElementById("username") as HTMLInputElement;
        const passwordInput = document.getElementById("password") as HTMLInputElement;
        const repeatPasswordInput = document.getElementById("repeatPassword") as HTMLInputElement;

        const username = usernameInput.value;
        const password = passwordInput.value;
        const repeatPassword = repeatPasswordInput.value;

        const validate = validateInputs(username, password, repeatPassword);

        if (validate !== true) {
            setError(validate);
        } else {
            setError("");
            fetch('http://localhost:3000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username, password})
            })
            .then(res => res.json())
            .then(data => {
                if (data.message !== "Пользователь успешно зарегистрирован") {
                    setError(data.error);
                } else {
                    navigate("/login");
                }
            })
        }
    }

    return (
        <>
            <div className="registrationMain">
                <div className="form">
                    <div className="main">
                        <div className="registrationTitle">
                            <h1>Registration</h1>
                        </div>
                        <div className="registrationInput">
                            <input placeholder="Username" id="username"/>
                        </div>
                        <div className="registrationInput">
                            <input placeholder="Password" id="password"/>
                        </div>
                        <div className="registrationInput">
                            <input placeholder="Repeat password" type="password" id="repeatPassword"/>
                        </div>
                        <div className="error">
                            {error.length === 0 ? (
                                <div>

                                </div>
                            ) : (
                                <div>
                                    <p>{error}</p>
                                </div>
                            )}
                        </div>
                        <div className="registrationButton" onClick={() => registration()}>
                            <button>REGISTRATION</button>
                        </div>
                        <div className="link">
                            <Link to="/login">
                                <p>Login</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}