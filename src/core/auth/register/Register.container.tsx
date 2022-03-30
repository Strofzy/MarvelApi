// Modules
import { FC } from 'react'

// Components
import { AuthView } from '../Auth.component'

export const RegisterC: FC = () => {

    const handleChange = (e:any) => {
        console.log(e)
    }

    return (
        <AuthView
            handleChange={handleChange}
            page={2}
        />
    )
}