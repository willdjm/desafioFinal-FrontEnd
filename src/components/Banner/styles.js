import styled from "styled-components";

export const Container = styled.div`

 display: flex;
 justify-content: center;

.text{

    margin-top: 164px;
    width: 1120px;
    height: 260px;
   
    background: ${({ theme }) => theme.COLORS.BACKGROUND_LINEAR};

    border-radius: 8px;
}

h1{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 140%;

    margin-bottom: 15px;
}

span{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;

}

@media(max-width:440px){

    z-index: 1;
    margin-top: 45px;
    
    display: flex;
    justify-content: center;

    .text{
        margin-top: 35px;
        width: 100%;
        height: 62px;
    }

}

`

export const ImgTextBanner = styled.div`

    z-index: 2;
    left: -68.66px;
    margin-top: -148px;
    margin-left: -56px;
    
    display: flex;

    >div{
        margin-top: 225px;
        margin-left: 30px;
    }

    @media(max-width:440px){

       display: flex;
       align-items: center;

            >div{
            margin-top: 0px;
            margin-left: 0px;
            
            }

            img{
                max-width: 250px;
                max-height: 250px;
                margin-top: 50px;
                
            }

            h1{
        
                font-size: 18px;
                margin-bottom: 5px;
            }

            span{
                font-size: 12px;
            }

    }
  

`