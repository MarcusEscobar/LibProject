import "./App.css";
import services from "./services";

function App() {
  const handleClick = async () => {
    const response = await services.createLine("nomeee", "senhaaa");
    console.log(response);
  };

  return (
    <>
      <h1>Hello World!!</h1>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

export default App;
