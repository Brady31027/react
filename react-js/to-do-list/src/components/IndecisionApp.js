import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        
        this.removeAllOptions = this.removeAllOptions.bind(this);
        this.pickOneOption = this.pickOneOption.bind(this);
        this.addOneOption = this.addOneOption.bind(this);
        this.removeOneOption = this.removeOneOption.bind(this);
        this.disableOptionModel = this.disableOptionModel.bind(this);
        
        this.state = {
            title : 'Indecision App',
            subtitle : 'Put your life in the hands of the computer',
            options : [],
            selectedOption : undefined,
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
        //console.log(`pick ${this.state.options[index]}`);
        this.setState( () => ( {selectedOption : this.state.options[index]} ));
    }

    disableOptionModel() {
        console.log('disableOptionModal');
        this.setState( () => ({selectedOption : undefined}) );
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

                <div >
                    <div className="container-indecision">    
                        <Action hasOptions={!!this.state.options.length}
                                pickOneCallback={this.pickOneOption}/>
                        
                        <div className="widget-body">
                            <Options options={this.state.options} 
                                    removeAllCallback={this.removeAllOptions}
                                    removeOneCallback={this.removeOneOption} />
                                    
                            <AddOption addCallback={this.addOneOption}/>
                        </div>
                    </div>
                </div>
                
                <OptionModal selectedOption={this.state.selectedOption}
                            disableOptionModel={this.disableOptionModel} />
            </div>
        );
    }
}

export default IndecisionApp;
