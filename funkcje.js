function niestandardowy()
{
	document.getElementById('zakres').style.display="block";
	document.getElementById('tabelaPrzychody').style.display="none";
	document.getElementById('tabelaWydatki').style.display="none";
	
	
}
function wyswietlTabele()
{
	document.getElementById('tabelaPrzychody').style.display="block";
	document.getElementById('tabelaWydatki').style.display="block";
	document.getElementById('zakres').style.display="none";
}
window.onload = start; //kiedy w oknie załaduje się strona
function start()
{
	document.getElementById('zakres').style.display="none";
	document.getElementById('tabelaPrzychody').style.display="none";
	document.getElementById('tabelaWydatki').style.display="none";
	
}
					