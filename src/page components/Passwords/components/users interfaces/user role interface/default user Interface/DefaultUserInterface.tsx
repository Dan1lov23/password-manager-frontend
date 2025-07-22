import "./defaultUserInterface.css";

import PasswordsList from "../passwords list/PasswordsList.tsx";
import UserInterfaceTitle from "../user interface title/UserInterfaceTitle.tsx";

import {useEffect} from "react";

import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

export default function DefaultUserInterface() {

    const passwordsArray = useSelector((state:any) => state.passwordsArray);

    const dispatch = useDispatch();

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

    useEffect(() => {
        getUserInfo();
    }, [])

    return (
        <div className="userRoleInterface">
            <UserInterfaceTitle />
            <PasswordsList passwordsArray={passwordsArray}/>
        </div>
    )
}