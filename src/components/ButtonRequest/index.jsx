import { Container } from './styles'
import Request from '../../assets/request.svg'

export function ButtonRequest({name, icon: Icon, ...rest}){
    return(
        <Container 
        type="button"
        
        {...rest}>
            <img src={Request} alt="Request" />
            {name}
            {Icon && <Icon size={20} />}
        </Container>
    )
}

