import React, { Fragment } from 'react';

const Page = (props) => {

    let { text, onChangeText } = props;

    return (
        <Fragment>
            <form onSubmit={(event)=>event.preventDefault()}>
                <input type="text" name="search" placeholder="Search" onChange={(event)=> onChangeText(event)} value={text}/>
            </form>
        </Fragment>
    )
}

export default Page;