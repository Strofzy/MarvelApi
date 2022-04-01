import { Routes, Route, Navigate } from 'react-router-dom'
import ALL_PAGE from 'shared/pages';
import { AuthProvider } from './shared/context/auth.context';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Layout } from 'shared/components/layout';
import { ComicContextProvider } from 'shared/context/comic.context';
import { FavoritesContextProvider } from 'core/favorites/favorites.context';

library.add(fas as any) // añado la librería de iconos

const Redirect = ({ to }: {to: string})=><Navigate to={to} />

function App() {
    return (
        <>
            <AuthProvider>
                <ComicContextProvider>
                    <FavoritesContextProvider>
                        <Routes>
                            <Route path='/' element={<Redirect to='login' />} ></Route>
                            {ALL_PAGE.map(((Page: any, index) => (
                                <Route path={Page.path} key={`route-${ index }`} element={
                                    Page.useLayout ? <Layout>
                                        <Page/>
                                    </Layout> :
                                        <Page/>
                                }>
                                </Route>
                            )))}
                        </Routes>
                    </FavoritesContextProvider>
                </ComicContextProvider>
            </AuthProvider>
        </>
    )
}

export default App;
