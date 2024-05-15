import { useState } from "react";
import UserName from "./UserName";
export default function Hello({ age }) {
  //let name = "Mike";
  const [name, setName] = useState("Mike");
  const msg = age > 19 ? "성인입니다" : "미성년자입니다";
  //const [age, setAge] = useState(props.age);

  /* function changeName() {
    setName(name === "Mike" ? "Jane" : "Mike");
  } */
  return (
    <div>
      <h2>
        {name},({age}) : {msg}
      </h2>
      <UserName name={name} />
      <button
        onClick={() => {
          setName(name === "Mike" ? "Jane" : "Mike");
          //etAge(age + 1);
        }}
      >
        Change
      </button>
    </div>
  );
}
