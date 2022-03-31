import { FC } from 'react'
import { Container, CardLogin, Title, Box, DivLeft, DivRight, BoxISection, TextLink, ButtonIn } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TAuthView } from './types'
import { TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const AuthView: FC<TAuthView> = ({ handleChange, page, handleSubmit, dataForm }: TAuthView) => {

    const navigation = useNavigate()

    return (
        <Container>
            <CardLogin>
                <DivLeft id='form' onSubmit={handleSubmit}>
                    {page === 1 ?
                        <Box>
                            <Title >Iniciar sesión</Title>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                label="Correo Electrónico"
                                name='email'
                                value={dataForm?.email}
                                onChange={handleChange}
                                fullWidth
                                size="small"
                            />
                            <TextField
                                id="outlined-basic"
                                label="Contraseña"
                                variant="outlined"
                                fullWidth
                                name='pass'
                                value={dataForm?.pass}
                                onChange={handleChange}
                                size="small"
                            />
                            <ButtonIn type='submit' >Entrar</ButtonIn>
                            <TextLink align='center' color='#000' onClick={() => navigation('/register')}> ¿Eres nuevo? Crea una cuenta </TextLink>
                        </Box>
                        :
                        <Box>
                            <Title>Registrarse</Title>
                            <TextField
                                id="outlined-basic"
                                label="Correo Electrónico"
                                variant="outlined"
                                name='email'
                                value={dataForm?.email}
                                fullWidth
                                onChange={handleChange}
                                size="small"
                            />
                            <TextField
                                id="outlined-basic"
                                label="Contraseña"
                                variant="outlined"
                                fullWidth
                                name='pass'
                                value={dataForm?.pass}
                                onChange={handleChange}
                                size="small"
                            />
                            <TextField
                                id="outlined-basic"
                                label="Confirmar contraseña"
                                variant="outlined"
                                fullWidth
                                name='confirmPass'
                                value={dataForm?.confirmPass}
                                onChange={handleChange}
                                size="small"
                            />
                            <ButtonIn type='submit' form='form'><span style={{ marginRight: '10px' }}>Registrarse</span><FontAwesomeIcon icon={'sign-in-alt'}/></ButtonIn>
                            <TextLink top='8px' align='center' color='#000' onClick={() => navigation('/login')}> Ya tengo cuenta</TextLink>
                        </Box>
                    }
                </DivLeft>
                <DivRight>
                    <BoxISection justify='flex-start'>
                        <Title color='#fff'>Comics</Title>
                    </BoxISection>
                    <BoxISection>
                        <img src='/CompanyLogoLarge.png' alt='Wow' width='530px' height='100px' />
                    </BoxISection>
                    <BoxISection justify='flex-end'>
                        <a href='https://www.linkedin.com/in/jose-gregorio-gonzalez-620966216/' style={{ width: '100%', display: 'flex', alignItems: 'flex-end', textDecoration: 'none' }}>
                            <TextLink align='center' color='#fff'> Desarrollado por Jose Gregorio G</TextLink>
                        </a>
                    </BoxISection>
                </DivRight >
            </CardLogin>
        </Container>
    )
}
