import React, { Component } from 'react';
import Page from './page';
import Axios from 'axios';


export default class Search extends Component {
    constructor(props){
        super(props);

        this.state = {
            text: '',
            pokemonData:[],
        }
    }


    componentDidMount(){

        Axios.get('https://pokeapi.co/api/v2/pokemon?limit=200')
        .then(data =>{
            return data.data.results;
        })
        .then(pokemonsList=>{
            const statePokemonData = [];

            pokemonsList.length > 0 && pokemonsList.forEach(pokemon => {
                Axios.get(pokemon.url).then( pokemon => {
                    statePokemonData.push(pokemon.data);
                })
            });   

            this.setState({ pokemonData: statePokemonData })
            this.props.getPokemonsFounded(this.state.pokemonData);
        })
    }

    onChangeText = (event)=>{

        this.setState({ text: event.target.value });

        this.findPokemonIterations(event.target.value)
    }

    findPokemonIterations = (text) => {

        const pokemonReq = new RegExp(`^${text}`,'i');
        const pokemonFounded = (!text) ? this.state.pokemonData : this.state.pokemonData.reduce((list, pokemon)=>
        {
            if(pokemonReq.test(pokemon.name) && text !== ".") list.push(pokemon)
            return list;

        }, []);

        this.props.getPokemonsFounded(pokemonFounded);

    }

    render() {

        return (
            <Page onChangeText={this.onChangeText} text={this.state.text} />
        )
    }
}
