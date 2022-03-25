import React from "react";
import "./style.css";

export default function App() {
  const [idade, setIdade] = React.useState(0);
  const [dtNasc, setDtNasc] = React.useState(2022);
  const handleIdadeChange = (event) => {
    setIdade(event.target.value);
  }
  const handleBtCalcularClick = () => {
    setDtNasc(dtNasc - idade);
  }
  return (
    <div>
      <h1>Cálculo Ano de Nascimento</h1>
      <p>
        Digite sua idade:
        <input type="number" value={idade} onChange={handleIdadeChange} />
      </p>

      <p>
        Ano de Nascimento:
        <input type="number" value={dtNasc} readOnly />
      </p>
    
      <button disabled={idade === 0 } onClick={handleBtCalcularClick}>Calcular</button>
      <input type="number" value={idade} disabled={idade === 0} />
      <input type="text" value={dtNasc} disabled={idade === 0} />
      <button onClick={() => {
        setIdade(0);
        setDtNasc(new Date());
      }
      }>Limpar</button>

      <input type="checkbox" />
      <label>Fez aniversário no ano corrente?</label>
      <input type="number" value={idade} onChange={handleIdadeChange} />
      <input type="text" value={dtNasc} readOnly />
      <button onClick={handleBtCalcularClick}>Calcular</button>
      <button disabled={idade === 0}>Calcular</button>
      <input type="number" value={idade} disabled={idade === 0} />
      <input type="text" value={dtNasc} disabled={idade === 0} />


    </div>
  );
}
