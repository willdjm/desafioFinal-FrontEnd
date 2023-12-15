import { Container } from "./styles"
import LogoFooter from "../../assets/logoFooter.svg"

export function Footer(){
    return(
        <Container>
            <div className="footer">
                <div className="logo">
                    <div className="logoImg">
                        <img src={LogoFooter} alt="Logo" />             
                    </div>
                    <div className="logoName">
                        <span>food explorer</span>  
                    </div>
                </div>
            
                <div className="rights">
                    <span>© 2023 - Todos os direitos reservados.</span>
                </div>
            </div>
        

        </Container>
    )
}