import "./favoritesMain.css";

import FavoritesAdminInterface from "../users interface/admin role interface/favorites admin interface/FavoritesAdminInterface.tsx";
import FavoritesDefaultUserInterface from "../users interface/user role interface/favorites default user interface/FavoritesDefaultUserInterface.tsx";

export default function FavoritesMain() {

    const userRole = localStorage.getItem('role');

    return (
        <>
            <div className="favoritesMain">
                {userRole === "user" ? (
                    <div>
                        <FavoritesDefaultUserInterface/>
                    </div>
                ) : userRole === "admin" ? (
                    <div>
                        <FavoritesAdminInterface/>
                    </div>
                ) : (
                    <div>

                    </div>
                )}
            </div>
        </>
    )
}