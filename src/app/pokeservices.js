export class PokeServices {
    constructor(){
        this.API = 'https://pokeapi.co/api/v2/pokemon/';
        this.API2 = 'https://pokeres.bastionbot.org/images/pokemon/';
        this.API3 = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
    }

    async getPokemon(cuenta){
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${cuenta}&limit=20`); 
        const res_json = await res.json();
        console.log(res_json)
        return res_json;
    }

    async getURL(pokemon){
      
       let url = pokemon.url;
       const pokemon_url = await fetch(url)
       const pokemon_url_json = await pokemon_url.json()
       const id = pokemon_url_json
       console.log('el indice es: ',id.id)
       return id
    }

    async getOnePokemon(pokemon){
        const res = await fetch(`${this.API}${pokemon}`)
        const res_json = await res.json();
        console.log('el pokemon es: ',res_json)
        return res_json
    }
}   