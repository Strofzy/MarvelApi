import { FC } from 'react'
import { useQuery } from 'react-query'
import ComicsService from 'shared/services/comics/comics.services'
import { HomeView } from './home.component'

export const HomeContainer: FC = () => {

    //Queries
    const { data: dataComics, isLoading } = useQuery('comics', () => ComicsService.findAll({}))

    return (
        <HomeView
            dataComics={dataComics}
        />
    )
}
