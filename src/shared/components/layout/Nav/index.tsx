import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, useState } from 'react'
import { BoxInput, DivIconSearch, DivSectionsTop, Input, Container } from './styled'

export const Nav :FC = () => {

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
        </Container>
    )
}
