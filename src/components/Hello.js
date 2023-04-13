import React from "react";

const Hello = () => {
  //   return (
  //     <div className:"class">
  //       <h1>HELLO NAVEEN</h1>
  //     </div>
  //   );
  // };

  return React.createElement(
    "div",
    { id: "hello", className: "Class" },
    React.createElement("h1", null, "Hello Naveen")
  );
};

export default Hello;
