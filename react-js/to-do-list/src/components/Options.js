import React from 'react';
import Option from '../components/Option';

const Options = (props) => ( 
    <div>
        { props.options.length > 0 ? 
            <div className="widget-header">
                <h3 className="widget-header__title"> Your Options </h3> 
                <button className="small-button small-button--remove widget-header__title"
                    onClick={props.removeAllCallback}>
                    Remove All Options
                </button>
            </div> : 
            <div className="widget-header">
                <h3 className="widget-header__title"> Currently No Options</h3>
                <p className="widget-header-text--dim widget-header__title">Please add some options to start</p> 
            </div>
        }
    
        { 
            props.options.map( (op, key) => {
                return (<Option key={key} 
                                option={op} 
                                count={key+1}
                                removeOneCallback={props.removeOneCallback}/> );
            })
        }
    
    </div>
)


export default Options;