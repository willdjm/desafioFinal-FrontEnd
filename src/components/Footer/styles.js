import styled from "styled-components"; 

export const Container = styled.footer`

height: 124px;
width: 100%;

display: flex;
justify-content: center;
align-items: center;

background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

.footer{
    width: 1122px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1120px;
   
}

.logo{
    display: flex;
    align-items: center;
    gap: 11px;
}
.logoName{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 29px;

    color: ${({theme}) => theme.COLORS.GREY_400};
}
.rights{
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    color: ${({theme}) => theme.COLORS.WHITE_100};
}

@media(max-width: 1140px){
    .footer{
        width: 768px
    }
}

@media(max-width:440px){
    height: 100%;
    padding: 5px;
    
        .logoName{
            font-size: 14px;
        }
        .logoImg{
            img{
                width: 15px;
                margin-left: 10px;
            }
        }

        .rights{
            font-size: 10px;
            margin-right: 10px;
        }
        
        .footer{
            
        width: 100%;
    
        }

    } 

`