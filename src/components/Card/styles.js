import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin-right: 27px;
    margin-top: 39.5px;

    width: 300px;
    height: 512px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_300};

    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_LINEAR4};
    

    .item{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 300px;

    }

    .fav{
        display: flex;
        justify-content: flex-end;
        margin-top: 21px;
        margin-right: 19px;
        cursor: pointer;
        background: transparent;
        border: none;
        color:${({theme}) => theme.COLORS.WHITE};
        
    }

    .image{
            cursor: pointer;
            transition: 0.2s; 
            height: 200px;
            display: flex;

            img{
                max-width: 176px;
                
           }
           button{
            background: transparent;
            border: none;
           }
        }

    .image:hover{
        transform: scale(1.1); 
    }
    .request{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
       
        gap: 16px;

        width: 208px;
        height: 48px;

        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 160%;
        

        width: 208px;
        height: 48px;
           
        >button{
            background: transparent;
            border: 0;
        }
        >button:first-child{
            margin-top: -10px;
        }
        >button:active{
                    
        transform: scale(0.90);
        transition: 0.01s;
        }
        
    
    }

    .name button{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 140%;
        
        cursor: pointer;
        color: ${({ theme }) => theme.COLORS.GREY_100};
        background: transparent;

        border: none;
    }
    .info{

        width: 220px;
        height: 44px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 160%;


        text-align: center;

        margin-top: 16px;

        color: ${({ theme }) => theme.COLORS.GREY_200};
    }

    .price{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 160%;

        margin-bottom: 17px;
        margin-top: 16px;

        color: ${({theme}) => theme.COLORS.BLUE_100};

        >span:first-child{
            margin-right: 10px;
        }

      
    }

    @media(max-width:440px){

        margin-right: 27px;
        margin-top: 9.5px;

        height: 280px;
      
        .item{
            width: 170px;
            height: 212px;

       
        }

        .fav{
            width: 22px;
        
        }

        .image{
          
            height: 200px;

            img{
                max-width: 100px;
    
           }
         
        }
        .image:hover{
        
            transform: none; 
        
        }

        .name button{
        
            font-size: 14px;
                
        }
        .info{

            display: none;
        }

        .price{
            
            font-size: 18px;
        

            margin-bottom: 17px;
            margin-top: 5px;

        
            >span:first-child{
                margin-right: 13px;
            }
        }

        .request{
        
            gap: 6px;

            width: 108px;
            height: 28px;

            font-size: 13px;
        
            >button{
                background: transparent;
                border: 0;
                
                >img{
                    width: 14px;
                }
            
            }
            >button:first-child{
                margin-top: -10px;
            }

    }













    } 

`
export const ButtonAdd = styled.div`
    width: 92px;

    @media(max-width:390px){
        width: 30px;
    }

`