class Clock extends React.Component{

  constructor(props){
    super(props);
    this.state = { 
      date: new Date(),
      location: 'New York',
    }; 
      // this is the component state property object
  }

  componentDidMount(){
    this.timer = setInterval(
      () => this.updateTime(),
      1000
    );
  }

  componentWillUnmount () {
    clearInterval(this.timer);
  }

  updateTime () {
    this.setState({
      date: new Date()
    });
  }

  render(){
    return (
      <div>
        <h2>The time in {this.state.location} now is {this.state.date.toLocaleTimeString('en-US', { hour12: false })}.</h2>        
      </div>
      )
    }
  }//here is the end of the class
  
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );