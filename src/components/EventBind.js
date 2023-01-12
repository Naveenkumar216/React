import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    //this.cilckHandler = this.cilckHandler.bind(this);
  }
  //   cilckHandler() {
  //     this.setState({
  //       message: "Goodbye!",
  //     });
  //   }
  cilckHandler = () => {
    this.setState({
      message: "GoodBye!",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/*<button onClick={this.cilckHandler.bind(this)}>Click</button>*/}
        {/*<button onClick={() => this.cilckHandler()}>Click</button>*/}
        <button onClick={this.cilckHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
