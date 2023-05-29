import {
    BrowserRouter, Route, Routes
} from "react-router-dom";
import Home from "../components/pages/Home";
import Chat from "../components/pages/Chat";

export default function Router(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Chat" element={<Chat />} />
            </Routes>
        </BrowserRouter>
    )
}
