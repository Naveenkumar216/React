import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    return <div>Pure Componenets {this.props.name}</div>;
  }
}

export default PureComp;