import { styled } from "styled-components";

export const Card = styled.div`
    border: 1px solid #d6d6d6;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 333px;
    margin:0 20px 20px 0;
    &:hover{
        border: 1px solid #000;
    }
`

export const CardButton = styled.button`
    width: 44px;
    height: 44px;
    margin: 0 8px;
    border-radius: 50px;
    border: none;
    color: #fff;
    font-weight:bold;
    padding: 0;
`