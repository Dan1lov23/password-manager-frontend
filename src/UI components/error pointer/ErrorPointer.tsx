import "./errorPointer.css";

import {Link} from "react-router-dom";

export default function ErrorPointer() {
    return (
        <>
            <div className="errorPointer">
                <h1>Вы не авторизованы</h1>
                <Link to="/login">
                    <h1>войти</h1>
                </Link>
            </div>
        </>
    )
}