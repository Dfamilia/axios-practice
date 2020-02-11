import React from 'react';

const Page = (props) => {

    const { pokemonData } = props;
    console.log(pokemonData)
    return (
        <article>
            {
                pokemonData
            }
        </article>
    )
}

export default Page;

// componente recibe el dato, pero no lo pinta