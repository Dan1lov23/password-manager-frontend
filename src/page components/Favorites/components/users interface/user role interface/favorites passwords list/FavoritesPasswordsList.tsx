import type {Password} from "../../../../../../types and interfaces/Interfaces.tsx";

import PasswordCart from "../../../../../../UI components/password cart/PasswordCart.tsx";

import {useState, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'

export default function FavoritesPasswordsList() {

    const dispatch = useDispatch();

    const username = localStorage.getItem("username")

    const favoritesListPasswords = useSelector((state:any) => state.favoritesPasswordsArray);

    const [showPasswordsArray, setShowPasswordsArray] = useState([]);

    const getFavoritesPasswords = async() => {
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

    useEffect(() => {
        getFavoritesPasswords();
    }, [])

    return (
        <>
            <div className="favoritesPasswordsList">
                {favoritesListPasswords.map((password:Password) => (
                    <PasswordCart password={password} showPasswordsArray={showPasswordsArray} setShowPasswordsArray={setShowPasswordsArray}/>
                ))}
            </div>
        </>
    )
}