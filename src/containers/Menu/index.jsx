import Logo from "../../assets/logo.svg"
import IconeOMenu from '../../assets/iconeO-menu.svg';
import IconeXMenu from '../../assets/iconeX-menu.svg';


import {
	Container,
	DivLinks,
	DivMain,
	DivModo,
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
                    <Input type="checkbox" id="input"/>
                    <Label htmlFor="input">
						<div>
							<img src={IconeOMenu} alt="X" />
							<img src={IconeXMenu} alt="O" />
						</div>
					</Label>
					<p>LEMBRE-SE: X VAI PRIMEIRO</p>
				</DivModo>
				<DivLinks>
					<NewGameCpu to="/">NOVO JOGO (VS CPU)</NewGameCpu>
					<NewGamePlayer to="/">NOVO JOGO (2 JOGADORES)</NewGamePlayer>
				</DivLinks>
			</DivMain>
		</Container>
	);
}
