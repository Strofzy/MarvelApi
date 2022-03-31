import { RegisterContainer } from 'core/auth/register/Register.container';

const RegisterPage = () => {
    return (
        <RegisterContainer/>
    )
}
RegisterPage.path = '/register'
RegisterPage.useLayout = false

export default RegisterPage
