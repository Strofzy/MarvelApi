import { Route } from 'react-router-dom';

const FavoritesPage = () => {
    return (
        <Route
            path="/favorites"
            element={<div>
                Favorite Route
            </div>}
        />
    )
}

export default FavoritesPage
