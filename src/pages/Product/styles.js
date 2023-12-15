import styled from "styled-components";

export const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;
width: 100%;



.productPage{
    
    display: flex;
    width: 1120px;
    height: 100vh;
   
    
    
}
.product{
    width: 1120px;
    

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

.info{
    max-width: 600px;
}

.item{
    
    margin-top: 41.5px;
    display: flex;
    align-items: center;
}
.image{
    margin-right: 41px;
    
    img{
       
        max-width: 390px;
        max-height: 390px;

        width: auto;
        height: auto;
    }
}

.name{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 140%;

    color: ${({theme}) => theme.COLORS.GREY_100};
}

.description{

    margin-top: 8px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 140%;
    color: ${({theme}) => theme.COLORS.GREY_100};
}

.ingredients{

    margin-top: 34px;
    display: flex;
    gap: 16px;
    
}
.ingredient{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 71px;

        span{
            margin-top: 8px;
        }

}
.request{
    margin-top: 47px;
    display: flex;
}

.value{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 160%;

    color: ${({theme}) => theme.COLORS.BLUE_100};

    display: flex;
    gap: 8px;

    margin-right: 56px;
}

.requestItem{
    
    width: 215px;
    
    display: flex;
    align-items: center;
    gap: 17px;

    >button{
            background: transparent;
            border: 0;
        }
    >button:first-child{
        margin-bottom: 10px;
    }

    >button:active{
                    
        transform: scale(0.90);
        transition: 0.01s;
    }

   >label{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    
    color: ${({theme}) => theme.COLORS.GREY_100};
   }
}

@media(max-width: 1140px){

    
    .productPage{
        width: 768px;
        height: 100%;
        margin-bottom: 20px;
        
    }
    .image{
        >img{
            height:300px;
        }
    }

    .description{
    font-size: 20px;
    }

    .name{
    font-size: 35px;
    }
}

@media(max-width:440px){
    
    .productPage{
        overflow: hidden;
    }

    .back{

        margin-top: 14px;
        display: flex;
        gap: 8px;

        a{
            font-size: 18px;
        }
        img{
            width: 10px;
            margin-left: 25px;
        }
    }

    .item{
    
        margin-top: 30px;
        display: flex;
        align-items: center;
        flex-direction: column;
    
    }
    .info{
        display: flex;
        flex-direction: column;
        
        justify-content: center;
        align-content: center;
        
    }

    .productPage{
        width: 100%;
        height: 100%;
        
    }
    .image{

        margin-right: 0px;

        >img{
            height:250px;
        }
    }

    .name{
        font-size: 30px;
        margin-top: 15px;
    }

    .description{
        font-size: 14px;
        width: 300px;
    
    }

    .ingredients{
        margin-top: 15px;
    }

    .request{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .value{
        margin-left: 0;
        margin-right: 0;
        margin-top: -25px;
        margin-bottom: 15px;
    }

    .requestItem{
        margin-bottom: 20px;
    }

}

`

export const ButtonReq = styled.div`
    
    width: 92px;
    margin-left: 10px;

    
`