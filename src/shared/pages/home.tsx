import { HomeContainer } from 'core/home/home.container';
import { useAuth } from 'shared/context/auth.context';

export const HomePage = () => {
    const { currentUser, isLogged } = useAuth()

    console.log(isLogged, currentUser)
    return (
        <HomeContainer/>
    )
}

HomePage.path = '/home'
HomePage.useLayout = true

export default HomePage
