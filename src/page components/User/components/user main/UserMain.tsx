import "./userMain.css";

import AdminInterface from "../users interfaces/admin user interface/admin interface/AdminInterface.tsx";
import UserInterface from "../users interfaces/default user interface/user interface/UserInterface.tsx";

export default function UserMain() {

    const userRole = localStorage.getItem("role");

    return (
        <>
            <div className="userMain">
                {userRole === "user" ? (
                    <div>
                        <UserInterface/>
                    </div>
                ) : userRole === "admin" ? (
                    <div>
                        <AdminInterface/>
                    </div>
                ) : (
                    <div>

                    </div>
                )}
            </div>
        </>
    )
}
