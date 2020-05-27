const { PokeServices } = require('./pokeservices');
const pokemon = new PokeServices();

export class UI{
    async showPokemon(cuenta){
        
        const pokemones = await pokemon.getPokemon(cuenta)
        const pokemones_result = pokemones.results;
       
        const marco = document.getElementById('marco');

        for (let i = 0; i < pokemones_result.length; i++) {
            const indice = await pokemon.getURL(pokemones_result[i])
            const div = document.createElement('div')
            div.innerHTML=`
            <div class="col mb-4">
            <a href="#">
                <div class="card">
                    <img src="https://pokeres.bastionbot.org/images/pokemon/${indice.id}.png" class="card-img-top" alt="...">
                <div class="card-body bg-primary text-white">
                    <h2 class="card-title">${indice.name} </h2>
                    <h3>ID ${indice.id}</h3>
                    <h3 class="card-text">type ${indice.types[0].type.name}</h3>
                </div>
            </div>
            </a>
            </div>
                
                
            `;

            marco.appendChild(div);
            
        }

        /*pokemones_result.forEach(async element => {
            
            const indice = await pokemon.getURL(element)
            const div = document.createElement('div')
            div.innerHTML=`
            <div class="col mb-4">
            <a href="#">
                <div class="card">
                    <img src="https://pokeres.bastionbot.org/images/pokemon/${indice.id}.png" class="card-img-top" alt="...">
                <div class="card-body bg-primary text-white">
                    <h2 class="card-title">${element.name} </h2>
                    <h3>ID ${indice.id}</h3>
                    <h3 class="card-text">type ${indice.types[0].type.name} </h3>
                </div>
            </div>
            </a>
            </div>
                
                
            `;

            marco.appendChild(div);
        });*/
        

        
    }

    async showOnePokemon(pokemon){
        const pokemon2 = new PokeServices()
        const pokemon_guardado = await pokemon2.getOnePokemon(pokemon)
        const div2 = document.getElementById('marco');
        console.log('el pokemon guardado es: ',pokemon_guardado)
       div2.innerHTML= `
       <div class="col mb-4">
       <a href="#">
       <div class="card">
           <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon_guardado.id}.png" class="card-img-top" alt="...">
       <div class="card-body bg-primary text-white">
           <h2 class="card-title"> ${pokemon_guardado.name}</h2>
           <h3>ID ${pokemon_guardado.id}</h3>
           <p class="card-text">${pokemon_guardado.types[0].type.name}</p>
       </div>
   </div>
   </a>
   </div>
       
       
       `;
       
    }

}