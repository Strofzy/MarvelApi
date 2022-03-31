import { FC } from 'react'
import { useQuery } from 'react-query'
import ComicsService from 'shared/services/comics/comics.services'
import { FavoritesView } from './favorites.components'

export const FavoritesContainer: FC = () => {

    //Queries
    const { data: dataComics } = useQuery('comics', () => ComicsService.findAll({}))

    return (
        <FavoritesView
            dataComics={dataComics}
        />
    )
}

