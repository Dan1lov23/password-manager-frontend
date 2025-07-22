import "./userCart.css";

import {useDispatch} from "react-redux";

import {faTrash} from "@fortawesome/free-solid-svg-icons";

import Button from "../button/Button.tsx";

import type {User} from "../../types and interfaces/Interfaces.tsx";

export default function UserCart({user}:{user:User}) {

    const dispatch = useDispatch();

    const deleteUserFunction = (user:User) => {
        fetch('http://localhost:3000/adminFunctions/deleteUser', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username: user.username, deleteUserRole: user.userRole, currentUserRole: localStorage.getItem("role")}),
        })
        .then(res => res.json())
        .then(data => {
            dispatch({type: "SET_USERS_ARRAY", payload: data});
            window.location.reload();
        })
    }

    return (
        <>
            <div className="userCart">
                <div className="container">
                    <h2>{user.username}</h2>
                    <p>{user.password}</p>
                    <h2>{user.userRole}</h2>
                    <div className="deleteUserButton">
                        <Button onClickFunction={() => deleteUserFunction(user)} buttonIcon={faTrash}/>
                    </div>
                </div>
            </div>
        </>
    )
}