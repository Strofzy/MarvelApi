import { TablePagination } from '@mui/material';
import { CardComicsView } from 'core/cardComics/cardComics.components'
import { FC } from 'react';
import { THomeView } from './types'

export const HomeView: FC<THomeView>= ({ dataComics, currentPage, fetchPagination, pagination, setCurrentPage }: THomeView) => {

    return (
        <>
            <CardComicsView
                dataComics={dataComics}
            />
            <div>
                <TablePagination
                    component="div"
                    page={currentPage}
                    count={pagination.total}
                    rowsPerPage={pagination.limit}
                    onPageChange={ (page, pageSize) => {
                        fetchPagination((pageSize as any - 1) * pageSize)
                        setCurrentPage(pageSize as any)
                    }}
                />
            </div>
        </>
    )
}
