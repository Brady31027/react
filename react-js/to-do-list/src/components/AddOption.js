import React from 'react';

export default class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this);
        this.state = {
            err: undefined,
        }
    }

    addOption(e) {
        e.preventDefault();
        const op = e.target.elements.option.value.trim();
        //data.options.push(op);
        const errcode = this.props.addCallback(op);
        
        if (errcode) {
            console.log(errcode);
            this.setState( () => ({err: errcode}) );
        } else {
            this.setState( () => ({err: undefined}) );
        }

        e.target.elements.option.value = '';
    }

    render() {
        return (
            <div>
                {this.state.err && <p className="option__errmsg">{this.state.err}</p>}
                <form className="add-option" onSubmit={this.addOption}>
                    <input className="add-option__input" type="text" name="option" />
                    <button className="small-button">Add Option</button>
                </form>    
            </div>
        );
    }
}