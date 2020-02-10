import React, { Component, Fragment } from 'react';

class Page extends Component {
    componentDidUpdate(){
        let hola = this.props.pokemonsList;
    }

    render() {
        const { pokemonsList }=this.props;
        console.log("Home Page", pokemonsList);
        return (
            <Fragment>
                {/* {pokemonsList.length > 0 ?
                
                pokemonsList.forEach(pokemon => {
                <div><div>{ pokemon.name }</div><div>{pokemonsList.length}</div></div>)
                :
                    <div>FETCHING......</div>
                } */}
            </Fragment>
        )
    }
}

export default Page;

// componente recibe el dato, pero no lo pinta