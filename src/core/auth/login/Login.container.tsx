import { FC, useState } from 'react';
import { AuthView } from '../Auth.component'
import { useAuth } from 'shared/context/auth.context';
import { useAlert } from 'shared/components/Alert';

export const LoginContainer : FC = () => {
    const { signIn } = useAuth()
    const { show } = useAlert()

    const [dataForm, setDataForm] = useState({
        email: '',
        pass: '',
    })

    const handleChange = (e:any) => {
        setDataForm({
            ...dataForm,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()
        if (dataForm.email && dataForm.pass) {
            signIn({ email:dataForm?.email, password: dataForm?.pass })
        }
        else {
            show({
                message: 'Campos errados',
                type:'warning'
            })
        }
    }

    return (
        <AuthView
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            page={1}
            dataForm={dataForm}
        />
    )
}
