import React, { Component, Fragment } from 'react';
import Search from '../Search';
import Page from './page';

export default class Home extends Component {
    constructor(props){
        super(props);

        this.state={
            pokemonsList:[]
        }
    }

    getPokemonsFounded= async (pokemonsList)=>{
        await this.setState({ pokemonsList }) 
    }


    render() {
        let pokemons = [];
        if(this.state.pokemonsList.length > 0){
            this.state.pokemonsList.forEach((pokemon, i)=>{                 
                pokemons.push(<Page key={i} pokemonsData={pokemon} />)
            })
        }
        
        console.log(this.state.pokemonsList);
        

        return (
            <div>
                <Search getPokemonsFounded={this.getPokemonsFounded} />
                <div>
                    {pokemons}
                </div>
            </div>
        )
    }
}
