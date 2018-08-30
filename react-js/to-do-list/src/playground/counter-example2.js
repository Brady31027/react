console.log('App.js is running!');

class Counter extends React.Component {
    
    constructor(props) {
        super(props);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0,
        }
    }

    componentDidMount() {
        // fetching data
        try {
            const c = localStorage.getItem('count'); // json obj
            const s = JSON.parse(c);// string
            const count = parseInt(s, 10);

            if (!isNaN(count)) {
                this.setState(() => ({ count }))
            }
        } catch (e) {
            // do nothing now
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // saving data
        try {
            if (prevState.count !== this.state.count) {
                console.log('update');
                localStorage.setItem('count', JSON.stringify(this.state.count));
            }
        } catch (e) {
            // do nothing now
        }

    }

    increase() {
        // Following method won't trigger auto-updates
        // this.state.count += 1;

        // Following method will trigger auto-updates
        this.setState( () => {
            return {
                count: this.state.count + 1
            };
        });

        console.log(`inc to ${this.state.count}`);
    }

    decrease() {
        this.setState( () => {
            return {count: this.state.count - 1}
        });
        console.log(`dec to ${this.state.count}`);
    }

    reset () {
        this.setState( () => {
            return { count: 0 }
         });
        console.log(`reset to ${this.state.count}`);
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.increase}>Inc</button>
                <button onClick={this.decrease}>Dec</button>
                <button onClick={this.reset}>Res</button>
            </div>
        );
    }
}

/* Counter.defaultProps = {
    count: 0,
} */



ReactDOM.render(<Counter />, document.getElementById('app'));


