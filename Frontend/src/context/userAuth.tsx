import { ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

export interface UserAuthProps {

    name: string;
    id: string;
    isLogged: boolean;
    password: string;
}

interface ContextMessageProps {
    auth: UserAuthProps;

};

type UseContextAuthType = {
    data: ContextMessageProps;
    setAuth: React.Dispatch<SetStateAction<UserAuthProps>>;
};

export const Auth = createContext<UseContextAuthType>({
    data: {
        auth: {
            name: "",
            id: "",
            isLogged: false,
            password: ""
        },

    },
    setAuth: () => { }
});

export const UserAuthProvider = ({ children }: { children: ReactNode }) => {
    const [auth, setAuth] = useState<any>();

    return (
        <Auth.Provider value={{ data: { auth }, setAuth }}>
            {children}
        </Auth.Provider>
    );
};

export const userContentAuth = () => useContext(Auth)
