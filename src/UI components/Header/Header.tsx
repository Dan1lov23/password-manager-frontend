import "./header.css"

import {Link} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock, faStar, faUser} from "@fortawesome/free-solid-svg-icons";

import LogoutButton from "../logout button/LogoutButton.tsx";
import AddPasswordButton from "../add password button/AddPasswordButton.tsx";

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="linkIcon">
                    <Link to="/passwords">
                        <FontAwesomeIcon icon={faLock} style={{fontSize: '35px'}}/>
                    </Link>
                </div>
                <div className="linkIcon">
                    <Link to="/favorites">
                        <FontAwesomeIcon icon={faStar} style={{fontSize: '35px'}}/>
                    </Link>
                </div>
                <div className="linkIcon">
                    <Link to="/user">
                        <FontAwesomeIcon icon={faUser} style={{fontSize: '35px'}}/>
                    </Link>
                </div>
                <AddPasswordButton/>
                <div className="linkIcon">
                    <LogoutButton />
                </div>
            </div>
        </>
    )
}