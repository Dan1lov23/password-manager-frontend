import DefaultUserInterface from "../users interfaces/user role interface/default user Interface/DefaultUserInterface.tsx"
import AdminRoleInterface from "../../../../UI components/statistic admin panel/admin role interface/AdminRoleInterface.tsx";

export default function PasswordsMain() {

    const userRole = localStorage.getItem('role');

    return (
        <>
            <div className="passwordsMain">
                {userRole === "user" ? (
                    <div className="user">
                        <DefaultUserInterface />
                    </div>
                ) : (
                    <div className="admin">
                        <AdminRoleInterface />
                    </div>
                )}
            </div>
        </>
    )
}