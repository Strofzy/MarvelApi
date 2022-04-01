import React from 'react';
export type THomeView = {
    dataComics:any
    currentPage?:any
    fetchPagination: (skip: number) => void
    pagination:any
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    handleAddFavorites: (id: any) => void

}
