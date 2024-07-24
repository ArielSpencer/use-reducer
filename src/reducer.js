export const ADICIONAR_FRASE = "ADICIONAR_FRASE"

const reducer = (estado, acao) => {
  switch (acao.tipo) {
    case ADICIONAR_FRASE:
      if (acao.frase.length < 20) {
        alert("Por Favor, digite uma frase com mais de 20 caracteres.")
        return estado
      }
      if (estado.frases.some(f => f.texto === acao.frase)) {
        alert("Não são permitidas frases duplicadas.")
        return estado
      }
      return {
        frases: [...estado.frases, { id: estado.idCounter, texto: acao.frase }],
        idCounter: estado.idCounter + 1
      };

    default:
      return estado
  }
}

export default reducer