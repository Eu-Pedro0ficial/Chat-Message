import {
    BrowserRouter, Route, Routes
} from "react-router-dom";
import Form from "../components/pages/Form";
import Login from "../components/pages/Login";
import isUserLoggedIn from "./middleware/isUserLoggedIn";
import Home from "../components/Home";
import Chat from "../components/pages/Chat";

export default function Router(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Register" element={<Form/>} />
                <Route path="/Chat" element={isUserLoggedIn() ? <Chat /> : <Login/>} />
                <Route path="/Login" element={<Login/>} />
            </Routes>
        </BrowserRouter>
    )
}

