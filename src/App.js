import "./App.css";

function App() {
  const name = "Guests";
  const naver = {
    name: "네이버",
    url: "https://naver.com",
  };
  return (
    <div className="App">
      <h1 style={{ color: "red", backgroundColor: "#ccc" }}>
        Welcome {name},{naver.name}
      </h1>
      <a href={naver.url}>네이버링크</a>
    </div>
  );
}

export default App;
