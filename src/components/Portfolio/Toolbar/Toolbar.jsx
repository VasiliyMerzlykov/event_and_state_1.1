import React from 'react';
import "./Toolbar.css";


export default function Toolbar(props) {


    let {filters, selected} = props

    return (
        <div>
            {filters.map(item => 
            <button className ={selected === item ? "filter" : "activFilter"} onClick ={() => props.onSelectFilter(item) } value = {`${item}`}>{`${item}`}</button>)}
        </div>
    );
};
