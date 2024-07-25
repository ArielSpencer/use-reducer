import './App.css';
import { useReducer, useState } from 'react';
import reducer, { ADICIONAR_FRASE, EXCLUIR_FRASE } from './reducer';

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

  function excluir(fraseExcluida) {
    dispatch({
      tipo: EXCLUIR_FRASE,
      frase: fraseExcluida
    })
  }

  return (
    <div className="App">
      <h1>Crie sua lista dinâmica</h1>
      <form onSubmit={salvarFrase} className="form">
        <textarea
          required
          value={frase}
          onChange={evento => setFrase(evento.target.value)}
          placeholder="Digite sua frase..."
        />
        <div className='container__cat'>
          <img
            src="./kitty.svg"
            alt="gato segurando um lápis"
            className="cat"
          />
          <button className="btn-add">Salvar frase</button>
        </div>
      </form>
      {
        estado.frases.map((fraseAtual) =>
        (<p key={fraseAtual.id}>{fraseAtual.id} - {fraseAtual.texto}
          <button
            className="btn-remove"
            onClick={() =>
              excluir(fraseAtual)}>Excluir
          </button>
        </p>)
        )
      }
    </div >
  );
}

export default App;
