const dados = {
  semana1: [
    ["90", "Simulado ENEM 2009", "Português: Estrutura e formação das palavras", "História: Brasil Colônia", "Biologia: Citologia", "Matemática: Aritmética (operações e problemas)"],
    ["60", "", "Literatura: Elementos da narrativa", "Geografia: Cartografia", "Química: Química geral (átomos, moléculas)", "Matemática: Aritmética (problemas)"],
    ["60", "", "Inglês/Espanhol: Domínio lexical", "Filosofia: Filosofia Antiga", "Física: Termologia (introdução)", "Matemática: Aritmética (operações)"],
    ["45", "", "Português: Revisão Estrutura e formação + Exercícios", "Sociologia: Cidadania", "Química: Propriedades da matéria", "Matemática: Revisão Aritmética"]
  ],

  semana2: [
    ["90", "Simulado ENEM 2010", "Português: Classe de palavras", "História: Primeiro e Segundo Reinado", "Biologia: Histologia", "Matemática: Razão, proporção e escalas"],
    ["60", "", "Literatura: Narratividade", "Geografia: Climatologia", "Química: Ligações químicas e polaridade", "Matemática: Razão, proporção"],
    ["60", "", "Inglês/Espanhol: Função do texto", "Filosofia: Escola Sofística, Sócrates e Platão", "Física: Energia e trabalho", "Matemática: Proporção e escalas"],
    ["45", "", "Português: Revisão classe de palavras + Exercícios", "Sociologia: Meios de comunicação e tecnologia", "Química: Polaridade e ligações químicas", "Matemática: Revisão Razão e proporção"]
  ],

  semana3: [
    ["90", "Simulado ENEM 2011", "Português: Pontuação", "História: República Velha", "Biologia: Fundamentos da ecologia", "Matemática: Porcentagem e matemática financeira"],
    ["60", "", "Literatura: Análise de textos literários", "Geografia: Geografia Agrária", "Química: Físico-química (introdução)", "Matemática: Porcentagem"],
    ["60", "", "Inglês/Espanhol: Interpretação de textos", "Filosofia: Aristóteles e escola helenística", "Física: Calorimetria e condução térmica", "Matemática: Matemática financeira"],
    ["45", "", "Português: Revisão + Exercícios", "Sociologia: Sociologia contemporânea", "", ""]
  ],

  semana4: [
    ["90", "Simulado ENEM 2012", "Português: Tipos de texto e funções da linguagem", "História: Era Vargas", "Biologia: Ecossistemas e cadeias alimentares", "Matemática: Gráficos e tabelas"],
    ["60", "", "Literatura: Literatura no século XX", "Geografia: Urbanização", "Química: Soluções", "Matemática: Tabelas"],
    ["60", "", "Inglês/Espanhol: Revisão com exercícios", "Filosofia: Racionalismo moderno", "Física: Ondulatória", "Matemática: Gráficos"],
    ["45", "", "Português: Funções da linguagem – prática", "Sociologia: Cultura e indústria cultural", "", ""]
  ],

  semana5: [
    ["90", "Simulado ENEM 2013", "Português: Verbo", "História: 2ª Guerra Mundial e consequências", "Biologia: Sistema imunológico", "Matemática: Equação do 1º grau"],
    ["60", "", "Literatura: Narrativas modernas", "Geografia: Questões ambientais", "Química: Estequiometria", "Matemática: Equação do 1º grau – exercícios"],
    ["60", "", "Inglês/Espanhol: Prática de leitura com questões", "Filosofia: Ética e justiça", "Física: Introdução à óptica geométrica", "Matemática: Aplicações"],
    ["45", "", "Português: Revisão verbo + exercícios", "Sociologia: Ideologia", "", ""]
  ],

  semana6: [
    ["90", "Simulado ENEM 2014", "Português: Funções da linguagem (teoria e prática)", "História: Redemocratização e Constituição de 1988", "Biologia: Fisiologia – digestório e respiratório", "Matemática: Equação do 2º grau"],
    ["60", "", "Literatura: Revisão geral de textos literários", "Geografia: Globalização", "Química: Reações químicas", "Matemática: Equações"],
    ["60", "", "Inglês/Espanhol: Interpretação + vocabulário", "Filosofia: Filosofia Moderna", "Física: Eletricidade – circuitos simples", "Matemática: Problemas"],
    ["45", "", "Português: Interpretação e produção", "Sociologia: Mundo do trabalho", "", ""]
  ],

  semana7: [
    ["90", "Simulado ENEM 2015", "Português: Revisão: interpretação + tipos de texto", "História: História política e movimentos sociais", "Biologia: Genética (introdução)", "Matemática: Média, mediana, moda"],
    ["60", "", "Literatura: Revisão geral + exercícios", "Geografia: Indústria brasileira", "Química: Compostos orgânicos", "Matemática: Estatística básica"],
    ["60", "", "Inglês/Espanhol: Simulados", "Filosofia: Natureza do conhecimento", "Física: Resistores", "Matemática: Revisão estatística"],
    ["45", "", "Português: Interpretação + simulados", "Sociologia: Capitalismo", "", ""]
  ],

  semana8: [
    ["90", "Simulado ENEM 2016", "Português: Revisão geral", "História: Patrimônio histórico-cultural", "Biologia: DNA, RNA e síntese proteica", "Matemática: Funções (1º grau)"],
    ["60", "", "Literatura: Tendências contemporâneas", "Geografia: Revisão geral + exercícios", "Química: Reações orgânicas", "Matemática: Funções – exercícios"],
    ["60", "", "Inglês/Espanhol: Simulados", "Filosofia: Escola de Frankfurt", "Física: Energia, potência, movimento", "Matemática: Aplicações"],
    ["45", "", "Artes: Arte contemporânea", "Sociologia: Economia e sociedade", "", ""]
  ],

  semana9: [
    ["90", "Simulado ENEM 2017", "Português: Revisão de gramática (pontuação, verbo, classe de palavras)", "História: Simulados", "Biologia: Biotecnologia", "Matemática: Revisão de álgebra"],
    ["60", "", "Literatura: Revisão + simulados", "Geografia: Questões ambientais e agrárias", "Química: Eletroquímica", "Matemática: Exercícios"],
    ["60", "", "Artes: Elementos da música e artes plásticas", "Filosofia/Sociologia: Ética, cidadania e ideologia", "Física: Revisão de ondulatória e termologia", "Matemática: Prática final"],
    ["45", "", "Português: Redação com correção", "", "", ""]
  ],

  semana10: [
    ["90", "Simulado ENEM 2018", "Português: Simulados completos", "História: Brasil Colônia + República Velha", "Biologia: Ecologia + genética", "Matemática: Geometria básica (área de figuras planas)"],
    ["60", "", "Literatura: Prática com interpretação literária", "Geografia: Globalização e urbanização", "Química: Compostos orgânicos", "Matemática: Área – exercícios"],
    ["60", "", "Artes: História da arte (séculos XV e XVI)", "Filosofia/Sociologia: Revisão geral", "Física: Óptica, mecânica", "Matemática: Prática final"],
    ["45", "", "Português: Correção e simulado", "", "", ""]
  ],

  semana11: [
    ["90", "Simulado ENEM 2019", "Português: Simulados e correção comentada", "História: Revisão geral", "Biologia: Imunologia + biotecnologia", "Matemática: Geometria, estatística e funções"],
    ["60", "", "Literatura: Temas contemporâneos + leitura crítica", "Geografia: Simulados", "Química: Eletroquímica + estequiometria", "Matemática: Prática final"],
    ["60", "", "Educação Física: Esporte e mídia", "Física: Mecânica + energia", "", ""],
    ["45", "", "Português: Interpretação e revisão", "", "", ""]
  ],

  semana12: [
    ["90", "Simulado ENEM 2020", "Português/Literatura: Revisão + redação (tema novo)", "Humanas: Revisão com mini simulados", "Natureza: Revisão cruzada (tema e aplicação)", "Matemática: Revisão de temas mais errados"],
    ["60", "", "Artes/Educação Física: Revisão geral", "", "", ""],
    ["45", "", "Revisão final de dúvidas", "", "", ""]
  ],
  
  semana13: [
    ["90", "Simulado ENEM 2021", "", "", "", ""],
    ["60", "", "", "", "", ""],
    ["60", "", "", "", "", ""],
    ["45", "", "", "", "", ""]
  ],
  
  semana14: [
    ["90", "Simulado ENEM 2022", "", "", "", ""],
    ["60", "", "", "", "", ""],
    ["60", "", "", "", "", ""],
    ["45", "", "", "", "", ""]
  ],
  
  semana15: [
    ["90", "Simulado ENEM 2023", "", "", "", ""],
    ["60", "", "", "", "", ""],
    ["60", "", "", "", "", ""],
    ["45", "", "", "", "", ""]
  ],
  semana16: [
    ["90", "Simulado ENEM 2024", "", "", "", ""],
    ["60", "", "", "", "", ""],
    ["60", "", "", "", "", ""],
    ["45", "", "", "", "", ""]
  ],
};
