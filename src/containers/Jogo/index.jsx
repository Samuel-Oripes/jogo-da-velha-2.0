import Reiniciar from '../../assets/icon-restart.svg';
import Logo from '../../assets/logo.svg';
import {
	ButtonRestart,
	Container,
	Empate,
	Grid,
	Input,
	JogadorO,
	JogadorX,
	Label,
	Turno,
} from './styles';

import { useState } from 'react';
import IconeO from '../../assets/icon-o.svg';
import IconeX from '../../assets/icon-x.svg';

import IconeODestaque from '../../assets/o-vitoria.png';
import IconeXDestaque from '../../assets/x-vitoria.png';

import TurnoO from '../../assets/imagem O.png';
import TurnoX from '../../assets/imagem X.png';

export function Jogo() {
	// true = X, false = O
	const [jogador, setJogador] = useState(true);
	const [quadrados, setQuadrados] = useState(Array(9).fill(null));
	const [placarO, setPlacarO] = useState(0);
	const [placarX, setPlacarX] = useState(0);
	const [placarEmpate, setPlacarEmpate] = useState(0);
	const [linhaVencedora, setLinhaVencedora] = useState(null);

	const encontrarLinhaVencedora = (simbolo, novosQuadrados) => {
		const indices = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let i = 0; i < indices.length; i++) {
			const linha = indices[i];
			if (linha.every((index) => novosQuadrados[index] === simbolo)) {
				return linha;
			}
		}
		return null;
	};

	const verificar = (index) => {
		if (quadrados[index] !== null) return;

		const novosQuadrados = [...quadrados];
		novosQuadrados[index] = jogador ? 'X' : 'O';

		const linhaX = encontrarLinhaVencedora('X', novosQuadrados);
		if (linhaX) {
			setLinhaVencedora(linhaX);
			setPlacarX(placarX + 1);
		}

		const linhaO = encontrarLinhaVencedora('O', novosQuadrados);
		if (linhaO) {
			setLinhaVencedora(linhaO);
			setPlacarO(placarO + 1);
		}

		const empate = novosQuadrados.every((quadrado) => quadrado !== null);
		if (empate) {
			setPlacarEmpate(placarEmpate + 1);
		}

		setQuadrados(novosQuadrados);
		setJogador(!jogador);
	};

	const reiniciarJogo = () => {
		setQuadrados(Array(9).fill(null));
		setJogador(true);
		setPlacarEmpate(0);
		setPlacarO(0);
		setPlacarX(0);
		setLinhaVencedora(null);
	};

	function Quadrados({ quantidade = 9 }) {
		const simboloVencedor = linhaVencedora
			? quadrados[linhaVencedora[0]]
			: null;

		return (
			<>
				{Array.from({ length: quantidade }).map((_, i) => {
					const estaEmLinhaVencedora = linhaVencedora?.includes(i);

					return (
						<Label
							key={`${i + 1}`}
							onClick={() => verificar(i)}
							$vencedor={estaEmLinhaVencedora}
							$simboloVencedor={estaEmLinhaVencedora ? simboloVencedor : null}
						>
							<Input
								type="radio"
								name={`quadrado${i + 1}`}
								checked={quadrados[i] !== null}
								readOnly
							/>
							{quadrados[i] === 'X' && (
								<img
									src={estaEmLinhaVencedora ? IconeXDestaque : IconeX}
									alt="X"
								/>
							)}
							{quadrados[i] === 'O' && (
								<img
									src={estaEmLinhaVencedora ? IconeODestaque : IconeO}
									alt="O"
								/>
							)}
						</Label>
					);
				})}
			</>
		);
	}

	return (
		<Container>
			<Grid>
				<div className="div-img">
					<img src={Logo} alt="logo" />
				</div>
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
				<JogadorX>
					<p>X (JOGADOR 1)</p>
					<span>{placarX}</span>
				</JogadorX>
				<Empate>
					<p>EMPATES</p>
					<span>{placarEmpate}</span>
				</Empate>
				<JogadorO>
					<p>O (JOGADOR 2)</p>
					<span>{placarO}</span>
				</JogadorO>
			</Grid>
		</Container>
	);
}
