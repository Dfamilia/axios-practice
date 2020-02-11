import React from 'react';

const Page = (props) => {

    const { pokemonsData } = props;
    console.log(pokemonsData)
    return (
        <article>
            <img src={pokemonsData.sprites.front_default} alt={pokemonsData.name}/>
        </article>
    )
}

export default Page;

// componente recibe el dato, pero no lo pinta