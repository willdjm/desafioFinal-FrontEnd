import styled from "styled-components";

export const Container = styled.div`


display: flex;
align-items: center;

background-color: transparent;

border: 1px solid ${({theme}) => theme.COLORS.WHITE};
border-radius: 5px;



>svg{
        margin-left: 16px;
    }
    
>input{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 14px;
    background-color: transparent;
    border: 0;
    width: 100%;
    color: ${({theme}) => theme.COLORS.WHITE};

    &::placeholder{
        color: ${({theme}) => theme.COLORS.GREY_400};
    }
   
}

@media(max-width: 1140px){
    >input{
        width: 290px;
    }

    }

` 