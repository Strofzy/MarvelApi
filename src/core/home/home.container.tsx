import axios from 'axios'
import { FC, useEffect } from 'react'
import { HomeView } from './home.component'

export const HomeC: FC = () => {

    useEffect(() => {
        axios.get('https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=54bcd737a8c3cb5453d38a5448530945&hash=ad5163aeefa97b0bd0fe3525e2a77782')
            .then(res => console.log(res.data.data))
    }, [])
    
    return (
        <HomeView />
    )
}
