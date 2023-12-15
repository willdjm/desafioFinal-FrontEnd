import { Container, ImgTextBanner } from "./styles";
import imgBanner from '../../assets/imgPrincipal.png'

export function Banner(){
    return(
        <Container>
            <div className="text">
            <ImgTextBanner>
                <img src={imgBanner}/>
                <div>
                    <h1>Sabores inigualáveis</h1>
                    <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                </div>
            </ImgTextBanner>
               
            </div>

        </Container>
    )
}