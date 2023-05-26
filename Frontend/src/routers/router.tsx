import {
    BrowserRouter, Route, Routes
} from "react-router-dom";
import Form from "../components/Form";
import Chat from "../components/Chat";
import { userContentAuth } from "../context/userAuth";

export default function Router(){
    const { data } = userContentAuth();
    
    return (
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={<Form/>} />
                <Route path="/Chat" element={data.auth?.isLogged! && <Chat />} />
            </Routes>
        </BrowserRouter>

    )
}

