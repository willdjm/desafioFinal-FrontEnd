import styled from "styled-components";
import { Link } from 'react-router-dom'


export const Container = styled.header`

    grid-area: header;

    height: 104px;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 32px;
    
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    .page{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 1120px;
        gap: 32px;
    }
   
    a{
        white-space: nowrap; 
        display: flex;
        align-items: center; 
        color: ${({ theme }) => theme.COLORS.WHITE};

        gap: 11px;

        font-family: 'Roboto';
        font-weight: 700;
        font-size: 25px;
        line-height: 29px;

        cursor: pointer;

        padding-right: 10px;

            >span{
        
                font-family: 'Roboto';
                font-weight: 700;
                font-size: 25px;
                line-height: 29px;
            }

    }
    .conponents{
        display: flex;
        gap: 12px;

    }

  
     @media(max-width: 1140px){
         
         gap: 12px;
        
        .page{
            width: 760px;
        }

        a{
            padding-right: 0px;
        }

    }

`

export const ButtonReq = styled(Link)`
    max-width: 216px;

    @media(max-width: 1140px){

            max-width: 165px;
        
    }

`

