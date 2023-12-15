import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.RED_500};
    color: ${({ theme }) => theme.COLORS.WHITE};

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 32px;
    gap: 8px;

    border-radius: 5px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    cursor: pointer;
    transition: 0.2s;

    :hover{
        background: ${({theme}) => theme.COLORS.RED_400};
        
    }
        
    &:disabled{
        opacity: 0.5;
        cursor: auto;
    }
    :active{
        transform: scale(0.97);
        transition: 0.02s;
    }

    @media(max-width:440px){
        font-size: 11px;
        height: 30px;

        padding: 10px 22px;
    }

`