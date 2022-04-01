import { FC, useEffect, useState } from 'react';
import { BoxCard, BoxContainer, BoxContainerVariant, BoxDescription, BoxVariant, Container, ContainerSection, DivInfo, SpanInfo, SpanTitle } from './styled'
import { /* useNavigate */ useParams } from 'react-router-dom';
import ComicsService from 'shared/services/comics/comics.services';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export const ComicDetailView: FC = () => {
    //CUSTOM STATES
    const { id } = useParams();
    /*     const navigate = useNavigate() */

    //ESTADO DONDE SE ALMACENA LA DATA DEL COMIC
    const [data, setData] = useState<any>()

    //EJECUTA EL SERVICIO PARA TRAER LA DATA SEGÚN EL ID EN LA RUTA
    useEffect(() => {
        ComicsService.get(id)
            .then(res => {
                setData(res?.data?.results[0])
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <ContainerSection>
                <img src={`${ data?.thumbnail.path }.${ data?.thumbnail?.extension }`} width='500px' alt='IMG' />
                <BoxContainer>
                    <SpanTitle>DETALLES DEL COMIC</SpanTitle>
                    <BoxCard >
                        <BoxDescription>
                            <DivInfo>
                                <SpanInfo>Comic</SpanInfo>
                                <SpanInfo>{data?.title}</SpanInfo>
                            </DivInfo>
                            <DivInfo>
                                <SpanInfo>Numero de paginas</SpanInfo>
                                <SpanInfo>{data?.pageCount}</SpanInfo>
                            </DivInfo>
                            <DivInfo>
                                <SpanInfo>Variantes</SpanInfo>
                                <SpanInfo>{data?.variants.length}</SpanInfo>
                            </DivInfo>
                        </BoxDescription>
                        <BoxDescription>
                            <DivInfo>
                                <SpanInfo>Creadores</SpanInfo>
                                <SpanInfo>{data?.creators.available}</SpanInfo>
                            </DivInfo>
                            <DivInfo>
                                <SpanInfo>Ultima fecha de modificación</SpanInfo>
                                <SpanInfo>{data?.modified}</SpanInfo>
                            </DivInfo>
                        </BoxDescription>
                    </BoxCard>
                    <SpanTitle>VARIANTES</SpanTitle>
                    <BoxContainerVariant>
                        {data?.variants.map((x:any, i:number) => <BoxVariant /* onClick={() => navigate(`/comicInfo/${ x?.id }`)} */ key={i} >
                            <DivInfo>
                                <SpanInfo justify='center' >{x?.name}</SpanInfo>
                            </DivInfo>
                            <DivInfo>
                                <SpanInfo justify='center'>{x?.resourceURI}</SpanInfo>
                            </DivInfo>
                        </BoxVariant>
                        )}
                    </BoxContainerVariant>
                </BoxContainer>
            </ContainerSection>
        </Container>
    )
}
