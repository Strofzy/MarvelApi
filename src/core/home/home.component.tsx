import { CardComicsView } from 'core/cardComics/cardComics.components'
import { FC } from 'react';
import { THomeView } from './types'

export const HomeView: FC<THomeView>= ({ dataComics }: THomeView) => {

    return (
        <CardComicsView
            dataComics={dataComics}
        />
    )
}
