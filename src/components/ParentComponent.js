import React, { Component } from "react";
import ChildComponents from "./ChildComponents";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }

  render() {
    return (
      <div>
        <ChildComponents greetHandler={this.greetParent}></ChildComponents>
      </div>
    );
  }
}

export default ParentComponent;
