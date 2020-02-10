import React, { Component } from 'react';
import Page from './page';
import Axios from 'axios';


export default class Search extends Component {
    constructor(props){
        super(props);

        this.state = {
            text: '',
            pokemonApiLoad: [],
            pokemonSearchList: [],
            isFetching: true
        }
    }

    componentDidMount(){
        Axios.get('https://pokeapi.co/api/v2/pokemon?limit=964')
        .then(data =>{
            this.setState({ pokemonApiLoad: data.data.results})
        })
    }

    onChangeText = (event)=>{
        this.findPokemonIterations(event.target.value)
        this.setState({ text: event.target.value });
        // console.log(event.target.name,this.state.pokemonApiLoad)

        
    }

    findPokemonIterations = (text) => {
        const pokemonReq = new RegExp(`^${text}`,'i');
        const pokemonFounded = this.state.pokemonApiLoad.reduce((list, pokemon)=>
        {
            if(pokemonReq.test(pokemon.name)) list.push(pokemon.name)
            return list;

        }, []);

        this.setState({pokemonSearchList: pokemonFounded});
    }

    render() {

        console.log("Api Load", this.state.pokemonApiLoad);

        console.log("TEXT",this.state.text);

        console.log("POKEMONS FOUNDED",this.state.pokemonSearchList)


        return (
            <Page onChangeText={this.onChangeText} text={this.state.text}/>
        )
    }
}
