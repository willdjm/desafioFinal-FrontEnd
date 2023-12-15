import styled from "styled-components";

export const Container = styled.div`


display: flex;
align-items: center;

background-color: ${({theme})=> theme.COLORS.BACKGROUND_600};

border-radius: 5px;

>svg{
    color: ${({theme})=> theme.COLORS.GREY_200};
    margin-left: 16px;
}

>input{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 14px;
    gap: 14px;
    border: 0;

    width: 410px;
    height: 48px;
    

    background: transparent;
    color: ${({theme})=> theme.COLORS.WHITE};

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;

    &::placeholder{
        color: ${({theme}) => theme.COLORS.GREY_400};
    }
}

@media(max-width: 1140px){
    
    >svg{
           
        margin-left: 10px;
    }

    >input{
        width: 180px;
    }

}

@media(max-width:440px){
       display: none;
    } 

` 