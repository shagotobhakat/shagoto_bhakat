import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Type() {
  return (
    <span
      style={{
        fontSize: "45px",
        color: "#0788ff",
        fontWeight: "700",
      }}>
      <Typewriter
        words={["Frontend Web Designer", "UI/UX Designer", "Graphic Designer"]}
        loop="true"
        cursor
        cursorStyle="_"
        cursorColor="#0788ff"
        typeSpeed={100}
        deleteSpeed={100}
        delaySpeed={2000}
      />
    </span>
  );
}
