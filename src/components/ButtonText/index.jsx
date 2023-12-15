import { Container } from "./styles";

export function ButtonText({name, loading = false, icon: Icon, ...rest}){
    return(
    <Container 
        type="button"
        disabled={loading}
        {...rest}
    >

        { loading ? 'Carregando...' : name}
        {Icon && <Icon size={30} />}

    </Container>
    )
}