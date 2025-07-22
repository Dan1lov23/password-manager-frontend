import UsersTitle from "../users title/UsersTitle.tsx";
import AllUsersList from "../all users list/AllUsersList.tsx";

export default function AdminInterface() {

    return (
        <>
            <div className="adminInterface">
                <UsersTitle />
                <AllUsersList/>
            </div>
        </>
    )
}