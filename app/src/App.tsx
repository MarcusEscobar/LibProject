import './App.css'

function App() {

  const user = process.env.REACT_APP_API_USER;
  const password = process.env.REACT_APP_API_PASSWORD;

  console.log(`user: ${user}, password ${password}`);
  return (
    <>
      <h1>Hello World!!</h1>
    </>
  )
}

export default App
