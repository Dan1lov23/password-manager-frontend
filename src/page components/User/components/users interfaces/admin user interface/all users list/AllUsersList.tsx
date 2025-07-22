import type {User} from "../../../../../../types and interfaces/Interfaces.tsx";

import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

import UserCart from "../../../../../../UI components/user cart/UserCart.tsx";

export default function AllUsersList() {

    const dispatch = useDispatch();

    const usersArray = useSelector((state:any) => state.usersArray);

    useEffect(() => {
        fetch('http://localhost:3000/adminFunctions/getAllUsers')
        .then(res => res.json())
        .then(data => (
            dispatch({type: "SET_USERS_ARRAY", payload: data})
        ))
    }, []);

    return (
        <>
            <div className="allUsersList">
                {usersArray.map((user:User, index:number) => (
                    <div key={index}>
                        <UserCart user={user}/>
                    </div>
                ))}
            </div>
        </>
    )
}