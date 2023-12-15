import { Container, Form } from './styles'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import {FiMail} from 'react-icons/fi'
import {BsPerson} from 'react-icons/bs'
import {RiLockPasswordLine} from 'react-icons/ri'
import LogoGG from '../../assets/logoblueGG.svg'

export function SignUp(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp(){
        if(!name|| !email || !password){
            return alert("Preencha todos os campos para se cadastrar")
        }

        api.post("/users", { name, email, password })
        .then(() => {
            alert("Usuário cadastrado com sucesso!")
            navigate("/")
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possível cadastrar")
            }
        })
    }

    return(
        <Container>
            <div className="pageSignIn">

            <div className="logo">
                <img src={LogoGG} alt="Logo" />
                <span>food explorer</span>
            </div>

            <Form id="form">
                <div className="login">
                    <h1>Crie sua conta</h1>
                    <div className="name">
                    <span>Seu nome</span>
                    <Input
                        placeholder="Exemplo: Maria da Silva"
                        type="text"
                        icon={BsPerson}
                        onChange={e => setName(e.target.value)}
                    />
                    </div>
                    <div className="email">
                    <span>E-mail</span>
                    <Input
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        type="text"
                        icon={FiMail}
                        onChange={e => setEmail(e.target.value)}
                    />
                    </div>
                    <div className="password">
                    <span>Senha</span>
                    <Input
                        placeholder="No mínimo 6 caracteres"
                        type="password"
                        icon={RiLockPasswordLine}
                        onChange={e => setPassword(e.target.value)}
                    />
                    </div>
                    <Button name="Criar conta" onClick={handleSignUp}/>
                    <div className="create">
                        <Link to="/">Já tenho uma conta</Link>
                    </div> 
                </div>

            </Form>
            </div>
        </Container>
    )
}