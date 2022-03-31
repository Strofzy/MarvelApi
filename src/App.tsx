import { Fragment } from 'react';
import { Routes } from 'react-router-dom'
import ALL_PAGE from 'shared/pages';
import { AuthProvider } from './shared/context/auth.context';
import { QueryClientProvider } from 'react-query'
import { queryClient } from 'shared/services/client.config';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas as any) // añado la librería de iconos

function App() {
    return (
        <>
            <AuthProvider>
                <QueryClientProvider client={queryClient}>
                    <Routes>
                        {ALL_PAGE.map(((page, index) => (
                            <Fragment key={index} >
                                {page()}
                            </Fragment>
                        )))}
                    </Routes>
                </QueryClientProvider>
            </AuthProvider>
        </>
    )
}

export default App;
