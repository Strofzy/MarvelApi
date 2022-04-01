import React, { FC } from 'react'
import { useState, useEffect } from 'react';
import ComicsService from 'shared/services/comics/comics.services';

export const ComicContext = React.createContext<any>(null)

export const ComicContextProvider: FC = ({ children }) => {
    const [comics, setComics] = useState()
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
        getService({
            offset,
            limit: pagination.limit,
        }).then(res => {
            setPagination({
                limit: res.limit,
                offset: res.offset || 0,
                total: res.total
            })
            setComics(res.results)
        })
    }

    const search = (s: string) => {
        getService({
            offset: 0,
            limit: pagination.limit,
            title: s
        }).then(res => {
            setPagination({
                limit: res.limit,
                offset: res.offset || 0,
                total: res.total
            })
            setComics(res.results)
        })
    }

    useEffect(()=>{
        fetchPagination(0)
    }, [])

    const values = {
        comics,
        fetchPagination,
        pagination,
        search
    }
    return (
        <ComicContext.Provider value={values}>
            {children}
        </ComicContext.Provider>
    )

}
