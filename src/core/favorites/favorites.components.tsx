import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { BoxCard, BoxDescription, BoxImg, Container, DivInfo, IconHeart, SpanInfo, Strong } from './styled'
import { TFavoritesView } from './types'

export const FavoritesView: FC<TFavoritesView> = ({ dataComics, handleDeleteFavorites }: TFavoritesView) => {

    const navigate = useNavigate()

    if (!dataComics.length) {
        return (
            <Strong>
                No tiene Favoritos
            </Strong>
        )
    }
    return (
        <Container>
            {dataComics?.map((x:any, i:number) => <BoxCard onClick={() => navigate(`/comicInfo/${ x?.id }`)} key={i}>
                <IconHeart><FontAwesomeIcon onClick={e => { e.stopPropagation(); handleDeleteFavorites(x)}} icon={'heart'} size='1x' color='gray' /></IconHeart>
                <BoxImg>
                    <img src={`${ x?.thumbnail.path }.${ x?.thumbnail?.extension }`} width='100%' alt='IMG' />
                </BoxImg>
                <BoxDescription>
                    <DivInfo>
                        <SpanInfo>Comic</SpanInfo>
                        <SpanInfo>{x?.title}</SpanInfo>
                    </DivInfo>
                    <DivInfo>
                        <SpanInfo>Numero de paginas</SpanInfo>
                        <SpanInfo>{x?.pageCount}</SpanInfo>
                    </DivInfo>
                    <DivInfo>
                        <SpanInfo>Variantes</SpanInfo>
                        <SpanInfo>{x?.variants.length}</SpanInfo>
                    </DivInfo>
                </BoxDescription>
            </BoxCard>
            )}
        </Container>
    )
}
