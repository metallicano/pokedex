
const { UI } = require('./UI');
const { PokeServices } = require('./pokeservices');
require('./index.css');

const show = new UI()
var cuenta = 0;
document.addEventListener('DOMContentLoaded',()=>{
    
    show.showPokemon(0)

})



const servicios = new PokeServices()


const inicio = document.getElementById('inicio')
inicio.addEventListener('click',mostrarPokemon)
const caja_texto = document.getElementById('caja_texto')
const enviar  = document.getElementById('enviar')
enviar.addEventListener('click',enviarForm)
const marco = document.getElementById('marco')

const next = document.getElementById('next');
const back = document.getElementById('back');
next.addEventListener('click',siguientesPokemon);
back.addEventListener('click',anteriorPokemon);

function siguientesPokemon(){
    cuenta = cuenta+20;
    marco.innerHTML="";
    console.log(cuenta)
    show.showPokemon(cuenta)

}

function anteriorPokemon(){
    
    if (cuenta<1) {
        cuenta = 0 
    }else{
        cuenta = cuenta-20;
    }

    marco.innerHTML="";
    console.log(cuenta)
    show.showPokemon(cuenta)

}



function enviarForm(e){
    e.preventDefault(e)
    const texto = caja_texto.value
    show.showOnePokemon(texto)
    
}

function mostrarPokemon(){

    show.showPokemon()
}

//const show_image = servicios.getImage(3)

/*async function recivir_url(){
    const pokemon = await servicios.getPokemon();
    console.log('el pokemon es',pokemon.results)
    const indice = pokemon.results[0]
    console.log('el indice es: ',indice);
    pokemon.results.forEach(element => {
        servicios.getURL(element)
        
    });
}
*/


/*async function fetchPokemonData(pokemon){
    let url = pokemon.url 
      const url_pokemon = await fetch(url)
      const url_pokemon_json = await url_pokemon.json()
      console.log('el dato es: ',url_pokemon_json.id)
    }

*/




//recivir_url();



//const show_url = servicios.getURL();
