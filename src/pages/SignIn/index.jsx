import { useState } from 'react'
import { Container, Form } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import {FiMail} from 'react-icons/fi'
import {BsPerson} from 'react-icons/bs'
import {RiLockPasswordLine} from 'react-icons/ri'
import LogoGG from '../../assets/logoblueGG.svg'

import { Link } from 'react-router-dom'

import { useAuth } from "../../hooks/auth"

export function SignIn(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signIn } = useAuth()

    function handleSignIn(){
        signIn({email, password})
    }
    

    return(
        <Container>
            <div className="pageSignIn">

            <div className="logo">
                <img src={LogoGG} alt="Logo" />
                <span>food explorer</span>
            </div>

            <Form>
                <div className="login">
                    <h1>Faça login</h1>
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
                    <Button name="Entrar" onClick={handleSignIn}/>
                    <div className="create">
                        <Link to="/signup">Criar uma conta</Link>
                    </div> 
                </div>

            </Form>
            </div>
        </Container>
    )
}