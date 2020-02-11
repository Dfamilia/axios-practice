import React, { Component, Fragment } from 'react';
import Search from '../Search';
import Page from './page';

export default class Home extends Component {
    constructor(props){
        super(props);

        this.state={
            pokemonsList:''
        }
    }

    getPokemonsFounded= (pokemonsList)=>{
        this.setState({ pokemonsList: pokemonsList })
    }


    render() {
        // console.log(this.state.pokemonsList);
        let pokemons = this.state.pokemonsList;
        return (
            <Fragment>
                <Search getPokemonsFounded={this.getPokemonsFounded} />
                <div>
                    {pokemons ?
                        pokemons.forEach(pokemon => (
                        <article>{pokemon.name}</article>
                        // <Page pokemonsData={pokemon} />
                        ))
                    :
                    <article>Is fetching.....</article>
                    }
                </div>
            </Fragment>
        )
    }
}
