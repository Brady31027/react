
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        
        this.removeAllOptions = this.removeAllOptions.bind(this);
        this.pickOneOption = this.pickOneOption.bind(this);
        this.addOneOption = this.addOneOption.bind(this);
        this.removeOneOption = this.removeOneOption.bind(this);
        
        this.state = {
            title : 'Indecision App',
            subtitle : 'Put your life in the hands of the computer',
            options : [],
        };
    }

    componentDidMount() {
        try {
            const jsonData = localStorage.getItem("options");
            const options = JSON.parse(jsonData);

            if (options) {
                this.setState(() => ( { options: options } ));
            }
        } catch(e) {
            // do nothing now
        }
    }

    componentDidUpdate(prevProps, prevState ) {
        if (prevState.options.length !== this.state.options.length) {
            const jsonData = JSON.stringify(this.state.options);
            localStorage.setItem('options', jsonData);
        }
        
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    removeOneOption(option) {
        console.log(`remove ${option}`);
        this.setState(() => ({
            options: this.state.options.filter((op) => {
                return op !== option;
            })
        }));
    }

    removeAllOptions() {
        console.log('remove all options');
        this.setState( () => ( { options : [] } ));
        
    }

    pickOneOption() {
        const index = Math.floor(Math.random() * this.state.options.length);
        console.log(`pick ${this.state.options[index]}`);
    }

    addOneOption(option) {
        if (!option) {
            return 'empty option';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'already existed'
        }
        console.log(`add option callback ${option}`);
        
        this.setState( () => ( {options: this.state.options.concat(option)} ));
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} subtitle={this.state.subtitle} />
                
                <Action hasOptions={!!this.state.options.length}
                        pickOneCallback={this.pickOneOption}/>
                
                <Options options={this.state.options} 
                        removeAllCallback={this.removeAllOptions}
                        removeOneCallback={this.removeOneOption} />

                <AddOption addCallback={this.addOneOption}/>
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div> 
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

const Action = (props) => {
    return (
        <div>
            <button disabled = {!props.hasOptions} 
                    onClick={props.pickOneCallback}>What Should I Do?</button>
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            <li> {props.option} </li>
            <button onClick={ (e) => { props.removeOneCallback(props.option) } }>
                remove
            </button>
        </div>
    );
}

const Options = (props) => {
    return ( 
        <div>
            <button onClick={props.removeAllCallback}>Remove All Options</button>
            {props.options.length === 0 && <p>Please add some options to start</p> }
            <ol>
                { 
                    props.options.map( (op, key) => {
                        return (<Option key={key} 
                                        option={op} 
                                        removeOneCallback={props.removeOneCallback}/> );
                    })
                }
            </ol>
        </div>
    );
}

ReactDOM.render( <IndecisionApp />, document.getElementById('app'));
