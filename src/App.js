import './App.css';
import { useReducer, useState } from 'react';
import reducer, { ADICIONAR_FRASE } from './reducer';

function App() {
  const [frase, setFrase] = useState('');
  const [estado, dispatch] = useReducer(reducer, { frases: [], idCounter: 1 })

  function salvarFrase(evento) {
    evento.preventDefault()

    dispatch({
      tipo: ADICIONAR_FRASE,
      frase
    })
    setFrase('');
  }

  return (
    <div className="App">
      <form onSubmit={salvarFrase}>
        <textarea
          required
          value={frase}
          onChange={evento => setFrase(evento.target.value)}
          placeholder="Digite sua frase..."
        />
        <br />
        <button>Salvar frase</button>
      </form>
      {estado.frases.map((fraseAtual) =>
        (<p key={fraseAtual.id}>{fraseAtual.id} - {fraseAtual.texto}</p>)
      )}
    </div>
  );
}

export default App;
