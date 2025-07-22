import "./favoritesDefaultUserInterface.css";

import FavoritesPasswordsList from "../favorites passwords list/FavoritesPasswordsList.tsx";
import FavoritesTitle from "../favorites title/FavoritesTitle.tsx";

export default function FavoritesDefaultUserInterface() {
    return (
        <>
            <div className="favoritesDefaultUserInterface">
                <FavoritesTitle/>
                <FavoritesPasswordsList/>
            </div>
        </>
    )
}
