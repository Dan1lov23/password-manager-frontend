import {BrowserRouter, Routes, Route} from "react-router-dom";

import Login from "../../page components/Login/page/Login.tsx";
import Registration from "../../page components/Registration/page/Registration.tsx";
import Passwords from "../../page components/Passwords/page/Passwords.tsx";
import Favorites from "../../page components/Favorites/page/Favorites.tsx";
import User from "../../page components/User/page/User.tsx";

export default function App() {
    return (
        <>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<Login/>} />
                        <Route path="/registration" element={<Registration/>}/>
                        <Route path="/passwords" element={<Passwords/>}/>
                        <Route path="/favorites" element={<Favorites/>}/>
                        <Route path="/user" element={<User/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}