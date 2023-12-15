import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 150px;

    background-color: transparent;
    color: ${({theme}) => theme.COLORS.WHITE};

    border: 1px solid ${({theme}) => theme.COLORS.WHITE};

    resize: none;

    margin-bottom: 8px;
    border-radius: 5px;
    padding: 14px;

    &::placeholder{
        color: ${({theme}) => theme.COLORS.GREY_400};
    }

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;

`