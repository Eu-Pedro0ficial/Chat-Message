import {
    BrowserRouter, Route, Routes
} from "react-router-dom";
import Form from "../components/Form";
import Chat from "../components/Chat";
import Login from "../components/Login";
import isUserLoggedIn from "./middleware/isUserLoggedIn";
import Home from "../components/Home";

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

