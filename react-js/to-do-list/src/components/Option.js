import React from 'react';

const Option = (props) => {
    return (
        <div className="option">
            <p className="option__text">{props.count}. {props.option}</p>
            <button className="small-button small-button--remove"
                onClick={ (e) => { props.removeOneCallback(props.option) } }>
                remove
            </button>
        </div>
    );
}

export default Option;