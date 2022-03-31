import { RegisterContainer } from 'core/auth/register/Register.container';
import { Route } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <Route
            path="/register"
            element={<RegisterContainer/>}
        />
    )
}

export default RegisterPage
