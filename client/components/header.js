import React from 'react';
import style from './header.css'

function header(props) {
    return (
        <div className={style.headerContent}>
            <h1>{props.title}</h1>
        </div>
    )
}

export default header;