import { LoginContainer } from 'core/auth/login/Login.container';
import { Route } from 'react-router-dom';

const LoginPage = () => {
    return (
        <Route
            path="/login"
            element={<LoginContainer/>}
        />
    )
}

export default LoginPage
