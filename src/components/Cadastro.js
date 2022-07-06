import React from "react" 
import styled from 'styled-components';
import axios from "axios";
import { Link } from "react-router-dom";

export default function Cadastro() {
    const [userName,setUserName] = React.useState("");
    const [password,setPassword] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [passwordConfirm,setPasswordConfirm] = React.useState('');
    function submitData(event) {
        event.preventDefault();
        const obj = {
            email:email,
            name:userName,
            password:password,
            passwordConfirm:passwordConfirm,
        };
        console.log(obj);
        
        const requisicao = axios.post('https://back-projeto13-cecilia.herokuapp.com/cadastro',obj);
        requisicao.then(function (sucesso){
            alert("cadastrado!");
        });

        requisicao.catch(function (error){
            alert("erro ao fazer o cadastro");
            console.log(error.response.data);
        });
        
        setEmail("");
        setUserName("");
        setPassword("");
        setPasswordConfirm("");

    }

    return (
        <Container>
            <h1>MyWallet</h1>
            <FormStyle>
                <form onSubmit={submitData}>
                <input 
                    type="name" 
                    value = {userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                    placeholder="Nome"
                    />
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
                    <input
                    type="password" 
                    value = {passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    required
                    placeholder="Confirme a senha"
                    />
                    
                     <button type="submit" >Cadastrar</button>
                </form>
            </FormStyle>
            <Link to={`/`}>
                <p>Já tem uma conta? Entre agora!</p>
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