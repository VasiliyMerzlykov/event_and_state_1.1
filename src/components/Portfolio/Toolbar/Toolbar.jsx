import React from 'react';
import "./Toolbar.css";


export default function Toolbar(props) {
    const selectFilter = (e) => {
        props.onSelectFilter(e)
    };

    return (
        <div>
            {props.filters.map(item => <button onClick={selectFilter} value = {`${item}`}>{`${item}`}</button>)}
        </div>
    );
};
