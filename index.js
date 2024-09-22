// Criação de um Objeto JSON
let aluno = {
    nome: "Daniel Dantas",
    idade: 19,
    curso: "Ciência da Computação",
    notas: [7.5, 8.2, 8.9]
  };
  
  // Acesso a Propriedades
  console.log("Nome do aluno:", aluno.nome);
  console.log("Nota da primeira disciplina:", aluno.notas[0]);
  
  // Modificação de Propriedades
  aluno.idade = 22;  // Atualizando a idade
  aluno.notas.push(9.0);  // Adicionando uma nova nota
  
  // Conversão para String
  let alunoString = JSON.stringify(aluno);
  console.log("Aluno em formato JSON:", alunoString);
  
  // Conversão para Objeto
  let alunoObjeto = JSON.parse(alunoString);
  console.log("Aluno convertido de volta para objeto:", alunoObjeto);
  
  // Iteração sobre Propriedades
  console.log("Propriedades do objeto aluno:");
  for (let prop in alunoObjeto) {
    console.log(prop + ": " + alunoObjeto[prop]);
  }
  
  // Cálculo da Média das Notas
  let somaNotas = aluno.notas.reduce((acc, nota) => acc + nota, 0);
  let mediaNotas = somaNotas / aluno.notas.length;
  console.log("Média das notas do aluno:", mediaNotas.toFixed(2));
  
  // Criação de um Objeto JSON Aninhado
  aluno.endereco = {
    rua: "Rua das Flores",
    cidade: "São Paulo",
    estado: "SP"
  };
  
  // Acesso a Dados Aninhados
  console.log("Cidade do aluno:", aluno.endereco.cidade);
  console.log("Estado do aluno:", aluno.endereco.estado);
  
  // Lista de Alunos
  let alunos = [
    {
      nome: "João Silva",
      idade: 22,
      curso: "Ciência da Computação",
      notas: [7.5, 8.2, 6.9],
      endereco: { rua: "Rua das Flores", cidade: "São Paulo", estado: "SP" }
    },
    {
      nome: "Maria Souza",
      idade: 21,
      curso: "Engenharia de Software",
      notas: [9.1, 8.7, 7.8],
      endereco: { rua: "Av. Central", cidade: "Rio de Janeiro", estado: "RJ" }
    },
    {
      nome: "Carlos Pereira",
      idade: 23,
      curso: "Sistemas de Informação",
      notas: [6.5, 7.2, 8.0],
      endereco: { rua: "Rua Nova", cidade: "Curitiba", estado: "PR" }
    }
  ];
  
  // Filtragem de Alunos
  let alunosComMediaAlta = alunos.filter(aluno => {
    let somaNotas = aluno.notas.reduce((acc, nota) => acc + nota, 0);
    let media = somaNotas / aluno.notas.length;
    return media > 7.0;
  });
  
  console.log("Alunos com média superior a 7.0:", alunosComMediaAlta);
  