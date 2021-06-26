import styled,{createGlobalStyle} from 'styled-components';
import {primaryColor, primaryDarkColor} from '../config/colors';

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    html, body, #root{
        height: 100%;
    }

    body{
        font-family: sans-serif;
        background-color: ${primaryDarkColor};
    }

    a{
        text-decoration: none;
        color: ${primaryColor};
    }

    ul{
        list-style: none;
    }

    button{
        cursor: pointer;
        background-color: ${primaryColor};
        border: none;
        border-radius: 4px;
        font-weight: 700;
        color: #fff;
        padding: 10px 20px;
    }
`;

export const Container = styled.section`
    max-width: 360px;
    margin: 30px auto;
    padding: 30px;
    background-color: #fff;
`;