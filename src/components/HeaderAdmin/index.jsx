import { Container, ButtonReq } from "./styles";
import Logo from '../../assets/logoblue.svg'
import { FiSearch, FiLogOut } from 'react-icons/fi'
import { Search } from '../Search'
import { ButtonText } from "../ButtonText";
import { ButtonRequest } from "../ButtonRequest";
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from "../../hooks/auth";

export function HeaderAdmin({ setSearch }){

    const { signOut } = useAuth()
    const navigation = useNavigate()

    function handleSignOut(){
        navigation("/")
        signOut()
    }

    function handlePageAdmin(){
        alert(`Esta será a página onde o administrador poderá: 
        Alterar sua senha de acesso
        Alterar texto do Banner da página inicial
        Alterar nome da Empresa do Header e Footer

        Logo mais este recurso estará disponível.
        `)
    }

    return(
    <Container>
        
        <div className="page">

    <div className="logo">
        <Link to="/">
            <img src={Logo} alt="Logo"/>
            <span>food explorer</span>
        </Link>
    </div>

    <div className="conponents">

        <Search 
            placeholder="Buscar pratos" 
            icon={FiSearch}
            onChange={e => setSearch(e.target.value)}
        />
   
        <ButtonText onClick={handlePageAdmin} name="Administrador"/>
  
        <ButtonReq to="/new">
            <ButtonRequest name="Adicionar prato"/>
        </ButtonReq>
        
        <ButtonText icon={FiLogOut} onClick={handleSignOut}/>
    </div>
        </div>

    </Container>

    )
}