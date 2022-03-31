import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from 'shared/context/auth.context'
import { ComicContext } from 'shared/context/comic.context'
import { BoxInput, DivIconSearch, DivSectionsTop, Input, Container, SpanButton } from './styled'

export const Nav:FC = () => {
    const { search } = useContext(ComicContext)
    const { signOut } = useAuth()

    const navigate = useNavigate()

    const [dataForm, setDataForm] = useState({ search: '' })

    const handleChange = (e:any) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Container>
            <DivSectionsTop>
                <img style={{ cursor:'pointer' }} onClick={() => navigate('/home')} src='/logoMM.png' alt='Wow' width='150px' height='100px' />
            </DivSectionsTop>
            <DivSectionsTop>
                <BoxInput>
                    <Input placeholder='Busca tu comic aquí' name='search' value={dataForm.search} onChange={handleChange} />
                    <DivIconSearch onClick={() => search(dataForm.search)}>
                        <FontAwesomeIcon icon='search' color='#000' size='1x' />
                    </DivIconSearch>
                </BoxInput>
            </DivSectionsTop>
            <DivSectionsTop>
                <SpanButton onClick={() => navigate('/favorites')}> Favoritos </SpanButton>
                <SpanButton onClick={() => signOut()}> Cerrar sesión </SpanButton>
            </DivSectionsTop>
        </Container>
    )
}
