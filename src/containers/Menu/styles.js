import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    background-color: #1A2A33;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const DivMain = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
`;

export const DivModo = styled.div`
    background-color: #1F3641;
    padding: 24px;
    border-radius: 10px;
    box-shadow: 0 5px hsl(202, 32%, 10%);
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;

    p {
    font-size: 16px;
    font-weight: bold;
    kerning: 1px;
    color: #A8BFC9
    }
`;

export const Label = styled.label`
    display: flex;
    width: 380px;
    height: 72px;
    background-color: hsl(202, 32%, 15%);
    border-radius: 10px;
    align-items: center;
    justify-content: center;

    &::after {
        content: "";
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        height: 80%;
        position: relative;
        margin: 0 10px;
        background-color: #A8BFC9;
        border-radius: 10px;
        left: calc(-25% + 10px);
        transition: .5s ease;
    }

    div {
        position: absolute;
        display: flex;
        gap: calc(380px * 0.3 + 20px);
        margin: 0 10px;
        z-index: 1;

        img {
            user-select: none;
            -webkit-user-drag: none;
            pointer-events: none;
        }
    }

`;

export const Input = styled.input`
    display: none;

    &:checked + ${Label}::after {
        left: calc(25% - 10px);
    }
`;

export const DivLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;`;

export const NewGameCpu = styled(Link)`
    text-decoration: none;
    width: 100%;
    height: 63px;
    font-size: 20px;
    font-weight: bold;
    kerning: 1.25px;
    border-radius: 10px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: hsl(202, 32%, 15%);
    background-color: hsl(39, 88%, 58%);
    box-shadow: 0 5px hsl(39, 88%, 40%);
`;

export const NewGamePlayer = styled(Link)`
    text-decoration: none;
    width: 100%;
    height: 63px;
    font-size: 20px;
    font-weight: bold;
    kerning: 1.25px;
    border-radius: 10px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: hsl(202, 32%, 15%);
    background-color: hsl(178, 60%, 48%);
    box-shadow: 0 5px hsl(178, 60%, 30%);
`;
