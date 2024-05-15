import { useState } from "react";
export default function Hello() {
  //let name = "Mike";
  const [name, setName] = useState("Mike");

  /* function changeName() {
    setName(name === "Mike" ? "Jane" : "Mike");
  } */
  return (
    <div>
      <h2>{name}</h2>
      <button
        onClick={() => {
          setName(name === "Mike" ? "Jane" : "Mike");
        }}
      >
        Change
      </button>
    </div>
  );
}
