import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    >main{
        width: 1120px;
        display: flex;
        flex-direction: column;
        height: 100vh;

    }
 
    .back{

        margin-top: 24px;
        display: flex;
        gap: 11px;

        a{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 140%;

            color: ${({theme}) => theme.COLORS.GREY_100};

            cursor: pointer;

            :hover{
                color: ${({theme}) => theme.COLORS.BLUE_100};
                transition: 0.2s;
            }

            :active{
                transform: scale(0.97);
                transition: 0.02s;
            }
        }
    }
`

export const Form = styled.form`

    margin-top: 24px;

    >h1{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 140%;

        color: ${({theme}) => theme.COLORS.GREY_100};
    }

    .nameImage{
            margin-top: 30px;
            display: flex;
            gap: 32px;
       
    }

    .image, .name, .ingredients, .price, .description, .category, >span{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;

        color: ${({theme}) => theme.COLORS.GREY_200};

    }

    .name{
        width: 100%;
    }

    .input{
        margin-top: 8px;
        
    }
    
    .inputCategory{
        margin-top: 8px;
        width: 175px;

        >select{

            width: 100%;
            padding: 12px 14px;
            
            background-color: transparent;
            color: ${({theme}) => theme.COLORS.WHITE};
            
            border: 1px solid ${({theme}) => theme.COLORS.WHITE};
            border-radius: 5px;

            >option{
                background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
                
            }
        }      
    }

    .inputImage{
        
        width: 229px;
        height: 45px; 
        margin-top: 8px;
        
        display: flex;
        justify-items: center;
        align-items: center;
        
        
        label{
            z-index: 2;
            position: absolute;
            margin-left: 64px;
            width: max-content;

            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            cursor: pointer;
         
        }

        img{
            margin-left: 32px;
        }

        input {
         display: none;
        }

        border: 1px solid ${({theme}) => theme.COLORS.WHITE};
        border-radius: 5px;
  
    }
    
    
    .ingredientsPrice{
        display: flex;
        justify-content:space-between;
        align-items: center;
    }
    
    .ingredients{
        margin-top: 40px;
        width: 100%;
        margin-right: 32px;
    }
    .item{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 4px 8px;
        gap: 16px;

        border: 1px solid ${({theme}) => theme.COLORS.WHITE};
        border-radius: 8px;

        margin-top: 8px;

    }
    .price{
        margin-top: 40px;

        .input{
            input[type="number"]::-webkit-outer-spin-button,
            input[type="number"]::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
           
        }
        
    }

    .description{
        margin-top: 32px;

    }
    .textarea{
        margin-top: 8px;
        
    }
    .add{

        display: flex;
        justify-content: flex-end;
        margin-top: 16px;

        >button{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 32px;
       
        width: 357px;
        height: 48px;
        color: ${({theme}) => theme.COLORS.WHITE};

        background: ${({theme}) => theme.COLORS.BACKGROUND_LINEAR3};
        
        border: 1px solid ${({theme}) => theme.COLORS.WHITE};
        border-radius: 5px;

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;

        :hover{
                color: ${({theme}) => theme.COLORS.BLUE_100};
                border: 1px solid ${({theme}) => theme.COLORS.BLUE_100};
            }
        }       
    }

`