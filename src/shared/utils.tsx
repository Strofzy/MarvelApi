import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/auth.context';

export const AuthWrapper: FC<any> = ({ children }) => {
    const { isLogged } = useAuth()
    const navigate = useNavigate()
    useEffect(()=>{
        navigate('/login')
    }, [])
    return (
        <>

            {isLogged && children }

        </>
    )

}
