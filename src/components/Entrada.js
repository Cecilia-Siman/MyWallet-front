import React from "react" 
import styled from 'styled-components';
import axios from "axios";
import { LoginContext } from "../Contexts/LoginComponent";
import { useNavigate } from 'react-router-dom';

export default function Entrada() {
    const {token} = React.useContext(LoginContext);
    const [valor,setValor] = React.useState("");
    const [descricao,setDescricao] = React.useState("");
    const navigate = useNavigate();

    function submitData(event) {
        event.preventDefault();
        const obj = {
            amount: valor,
            description: descricao,
        };
        console.log(obj);
        
        const requisicao = axios.post('https://back-projeto13-cecilia.herokuapp.com/entrada',obj,{
            headers: { token }
        });
        requisicao.then(function (sucesso){
            alert("nova despesa adicionada");
        });

        requisicao.catch(function (error){
            alert("erro ao adicionar despesa");
            console.log(error.response.data);
        });
        
        setValor("");
        setDescricao("");
        navigate('/despesas');
    }

    return(
        <Container>
            <div>
                <h2>Nova Entrada</h2>
            </div>
            <FormStyle>
                <form onSubmit={submitData}>
                    <input 
                    type="name" 
                    value = {valor}
                    onChange={(e) => setValor(e.target.value)}
                    required
                    placeholder="Valor"
                    />
                    <input 
                    type="name" 
                    value = {descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    required
                    placeholder="Descrição"
                    />                    
                     <button type="submit" >Salvar entrada</button>
                </form>
            </FormStyle>
            
        </Container>
    )
}


const Container = styled.div`
min-height: 100vh;
width:100%;
padding-top:25px;
display:flex;
flex-direction:column;
align-items:center;
div{
    width: 320px;
    position:relative;
    margin-bottom:20px;
}
h2{
    position:absolute;
    top:0;
    left:0;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
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
            font-family: 'Raleway', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
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
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        &:hover{
            cursor:pointer;
        }
    }
`
