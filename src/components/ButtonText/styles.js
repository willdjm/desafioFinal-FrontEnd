import styled from "styled-components";

export const Container = styled.div`

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;

border: none;

line-height: 160%;
display: flex;
align-items: center;
text-align: center;

white-space: nowrap; 
cursor: pointer;

padding-right: 10px;

:hover{
        color: ${({theme}) => theme.COLORS.BLUE_100};
        transition: 0.2s;
    }
:active{
        transform: scale(0.97);
        transition: 0.02s;
}

@media(max-width:440px){
        
        font-size: 12px;
} 

`