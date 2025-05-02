import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';

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

import IconeOClaro from '../../assets/iconeO-claro.svg';
import IconeOEscuro from '../../assets/iconeO-escuro.svg';
import IconeXClaro from '../../assets/iconeX-claro.svg';
import IconeXEscuro from '../../assets/iconeX-escuro.svg';

export function Menu() {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<Container>
			<DivMain>
				<img src={Logo} alt="logo" />
				<DivModo>
					<p>ESCOLHA O SÍMBOLO COM QUE DESEJA JOGAR</p>
					<Input
						type="checkbox"
						id="input"
						checked={isChecked}
						onChange={() => setIsChecked((prev) => !prev)}
					/>
					<Label htmlFor="input">
						<div>
							<img src={isChecked ? IconeOClaro : IconeOEscuro} alt="O" />
							<img src={isChecked ? IconeXEscuro : IconeXClaro} alt="X" />
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
