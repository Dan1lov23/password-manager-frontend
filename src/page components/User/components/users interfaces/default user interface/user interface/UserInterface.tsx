import UserForm from "../../../user form/UserForm.tsx";

export default function UserInterface() {
    return (
        <>
            <div className="userInterfase" style={{display: "grid", justifyContent: "center", marginTop: "10%"}}>
                <UserForm/>
            </div>
        </>
    )
}