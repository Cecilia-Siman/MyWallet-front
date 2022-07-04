import React from "react" 
import styled from 'styled-components';
import axios from "axios";
import { LoginContext } from "../Contexts/LoginComponent";
import { useNavigate } from 'react-router-dom';

export default function Despesas() {
    const {setToken,token,userName} = React.useContext(LoginContext);
    const [listaDespesas, setListaDespesas] = React.useState([]);
    const navigate = useNavigate();

    React.useEffect(() => {
        const req = axios.get('http://localhost:5000/despesas',{
            headers: { token }
        });
        req.then(su);
        function su(resp){ 
            setListaDespesas([...resp.data]);
            console.log("lista: ",listaDespesas);
        }
        req.catch(er);  
        function er(){
            alert("Deu erro");
        }  
	}, []);

    function MostrarDespesas(){
        if(listaDespesas.length === 0){
            return (<p className="semRegistros">Não há registros de entradas ou saídas</p>)
        }
        else{
            function DisporDespesas(props){
                return(
                    <div className="cadaDespesa">
                        <span className="data">{props.date}</span>
                        <span className="descricao">{props.description}</span>
                        <span className={props.type}>{props.amount}</span>
                    </div>
                )
            }
            const listReturn = listaDespesas.map(DisporDespesas);
            return listReturn;

        }
    }

    function exit(){
        navigate('/');
        setToken("");
    }

    return (
        <Container>
            <div className="nome">
                <h2>Olá, {userName}</h2>
                <ion-icon name="exit-outline" onClick={exit} ></ion-icon>
            </div>
            <div className="despesas">
                <MostrarDespesas/>
            </div>
            <div className="buttonContainer">
                <div className="button" onClick={()=>navigate('/entrada')}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova</p>
                    <p>entrada</p>
                </div>
                <div className="button" onClick={()=>navigate('/saida')}>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova</p>
                    <p>saída</p>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
min-height: 100vh;
width:100%;
padding-top:25px;
padding-bottom:15px;
display:flex;
flex-direction:column;
align-items:center;
.nome{
    width: 326px;
    //margin-bottom:20px;
    display:flex;
    justify-content:space-between;
}
h2{
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
}
.nome ion-icon{
    font-size:24px;
    color:white;
}

.despesas{
    margin-top:20px;
    width: 326px;
    height: 446px;
    background: #FFFFFF;
    border-radius: 5px;
}
.cadaDespesa{
    margin:10px;
    position:relative;

}

.data{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #C6C6C6;
    margin-right: 10px;
}
.descricao{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #000000;
}

.profit{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    position:absolute;
    right: 5px;
    color: #03AC00;
}
.loss{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    position:absolute;
    right: 5px;
    color:#C70000;
}

.semRegistros{
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
    margin:200px 73px;
}

.buttonContainer{
    padding-top:10px;
    width: 326px;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
}

.button{
    position: relative;
    width: 156px;
    height: 114px;
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

.button ion-icon{
    position:absolute;
    top: 8px;
    left:8px;
    font-size:25px;
}

.button p{
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;   
    margin-left:10px; 
}
.button p:nth-child(2){
    margin-top:65px;
}
`