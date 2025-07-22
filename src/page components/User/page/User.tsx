import UserMain from "../components/user main/UserMain.tsx";

import Header from "../../../UI components/Header/Header.tsx";

import ErrorPointer from "../../../UI components/error pointer/ErrorPointer.tsx";

const isLogin = localStorage.getItem("isLogin");

export default function User() {
    return (
        <>
            <div className="user">
                <Header/>
                {isLogin === "true" ? (
                    <UserMain/>
                ) : (
                    <div>
                        <ErrorPointer/>
                    </div>
                )}
            </div>
        </>
    )
}