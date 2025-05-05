import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${(props) => props.theme.azulArdosia};
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 140px);
    grid-template-rows: 52px repeat(3, 140px);
    gap: 20px;
`;

export const Turno = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 13px;
    background-color: ${(props) => props.theme.azulArdosiaClaro};
    box-shadow: 0 4px ${(props) => props.theme.azulPetroleo};
    border-radius: 10px;
    color: ${(props) => props.theme.azulAcinzentadoClaro};

    p{
        font-size: 16px;
        font-weight: bold;
    }
`;

export const ButtonRestart = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 52px;
        height: 48px;
        border-radius: 10px;
        border: none;
        background-color: ${(props) => props.theme.azulClaroNeutro};
        box-shadow: 0 4px ${(props) => props.theme.azulMedioNeutro};
    }
`;

export const Label = styled.label`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: none;
    background-color: ${(props) => props.theme.azulArdosiaClaro};
    box-shadow: 0 5px ${(props) => props.theme.azulProfundo};
`;

export const Input = styled.input`
    position: absolute;
`;
