import React from 'react';

const Page = (props) => {

    let { text, onChangeText } = props;

    return (
        <section>
            <form onSubmit={(event)=>event.preventDefault()}>
                <input type="text" name="search" placeholder="Search" onChange={(event)=> onChangeText(event)} value={text}/>
            </form>
        </section>
    )
}

export default Page;