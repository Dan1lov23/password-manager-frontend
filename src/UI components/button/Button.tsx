import "./button.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Button({buttonIcon, onClickFunction, color}:{buttonIcon:any, onClickFunction: () => void, color?:string}) {
    return (
        <>
            <div className="defaultButton">
                <button onClick={onClickFunction}>
                    <FontAwesomeIcon icon={buttonIcon} color={color}/>
                </button>
            </div>
        </>
    )
}