import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("Pure Comp Render");
    return <div>Pure Componenets {this.props.name}</div>;
  }
}

export default PureComp;
