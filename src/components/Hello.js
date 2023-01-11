import React from "react";

const Hello = () => {
  //   return (
  //     <div>
  //       <h1>HELLO NAVEEN</h1>
  //     </div>
  //   );
  // };

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello Naveen")
  );
};

export default Hello;
