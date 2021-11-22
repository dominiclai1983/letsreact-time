var Clock = function Clock(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h2',
      null,
      'The time now is ',
      props.date.toLocaleTimeString('en-US'),
      '.'
    )
  );
};

ReactDOM.render(React.createElement(Clock, { date: new Date() }), document.getElementById('root'));