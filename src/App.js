import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // lista de frases (estado);

  // usuário pode adicionar novas frases, desde que:
  // a frase possua mais do que 20 caracteres;
  // a frase seja única;

  const [frase, setFrase] = useState('');
  const [frases, setFrases] = useState([])

  function salvarFrase(evento) {
    evento.preventDefault()
    if (frase.length < 20) {
      alert("Por Favor, digite uma frase com mais de 20 caracteres.")
      return
    }
    if (frases.includes(frase)) {
      alert("Não são permitidas frases duplicadas.")
      return
    }
    setFrases([...frases, frase])
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
      {frases.map((fraseAtual, index) => <p key={index}>{fraseAtual}</p>)}
    </div>
  );
}

export default App;
