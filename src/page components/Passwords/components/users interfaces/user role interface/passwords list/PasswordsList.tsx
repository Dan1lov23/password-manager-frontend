import {useState} from "react";

import type {Password} from "../../../../../../types and interfaces/Interfaces.tsx";

import PasswordCart from "../../../../../../UI components/password cart/PasswordCart.tsx";

export default function PasswordsList({passwordsArray}:{passwordsArray:any}) {

    const [showPasswordsArray, setShowPasswordsArray] = useState([]);

    return (
        <>
            <div className="passwordsList">
                {passwordsArray.map((password:Password,index:number) => (
                    <div key={index}>
                        <PasswordCart password={password} showPasswordsArray={showPasswordsArray} setShowPasswordsArray={setShowPasswordsArray}/>
                    </div>
                ))}
            </div>
        </>
    )
}
