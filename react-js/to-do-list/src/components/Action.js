import React from 'react';

const Action = (props) => {
    
    return (    
        <div>
            <button className="big-button"
                    disabled = {!props.hasOptions} 
                    onClick={props.pickOneCallback}>What Should I Do?</button>
        </div>
    );
}

export default Action;