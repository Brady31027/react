class Promodo extends React.Component {

  constructor(){
    super();
    this.state = {
      timeElapsed: 0,
      start: 0
    };
  }

  componentDidMount(){
    this.interval = setInterval( this.elapseTime.bind(this), 1000);
    this.setState( { start: new Date() } );
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  elapseTime(){
    var timeElapsed = Math.floor((new Date() - this.state.start) / 1000);
    this.setState( {timeElapsed: timeElapsed});

    if (this.state.timeElapsed >= (this.props.workingTime * 60)) {
      alert("timeout!");
      clearInterval(this.interval);
      this.setState({timeElapsed: 0,
                     start: new Date()});
    }
  }

  render () {
    return(
      <div>
      This timer runs for {this.props.workingTime} mins, 
      <br />followed by rest of {this.props.restingTime} minutes.
      <br />For a total time of {this.props.workingTime + this.props.restingTime} mins.
      <br />There are {this.state.timeElapsed} seconds elapsed.
      </div>
    );
  }
}

ReactDOM.render(
      <Promodo workingTime={1} restingTime={5} /> , 
      document.getElementById('app')
);