import "./userInterfaceTitle.css";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLockOpen} from "@fortawesome/free-solid-svg-icons";

export default function userInterfaceTitle() {
    return (
        <>
            <div className="userInterfaceTitle">
                <h1>Passwords <FontAwesomeIcon icon={faLockOpen} /></h1>
            </div>
        </>
    )
}