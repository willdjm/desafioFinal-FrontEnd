import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
  
  > img {
      max-width: 60px;
      max-height: 60px;

      width: auto;
      height: auto;
  }

  .nameIngredient {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  @media(max-width:440px){
  
    > img {
      max-width: 40px;
      max-height: 40px;

      width: auto;
      height: auto;
  }

    .nameIngredient {
        font-size: 12px;
    }
  }

`