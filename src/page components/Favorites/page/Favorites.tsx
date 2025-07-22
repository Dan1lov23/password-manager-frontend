import FavoritesMain from "../components/favorites main/FavoritesMain.tsx";

import Header from "../../../UI components/Header/Header.tsx";
import ErrorPointer from "../../../UI components/error pointer/ErrorPointer.tsx";

export default function Favorites() {

    const isLogin = localStorage.getItem("isLogin");

    return (
        <>
            <div className="favorites">
                {isLogin === "true" ? (
                    <div>
                        <Header />
                        <FavoritesMain/>
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