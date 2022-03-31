import { FC } from 'react'
import { BoxCard, BoxDescription, BoxImg, ContainerBottom, DivInfo, SpanInfo } from './styled'
import { TCardComicsView } from './types'

export const CardComicsView: FC<TCardComicsView> = ({ dataComics }: TCardComicsView) => {

    return (
        <ContainerBottom>
            {dataComics?.data?.results.map((x:any, i:number) => <BoxCard key={i}>
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
        </ContainerBottom>
    )
}
