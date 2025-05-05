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
    background-color: ${(props) => props.theme.fundoEscuro};
    padding: 24px;
    border-radius: 10px;
    box-shadow: 0 5px ${(props) => props.theme.azulPetroleo};
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;

    p {
        font-size: 16px;
        font-weight: bold;
        kerning: 1px;
        color: ${(props) => props.theme.azulAcinzentadoClaro};
    }
`;

export const Label = styled.label`
    display: flex;
    width: 380px;
    height: 72px;
    background-color: ${(props) => props.theme.azulArdosiaEscuro};
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
`;

export const Icones = styled.div`

    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: calc(380px * 0.3 + 20px);
    z-index: 1;
`;

export const Bolinha = styled.div`
    width: 40px;
    height: 40px;
    border: 10px solid #1A2A33;
    border-radius: 40px;
    transition: .5s ease;
`;

export const Cruz = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    .lado-1,.lado-2{
        width: 40px;
        height: 10px;
        background-color: ${(props) => props.theme.azulAcinzentadoClaro};
        transition: .5s ease;
        position: absolute;
    }

    .lado-1{
        transform: rotate(45deg);
    }

    .lado-2{
        transform: rotate(-45deg);
    }
`;

export const Input = styled.input`
    display: none;

    &:checked + ${Label}::after {
        left: calc(25% - 10px);
    }

    &:checked + ${Label} ${Bolinha}{
        border: 10px solid ${(props) => props.theme.azulAcinzentadoClaro};
    }

    &:checked + ${Label} ${Cruz} div{
        background-color: ${(props) => props.theme.azulArdosia};
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
    background-color: ${(props) => props.theme.amarelo};
    box-shadow: 0 5px ${(props) => props.theme.mostarda};
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
    background-color: ${(props) => props.theme.ciano};
    box-shadow: 0 5px ${(props) => props.theme.cianoEscuro};
`