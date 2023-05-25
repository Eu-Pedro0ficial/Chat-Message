import { ReactNode, createContext, useContext, useState } from 'react';

export interface messagesUserProps {

    message: string,
    user: string,
    time: string
}

interface ContextMessageProps {
    message: messagesUserProps[];
    setMessage: (message: string[]) => void;
};

type ContextMessageType = {
    data: ContextMessageProps;
};

export const ContextMessage = createContext<ContextMessageType>({
    data: {
        message: [{
            message: "",
            user: "",
            time: ""
        }],
        setMessage: (message: string[]) => message,
    },
});

export const ContextMessageProvider = ({ children }: { children: ReactNode }) => {
    const [message, setMessage] = useState<any>([]);

    return (
        <ContextMessage.Provider value={{ data: { message, setMessage } }}>
            {children}
        </ContextMessage.Provider>
    );
};

export const useContextMessage = () => useContext(ContextMessage)
