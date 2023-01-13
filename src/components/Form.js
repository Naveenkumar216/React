import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }

  render() {
    return (
      // <div>hii</div>
      <Form>
        <div>
          <label>Username</label>
          <input type="text" value={this.state.username}></input>
        </div>
      </Form>
    );
  }
}

export default Form;
