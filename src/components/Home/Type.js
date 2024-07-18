import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "SOFTWARE DEVELOPER",
          "MERN STACK DEVELOPER",
          "SOFTWARE MODDER",
          "FREELANCER",

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
