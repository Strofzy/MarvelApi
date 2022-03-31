import { FC } from 'react'
import { AuthView } from '../Auth.component'
import { useAuth } from 'shared/context/auth.context';

export const LoginContainer : FC = () => {
    const { signIn } = useAuth()

    const handleChange = (e:any) => {
        console.log(e)
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()
        signIn({ email: 'sstrofz@gmail.com', password: '123123' })
    }

    return (
        <AuthView
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            page={1}
        />
    )
}
