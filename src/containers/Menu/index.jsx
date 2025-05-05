import Logo from '../../assets/logo.svg';

import {
	Bolinha,
	Container,
	Cruz,
	DivLinks,
	DivMain,
	DivModo,
	Icones,
	Input,
	Label,
	NewGameCpu,
	NewGamePlayer,
} from './styles';

export function Menu() {
	return (
		<Container>
			<DivMain>
				<img src={Logo} alt="logo" />
				<DivModo>
					<p>ESCOLHA O SÍMBOLO COM QUE DESEJA JOGAR</p>
					<Input type="checkbox" id="input" />
					<Label htmlFor="input">
						<Icones>
							<Bolinha />
							<Cruz>
								<div className="lado-1" />
								<div className="lado-2" />
							</Cruz>
						</Icones>
					</Label>
					<p>LEMBRE-SE: X VAI PRIMEIRO</p>
				</DivModo>

				<DivLinks>
					<NewGameCpu to="/">NOVO JOGO (VS CPU)</NewGameCpu>
					<NewGamePlayer to="/jogo">NOVO JOGO (2 JOGADORES)</NewGamePlayer>
				</DivLinks>
			</DivMain>
		</Container>
	);
}
