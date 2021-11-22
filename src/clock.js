const Clock = (props) => {
    return (
      <div>
        <h2>The time now is {props.date.toLocaleTimeString('en-US', {hour12:false})}.</h2>
      </div>
    );
  }
  
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );