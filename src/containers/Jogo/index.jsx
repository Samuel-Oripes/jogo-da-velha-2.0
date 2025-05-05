import Reiniciar from '../../assets/icon-restart.svg';
import Logo from '../../assets/logo.svg';
import { ButtonRestart, Container, Grid, Input, Label, Turno } from './styles';

import IconeO from '../../assets/icon-o.svg';
import IconeX from '../../assets/icon-x.svg';

export function Jogo() {
	function Quadrados({ quantidade = 9 }) {
		return (
			<>
				{Array.from({ length: quantidade }).map((_, i) => (
					<Label key={`${i + 1}`}>
						<Input type="radio" name={`quadrado${i + 1}`} />
						<img src="" alt="icone" />
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
					<img src="" alt="turno" />
					<p>TURNO</p>
				</Turno>
				<ButtonRestart>
					<button type="button">
						<img src={Reiniciar} alt="ícone reiniciar" />
					</button>
				</ButtonRestart>

				<Quadrados />
			</Grid>
		</Container>
	);
}
