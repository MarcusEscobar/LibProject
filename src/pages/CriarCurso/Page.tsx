import { useNavigate } from "react-router-dom";

function CriarCurso() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-2xl text-white font-bold">Hello World!!</h1>
      <h1>Criando curso</h1>
      <span onClick={() => navigate("/cursos")}>Listar cursos</span>
    </>
  );
}

export default CriarCurso;
