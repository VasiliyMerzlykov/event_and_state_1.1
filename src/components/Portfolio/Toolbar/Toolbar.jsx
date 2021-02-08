import React from 'react'
import "./Toolbar.css"


export default function Toolbar(props) {
    const selectFilter = (e) => {
        props.onSelectFilter(e.target.value)
    }

    return (
        <div>
            <button onClick={selectFilter} className={props.selected} value='All'>All</button>
            <button onClick={selectFilter} className={props.selected} value='Websites'>Websites</button>
            <button onClick={selectFilter} className={props.selected} value='Flayers'>Flayers</button>
            <button onClick={selectFilter} className={props.selected} value='Business Cards'>Business Cards</button>
        </div>
    )
}

