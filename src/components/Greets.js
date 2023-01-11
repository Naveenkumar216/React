import React from "react";

// function Greets() {
//   return <h1>Hello Naveen</h1>;
// }

const Greets = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

export default Greets;
