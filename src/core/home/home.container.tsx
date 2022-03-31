import { FC, useState, useContext } from 'react';
import { ComicContext } from 'shared/context/comic.context';
import { HomeView } from './home.component'

export const HomeContainer: FC = () => {

    const [currentPage, setCurrentPage] = useState<number>(1);
    const { comics, fetchPagination, pagination } = useContext(ComicContext)

    return (
        <HomeView
            setCurrentPage={setCurrentPage}
            dataComics={comics || []}
            currentPage={currentPage}
            fetchPagination={fetchPagination}
            pagination={pagination}
        />
    )
}
