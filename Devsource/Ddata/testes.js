
import { Prg,aln } from "./dados";


let teste1 = [
    new Prg({prg:`1. Um dos objectivos da normalização de dados e:`,a:new aln(`Minimizar a redundância de dados.
    `,0),b:new aln(`Melhorar o desempenho de consultas que envolvem grandes volumes de dados.
    `),c:new aln(`Preparar uma base de dados para ser usada em aplicações OLAP. 
    `),d:new aln(`Permitir a restauração de uma base de dados em caso de falha. 
    `),e:new aln(`Permitir que programas de aplicação acessem os dados independentemente da organização fisica dos mesmos.
    `),imgs:[]}),
    new Prg({prg:`2.Leia as afirmações abaixo sobre normalização de dados e assinale a alternativa correcta: 
    
    I. Por vezes, a normalização excessiva dos dados pode resultar num modelo complexo e muito
    fragmentado.
    
    II. Existem três formas normais previstas na literatura vigente e passiveis de aplicação sobre
    um modelo de dados.
    
    III. O objectivo da normalização é basicamente eliminar grupos repetitivos de dados, identificar
    as chaves compostas para cada entidade e garantir a integridade referencial dos dados. 
    
    IV. Quando o modelo de dados resulta em dados muito fragmentados, convém aplicar as
    técnicas de desnormalização, caso isso se mostre benéfico ao modelo.
    
    A sequência correcta é:
    `,a:new aln(`Apenas as assertivas I e IV estão correctas. 
    `,0),b:new aln(`Apenas a assertiva III está correcta. 
    `),c:new aln(`Apenas a assertiva I está correcta.
    `),d:new aln(`Apenas as assertivas I e II estão correctas. 
    `),e:new aln(``),imgs:[]}),
    new Prg({prg:`3. Das definições a seguir, ligadas ao conceito de normalização do modelo relacional, a que NÃO
    está correcta é: `,a:new aln(`O objectivo da normalização é eliminar várias anomalias ou aspectos indesejáveis de uma
    relação. `),b:new aln(`A normalização é um processo passo a passo, reversível, de substituição de uma dada
    colecção de relações por sucessivas colecções de relações, as quais possuem uma estrutura progressivamente mais simples e mais regular.`),c:new aln(`Uma relação que possui chave primária simples está sempre na 2a forma normal.`,0),d:new aln(`Um esquema de relação R está na Forma Normal Boyce-Codd (FNBC), se sempre que uma
    dependência funcional não trivial X -> A for mantida em R, então X será uma superchave
    de R.`),e:new aln(``),imgs:[]}),
    new Prg({prg:`4. Com relação à normalização de base de dados, analise as assertivas abaixo.
    I.Ausência de dependências funcionais em que o determinante não seja uma chave
    candidata implicará que a base de dados pertença a 2FN.
    
    II.Ausência de dependências funcionais que não sejam irredutíveis implicará que a base de
    dados pertença a 1FN.
    
    III. Ausência de dependências de junção que não sejam implicadas por chaves candidatas
    implicará que a base de dados pertença a 5FN.
    
    É correcto o que se afirma em:`,a:new aln(`I e II, apenas.
    `),b:new aln(`I, II e III.
    `),c:new aln(`I, apenas.
    `),d:new aln(`II, apenas.
    `),e:new aln(`III, apenas
    `,0),imgs:[]}),
    new Prg({prg:`5. Uma entidade Departamento é composta pelos atributos abaixo.
    Código do Departamento
    Número do Funcionário
    Nome do Departamento
    Nome do Funcionário
    Telefone do Departamento
    Telefone do Funcionário
    Número de Segurança Social
    
    Considerando-se que só poderá ser cadastrado um único número de telefone, tanto para os
    departamentos quanto para os funcionários, para que a entidade seja normalizada
    adequadamente, deve-se:
    `,a:new aln(`Aplicar a segunda forma normal (2FN), de forma que todos os demais atributos sejam
    dependentes da chave primária, que deverá ser composta pelos atributos Código do
    Departamento e Número do Funcionário`),b:new aln(`aplicar a primeira forma normal (IFN), colocando os atributos Número do Funcionário,
    Nome do Funcionário, Telefone do Funcionário e Número de Segurança Social em uma
    entidade Funcionário relacionada adequadamente à entidade Departamento`,0),c:new aln(`criar mais duas entidades, Funcionário e Telefone, relacionando todas elas com
    cardinalidade 1:n, com o lado n na entidade Departamento.`),d:new aln(`eliminar os campos Número do Funcionário, Nome do Funcionário e Telefone do
    Funcionário, já que estes campos são os únicos que não contém dados do departamento, mas
    sim do funcionário.`),e:new aln(`aplicar a segunda forma normal (2FN), que requer que todos os valores de atributos em uma
    entidade sejam atómicos, eliminando grupos repetidos e colocando-os cada um em uma
    entidade separada.`),imgs:[]}),
    new Prg({prg:`6. De acordo com a teoria de projeto de bancos de dados, dependências funcionais podem ser
    estabelecidas por meio de processos de derivação a partir de dependências já conhecidas, 
    ou pelas chamadas dependências triviais. Sabendo-se que existem as dependências:
    A—→B 
    B—→C
    C—→D 
    NÃO é possível daí derivar: 
    `,a:new aln(`A—→BC `),b:new aln(`A—→C `),c:new aln(`A—→B,C,D`),d:new aln(`B—→D `),e:new aln(`C—→A `,0),imgs:[]}),
    new Prg({prg:`7. Assinale a alternativa que apresenta o nível de normalização na optimização de base de dados
    em que os atributos não chaves são mutuamente independentes e irredutivelmente dependentes da chave primária. 
    `,a:new aln(`IFN`),b:new aln(`2FN `),c:new aln(`3FN`),d:new aln(`4FN`),e:new aln(`5FN`,0),imgs:[]}),
    new Prg({prg:`9.Seja a relação Empregado que possui os atributos Número, Nome Empregado, Endereço,
    Telefone e Codigo Departamento, sendo este último uma chave estrangeira que referencia a tabela Departamento com os atributos Código Departamento e Nome). 
    Nesse contexto, considere a dependência funcional transitiva sobre a tabela Empregado, 
    indicada a seguir.
    Número —→ NomeEmpregado 
    NomeEmpregado —→ CodigoDepartamento
        Então
    Número —→ CodigoDepartamento .
    
    Para a dependência funcional transitiva sobre a tabela Empregado ser verdadeira 
    é necessário que:`,a:new aln(`Número e Nome Empregado sejam a chave primária 
    `),b:new aln(`Número seja a chave candidata 
    `),c:new aln(`NomeEmpregado seja a chave primária
    `),d:new aln(`Nome Empregado seja uma chave candidata 
    `,0),e:new aln(``),imgs:[]}),
    new Prg({prg:`10. Em relação à normalização de tabelas em bases de dados relacionais, é correcto afirmar:
    `,a:new aln(`Normalizar tabelas da base de dados implica integrá-las em tabelas com finalidade de
    melhorar a eficiência na consulta da mesma. `),b:new aln(`Normalização é um processo que torna a base de dados mais confiável e eficiente, por isso,
    deve ser realizado no projecto físico da base de dados.`),c:new aln(`Problemas como anomalias de actualização são solucionados através de processo de
    normalização, que é aplicado no decorrer do projecto lógico da base de dados. `,0),d:new aln(`Para a resolução de problemas de anomalias na base de dados, a normalização é aplicada
    após a criação das tabelas`),e:new aln(``),imgs:[]}),
    new Prg({prg:`11. Considere que um modelo relacional normalizado até a
    
    I. 3FN contém apenas relacionamentos N:M. 
    II.3FN contém apenas relacionamentos 1:1 e 1:N. 
    III. 3FN não pode conter dependências funcionais entre atributos não-chave. 
    IV. IFN ou 2FN não pode conter dependências funcionais entre atributos não-chave e nem
    relacionamentos N:M.  
    
    Está correcto o que se afirma APENAS em:
    `,a:new aln(`II, III e IV. 
    `),b:new aln(`II e III. 
    `,0),c:new aln(`I e III. 
    `),d:new aln(`IL
    `),e:new aln(`1.
    `),imgs:[]}),
    new Prg({prg:`12.Considere as informações abaixo.
    
    PROCESSO (Num Processo, (Titulo Eleitor. Nome Eleitor, Zona Eleitoral_Eleitor, 
    Seccao Eleitoral Eleitor, Status Eleitor no Processo), Data Criacao_Processo,
    Data Solucao_Processo). 
    Sabe-se que os seguintes requisitos se aplicam: 
    
    -Um Eleitor pode ser citado em um ou mais processos. 
    -Um Processo pode citar um ou mais eleitores, portanto, os dados de Eleitor, 
    entre chaves na tabela (ou relação) acima,podem ser integrantes de um grupo de repetição. 
    
    - Os atributos sublinhados são chaves-primárias de seus respectivos grupos de atributos, ou seja, 
    Num Processo é chave dos dados de processo e Titulo Eleitor é chave dos atributos de eleitor. 
    
    - Status_Eleitor_no_Processo (ex. Activo, Inactivo, Desistente) pode ser diferente nos processos nos quais é citado, 
    ou seja, o mesmo eleitor pode ter, por exemplo, 
    o status de Desistente em um processo, mas Activo em outro). 
    Após a aplicação da 3FN, a situação ficou como segue:
    - PROCESSO (Num_Processo, Data Criacao Processo, Data Solucao Processo)
    - ELEITOR (Titulo_Eleitor, Nome Eleitor, Zona Eleitoral Eleitor, Seccao Eleitoral Eleitor) 
    - CITAÇÃO (Num Processo, Titulo Eleitor, 
    Zona_Eleitoral_Eleitor,Status_Eleitor_no_Processo) 
    Os atributos sublinhados são as chaves identificadoras das tabelas (ou relações). Um experiente Engenheiro de Sistemas analisou a situação e concluiu, 
    correctamente, que a normalização:`,a:new aln(`está integralmente correcta 
    `),b:new aln(`deve retirar o atributo Zona Eleitoral_Eleitor da CITAÇÃO, para ficar integralmente
    correcta.`,0),c:new aln(`deve incluir o atributo Status_Eleitor_no_Processo em PROCESSO, para ficar integralmente
    correcta.`),d:new aln(`deve manter o atributo Num Processo em ELEITOR, para ficar integralmente correcta.
    `),e:new aln(`deve incluir o atributo Data_Solucao_Processo na CITAÇÃO, para ficar integralmente.
    correcta`),imgs:[]}),
    new Prg({prg:`14.considere o esquema relacional a seguir, no qual DF corresponde às dependências funcionais da relação FUNC_PROJ, que vincula funcionários a projectos. Por exemplo, a dependència DFI descreve que o atributo Horas é determinado pelos atributos NSS e Projnum. FUNC_PROJ (NSS, Projnum, Horas, Fnome, Projtipo, Projlocal)
    Dfl: NSS, Projnum —→ Horas 
    Df2: NSS —→ Fnome
    Df3: Projnum —→ Projtipo, Projlocal 
    
    Ao normalizar a relação FUNC_PROJ na segunda forma normal (2FN), 
    são estabelecidos os seguintes esquemas de relação: `,a:new aln(`R1 (NSS. Projnum. Horas, Fnome) e R2 (Projnum, Projtipo, Projlocal). 
    `),b:new aln(`R1 (NSS, Projnum, Fnome) e R2 (Projnum, Projtipo, Projlocal, Horas) `),c:new aln(`RI (NSS, Projnum, Horas) R2 (NSS, Fnome) e R3 (Projnum, Projtipo, Projlocal)`,0),d:new aln(`RI (NSS, Projnum, Fnome) R2 (NSS, Horas) e R3 (Projnum, Projtipo, Projlocal) `),e:new aln(``),imgs:[]}),
    new Prg({prg:`15. Considere uma tabela:
    I. com todas as suas colunas contendo somente valores atómicos (um único valor para cada linha). 
    II. cujos atributos não-chave são totalmente dependentes de toda a chave primária.
    III. na qual alguns atributos não-chave são dependentes de outros atributos não-chave. 
    É correcto afirmar que a tabela está normalizada até a:`,a:new aln(`FNBC. 
    `),b:new aln(`INF 
    `),c:new aln(`2NF 
    `,0),d:new aln(`3NF
    `),e:new aln(`4NF 
    `),imgs:[]}),
    new Prg({prg:`16. Considere um conjunto de atributos atómicos {F, G, H, J, K, M, P} de uma Base de 
    Dados relacional com as seguintes dependências funcionais:
    F —→ G, H, J, K, M,P
    K —→ M,P 
    Sobre a tabela R=(F, G, H, J, K, M, P), onde a chave primária está sublinhada, afirma-se, 
    em relação às Formas Normais, que:`,a:new aln(`está desnormalizada. 
    `),b:new aln(`satisfaz 1FN, apenas.`),c:new aln(`satisfaz 1FN e 2FN, apenas. 
    `,0),d:new aln(`satisfaz a 3FN, mas não satisfaz a Forma Normal de Boyce-Codd.
    `),e:new aln(`satisfaz a Forma Normal de Boyce-Codd. 
    `),imgs:[]}),
    new Prg({prg:`17. Considere as tabelas a seguir com seus respectivos campos. 
    Tabela A (codigo_projecto (PK), codigo_funcionario (PK), nome_funcionario,
    cargo_funcionario, data_inicio_projecto, duração_projecto).
    
    TabelaB (codigo_departamento (PK), nome_departamento, telefone_departamento,
    localizacao).
    
    TabelaC (codigo_cliente (PK), codigo_produto (PK), nome_cliente, valor_unitario produto,
    qtdade_produto).
    
    TabelaD (numero_processo (PK), ano_processo, local_processo, seccao).
    
    TabelaE (codigo_aluno (PK), codigo_disciplina (PK), nome_aluno, carga_horaria disciplina,
    nota). 
    Deve-se verificar se há violação da segunda forma normal (2FN) SOMENTE nas tabelas: 
    `,a:new aln(`A.TabelaB e TabelaD.`),b:new aln(`TabelaA e TabelaE.`),c:new aln(`TabelaA, TabelaB e TabelaC.`),d:new aln(`TabelaC e TabelaE.`),e:new aln(`TabelaA, TabelaC e TabelaE.`,0),imgs:[]}),
    new Prg({prg:`18. No contexto de normalização, quando a tabela não contém tabelas aninhadas e não possui
    colunas multivaloradas; não contém dependências parciais, 
    embora contenha dependências transitivas, diz-se que ela está na:`,a:new aln(`primeira forma normal (1FN). `),b:new aln(`segunda forma normal (2FN).`,0),c:new aln(`terceira forma normal (3FN). `),d:new aln(`quarta forma normal (4FN).`),e:new aln(`quinta forma normal (5FN). `),imgs:[]}),
    new Prg({prg:`19. Considere a tabela R1(A, B, C) com dependências funcionais A—→B e B—→C.
    I. A é uma superchave para a tabela. 
    II. B é uma superchave para a tabela.
    III. A tabela está na FNBC. 
    Está correcto o que consta em:`,a:new aln(`1, somente `,0),b:new aln(`II, somente. `),c:new aln(`III, somente `),d:new aln(`II e III, somente.`),e:new aln(`I, II e III. 
    `),imgs:[]}),
    new Prg({prg:`20. Eliminar as dependências multivaloradas (DMV) não triviais de uma tabela, projetando-as para
    tabelas menores separadas e, assim, eliminar as anomalias de actualização associadas às DMVS 
    é objectivo da `,a:new aln(`1FN 
    `),b:new aln(`2FN 
    `),c:new aln(`3FN 
    `),d:new aln(`4FN
    `,0),e:new aln(`5FN 
    `),imgs:[]}),
    new Prg({prg:`21. Considere a seguinte relação: 
    Cliente (Id-Cliente, Nome-Cliente, Endereço-Cliente, Telefone-Cliente, 
    {Num-Pedido,Data-Pedido, {Cod-Produto, Nome-Produto, Valor-Unitário-Produto, Quantidade-
    Produto-Pedido}, Valor-Total-Pedido}, Nacionalidade-Cliente, Localização-
    Continental-Nacionalidade-Cliente, Tipo-de-Cliente).
    
    O negrito identifica o nome da relação, os {} inscrevem um grupo de repetição e os atributos 
    sublinhados são identificadores (chave) de um grupo. 
    A Localização-Continental-Nacionalidade-Cliente refere-se ao continente 
    correspondente à nacionalidade do cliente.
    
    Após a normalização até a 3FN, a Quantidade-Produto-Pedido será atributo com dependência 
    funcional apenas da identificação:`,a:new aln(`Cod-Produto. 
    `),b:new aln(`Num-Pedido. 
    `),c:new aln(`Cod-Produto+Num-Pedido. 
    `,0),d:new aln(`Num-Pedido+Id-Cliente.
    `),e:new aln(`Id-Cliente.
    `),imgs:[]}),
    new Prg({prg:`22. Seja a relação R (A, B, C, D, E) e suponha a ocorrência das seguintes dependências funcionais
    entre seus atributos:
    (A, B) —→ C (A, B) —→ D (A,B) —→ E D —→ E
    
    Nessa situação, considere as seguintes afirmativas:
    I. A chave da relação R é (A, B).
    II. A relação R não está na forma normal de Boyce-Codd (BCNF) porque o atributo D não é
    uma de suas superchaves.
    III. A dependência funcional D —→ E viola a condição BCNF.
    IV. A relação R está na terceira forma normal.
    Assinale:`,a:new aln(`se apenas as afirmativas I, II e III estiverem correctas. 
    `,0),b:new aln(`se apenas as afirmativas I e II e IV estiverem correctas.
    `),c:new aln(`se apenas as afirmativas II e III estiverem correctas.
    `),d:new aln(`se apenas as afirmativas I e III estiverem correctas.
    `),e:new aln(`se todas as afirmativas estiverem correctas.
    `),imgs:[]}),
    new Prg({prg:`25. Na associação 1:n (um para muitos) é correcto:`,a:new aln(`criar uma nova tabela com as chaves das classes envolvidas na associação. 
    `),b:new aln(`acrescentar a chave da classe do lado n. como chave alheia, na tabela no lado 1.`),c:new aln(`acrescentar ambas as chaves, em todas as tabelas envolvidas, como chaves alheias.`),d:new aln(`criar chaves primárias adicionais, em cada uma das tabelas, para estabelecer a associação
    entre as classes.`),e:new aln(`acrescentar a chave da classe do lado 1, como chave alheia, na tabela no lado n.`,0),imgs:[]})
     ]

     let teste2 = [
        new Prg({prg:`1. A pessoa responsável pela tecnologia de base de dados, 
        desenho da base de dados e construção de consultas, segurança, backup e recovery, 
        e performance tuning é conhecida como:`,a:new aln(`Administrador de dados `),b:new aln(`Administrador de base de dados`,0),c:new aln(`Dono do sistema `),d:new aln(`Utilizador final`),e:new aln(` Nenhum dos anteriores`),imgs:[]}),
        new Prg({prg:`2. São vantagens de uma base de dados, EXCEPTO______:`,a:new aln(`Privacidade dos dados; `),b:new aln(`Independência de dados;`),c:new aln(`Controle de redundância de dados; `),d:new aln(`Segurança de dados;`),e:new aln(`Utilização de pessoal sem conhecimento especializado.`,0),imgs:[]}),
        new Prg({prg:`3. O nível de abstracção, que visa simplificar a interacção entre utilizadores 
        e o sistema de base de dados, é o:`,a:new aln(`Físico `),b:new aln(`De Visão `,0),c:new aln(`Lógico`),d:new aln(`De Esquema`),e:new aln(`De Modelo`),imgs:[]}),
        new Prg({prg:`4. As seguintes opções são funções de um SGBD, EXCEPTO______:`,a:new aln(`Criação e processamento de formulários `,0),b:new aln(`Criação de base de dados `),c:new aln(`Processamento de dados`),d:new aln(`Administração de base de dados`),e:new aln(``),imgs:[]}),
        new Prg({prg:`5. Os valores de dados armazenados numa base de dados precisam satisfazer algumas restrições de
        sistencia, pois, em alguns momentos,
         se deseja garantir um valor de um dado conjunto de atributos numa relação 
         e que também apareça numa outra relação. 
         A esse tipo de restrição de consistência dá-se o nome de restrição de:`,a:new aln(`Domínio`),b:new aln(`Chave `),c:new aln(`Integridade entidade `),d:new aln(`Metadados `),e:new aln(`Integridade referencial.`,0),imgs:[]}),
        new Prg({prg:`6. O conjunto de um ou mais atributos que permite identificar unicamente uma entidade de um
        conjunto de entidades é chamado de superchave.
        Uma superchave minima ou uma chave candidata é:`,a:new aln(`composta apenas por atributos do tipo numérico ou do tipo booleano `),b:new aln(`homogénea, ou seja, todos os seus atributos são de um mesmo tipo de dados `),c:new aln(`heterogénea, ou seja, não pode haver dois atributos com o mesmo tipo de dados `),d:new aln(`uma superchave composta por apenas um atributo`),e:new aln(`uma superchave da qual não se pode remover quaisquer atributos sem que se perca 
        a condição da unicidade.`,0),imgs:[]}),
        new Prg({prg:`7. Quando dois conjuntos de dados são conectados de acordo com uma determinada condição,
         representa o resultado da operação relacional:`,a:new aln(`Junção`,0),b:new aln(`União `),c:new aln(`Restrição`),d:new aln(`Projecção `),e:new aln(`Intersecção`),imgs:[]}),
        new Prg({prg:`8. Um técnico de informática reconhece que operações do modelo relacional permitem que um 
        utilizador especifique solicitações como expressões da álgebra relacional, nas quais a(o). `,a:new aln(`Operação PROJECÇÃO é usada para escolher um subconjunto das tuplas de uma relação
        que satisfaça uma condição de selecção. `),b:new aln(`Operação de PROJECÇÃO mantém quaisquer tuplas duplicadas, de modo que o resultado
        dessa operação é um conjunto de tuplas que pode conter tuplas repetidas. `),c:new aln(`Operação PROJECÇÃO pode seleccionar certas colunas da tabela e descartar outras.`,0),d:new aln(`Operação SELECÇÃO é usada para incluir todas as tuplas de duas relações em uma única
        relação, sendo que as tuplas duplicadas são eliminadas. `),e:new aln(`Resultado da operação SELECÇÃO pode ser visualizado como uma partição vertical da
        relação original em duas relações: uma tem as colunas (atributos) necessárias 
        e contém o resultado da operação, e a outra contém as colunas descartadas.`),imgs:[]}),
        new Prg({prg:`9. Identifique se são verdadeiras (V) ou falsas (F) as afirmativas abaixo sobre o diagrama Entidade
        Relacionamento (ER). 
        () É um modelo voltado a descrever a estrutura dos dados armazenados.
        ()Contém referências às funções que manipulam os dados.
        () É focado na modelação conceptual.
        ()Modela a implementação.
         Assinale a alternativa que indica a sequência CORRECTA, de cima para baixo:`,a:new aln(`V-V-V-V `),b:new aln(`V-V-F-F`),c:new aln(`V-F-V-F `,0),d:new aln(`F-V-F-V`),e:new aln(`F-F-V-V`),imgs:[]}),
        new Prg({prg:`10. O modelo ER de um sistema serve para mostrar:
        
        1. Como os dados são transformados pelo sistema. 
        II. A composição dos dados armazenados pelo sistema. 
        III. Como o sistema se comporta ao receber um dado.
        IV. Como os dados se relacionam e como eles serão utilizados. 
        Completa(m) CORRECTAMENTE a proposição acima:`,a:new aln(`Somente os itens II e III. `),b:new aln(`Somente os itens I e II. `),c:new aln(`Somente os itens II e IV.`,0),d:new aln(`Somente o item I. `),e:new aln(`Todos os itens.`),imgs:[]}),
        new Prg({prg:`11. Considere as afirmativas abaixo sobre a modelação entidade-relação.
        
        
        1 - Entidades fracas são aquelas onde o identificador é composto não somente por seus atributos,
        mas também pelos dos relacionamentos dos quais a entidade participa. 
        
        II - Um relacionamento ternário (entre três entidades) sempre terá como cardinalidade mínima,
        para cada uma das entidades, o valor 1. 
        
        III - Através de uma especialização é possível atribuir propriedades particulares a um subconjunto das ocorrências de uma entidade genérica.
        
        IV - Para que seja possível modelar um relacionamento entre uma entidade A e um agrupamento de duas entidades El e E2, que têm entre elas um relacionamento B, já existente, deve-se transformar o relacionamento B numa entidade associativa C e, então, relacioná-la com a entidade A.
        
        V - Os relacionamentos somente podem conter atributos próprios se estes forem
        identificadores.
        
        Estão CORRECTAS apenas as afirmativas:`,a:new aln(`I, II e IV `),b:new aln(`I, III e IV `,0),c:new aln(`I, IV EV `),d:new aln(`II, III e V `),e:new aln(`II, IV e V`),imgs:[]}),
        new Prg({prg:`12. Um subconjunto de entidades, dentro de um conjunto de entidades,
        que tem atributos distintos das demais entidades do conjunto denomina-se:`,a:new aln(`Especialização `,0),b:new aln(`Generalização `),c:new aln(`Herança `),d:new aln(`Sistematização `),e:new aln(`Normalização`),imgs:[]}),
        new Prg({prg:`15. Analise o esquema relacional a seguir.
        aluno (matrícula, nome, curso) 
        livro (ISBN, título, editora)
        empréstimo (matrícula, ISBN, data) 
        No esquema apresentado:
        `,a:new aln(`o atributo titulo é uma chave candidata para a relação livro. `),b:new aln(`o atributo matrícula é uma chave estrangeira para a relação aluno. `),c:new aln(`os atributos matrícula e ISBN são chave primária para a relação empréstimo. `,0),d:new aln(`as tuplas diferentes da relação livro são impossíveis de se distinguir.`),e:new aln(``),imgs:[]}),
        new Prg({prg:`16.O diagrama entidade-relação acima representa as entidades ALUNO e TURMA. Cada elemento
        em ALUNO pode ser matriculado em M turmas. E, cada TURMA pode ter N alunos matriculados.
        com base nessas informações, assinale a opção que indica a(s) tabela(s) necessária(s) 
        para representar o modelo e o(s) seu(s)nome(s).`,a:new aln(`três tabelas, denominadas ALUNO, MATRICULA e TURMA `,0),b:new aln(` uma tabela, denominada MATRICULA `),c:new aln(`uma, tabela denominada ALUNO_MATRICULA `),d:new aln(`duas tabelas, denominadas ALUNO e TURMA `),e:new aln(`duas tabelas, denominadas ALUNO e MATRICULA`),imgs:[require('../testespics/teste2.16.jpeg')]})
         ];

         let teste3 = [
            new Prg({prg:`1. A pessoa responsável pela tecnologia de base de dados, 
            desenho da base de dados e construção de consultas, segurança, backup e recovery, 
            e performance tuning é conhecido como:`,a:new aln(`Administrador de dados`),b:new aln(`Administrador de base de dados.`,0),c:new aln(`Dono do sistema `),d:new aln(`Utilizador final`),e:new aln(` Nenhum dos anteriores `),imgs:[]}),
            new Prg({prg:`2. É desvantagem de base de dados:`,a:new aln(` Privacidade dos dados; `),b:new aln(`Independência de dados;`),c:new aln(`Controle de redundância de dados;`),d:new aln(`Acesso aos dados;`),e:new aln(`Desempenho. `,0),imgs:[]}),
            new Prg({prg:`3. A arquitectura de três esquemas pode ser usada para explicar melhor o conceito de
            independência de dados.Com relação a esse conceito e a arquitectura de três esquemas,
            analise os itens a seguir, marcando (V) para o item verdadeiro e (F) para o item falso. 
            
            ()Independência de dados lógica é a capacidade de alterar o esquema conceptual sem mudar o esquema externo 
            ()Independência de dados física é a capacidade de mudar o esquema interno sem ter de alterar o esquema conceptual
            ()Independência de dados é a capacidade de mudar o esquema num nível do sistema de base de dados sem que ocorram alterações do esquema no próximo nível mais alto 
            () Com a independência de dados, mudanças num nível não requer mudança no nível superior, 
            pois, somente o mapeamento entre os dois níveis é modificado. 
            
            Esse mapeamento não traz nenhuma sobrecarga (overhead) durante a compilação ou execução de uma 
            consulta. 
            Assinale a opção com a sequência CORRECTA: `,a:new aln(`F, V, V, F `),b:new aln(`V, V, F, V `),c:new aln(`F, F, F, V`),d:new aln(`V, F, F, V `),e:new aln(`V,V,V, F `,0),imgs:[]}),
            new Prg({prg:`4.Se e somente se um conjunto de atributos de uma tabela, num determinado momento,
            possuir ambas as propriedades de unicidade e irredutibilidade, segundo Date, trata-se de
            uma:`,a:new aln(`chave estrangeira. `),b:new aln(`chave alternativa. `),c:new aln(`chave primária. `),d:new aln(`chave candidata.`),e:new aln(`superchave. `,0),imgs:[]}),
            new Prg({prg:`6. Um técnico de informática reconhece que operações do modelo relacional permitem 
            que um utilizador especifique solicitações como expressões da álgebra relacional,
            nas quais a(o). `,a:new aln(` Operação PROJECÇÃO é usada para escolher um subconjunto das tuplas de uma
            relação que satisfaça uma condição de selecção. `),b:new aln(`Operação de PROJECÇÃO mantém quaisquer tuplas duplicadas, de modo que o
            resultado dessa operação é um conjunto de tuplas que pode conter tuplas repetidas. `),c:new aln(`Operação PROJECÇÃO pode seleccionar certas colunas da tabela e descartar outras. `,0),d:new aln(`Operação SELECÇÃO é usada para incluir todas as tuplas de duas relações em uma
            única relação, sendo que as tuplas duplicadas são eliminadas. `),e:new aln(`Resultado da operação SELECÇÃO pode ser visualizado como uma partição vertical da
            relação original em duas relações: uma tem as colunas (atributos) necessárias e contém
            o resultado da operação, e a outra contém as colunas descartadas. `),imgs:[]}),
            new Prg({prg:`7. Considere o esquema relacional abaixo, no qual matrícula é a chave primária.
            VEICULO (matricula, cor, modelo, marca, ano, valor) 
            Qual é a expressão em álgebra relacional a ser aplicada sobre esse esquema, de forma a obter 
            as matriculas dos VEICULOS com ano igual a 2016 e valor menor que 9000?`,a:new aln(`θ  matricula (θ  ano = 2016; valor <9000)`),b:new aln(`θ  matricula (π [teta] valor < 9000 AND ano = 2016) `),c:new aln(`θ  matricula (π valor < 9000 AND ano = 2016 (VEICULO))`),d:new aln(`π matricula (θ ano=2016 AND valor < 9000 (VEICULO)) `,0),e:new aln(`π matricula (π ano - 2016; πvalor < 9000 (VEICULO)) `),imgs:[require('../testespics/teste3.7.jpg')]}),
            new Prg({prg:`8. Identifique se são verdadeiras (V) ou falsas (F) as afirmativas abaixo sobre o diagrama Entidade
            Relação (ER). 
            
            ()É um modelo voltado para a descrição da estrutura dos dados armazenados. 
            () Contém referências às funções que manipulam os dados. 
            () É focado na modelagem conceptual. 
            () Modela a implementação. Assinale a alternativa que indica a sequência correcta, de cima para baixo.`,a:new aln(`V-V-V-V`),b:new aln(`V-V-F-F`),c:new aln(`V-F-V-F`,0),d:new aln(`F-V-F-V`),e:new aln(`F-F-V-V`),imgs:[]}),
            new Prg({prg:`9. Considere o seguinte diagrama entidade-relação de uma base de dados relacional:
            
            A partir desse diagrama (abaixo ), é correcto afirmar que: `,a:new aln(`o relacionamento presente no diagrama é do tipo ternário. `),b:new aln(`um depósito pode possuir vários produtos. `,0),c:new aln(`o número de entidades presentes no relacionamento Depósito deve ser ímpar. `),d:new aln(`um depósito deve possuir um número par de produtos.`),e:new aln(`um produto pode estar associado a mais de um depósito.`),imgs:[require('../testespics/teste3.9.jpg')]}),
            new Prg({prg:`E. Eliminar as dependências multivaloradas (DMV) não triviais de uma tabela, projetando-as para
            tabelas menores separadas e, assim, eliminar as anomalias de actualização associadas às DMVS 
            é objectivo da :`,a:new aln(`1FN `),b:new aln(`2FN `),c:new aln(`3FN`),d:new aln(`4FN`,0),e:new aln(`5FN `),imgs:[]}),
            new Prg({prg:`Um dos objectivos da normalização de dados e`,a:new aln(`minimizar a redundância de dados.`,0),b:new aln(`melhorar o desempenho de consultas que envolvem grandes volumes de dados.`),c:new aln(`preparar uma base de dados para ser usada em aplicações OLAP. `),d:new aln(``),e:new aln(``),imgs:[]}),
            new Prg({prg:`São vantagens de uma base de dados, EXCEPTO______:`,a:new aln(`Privacidade dos dados; `),b:new aln(`Utilização de pessoal sem conhecimento especializado.`,0),c:new aln(`Independência de dados: `),d:new aln(``),e:new aln(``),imgs:[]}),
            new Prg({prg:`As seguintes opções são funções de um SGBD, EXCEPTO______:`,a:new aln(`Criação e processamento de formulários `,0),b:new aln(`Administração de base de dados`),c:new aln(`Criação de base de dados `),d:new aln(``),e:new aln(``),imgs:[]}),
            new Prg({prg:`Quando dois conjuntos de dados são conectados de acordo com uma determinada condição,
             representa o resultado da operação relacional:`,a:new aln(` Junção `,0),b:new aln(`Intersecção`),c:new aln(`Restrição `),d:new aln(`União `),e:new aln(``),imgs:[]}),
            new Prg({prg:` Um subconjunto de entidades, dentro de um conjunto de entidades,
            que tem atributos distintos das demais entidades do conjunto denomina-se:`,a:new aln(`Especialização `,0),b:new aln(`Sistematização `),c:new aln(`Normalização`),d:new aln(``),e:new aln(``),imgs:[]}),
            new Prg({prg:`O conjunto de um ou mais atributos que permite identificar unicamente uma entidade de um
            conjunto de entidades é chamado de superchave.
            Uma superchave minima ou uma chave candidata é:`,a:new aln(`composta apenas por atributos do tipo numérico ou do tipo booleano `),b:new aln(`uma superchave da qual não se pode remover quaisquer atributos sem que se perca 
            a condição da unicidade.`,0),c:new aln(`uma superchave composta por apenas um atributo `),d:new aln(`heterogénea, ou seja, não pode haver dois atributos com o mesmo tipo de dados `),e:new aln(``),imgs:[]}),
            new Prg({prg:`Um técnico de informática reconhece que operações do modelo relacional permitem que um 
            utilizador especifique solicitações como expressões da álgebra relacional, nas quais a(o). `,a:new aln(`Operação PROJECÇÃO é usada para escolher um subconjunto das tuplas de uma relação
            que satisfaça uma condição de selecção. `),b:new aln(`Operação PROJECÇÃO pode seleccionar certas colunas da tabela e descartar outras. `,0),c:new aln(`Operação SELECÇÃO é usada para incluir todas as tuplas de duas relações em uma única
            relação, sendo que as tuplas duplicadas são eliminadas. `),d:new aln(``),e:new aln(``),imgs:[]})
             ];

            
