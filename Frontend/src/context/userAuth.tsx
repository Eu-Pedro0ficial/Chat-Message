import { ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

export interface UserAuthProps {

    id: string;
    name: string;
}

interface ContextMessageProps {
    auth: UserAuthProps;

};

type UseContextAuthType = {
    data: ContextMessageProps;
    setAuth: React.Dispatch<SetStateAction<UserAuthProps>>;
};

export const ContextMessage = createContext<UseContextAuthType>({
    data: {
        auth: {
            id: "",
            name: "",
        },

    },
    setAuth: () => { }
});

export const ContextMessageProvider = ({ children }: { children: ReactNode }) => {
    const [auth, setAuth] = useState<any>();

    return (
        <ContextMessage.Provider value={{ data: { auth }, setAuth }}>
            {children}
        </ContextMessage.Provider>
    );
};

export const useContextMessage = () => useContext(ContextMessage)
