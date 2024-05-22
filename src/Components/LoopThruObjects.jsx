import React from "react";

export default function LoopThruObjects() {
let elements = [
    {
      name: "one",
      value: 1,
    },
    {
      name: "two",
      value: 2,
    },
    {
      name: "three",
      value: 3,
    },
  ];
  return (
    <ul>
      {elements.map(function (element, index) {
        return (
          <li key={index}>
            The value for {element.name} is {element.value}
          </li>
        );
      })}
    </ul>
  );
}
