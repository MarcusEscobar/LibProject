import "./App.css";
//import services from "./services";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import CriarCurso from "./pages/CriarCurso/Page";
import ListarCursos from "./pages/ListarCursos/Page";

function App() {
  // const handleClick = async () => {
  //   const response = await services.createLine("nomeee", "senhaaa");
  //   console.log(response);
  // };

  return (
    // <>
    //   <h1>Hello World!!</h1>
    //   <button onClick={handleClick}>Click me</button>
    //   <a></a>
    // </>

    <Router>
      <Routes>
        <Route path="/" element={<CriarCurso />} />
        <Route path="/cursos" element={<ListarCursos />} />
      </Routes>
    </Router>
  );
}

export default App;
