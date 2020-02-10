import React, { Component } from 'react';
import Page from './page';


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

    onChangeText = (event)=>{
        console.log(event.target.name, event.target.value)
        this.setState({ text: event.target.value });
        
    }

    render() {
        return (
            <Page onChangeText={this.onChangeText} text={this.state.text}/>
        )
    }
}
