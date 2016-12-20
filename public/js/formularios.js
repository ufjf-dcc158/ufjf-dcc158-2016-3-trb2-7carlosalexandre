function registro(){
	var nome = document.registro.nome.value;
	var cidade = document.registro.cidade.value;

	if(nome == null){
		alert("Preencha o nome do jogador.");
		return false;
	}

  if(cidade == null){
		alert("Preencha a cidade do jogador.");
		return false;
	}

	return true;
}

function agendamento(){
	var nome = document.agendamento.nome.value;
	var jogador1 = document.agendamento.j1.value;
	var jogador2 = document.agendamento.j2.value;

	if(nome == null){
		alert("Preencha o nome da partida.");
		return false;
	}

	if(jogador1 == null || jogador2 == null){
		alert("Preenche o jogador que falta.");
		return false;
	}

  if(jogador1 == jogador2){
		alert("Coloque jogadores diferentes.");
		return false;
	}

	return true;
}

function resultados(){
	var partidaID = document.resultados.partida.value;
	var empate = document.getElementById("e").checked;
	var venceuJ1 = document.getElementById("j1").checked;
  var venceuJ2 = document.getElementById("j2").checked;

	if(partida == null){
		alert("Preencha a partida.");
		return false;
	}

	if(empate == false && venceuJ1 == false && venceuJ2 == false){
		alert("Selecione o resultado.");
		return false;
	}

	return true;
}
