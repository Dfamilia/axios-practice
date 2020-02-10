import React, { Fragment } from 'react';

const Page = (props) => {


    return (
        <Fragment>
            <form>
                <input type="text" name="search" placeholder="Search" onChange={(event)=> props.onChangeText(event)}/>
            </form>
        </Fragment>
    )
}

export default Page;