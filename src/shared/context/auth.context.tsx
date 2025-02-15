import { FC, useContext, useState, createContext, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, User, signOut as signOutFirebase } from 'firebase/auth'
import app from 'shared/services/firebase.config';
import { useNavigate } from 'react-router-dom';
import { useAlert } from '../components/Alert/useAlert';

export type TUser = {
    email: string
    password: string
}

export interface IAuthContext {
    isLogged: boolean
    currentUser: User | null
    createUser: (dataUser: TUser) => void
    signIn: (dataUser: TUser) => void
    signOut: () => void
}

// Context authentication
export const AuthContext = createContext<IAuthContext>({} as unknown as IAuthContext)
// Custom hook to access context values
export const useAuth = () => useContext(AuthContext)

// Context authentication provider
export const AuthProvider: FC = ({ children }) => {
    const { show } = useAlert()

    // States
    const navigation = useNavigate()
    const [isLogged, setIsLogged] = useState(false)
    const [isRetryLogin, setIsRetryLogin] = useState(false)
    const [currentUser, setCurrentUser] = useState<User | null>(null)

    //Auth
    const auth = getAuth(app)

    /**
     * Create user with user email and password
     * @param {object} dataUser user data
     * @returns {void}
     */
    const createUser = (dataUser: TUser) => {
        const { email, password } = dataUser

        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                setIsLogged(true)
                setCurrentUser(res.user)
                show({
                    message: 'Registro exitoso',
                    type:'success'
                })
                navigation('/')
            }).catch(() => {
                setIsLogged(false)
            })
    }

    /**
     * SignIn user with user email and password
     * @param {object} dataUser user data
     * @returns {void}
     */
    const signIn = (dataUser: TUser) => {
        const { email, password } = dataUser

        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                setIsLogged(true),
                setCurrentUser(res.user)
                show({
                    message: 'Sesión iniciada',
                    type:'success'
                })
                navigation('/home')
            })
            .catch(() => {
                setIsLogged(false)
                show({
                    message: 'Los campos no coinciden',
                    type:'warning'
                })
            })
    }

    /**
     * SignOut User
     * @returns {void}
     */
    const signOut = () => {
        signOutFirebase(auth)
            .then(() => {
                setIsLogged(false),
                setCurrentUser(null)
                show({
                    message: 'Sesión Cerrada',
                    type:'success'
                })
                navigation('/')
            })
            .catch(() => {
                //Error Code
            })
    }

    const retryLogin = () => {
        setIsRetryLogin(true)
        onAuthStateChanged(auth, user => {
            if (user) {
                setCurrentUser(user)
                setIsLogged(true)
            }
            setIsRetryLogin(false)
        })
    }

    useEffect(() => {
        retryLogin()
    }, [])

    useEffect(() => {
        isLogged ? navigation('/home') : navigation('/login')
    }, [isLogged])

    if (isRetryLogin) return <div/>

    return (
        <AuthContext.Provider value={{
            isLogged,
            currentUser,
            createUser,
            signIn,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}

