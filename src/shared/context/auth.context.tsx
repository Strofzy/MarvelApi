import { FC, useContext, useState, createContext, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, User, signOut as signOutFirebase } from 'firebase/auth'
import app from 'shared/services/firebase.config';

export type TUser = {
    email: string
    password: string
}

export interface IAuthContext {
    isLogged: boolean
    currentUser: User | null
    createUser: (dataUser: TUser) => void
    signIn: (dataUser: TUser) => void
    signOut: (dataUser: TUser) => void
}

// Context authentication
export const AuthContext = createContext<IAuthContext>({} as unknown as IAuthContext)

// Custom hook to access context values
export const useAuth = () => useContext(AuthContext)

// Context authentication provider
export const AuthProvider: FC = ({ children }) => {

    // States
    const [isLogged, setIsLogged] = useState(true)
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
            })
            .catch(() => {
                setIsLogged(false)
            })
    }

    /**
     * SignOut User
     * @returns {void}
     */
    const signOut = () => {
        signOutFirebase(auth)
            .then(() => {
                setIsLogged(true),
                setCurrentUser(null)
            })
            .catch(() => {
                //Error Code
            })
    }

    useEffect(() => {
        setCurrentUser(auth.currentUser)
    }, [auth])

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

