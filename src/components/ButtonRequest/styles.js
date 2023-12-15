import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 32px;
    gap: 11px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    width: 100%;
    height: 56px;

    background: ${({theme}) => theme.COLORS.RED_700};
    color: ${({theme}) => theme.COLORS.WHITE};
    border-radius: 5px;
    cursor: pointer;
    
    white-space: nowrap; 
    transition: 0.2s;

    :hover{
        background: ${({theme}) => theme.COLORS.RED_500};   
    }
    :active{
        transform: scale(0.98);
        transition: 0.02s;
    }

    @media(max-width:440px){
        padding: 5px 12px;
        gap: 5px;

        font-size: 10px;
        

        width: 110px;
        height: 30px;
        
        >img{
            width: 13px;
        }
        
    } 

`