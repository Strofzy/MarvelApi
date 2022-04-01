import { createContext, FC, useContext, useState } from 'react';
import { useAlert } from '../../shared/components/Alert/useAlert';

export interface IFavoriteContext {
    favoriteList: any[]
    addFavorite: (favorite: any) => void
    deleteFavorite: (favorite: any) => void
}

export const FavoritesContext = createContext<IFavoriteContext>({} as unknown as IFavoriteContext)

export const useFavoritesContext = () => useContext(FavoritesContext)

export const FavoritesContextProvider: FC = ({ children }) => {
    // States
    const [favoriteList, setFavoriteList] = useState<any[]>([])

    const { show } = useAlert()

    /**
     * Add favorite to list
     * @param {object} favorite favorite a add
     * @returns {void}
     */
    const addFavorite = (favorite: any) => {

        const isExistFavorite = favoriteList.find(x => x.id === favorite.id)
        if (isExistFavorite){
            show({
                message: 'Este comic ya esta en tus favoritos'
            })
        } else {
            show({
                message: 'Comic agregado a tus favoritos'
            })
            setFavoriteList([...favoriteList, favorite])
        }
    }

    /**
     * Delete favorite to list
     * @param {object} favorite favorite a delete
     * @returns {void}
     */
    const deleteFavorite = (favorite: any) => {
        setFavoriteList(prev => prev.filter(f => f.id !== favorite.id))
        show({
            message: 'Comic eliminado de tus favoritos'
        })
    }

    return (
        <FavoritesContext.Provider value={{
            favoriteList,
            addFavorite,
            deleteFavorite
        }}>
            {children}
        </FavoritesContext.Provider>
    )
}
