function CardCurso({ nome, duracao, modalidade, nivel }) {
    return (
      <div className="cursoCard">
        <h2>{nome}</h2>
        <p>{duracao}</p>
        <p>{modalidade}</p>
        <p>{nivel}</p>
      </div>
    );
  }
  
  export default CardCurso;
  