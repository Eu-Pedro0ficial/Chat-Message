
import {
    createBrowserRouter,
} from "react-router-dom";
import Form from "../components/Form";
import Chat from "../components/Chat";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Form />,
    },
    {

        path: "/Chat",
        element: <Chat />,
    }
])



