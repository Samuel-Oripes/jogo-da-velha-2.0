import Reiniciar from '../../assets/icon-restart.svg';
import Logo from '../../assets/logo.svg';
import { ButtonRestart, Container, Grid, Input, Label, Turno } from './styles';

import { useState } from 'react';
import IconeO from '../../assets/icon-o.svg';
import IconeX from '../../assets/icon-x.svg';

import TurnoO from '../../assets/imagem O.png';
import TurnoX from '../../assets/imagem X.png';

export function Jogo() {
	// true = X, false = O
	const [jogador, setJogador] = useState(true);
	const [quadrados, setQuadrados] = useState(Array(9).fill(null));

	const verificar = (index) => {
		if (quadrados[index] !== null) return;

		const novosQuadrados = [...quadrados];

		novosQuadrados[index] = jogador ? 'X' : 'O';

		setQuadrados(novosQuadrados);
		setJogador(!jogador);
	};

	const reiniciarJogo = () => {
		setQuadrados(Array(9).fill(null));
		setJogador(true);
	};

	function Quadrados({ quantidade = 9 }) {
		return (
			<>
				{Array.from({ length: quantidade }).map((_, i) => (
					<Label key={`${i + 1}`} onClick={() => verificar(i)}>
						<Input
							type="radio"
							name={`quadrado${i + 1}`}
							checked={quadrados[i] !== null}
							readOnly
						/>
						{quadrados[i] === 'X' && <img src={IconeX} alt="X" />}
						{quadrados[i] === 'O' && <img src={IconeO} alt="O" />}
					</Label>
				))}
			</>
		);
	}

	return (
		<Container>
			<Grid>
				<img src={Logo} alt="logo" />
				<Turno>
					{jogador === true && <img src={TurnoX} alt="X" />}
					{jogador === false && <img src={TurnoO} alt="O" />}
					<p>TURNO</p>
				</Turno>
				<ButtonRestart>
					<button type="button" onClick={reiniciarJogo}>
						<img src={Reiniciar} alt="ícone reiniciar" />
					</button>
				</ButtonRestart>

				<Quadrados />
			</Grid>
		</Container>
	);
}
