export default function Hello() {
  function showName() {
    console.log("Mike");
  }
  function showAge(age) {
    console.log(age);
  }
  function showText(txt) {
    console.log(txt);
  }
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={showName}>show Name</button>
      <button
        onClick={() => {
          showAge(30);
        }}
      >
        show Age
      </button>
      <input
        type="text"
        onChange={(e) => {
          const txt = e.target.value;
          console.log(txt);
        }}
      ></input>
    </div>
  );
}
