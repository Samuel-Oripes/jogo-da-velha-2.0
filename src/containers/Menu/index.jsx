export function Menu() {
	return (
		<div>
			<img src="./assets/logo.svg" alt="logo" />
			<div>
				<p>ESCOLHA O SÍMBOLO COM QUE DESEJA JOGAR</p>
				<input type="radio" />
				<p>LEMBRE-SE: X VAI PRIMEIRO</p>
			</div>
			<div>
				{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
				<a>NOVO JOGO (VS CPU)</a>
				{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
				<a >NOVO JOGO (2 JOGADORES)</a>
			</div>
		</div>
	);
}