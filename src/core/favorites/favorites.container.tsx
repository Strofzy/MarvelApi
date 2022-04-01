import { FC } from 'react'
import { FavoritesView } from './favorites.components'
import { useFavoritesContext } from './favorites.context'

export const FavoritesContainer: FC = () => {

    const { favoriteList, deleteFavorite } = useFavoritesContext()

    const handleDeleteFavorites = (favorite: any) => {
        deleteFavorite(favorite)
    }

    return (
        <FavoritesView
            handleDeleteFavorites={handleDeleteFavorites}
            dataComics={favoriteList}
        />
    )
}

