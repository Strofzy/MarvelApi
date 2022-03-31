import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CardComicsView } from 'core/cardComics/cardComics.components'
import { FC, useState } from 'react';
import { BoxInput, Container, DivIconSearch, DivSectionsTop, Input, SectionTop } from './home.styled'
import { THomeView } from './types'

export const HomeView: FC<THomeView>= ({ dataComics }: THomeView) => {

    const [dataForm, setDataForm] = useState({ search: '' })

    const handleChange = (e:any) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    const Search = () => {
        console.log('w')
    }

    return (
        <Container>
            <SectionTop>
                <DivSectionsTop>
                    <img src='/logoM.png' alt='Wow' width='200px' height='100px' />
                </DivSectionsTop>
                <DivSectionsTop>
                    <BoxInput>
                        <Input placeholder='Busca tu comic aquí' name='search' value={dataForm.search} onChange={handleChange} />
                        <DivIconSearch onClick={() => Search()}>
                            <FontAwesomeIcon icon='search' color='#000' size='1x' />
                        </DivIconSearch>
                    </BoxInput>
                </DivSectionsTop>
                <DivSectionsTop>
                    <FontAwesomeIcon cursor='pointer' icon='close' size='1x' color='#d2d2d2' />
                </DivSectionsTop>
            </SectionTop>
            <CardComicsView
                dataComics={dataComics}
            />
        </Container>
    )
}
