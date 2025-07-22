import "./passwordsStatictics.css";

import {useEffect, useState} from "react";

import AdminTitle from "../admin title/AdminTitle.tsx";

export default function PasswordStatistic() {

    const [passwordsCounter, setPasswordsCounter] = useState(0);
    const [usersCounter, setUsersCounter] = useState(0);
    const [favoritesCounter, setFavoritesCounter] = useState(0);
    const [adminCounter, setAdminCounter] = useState(0);
    const [defaultUserCounter, setDefaultUserCounter] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000/adminFunctions/getAllPasswordsStatistic', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({role: localStorage.getItem('role')}),
        })
        .then((res) => res.json())
        .then(data => {
            setPasswordsCounter(data);
        })

        fetch('http://localhost:3000/adminFunctions/getUsersCounter')
        .then((res) => res.json())
        .then(data => {
            setUsersCounter(data);
        })

        fetch('http://localhost:3000/adminFunctions/getFavoritesCounter')
        .then((res) => res.json())
        .then(data => {
            setFavoritesCounter(data);
        })

        fetch('http://localhost:3000/adminFunctions/getAdminUsersCounter')
        .then((res) => res.json())
        .then(data => {
            setAdminCounter(data);
        })

        fetch('http://localhost:3000/adminFunctions/getDefaultUsersCounter')
        .then((res) => res.json())
        .then(data => {
            setDefaultUserCounter(data);
        })
    }, [])


    return (
        <>
            <div className="passwordStatistic">
                <AdminTitle />
                <div className="container">
                    <div className="statisticTitle">
                        <div className="row">
                            <div className="title">
                                <h2>All users</h2>
                            </div>
                            <div className="value">
                                <h2>{usersCounter}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="title">
                                <h2>Admin counter</h2>
                            </div>
                            <div className="value">
                                <h2>{adminCounter}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="title">
                                <h2>User counter</h2>
                            </div>
                            <div className="value">
                                <h2>{defaultUserCounter}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="title">
                                <h2>Password counter</h2>
                            </div>
                            <div className="value">
                                <h2>{passwordsCounter}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="title">
                                <h2>Favorites counter</h2>
                            </div>
                            <div className="value">
                                <h2>{favoritesCounter}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
