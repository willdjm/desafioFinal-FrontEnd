import styled from "styled-components";

export const Container = styled.div`

    color: ${({theme}) => theme.COLORS.WHITE};
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 306px;

    
    .pageSignIn{
    width: 1400px;
    display: flex;
    justify-content: space-around;

    }
    
    .logo{
        white-space: nowrap; 
        display: flex;
        align-items: center; 
        gap: 19px;
        
            >span{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 42.4815px;
            line-height: 50px;

            color: ${({theme}) => theme.COLORS.WHITE};
            }
        
    }

@media(max-width: 800px){

    .pageSignIn{
        display: flex;
        flex-direction: column;
        justify-self: auto;
        
        align-items: center;

    }

    .logo{
        margin-top: -450px;
        position: absolute;
    }

}

@media(max-width: 440px){
 
    margin-top: 100px;
    width: 100%;
    height: 100%;
    

    .logo{
    margin-top: -503px;
    position: absolute;
   
    }

    
    
}
    
`

export const Form = styled.div`

   
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

width: 476px;
height: 600px;


background: ${({theme}) => theme.COLORS.BACKGROUND_700};  
border-radius: 16px;

.login{
    width: 348px;
    
    >h1{
        
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 24px;

        display: flex;
        justify-content: center;
        padding: 15px;
    }

    >span{
        margin-bottom: 8px;
    }
}

.login .email,.password, >span{
    
    color: ${({theme}) => theme.COLORS.GREY_200};
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.email{
margin-top:32px ;
}
    
.password{
margin-top:32px ;
margin-bottom: 32px;

}
.create{
margin-top:32px ;
display: flex;
justify-content: center;


    >a{
        color: ${({theme}) => theme.COLORS.WHITE};
        text-decoration: none;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;

        :active{
            transform: scale(0.98);
            transition: 0.02s;
        }
        :hover{
            transform: scale(1.1);
        }
    }

}

@media(max-width: 440px){
 
    width: 390px;
    height: 100%;

    .login{
        width: 100%;
        height: 100%;
    }

    .login .email, .password, .name{
    
        max-width: 350px;
        margin-left: 20px;
    
    }

}

`