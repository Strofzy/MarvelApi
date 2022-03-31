// Modules
import { FC, useContext, useState } from 'react';
import { useAlert } from 'shared/components/Alert';
import { AuthContext } from 'shared/context/auth.context';

// Components
import { AuthView } from '../Auth.component'

export const RegisterContainer: FC = () => {
    const { createUser } = useContext(AuthContext)

    const { show } = useAlert()

    const [dataForm, setDataForm] = useState({
        email: '',
        pass: '',
        confirmPass: '',
    })

    const handleChange = (e:any) => {
        setDataForm({
            ...dataForm,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()
        if (dataForm.pass === dataForm.confirmPass) {
            createUser({ email: dataForm?.email, password: dataForm?.pass })
        } else {
            show({
                message: 'Contraseñas no coincide',
                type:'warning'
            })
        }
    }

    return (
        <AuthView
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            page={2}
        />
    )
}
