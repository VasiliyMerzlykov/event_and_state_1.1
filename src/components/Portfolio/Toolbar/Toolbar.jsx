import React from 'react'
import "./Toolbar.css"


export default function Toolbar(props) {
    const selectFilter = (e) => {
        props.onSelectFilter(e)
    }

    return (
        <div>{props.filters.map(item => <button onClick={selectFilter} value = {`${item}`}>{`${item}`}</button>)}
            {/* <button onClick={selectFilter}  value='All'>All</button>
            <button onClick={selectFilter}  value='Websites'>Websites</button>
            <button onClick={selectFilter}  value='Flayers'>Flayers</button>
            <button onClick={selectFilter}  value='Business Cards'>Business Cards</button> */}
        </div>
    )
}

