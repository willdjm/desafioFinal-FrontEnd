import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;

    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_LINEAR3};
    
    border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.BACKGROUND_LINEAR3}` : "none"};

    
    border-radius:8px;
    padding-right:10px;

    width: 118px;
    height: 32px;

    >button {
        display:flex;
        align-items:center;

        border:none;
        background:none;
        
    }

    .button-delete{
        color:${({theme}) => theme.COLORS.WHITE};
    }

    .button-add{
        color:${({theme}) => theme.COLORS.GREY_400};
    }

    >input{
        height:56px;
        width:100%;

        padding:12px;

        color:${({theme}) => theme.COLORS.WHITE};
        
        background:transparent;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        border:none;

        &::placeholder{
            color: ${({theme}) => theme.COLORS.WITHE};
        }

    }
`