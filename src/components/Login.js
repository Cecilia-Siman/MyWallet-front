import React from "react" 
import styled from 'styled-components';
import axios from "axios";
import { Link } from "react-router-dom";
import { LoginContext } from "../Contexts/LoginComponent";

import { useNavigate } from 'react-router-dom';


export default function Login() {
    const {setUserName,setToken} = React.useContext(LoginContext);
    const [password,setPassword] = React.useState("");
    const [email,setEmail] = React.useState("");
    const navigate = useNavigate();
    function submitData(event){
        event.preventDefault();

        //início do login
        const obj = {
            email:email,
            password:password,
        };
        
        const requisicao = axios.post('https://back-projeto13-cecilia.herokuapp.com/',obj);
        requisicao.then(success);
        function success(resposta){ 
            setUserName(resposta.data.name); 
            setToken(resposta.data.token);
            navigate('/despesas');
        }
        requisicao.catch(erro);  
        function erro(){
            alert("E-mail ou senha incorretos!")
        }
        //fim do login
    }


    return (
        <Container>
            <h1>MyWallet</h1>
            <FormStyle>
                <form onSubmit={submitData}>
                    <input 
                    type="email" 
                    id="email" 
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="E-mail"
                    />
                    <input 
                    type="password" 
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Senha"
                    />
                     <button type="submit" >Entrar</button>
                </form>
            </FormStyle>
            <Link to={`/cadastro`}>
                <p>Primeira vez? Cadastre-se!</p>
            </Link>
        </Container>
    )
}


const Container = styled.div `
min-height: 100vh;
width:100%;
//background:#ffffff;
padding-top:68px;
display:flex;
flex-direction:column;
align-items:center;
p{
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    color: #ffffff;
    &:hover{
        cursor:pointer;
    }
}
`

const FormStyle = styled.div `
margin-top:52px;
    form{ 
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    input{
        margin-bottom:10px;
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 12px;
        &::placeholder{
            font-family: 'Lexend Deca', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: #000000;
            opacity: 1;
        }
    }
    button{
        width: 318px;
        height: 45px;
        background: #A328D6;
        border-radius: 4.63636px;
        margin-bottom:24px;
        color:#ffffff;
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        &:hover{
            cursor:pointer;
        }
    }
`