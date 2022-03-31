// Modules
import { FC, useContext } from 'react';
import { AuthContext } from 'shared/context/auth.context';

// Components
import { AuthView } from '../Auth.component'

export const RegisterContainer: FC = () => {
    const { createUser } = useContext(AuthContext)

    const handleChange = (e:any) => {
        console.log(e)
    }

    const handleSubmit = (e:any) => {
        createUser({ email: 'sstrofz@gmail.com', password: '123123' })
    }

    return (
        <AuthView
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            page={2}
        />
    )
}
