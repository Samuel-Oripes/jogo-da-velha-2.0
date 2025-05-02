import {
	Container,
	DivLinks,
	DivMain,
	DivModo,
	Input,
	NewGameCpu,
	NewGamePlayer,
	Texto1,
	Texto2,
} from './styles';

export function Menu() {
	return (
		<Container>
			<DivMain>
				<Logo src="./assets/logo.svg" alt="logo" />
				<DivModo>
					<Texto1>ESCOLHA O SÍMBOLO COM QUE DESEJA JOGAR</Texto1>
					<Input type="radio" />
					<Texto2>LEMBRE-SE: X VAI PRIMEIRO</Texto2>
				</DivModo>
				<DivLinks>
					<NewGameCpu>NOVO JOGO (VS CPU)</NewGameCpu>
					<NewGamePlayer>NOVO JOGO (2 JOGADORES)</NewGamePlayer>
				</DivLinks>
			</DivMain>
		</Container>
	);
}
