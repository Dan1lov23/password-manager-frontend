import "./loginMain.css";

import {Link} from "react-router-dom";

import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function LoginMain() {

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const login = () => {

        const username = document.getElementById("username") as HTMLInputElement;
        const password = document.getElementById("password") as HTMLInputElement;

        if (username.value.length === 0 && password.value.length === 0) {
            setError("Никнейм и пароль обязательны");
        }

        fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username: username.value, password: password.value})
        })
        .then(res => res.json())
        .then(data => {
            if (data.marker !== 'true') {
                setError(data.body);
            } else {
                setError("");
                localStorage.setItem("isLogin", "true");
                localStorage.setItem("username", username.value);
                localStorage.setItem("password", password.value);
                localStorage.setItem("role", data.role);
                console.log(data.role);
                navigate("/passwords");
                window.location.reload();
                setTimeout(() => {
                    localStorage.setItem("isLogin", "false");
                    localStorage.setItem("username", "");
                    localStorage.setItem("password", "");
                    localStorage.setItem("role", "");
                    window.location.reload();
                }, 3600000)
            }
        })
    }

    return (
        <>
            <div className="loginMain">
                <div className="form">
                    <div className="main">
                        <div className="loginTitle">
                            <h1>Login</h1>
                        </div>
                        <div className="loginInput">
                            <input placeholder="Username" id="username"/>
                        </div>
                        <div className="loginInput">
                            <input placeholder="Password" type="password" id="password"/>
                        </div>
                        <div className="error">
                            {error.length > 0 ? (
                                <div>
                                    <p>{error}</p>
                                </div>
                            ) : (
                                <div>

                                </div>
                            )}
                        </div>
                        <div className="loginButton" onClick={() => login()}>
                            <button>LOGIN</button>
                        </div>
                        <div className="link">
                            <Link to="/registration">
                                <p>Create new account</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
