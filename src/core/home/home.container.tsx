import { FC, useEffect, useState } from 'react';
import ComicsService from 'shared/services/comics/comics.services'
import { HomeView } from './home.component'

export const HomeContainer: FC = () => {

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [loading, setLoading] = useState(false);
    const [dataComics, setDataComics] = useState<any>();
    const [pagination, setPagination] = useState<any>({
        total: 0,
        limit: 10,
        offset: 0
    })

    const getService = async (...args:any) => {
        const res = await ComicsService.findAll(...args)
        return res.data as any
    }

    const fetchPagination = (offset: number) => {
        getService({ query: {
            offset,
            limit: pagination.limit,
        } }).then(res => {
            setPagination({
                limit: res.limit,
                offset: res.offset || 0,
                total: res.total
            })
            setDataComics(res)
        })
    }

    useEffect(() => {
        setLoading(true);
        getService({ query: { offset: 0, limit: 10 } })
            .then(res => {
                setPagination({
                    limit: res.limit,
                    offset: res.offset || 0,
                    total: res.total
                })
                setLoading(false)
                setDataComics(res)
            })
            .catch(error => console.log(error))
    }, []);

    return (
        <HomeView
            setCurrentPage={setCurrentPage}
            dataComics={dataComics?.results || []}
            currentPage={currentPage}
            fetchPagination={fetchPagination}
            pagination={pagination}
        />
    )
}
