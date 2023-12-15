import styled from "styled-components"

export const Container = styled.div`


width: 1120px;

.section{
    padding-bottom: 0px;
    margin-bottom: 0px;

    color: ${({theme}) => theme.COLORS.GREY_100};
    
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
   
}

 .carousel{
    overflow-x: auto;
    scroll-behavior: smooth;
    display: flex;
    align-items: center;
    width: 1118px;

    flex-direction: row;
} 

.carousel::-webkit-scrollbar{
    display: none;
    
}

.buttons{
    width: 1120px;
    
    display: flex;
    justify-content: space-between;

    position: absolute;
    border: 0;

    cursor: pointer;
        
}

.left{
    position: absolute;
    left: -5px;
    width: 116px;
    height: 415px;
    border: none;
    top: 0;
    background: ${({theme}) => theme.COLORS.BACKGROUND_LINEAR5};
    transform: matrix(-1, 0, 0, 1, 0, 0);
    margin-top: 39.5px;
    
    >img{
        margin-top: 190px ;
        margin-left: 72px;
    }
   
}

.right{
    position: absolute;
    right: 0;
    width: 116px;
    height: 415px;
    border: none;
    top: 0px;
    background: ${({theme}) => theme.COLORS.BACKGROUND_LINEAR5};
    margin-top: 39.5px;

    >img{
        margin-top: 190px ;
        margin-left: 72px;
    }
 
}

@media(max-width:440px){

    height: 100%;
    width: 390px;

    .section{
        
        font-size: 18px;
        
        >span{
            margin-left: 15px;
            
        }
    }

    .carousel{
        width: 385px;
        
    }

    .buttons{
        width: 385px;
    }

    .left{
        position: absolute;
        left: -5px;
        width: 50px;
        height: 160px;
        border: none;
        top: 0;
        background: ${({theme}) => theme.COLORS.BACKGROUND_LINEAR5};
        transform: matrix(-1, 0, 0, 1, 0, 0);
        margin-top: 59.5px;
        
        >img{
            margin-top: 70px ;
            margin-left: 20px;
        }
    
    }
    .right{
        position: absolute;
        right: 0;
        width: 50px;
        height: 160px;
        border: none;
        top: 0px;
        background: ${({theme}) => theme.COLORS.BACKGROUND_LINEAR5};
        margin-top: 59.5px;

        >img{
            margin-top: 70px ;
            margin-left: 32px;
        }
 
    }

} 

`
