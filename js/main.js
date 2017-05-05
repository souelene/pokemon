function Pokemon(nombre,color,poderDeAtaque){
	this,nombre=nombre
	this.color=color
	this.nivelDeAmistad=0
	this.vida=100
	this.poderDeAtaque=poderDeAtaque
	this.mostrarPokemon=function(){
		return ("hola,soy "+this.nombre+" y soy de color"+this.color)
	}
	this.aumentarAmistad=function(valor){
		this.nivelDeAmistad=this.nivelDeAmistad+valor
	}
	this.atacar=function(pokemon){
		pokemon.vida=pokemon.vida-this.poderDeAtaque
	}
}
const Pikachu=new Pokemon("Pikachu","amarillo",100)
const Charmander=new Pokemon("Charmander","rojo",20)
const Raticate = new Pokemon('Raticate','cafe',90)	
/*Pikachu.atacar(Charmander)
console.log(Charmander.vida)*/


function batalla(nombre,color,poderDeAtaque){

	
	var elige1 = document.getElementById("elige1").value;
	var elige2 = document.getElementById("elige2").value;

	if(elige1 == elige2){
		alert("No,no,no,no... Los hermanos no pelean, la batalla no sucedera si ambos son de la misma especie")
	}else{ 

	var primerPokemon = new Pokemon(elige1,color,poderDeAtaque);
	var segundoPokemon = new Pokemon(elige2,color,poderDeAtaque);	
	primerPokemon.atacar(segundoPokemon)

}	
	var respuesta = document.getElementById("respuesta");
	respuesta.innerHTML = "<p>" + elige1+" atacó a "+elige2+" y "+elige2+" tiene una vida de: "+segundoPokemon.vida+"</p>";

}