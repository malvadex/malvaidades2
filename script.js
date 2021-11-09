const calcular = document.getElementById('calcular');

function Idade(){
	const dataAtual = new Date();
	const data = ((dataAtual.getDate())+"/"+(dataAtual.getMonth()+1)+"/"+dataAtual.getFullYear());
	const nome = document.getElementById('nome').value;
	const dataDN = document.getElementById('DN').value;
	const DN_String = dataDN.split('/');
	const anoDN = DN_String[0];
	const DN = new Date(anoDN);

	const idade = Math.abs(dataAtual.getTime()-DN.getTime());
	const idadeAno = Math.trunc(Math.ceil(idade/(1000*60*60*24))/365);

	let classificação = '';

	if(idadeAno < 12 ){
		classificação = 'Criança';
	}else if(idadeAno < 20){
		classificação = 'Adolescente';
	}else if(idadeAno < 75){
		classificação = 'Adulto';
	}else{
		classificação = 'Idoso';
	}

	const resultado = document.getElementById('resultado');

		resultado.textContent = `Olá ${nome}, hoje é ${data}, a sua idade é ${idadeAno} anos, e você é ${classificação}.`;
}

calcular.addEventListener('click', Idade);