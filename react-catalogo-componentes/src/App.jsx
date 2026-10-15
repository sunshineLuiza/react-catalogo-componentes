import Cabecalho from './components/Cabecalho.jsx';
import CardCurso from './components/CardCurso.jsx';

function App() {
  const cursos = [
    {
      nome: 'Desenvolvimento de Sistemas',
      duracao: '1200 horas',
      modalidade: 'Presencial',
      nivel: 'tecnico'
    },
    {
      nome: 'Redes de Computadores',
      duracao: '1000 horas',
      modalidade: 'Presencial',
      nivel: 'tecnico'
    },
    {
      nome: 'Ciência de Dados e Inteligência Artificial',
      duracao: '2400 horas',
      modalidade: 'Semipresencial',
      nivel: 'superior tecnológico'
    },
    {
      nome: 'Segurança da Informação',
      duracao: '1600 horas',
      modalidade: 'EAD',
      nivel: 'tecnico'
    },
    {
      nome: 'Análise e Desenvolvimento de Sistemas',
      duracao: '2000 horas',
      modalidade: 'Presencial',
      nivel: 'superior tecnológico'
    },
    {
      nome: 'Defesa Cibernética',
      duracao: '1800 horas',
      modalidade: 'EAD',
      nivel: 'superior tecnológico'
    }
  ];

  return (
    <>
      <div className="cabecalho">
        <Cabecalho />
      </div>

      <main>
        <h1>Cursos</h1>
        {cursos.map((curso) => (
          <CardCurso
            key={curso}
            nome={curso.nome}
            duracao={curso.duracao}
            modalidade={curso.modalidade}
            nivel={curso.nivel}
          />
        ))}
      </main>
    </>
  );
}

export default App;
