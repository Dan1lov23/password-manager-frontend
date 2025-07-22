import "./passwordCart.css";

import type {Password} from "../../types and interfaces/Interfaces.tsx";

import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash, faStar, faTrash, faShield} from "@fortawesome/free-solid-svg-icons";

import Button from "../button/Button.tsx";
import securityCheck from "../../modules/security check/SecurityCheck.ts";
import ChangePasswordButton from "../change password button/ChangePasswordButton.tsx";

export default function PasswordCart({password, showPasswordsArray, setShowPasswordsArray}:{password:Password, showPasswordsArray:any, setShowPasswordsArray:any}) {

    const dispatch = useDispatch();

    const favoritesPasswordsArray = useSelector((state:any) => state.favoritesPasswordsArray);

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
            }
        })
    }

    const showPasswordFunction = (id:number) => {
        const newArray = [];
        if (showPasswordsArray.includes(id)) {
            for (let a = 0; a < showPasswordsArray.length; a++) {
                if (showPasswordsArray[a] !== id) {
                    newArray.push(showPasswordsArray[a]);
                }
            }
            setShowPasswordsArray(newArray);
        } else {
            newArray.push(id);
            setShowPasswordsArray(newArray);
        }
    }

    const favoriteFunction = async(password:Password) => {
        const username = localStorage.getItem("username");
        if (!favoritesPasswordsArray.includes(password)) {
            dispatch({type: "ADD_PASSWORD_IN_FAVORITES", payload: password});
            fetch('http://localhost:3000/favorites/addFavoritePassword', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({serviceName: password.serviceName, password: password.password, username: username, id: password.passwordId}),
            })
        } else  {
            dispatch({type: "DELETE_PASSWORD_FROM_FAVORITES", payload: password.passwordId});
            fetch('http://localhost:3000/favorites/deleteFavoritePassword', {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({passwordId: password.passwordId}),
            })
        }
    }

    const getFavoritesPasswords = async() => {
        const username = localStorage.getItem("username");
        fetch('http://localhost:3000/getInfo/getFavoritesPasswords', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: username})
        })
        .then(res => res.json())
        .then(data => {
            dispatch({type: "SET_FAVORITES", payload: data});
        })
    }

    const deleteFunction = (password:Password) => {
        fetch(`http://localhost:3000/passwords/deleteTask`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({passwordId: password.passwordId})
        })
        .then(res => res.json())
        .then(data => {
            if (data === "success") {
                getUserInfo();
                dispatch({type: "DELETE_PASSWORD_FROM_FAVORITES", payload: password.passwordId});
                fetch('http://localhost:3000/favorites/deleteFavoritePassword', {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({passwordId: password.passwordId}),
                })
            }
        })
    }

    useEffect(() => {
        getFavoritesPasswords();
    }, []);

    return (
        <>
            <div className="passwordCart">
                <div className="container">
                    <div className="serviceNameAndPassword">
                        <div className="serviceName">
                            <h1>{password.serviceName}</h1>
                        </div>
                        <div className="password">
                            {!showPasswordsArray.includes(password.passwordId) ? (
                                <div>
                                    <h1>* * * * * </h1>
                                </div>
                            ) : (
                                <div>
                                    <h1>{password.password}</h1>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="buttons">
                        {!showPasswordsArray.includes(password.passwordId) ? (
                            <div>
                                <Button buttonIcon={faEyeSlash} onClickFunction={() => showPasswordFunction(password.passwordId)}/>
                            </div>
                        ) : (
                            <div>
                                <Button buttonIcon={faEye} onClickFunction={() => showPasswordFunction(password.passwordId)}/>
                            </div>
                        )}
                        {favoritesPasswordsArray.some((fav:Password) => fav.passwordId === password.passwordId) ? (
                            <Button buttonIcon={faStar} onClickFunction={() => favoriteFunction(password)} color="gold"/>
                        ) : (
                            <Button buttonIcon={faStar} onClickFunction={() => favoriteFunction(password)} color="white"/>
                        )}
                        <Button buttonIcon={faTrash} onClickFunction={() => deleteFunction(password)}/>
                        <ChangePasswordButton serviceName={password.serviceName} password={password.password} passwordId={password.passwordId}/>
                        <div>
                            {securityCheck(password.password) <= 2 ? (
                                <FontAwesomeIcon icon={faShield} style={{fontSize: "40px", color: "red"}}/>
                            ) : securityCheck(password.password) > 2 && securityCheck(password.password) < 4 ? (
                                <FontAwesomeIcon icon={faShield} style={{fontSize: "40px", color: "yellow"}}/>
                            ) : securityCheck(password.password) === 5 ? (
                                <FontAwesomeIcon icon={faShield} style={{fontSize: "40px", color: "green"}}/>
                            ) : (
                                <div>

                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
