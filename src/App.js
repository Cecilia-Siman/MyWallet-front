import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginContext } from './Contexts/LoginComponent'

import GlobalStyle from "./components/globalStyles";

import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Entrada from "./components/Entrada";
import Saida from "./components/Saida";
import Despesas from "./components/Despesas";


export default function App() {
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
    const [userName,setUserName] = React.useState("");
    const [token,setToken] = React.useState("");

    return (
        <LoginContext.Provider value={{userName,setUserName,token,setToken}}>            
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/entrada" element={<Entrada />} />
                    <Route path='/saida' element={<Saida />} />
                    <Route path='/despesas' element={<Despesas />} />
                </Routes>
            </BrowserRouter>
        </LoginContext.Provider>
    )
}