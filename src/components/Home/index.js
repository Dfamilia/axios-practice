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

    getPokemonsFounded= (pokemonsList)=>{
        this.setState({ pokemonsList })
    }


    render() {
        return (
            <Fragment>
                <Search getPokemonsFounded={this.getPokemonsFounded} />
                <Page pokemonsList={this.state.pokemonsList} />
            </Fragment>
        )
    }
}
