import { FC } from 'react'
import { AuthView } from '../Auth.component'

export const AuthViewC : FC = () => {

    
    const handleChange = (e:any) => {
        console.log(e)
    }

    return (
        <AuthView
            handleChange={handleChange}
            page={1}
        />
    )
}