var data = new Date();
var s = data.getDay();
var dia = data.getDate();
var m = data.getMonth();
var ano = data.getFullYear();
var hora = data.getHours();
var saudacao;

if(hora >= 0 && hora < 12){
	saudacao = "Bom Dia!"
}
else{
	if(hora >= 12 && hora < 18){
		saudacao = "Boa Tarde!"
	}
	else{
		saudacao = "Boa Noite!"
	}
}

switch (s){
	case 0: semana ="Domingo";
			break;
	case 1: semana ="Segunda-feira";
			break;
	case 2: semana ="Terça-feira";
			break;
	case 3: semana ="Quarta-feira";
			break;
	case 4: semana ="Quinta-feira";
			break;
	case 5: semana ="Sexta-feira";
			break;
	case 6: semana ="Sábado";
			break;
   default: break;
}

switch (m){
	case 0: mes = "Janeiro";
			break;
	case 1: mes = "Fevereiro";
			break;
	case 2: mes = "Março";
			break;
	case 3: mes = "Abril";
			break;
	case 4: mes = "Maio";
			break;
	case 5: mes = "Junho";
			break;
	case 6: mes = "Julho";
			break;
	case 7: mes = "Agosto";
			break;
	case 8: mes = "Setembro";
			break;
	case 9: mes = "Outubro";
			break;
   case 10: mes = "Novembro";
			break;
   case 11: mes = "Dezembro";
			break; 
   default: break;
}

document.write(saudacao + " " + semana + ", " + dia + " de " + mes + " de " + ano + ".");