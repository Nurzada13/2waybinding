import React from "react";
class TwoWayBinding extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };
  }

  inputMethod = (event) => {
    this.setState({ inputValue: event.target.value });
  };
  render() {
    return (
      <>
        <input onChange={this.inputMethod} />
        <p>{this.state.inputValue}</p>
      </>
    );
  }
}

export default TwoWayBinding;
