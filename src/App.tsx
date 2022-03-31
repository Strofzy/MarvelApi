import { Routes, Route } from 'react-router-dom'
import ALL_PAGE from 'shared/pages';
import { AuthProvider } from './shared/context/auth.context';
import { QueryClientProvider } from 'react-query'
import { queryClient } from 'shared/services/client.config';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Layout } from 'shared/components/layout';

library.add(fas as any) // añado la librería de iconos

function App() {
    return (
        <>
            <AuthProvider>
                <QueryClientProvider client={queryClient}>
                    <Routes>
                        {ALL_PAGE.map(((Page, index) => (
                            <Route path={Page.path} key={`route-${ index }`} element={
                                <Layout>
                                    <Page/>
                                </Layout>
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
