import { HomeContainer } from 'core/home/home.container';
import { Route } from 'react-router-dom';

export const HomePage = () => {

    return (
        <Route
            path="/home"
            element={<HomeContainer/>}
        />
    )
}

export default HomePage
