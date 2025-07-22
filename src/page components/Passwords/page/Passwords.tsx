import PasswordsMain from "../components/passwords main/PasswordsMain.tsx";

import Header from "../../../UI components/Header/Header.tsx";
import ErrorPointer from "../../../UI components/error pointer/ErrorPointer.tsx";

export default function Passwords() {

    const isLogin = localStorage.getItem("isLogin");

    return (
        <>
            <div className="passwords">
                {isLogin === "true" ? (
                    <div>
                        <Header />
                        <PasswordsMain/>
                    </div>
                ) : (
                    <div>
                        <Header />
                        <ErrorPointer/>
                    </div>
                )}
            </div>
        </>
    )
}