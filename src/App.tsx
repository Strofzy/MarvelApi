import { Routes, Route, Navigate } from 'react-router-dom'
import ALL_PAGE from 'shared/pages';
import { AuthProvider } from './shared/context/auth.context';
import { QueryClientProvider } from 'react-query'
import { queryClient } from 'shared/services/client.config';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Layout } from 'shared/components/layout';

library.add(fas as any) // añado la librería de iconos

const Redirect = ({ to }: {to: string})=><Navigate to={to} />

function App() {
    return (
        <>
            <AuthProvider>
                <QueryClientProvider client={queryClient}>
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
                </QueryClientProvider>
            </AuthProvider>
        </>
    )
}

export default App;
