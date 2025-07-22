import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

export default function FavoritesTitle() {
    return (
        <>
            <div className="favoritesTitle" style={{textAlign: 'center', marginTop: "10%"}}>
                <h1 style={{fontSize: "45px"}}>Favorites <FontAwesomeIcon icon={faStar} style={{color: "gold", fontSize: "50px"}}/></h1>
            </div>
        </>
    )
}