let teste4 = [
    new Prg({prg:`1. Um sistema de base de dados é:`,a:new aln(`Um software que permite criar, manipular e manter uma base de dados `),b:new aln(`Um grande repositório de dados, que é definido uma vez e usado apenas por um
    departamento`),c:new aln(`Uma colecção partilhada de dados logicamente relacionados destinados a servir as
    necessidades de uma organização.`,0),d:new aln(`Um grande repositório de dados, que é definido uma vez e usado por todos
    departamentos.`),e:new aln(` `),imgs:[]}),
    new Prg({prg:`2. O nível de arquitectura de uma base de dados que contém a representação 
    e organização física dos dados nos dispositivos de armazenamento é o :`,a:new aln(`Interno`,0),b:new aln(`Externo `),c:new aln(`Conceitual `),d:new aln(`Modelo de Entidades`),e:new aln(``),imgs:[]}),
    new Prg({prg:`3. O nível de abstracção, que visa simplificar a interacção entre utilizadores 
    e o sistema de base de dados, é o:`,a:new aln(`Físico `),b:new aln(`De Visão `,0),c:new aln(`Lógico `),d:new aln(`De Esquema `),e:new aln(`De Modelo`),imgs:[]}),
    new Prg({prg:`5. Considere o diagrama de entidade relação
    [Imagem abaixo]
    
    Da forma como se apresentam as tabelas, 
    os relacionamentos estabelecidos entre as entidades são:
    
    I. Produtos e Detalhes do Pedido = 1:N·
    II. Detalhes do Pedido e Produtos =N:N.
    III. Pedidos e Detalhes do Pedido = 1:N.
    IV. Detalhes do Pedido e Pedidos = N:N 
    
    É correcto o que consta em:`,a:new aln(` II, III e IV, apenas. `),b:new aln(`I, II, III e IV. `),c:new aln(`I e II, apenas.`),d:new aln(`II e IV, apenas.`),e:new aln(`I e III, apenas.`,0),imgs:[require('../testespics/teste4.5.jpg')]}),
    new Prg({prg:`6. Considere as afirmativas abaixo sobre a modelação entidade relacionamento.
    
    I - Entidades fracas são aquelas onde seu identificador é composto não somente pelos seus atributos,
    mas também pelos relacionamentos dos quais a entidade participa. 
    
    II - Um relacionamento ternário (entre três entidades) sempre terá como cardinalidade mínima,
    para cada uma das entidades, o valor 1. 
    
    III - Através de uma especialização é possível atribuir propriedades particulares 
    a um subconjunto das ocorrências de uma entidade genérica. 
    
    IV - Para que seja possível modelar um relacionamento entre uma entidade A 
    e um agrupamento de duas entidades El e E2,
    que têm entre elas um relacionamento B,
    já existente, deve-se transformar o relacionamento B numa entidade associativa C e,
    então, relacioná-la com a entidade A. 
    
    V - Os relacionamentos somente podem conter atributos próprios se estes forem identificadores.
    Estão correctas apenas as afirmativas:
    `,a:new aln(`I, II e IV. `),b:new aln(`I, III e IV. `,0),c:new aln(`I, IV e V. `),d:new aln(`II, III e V.`),e:new aln(`II, IV e V. `),imgs:[]}),
    new Prg({prg:`7. Sobre o modelo de base de dados relacional, considere as afirmativas abaixo. 
    
    I - Um esquema de relação é composto por um nome de relação
     é composto por um nome de relação e por uma lista de atributos, 
    e cada atributo está associado a um domínio. 
    
    II - Por definição, uma superchave mínima é aquela composta por uma única coluna.
    
    III - Um esquema de relação pode conter inais de uma chave candidata. 
    IV - A ocorrência de um valor NULL é proibida em qualquer coluna sobre a qual se define
    uma restrição de integridade referencial.
    
    São correctas APENAS as afirmativas:`,a:new aln(` I e II. `),b:new aln(`I e III. `,0),c:new aln(`II e III. `),d:new aln(`II e IV.`),e:new aln(`III e IV.`),imgs:[]}),
    new Prg({prg:`8. Analise o esquema relacional a seguir.
    aluno (matrícula, nome, curso) 
    livro (isbn, título, edicão)
    empréstimo (matrícula, isbn, data)
    
    No esquema apresentado, é correcto afirmar que:`,a:new aln(`o atributo título é uma chave candidata para a relação livro. `),b:new aln(`o atributo matrícula é uma chave estrangeira para a relação aluno. `),c:new aln(`os atributos matrícula e isbn são chave primária para a relação empréstimo. `,0),d:new aln(`as tuplas diferentes da relação livro são impossíveis de se distinguir.`),e:new aln(``),imgs:[]}),
    new Prg({prg:`8. Identifique se são verdadeiras (V) ou falsas (F) as afirmativas abaixo sobre o diagrama Entidade
    Relação (ER). 
    
    ()É um modelo voltado para a descrição da estrutura dos dados armazenados. 
    () Contém referências às funções que manipulam os dados. 
    () É focado na modelagem conceptual. 
    () Modela a implementação. Assinale a alternativa que indica a sequência correcta, de cima para baixo.`,a:new aln(`V-V-V-V `),b:new aln(`V-V-F-F `),c:new aln(` V-F-V-F `,0),d:new aln(` F-V-F-V`),e:new aln(`F-F-V-V `),imgs:[]}),
    new Prg({prg:`Os valores de dados armazenados numa base de dados precisam satisfazer algumas restrições de
    sistencia, pois, em alguns momentos,
     se deseja garantir um valor de um dado conjunto de atributos numa relação 
     e que também apareça numa outra relação. 
     A esse tipo de restrição de consistência dá-se o nome de restrição de:`,a:new aln(`Domínio `),b:new aln(`Integridade referencial.`,0),c:new aln(`Chave `),d:new aln(``),e:new aln(``),imgs:[]}),
    new Prg({prg:`Um técnico de informática reconhece que operações do modelo relacional permitem que um 
    utilizador especifique solicitações como expressões da álgebra relacional, nas quais a(o).`,a:new aln(`Operação PROJECÇÃO é usada para escolher um subconjunto das tuplas de uma relação
    que satisfaça uma condição de selecção. `),b:new aln(`Operação PROJECÇÃO pode seleccionar certas colunas da tabela e descartar outras. `,0),c:new aln(`Operação SELECÇÃO é usada para incluir todas as tuplas de duas relações em uma única
    relação, sendo que as tuplas duplicadas são eliminadas. `),d:new aln(``),e:new aln(``),imgs:[]})
     ];

     let teste5 = [
        new Prg({prg:`1. OSGBD actua como uma interface entre:`,a:new aln(`Dados e o SGBD`),b:new aln(`Aplicação e SQL`),c:new aln(`Aplicação de base de dados e a base de dados,0`),d:new aln(`O utilizador e o software.`),e:new aln(` `),imgs:[]}),
        new Prg({prg:`2. A seguir estão as funções de um SGBD, excepto:`,a:new aln(`criar e processar formulários.,0`),b:new aln(`criar base de dados`),c:new aln(`processar dados`),d:new aln(`administrar base de dados`),e:new aln(``),imgs:[]}),
        new Prg({prg:`3. Aplicações são programas que interagem directamente com a base de dados.
        `,a:new aln(`Verdadeiro
        ,0`),b:new aln(`Falso
        `),c:new aln(``),d:new aln(``),e:new aln(``),imgs:[]}),
        new Prg({prg:`4. Antes de 1970, todos os dados eram armazenados em arquivos separados, a maioria armazenados em rolos de fita magnética.
        `,a:new aln(`Verdadeiro,0`),b:new aln(`Falso`),c:new aln(``),d:new aln(``),e:new aln(``),imgs:[]}),
        new Prg({prg:`5. Um sistema de gestão de base de dados (SGBD) é um
        `,a:new aln(`Sistema de hardware usado para criar, manter, e providenciar acesso controlado à base de dados.`),b:new aln(`Sistema de hardware usado para criar, manter, e providenciar acesso não controlado à base de dados.`),c:new aln(`Sistema de software usado para criar, manter, e providenciar acesso controlado à base de dados.,0`),d:new aln(`Sistema de software usado para criar, manter, e providenciar acesso não controlado à base`),e:new aln(``),imgs:[]}),
        new Prg({prg:`6. Administrador de dados é responsável por
        `,a:new aln(`Desenho físico da base de dados`),b:new aln(`Gestão de problemas técnicos no ambiente de base de dados`),c:new aln(`Gestão geral de recursos de dados numa organização,0`),d:new aln(`Escrita de programas de aplicação`),e:new aln(``),imgs:[]}),
        new Prg({prg:`7. Algumas vantagens da abordagem de base de dados incluem tudo, menos:
        `,a:new aln(`Redundância mínima de dados `),b:new aln(`Melhoramento da consistência de dados `),c:new aln(`Melhoramento de partilha de dados`),d:new aln(`Dependência programa-dados ,0`),e:new aln(``),imgs:[]}),
        new Prg({prg:`O ciclo de vida de desenvolvimento de sistemas não pode ser usado com a implementação
        da base de dados.`,a:new aln(`Verdadeiro`),b:new aln(`Falso ,0`),c:new aln(``),d:new aln(``),e:new aln(``),imgs:[]}),
        new Prg({prg:`9.De quem é a função de determinar os requisitos e desenho para uma base de dados?`,a:new aln(`Analista de base de dados. ,0`),b:new aln(`Administrador de base de dados. `),c:new aln(`Ambos A e B.`),d:new aln(`Nem A nem B. `),e:new aln(``),imgs:[]}),
        new Prg({prg:`10. Vistas do utilizador são incluídas como parte de que esquema?
        `,a:new aln(`Interno `),b:new aln(`Conceptual `),c:new aln(`Externo,0`),d:new aln(`Nenhuma das opções`),e:new aln(``),imgs:[]}),
        new Prg({prg:`11. Qual das seguintes actividades de base de dados requerem um conhecimento específico de
        um SGBD? `,a:new aln(`Modelação dos dados da empresa `),b:new aln(`Modelo conceptual de dados `),c:new aln(`Desenho lógico da base de dados`),d:new aln(` Desenho físico e logico  da base de dados.,0`),e:new aln(``),imgs:[]}),
        new Prg({prg:`12. A primeira etapa no desenvolvimento da base de dados e:
        `,a:new aln(`Modelação dos dados da empresa ,0`),b:new aln(`Desenho lógico da base de dados `),c:new aln(`Desenho físico da base de dados e definição`),d:new aln(`Implementação da base de dados `),e:new aln(``),imgs:[]}),
        new Prg({prg:`13. Qual das seguintes alternativas é um conjunto de um ou mais atributos 
        tomado colectivamente para identificar exclusivamente um registo?`,a:new aln(`Chave Candidata `),b:new aln(`SubChave`),c:new aln(`SuperChave,0`),d:new aln(`Chave Estrangeira `),e:new aln(``),imgs:[]}),
        new Prg({prg:`14. Considere os atributos ID, CIDADE E NOME. Qual deles pode ser considerado u
        superchave? `,a:new aln(`NOME `),b:new aln(`ID ,0`),c:new aln(`CIDADE`),d:new aln(`CIDADE, ID `),e:new aln(``),imgs:[]}),
        new Prg({prg:`15. Uma restrição de integridade _______exige que os valores que apareceem em 
        atributos especificados de qualquer tupla na relação de referência também aparecem em  atributos especificados de, 
        pelo menos, uma tupla na relação referenciada. `,a:new aln(` Referencial. ,0`),b:new aln(`Referenciada.`),c:new aln(`Específica.`),d:new aln(`Primária. `),e:new aln(``),imgs:[]}),
        new Prg({prg:`16. Qual dos seguintes é uma linguagem procedural?
        `,a:new aln(`Cálculo Relacional de Domínio. `),b:new aln(`Cálculo Relacional de Tupla. `),c:new aln(`Álgebra Relacional,0`),d:new aln(`Linguagem de Consulta. `),e:new aln(``),imgs:[]}),
        new Prg({prg:`17. A operação mais comumente usada em álgebra relacional para projectar um conjunto de tupla de uma relação é:
        `,a:new aln(`junção.`),b:new aln(`projecção.`),c:new aln(`selecção.,0`),d:new aln(`união.`),e:new aln(``),imgs:[]}),
        new Prg({prg:`18. Qual das alternativas a seguir é uma operação fundamental em álgebra relacional?`,a:new aln(`Intersecção`),b:new aln(`Junção natural`),c:new aln(`Assignação`),d:new aln(`Nenhuma das mencionadas,0`),e:new aln(``),imgs:[]}),
        new Prg({prg:`19. Na operação selecção o/a______aparece  no subscrito e o/a____ 
        aparece entre parêntesis depois do sigma.`,a:new aln(` Predicado, relação.,0`),b:new aln(`Relação, Predicado.`),c:new aln(`Operação, Predicado.`),d:new aln(`Relação, Operação.`),e:new aln(``),imgs:[]}),
        new Prg({prg:`20. Junção natural é igual a:
        `,a:new aln(`Produto Cartesiano.,0`),b:new aln(`Combinação de União e Produto Cartesiano.`),c:new aln(`Combinação de selecção e Produto Cartesiano.`),d:new aln(`Combinação de projeção e Produto Cartesiano.`),e:new aln(``),imgs:[]}),
        new Prg({prg:`21. Entidade é um(a):
        `,a:new aln(`Objecto da relação.`),b:new aln(`Modelo de trabalho.`),c:new aln(`Coisa do mundo real.,0`),d:new aln(`Modelo da relação. `),e:new aln(``),imgs:[]}),
        new Prg({prg:`22. Um relacionamento mantido entre duas entidades é chamado de binário
        `,a:new aln(`Verdadeiro,0`),b:new aln(`Falso `),c:new aln(``),d:new aln(``),e:new aln(``),imgs:[]}),
        new Prg({prg:`23. O atributo nome pode ser estruturado como um atributo que consiste de primeiro nome, 
        inicial do meio e sobrenome. Este tipo de atributo é chamado de:`,a:new aln(`Atributo Simples`),b:new aln(`Atributo Composto,0`),c:new aln(`Atributo Multivalor`),d:new aln(`Atributo Derivado`),e:new aln(``),imgs:[]}),
        new Prg({prg:`24. Se estiver a coleccionar e armazenar informação sobre a sua colecção de músicas, um álbum
        poderia ser considerado um(a) ________`,a:new aln(`Relação`),b:new aln(`Entidade,0`),c:new aln(`Instância`),d:new aln(`Atributo`),e:new aln(``),imgs:[]}),
        new Prg({prg:` A respeito de entidades, relacionamentos e tipos de chave, assinale a opção correcta.`,a:new aln(`Uma entidade fraca não possui seus próprios atributos chave.`),b:new aln(`Toda relação deve possuir somente uma chave primária de atributo único.`),c:new aln(`Um identificador ou chave é usado para determinar exclusivamente 
        uma instância de um relacionamento entre entidades.`),d:new aln(`Uma entidade forte existe na base de dados e possui atributos que a identificam sem que ela
         precise estar associada a outra entidade identificadora. ,0`),e:new aln(``),imgs:[]}),
        new Prg({prg:` A respeito de entidades, relacionamentos e tipos de chave, assinale a opção correcta.`,a:new aln(`Uma entidade fraca não possui seus próprios atributos chave.`),b:new aln(`Toda relação deve possuir somente uma chave primária de atributo único.`),c:new aln(`Um identificador ou chave é usado para determinar exclusivamente 
        uma instância de um relacionamento entre entidades.`),d:new aln(`Uma entidade forte existe na base de dados e possui atributos que a identificam sem que ela
         precise estar associada a outra entidade identificadora. ,0`),e:new aln(``),imgs:[]})
         ]
 
         let teste6 = [
            new Prg({prg:`26. Uma entidade A está associada a, no máximo, uma entidade B. Uma entidade B, contudo,
             pode estar associada a qualquer número (zero ou muitos) de entidades A.'`,a:new aln(`Um - para - muitos.`),b:new aln(`Um - para - um.`),c:new aln(`Muitos - para - muitos.`),d:new aln(`Muitos para - um.,0`),e:new aln(` `),imgs:[]}),
            new Prg({prg:`27. As restrições de integridade de dados são usadas para:'`,a:new aln(`Controlar quem tem permissão para acessar os dados`),b:new aln(`Certificar que registos duplicados não são inseridos na tabela,0`),c:new aln(`Melhorar a qualidade dos dados inseridos numa específica propriedade `),d:new aln(`Impedir que os utilizadores alterem os valores armazenados na tabela`),e:new aln(``),imgs:[]}),
            new Prg({prg:`28.Qual das seguintes opcões pode ser resolvida através da imposição de uma restrição de integridade referencial? 
            '`,a:new aln(`Todos os números de telefone devem incluir o código da área`),b:new aln(`certos campos são obrigatórios (tais como o endereço de email ou número de telefone)
            antes que o registo seja aceite `),c:new aln(`Informação sobre o cliente deve ser conhecida antes de algum item ser vendido ao
            mesmo,0`),d:new aln(`De seguida, inserindo a quantidade do pedido, o utilizador deve introduzir um número e
            não algum texto (i.e., 12 em vez de ‘doze') `),e:new aln(``),imgs:[]}),
            new Prg({prg:`29. Considere num Telefone, que pode ter um ou mais valores. Tratar num_Telefone como ______
            permite uma pessoa ter vários números de telefone (incluindo zero) associado a ela 
            '`,a:new aln(`Entidade,0`),b:new aln(`Atributo`),c:new aln(`Relação`),d:new aln(`Valora`),e:new aln(``),imgs:[]}),
            new Prg({prg:`30. Dados os modelos básicos ER e relacional, qual das seguintes alternativas está
            INCORRECTA? '`,a:new aln(`Um atributo de uma entidade pode ter mais do que um valor `),b:new aln(`Um atributo de uma entidade pode ser composto`),c:new aln(`Numa linha de uma tabela relacional, um atributo pode ter mais do que um valor,0`),d:new aln(`Numa linha de uma tabela relacional, um atributo pode ter exactamente um valor ou um NULL `),e:new aln(``),imgs:[]}),
            new Prg({prg:`31. Qual das alternativas a seguir, indica o número máximo de entidades que podem estar
            envolvidas num relacionamento?'`,a:new aln(`Cardinalidade mínima `),b:new aln(`Cardinalidade máxima,0`),c:new aln(`DER`),d:new aln(`Quantidade de entidades no relacionamento`),e:new aln(``),imgs:[]}),
            new Prg({prg:`32. A entidade Pessoa é classificada como estudante e empregado. O processo é chamado de ___
            '`,a:new aln(`Generalização `),b:new aln(`Especialização,0`),c:new aln(`Categorização `),d:new aln(``),e:new aln(``),imgs:[]}),
            new Prg({prg:`33. Considere por exemplo a equipe de trabalho do funcionário e suponha que determinados
            funcionários participam em mais do que uma equipe de trabalho. Um determinado funcionário pode,
            portanto, aparecer em mais do que uma entidade equipe que é de nivel inferior do funcionário. 
            Assim, a generalização é ________'`,a:new aln(`Não Disjunta (overlapping) ,0`),b:new aln(`Disjunta`),c:new aln(` Única`),d:new aln(`Relacional `),e:new aln(``),imgs:[]}),
            new Prg({prg:`34. A restrição de participação de uma entidade num relacionamento pode ser total ou parcial.
            Ela depende da:'`,a:new aln(`cardinalidade mínima.,0`),b:new aln(`cardinalidade máxima. `),c:new aln(``),d:new aln(``),e:new aln(``),imgs:[]}),
            new Prg({prg:`35. Analise o diagrama Entidade Relacionamento abaixo
            Com base neste diagrama, pode-se afirmar que:'`,a:new aln(`o telefone é um atributo simples. `),b:new aln(`um apartamento pertence, necessariamente, a um e só um condomínio. ,0`),c:new aln(`o atributo endereço é derivado. D. vários condominios possuem, no mínimo, um apartamento.`),d:new aln(`apartamento é uma entidade forte.`),e:new aln(``),imgs:[require(`../testespics/teste21.35.jpg`)]}),
            new Prg({prg:`36. Considere a seguinte tabela de uma base de dados.
            FUNCIONARIO (COD_FUNC, NOME, COD_DEP, SAL) 
            Uma expressão da álgebra relacional representando a tabela formada pelos códigos,
            (COD_FUNC) e nomes (NOME) dos funcionários que ganham salário (SAL) entre 3000 e 6000 MT 
            e trabalham no departamento de código 3 é :'`,a:new aln(`(veja imagem)II cod_func, nome (o cod_dep=3 AND sal>=3000 AND sal<=6000 (Funcionario)) ,0`),b:new aln(`(veja imagem)II (0 sal>=3000 AND sal<=6000 (Funcionario)) `),c:new aln(`(veja imagem)O cod_dep (II sal>=3000 AND sal<=6000 (Funcionario)) `),d:new aln(`(veja imagem)II (o cod_dep=3 AND sal>=3000 AND sal<= 6000 (cod_func, nome))`),e:new aln(`(veja imagem)O cod_func, nome (II cod dep= 3 AND sal>=3000 AND sal<6000 (Funcionario)) `),imgs:[require(`../testespics/teste21.36.jpg`)]}),
            new Prg({prg:`37. A Figura 1 a seguir exibe duas relaçoes que fazem parte de uma base de dados relacional.
            sobre essas relacoes foi aplicada uma sequência de operações da Algebra
            Relacional, que resultou na relação exibida na Figura 2:
            
            Qual sequência de operações é compatível com a relação resultante? '`,a:new aln(`(da 2 imagem )`),b:new aln(`(da 2 imagem ),0`),c:new aln(`(da 2 imagem )`),d:new aln(`(da 2 imagem )`),e:new aln(``),imgs:[require(`../testespics/teste21.37.jpg`),require(`../testespics/teste21.37b.jpg`)]}),
            new Prg({prg:`38. Considere a expressão de Algebra Relacional
             Q salario>10000 AND dept_id=101 (Empregado) 
             Quais os campos são mostrados na saída? '`,a:new aln(`Salario, dept_id `),b:new aln(`Empregado `),c:new aln(`Salario`),d:new aln(`Todos os campos da relação empregado ,0`),e:new aln(``),imgs:[]}),
            new Prg({prg:`39. Se tuplas correspondentes não forem encontradas, o tipo de operação OUI
            mantém todas as tuplas da primeira e segunda relação é classificado como '`,a:new aln(`LEFT OUTER JOIN `),b:new aln(`FULL OUTER JOIN ,0`),c:new aln(`HALF OUTER JOIN`),d:new aln(`RIGTH OUTER JOIN `),e:new aln(``),imgs:[]}),
            new Prg({prg:`40. Na consulta dada, qual palavra-chave deve ser inserida?
            INSERT INTO employee ___ (1002, Joey, 2000);'`,a:new aln(`TABLE `),b:new aln(`VALUES ,0`),c:new aln(`RELATION`),d:new aln(` FIELD `),e:new aln(``),imgs:[]}),
            new Prg({prg:`41. Relativamente ao predicado LIKE qual das seguintes alternativas e verdadeira:
            
            i) % corresponde a zero ou mais caracteres 
            ii) corresponde exactamente a um caracter'`,a:new aln(`i, apenas `),b:new aln(`ii, apenas `),c:new aln(`ie ii,0`),d:new aln(`Nenhuma das opções `),e:new aln(``),imgs:[]}),
            new Prg({prg:`42. Considere o comando:
                   SELECT dept_nome, dept_id, AVG (salario) 
                   FROM instrutor
                   GROUP BY dept_nome; 
            Esta instrução está incorrecta porque :'`,a:new aln(` AVG (salario) não deve ser seleccionado `),b:new aln(`Dept_id não deve ser usado na cláusula GROUP BY ,0`),c:new aln(`Cláusula GROUP BY mal colocada`),d:new aln(`Cláusula GROUP BY não é válida nesta consulta `),e:new aln(``),imgs:[]}),
            new Prg({prg:`43. Subconsultas não podem:'`,a:new aln(`Usar GROUP BY ou funções de grupo`),b:new aln(`Recuperar dados de uma tabela diferente daquela da consulta externa ,0`),c:new aln(`Juntar tabelas`),d:new aln(`Aparecer em SELECT, UPDATE, DELETE, INSERT`),e:new aln(``),imgs:[]}),
            new Prg({prg:`44. Para incluir restrição de integridade numa relação existente, usa-se:'`,a:new aln(`CREATE TABLE `),b:new aln(`MODIFY TABLE`),c:new aln(`ALTER TABLE ,0`),d:new aln(`DROP TABLE`),e:new aln(``),imgs:[]}),
            new Prg({prg:`45. Qual dos seguintes comandos actualiza todos os instrutores com salário acima de
            100.000 para receberem um aumento de 3%, enquanto todos os outros recebem um aumento de 5%. 
            '`,a:new aln(`A. UPDATE instrutor
            SET salario = salario * 1.03 
              WHERE salario > 100000; 
              UPDATE instrutor 
               SET salario = salario * 1.05
               WHERE salario <= 100000; 
            ,0`),b:new aln(`B. 
            UPDATE instructor
            SET salario = salario * 1.05 
            WHERE salario < (SELECT avg (salario)
            FROM instrutor); `),c:new aln(`C. UPDATE instrutor
            SET salario = CASE 
            WHEN salario <= 100000 THEN salario * 1.03 
            ELSE salario * 1.05
            END`),d:new aln(`D. Nenhum dos mencionados `),e:new aln(``),imgs:[]}),
            new Prg({prg:`46. Tendo a tabela Instrutor (ID, Nome, Dept_nome, Salario), criou uma VIEW com o
             seguinte comando: 
             CREATE VIEW Vw_instrutor AS
               SELECT ID, nome, dept_nome
                FROM instrutor; 
                
            Encontre o erro neste comando '`,a:new aln(`Instrutor `),b:new aln(` SELECT `),c:new aln(`VIEW ...AS`),d:new aln(`Nenhum dos mencionados,0`),e:new aln(``),imgs:[]}),
            new Prg({prg:`47. Que tipo de junção (join) é necessário quando se deseja incluir linhas que não têm
            valores correspondentes? '`,a:new aln(`EQUI-JOIN `),b:new aln(`NATURAL JOIN `),c:new aln(`OUTER JOIN,0`),d:new aln(`Nenhum dos mencionados `),e:new aln(``),imgs:[]}),
            new Prg({prg:`48. A condição ___ permite um predicado geral sobre as relações que estão sendo unidas.'`,a:new aln(`ON ,0`),b:new aln(`USING `),c:new aln(`SET`),d:new aln(`WHERE `),e:new aln(``),imgs:[]}),
            new Prg({prg:`49. As funções agregadas podem ser usadas na lista de selerccao (SELECT)
            ou na cláusula_____de uma instrução  SELECT ou Subconsulta.Nao podem ser usadas numa 
            cláusula____
            '`,a:new aln(`WHERE, HAVING`),b:new aln(`HAVING, WHERE ,0`),c:new aln(`GROUP BY, HAVING`),d:new aln(`GROUP BY, WHERE`),e:new aln(``),imgs:[]}),
            new Prg({prg:`50.Seja dado o trecho de código abaixo. Indique quais das alternativas descreve a consulta
             produzida pelo código abaixo:
            
            SELECT apelido, 
            titulo, comissao, * 
            FROM empregado 
            WHERE comissao IS NOT NULL 
            ORDER BY 2;
            (ou veja na imagem abaixo)'`,a:new aln(`Listar o apelido, titulo e percentagem de comissão, para todos os empregados que
            uma comissão ordenados por titulo. `),b:new aln(`Listar todos os dados dos empregados que não tem comissão ordenados por 2 `),c:new aln(`Listas todos os dados de tabela Empregado ordenados por 2.`),d:new aln(`Todas as afirmações acima.`),e:new aln(`Nenhuma das alternativas. ,0`),imgs:[require(`../testespics/teste21.50.jpg`)]})
             ]

     let todos= [teste1,teste2,teste3,teste4,teste5,teste6];

     export{todos};