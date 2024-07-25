export const ADICIONAR_FRASE = "ADICIONAR_FRASE"
export const EXCLUIR_FRASE = "EXCLUIR_FRASE"

const reducer = (estado, acao) => {
  const novoID = estado.frases.length > 0 ? Math.max(...estado.frases.map(f => f.id)) + 1 : 1;

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
        frases: [...estado.frases, { id: novoID, texto: acao.frase }],
        idCounter: estado.idCounter
      };

    case EXCLUIR_FRASE:
      const frasesAtualizadas = estado.frases
        .filter(frase => frase.id !== acao.frase.id)
        .map((frase, index) => ({
          ...frase, id: index + 1
        }));

      return {
        ...estado, frases: frasesAtualizadas
      };

    default:
      return estado;
  }
};

export default reducer;