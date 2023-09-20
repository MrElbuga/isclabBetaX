
import { Prg, aln, newTesteData } from "./dados";

let bd22 = [
  new Prg({
    cadNome: `Bd1`, pId: `22/0`, testRef: `22`, tema: `Normalizacao`,
    prg: `1.Na Normalização _____________ dados duplicados:
  `, a: new aln(`elimina.`, 0), b: new aln(`reduz.`), c: new aln(`aumenta.`), d: new aln(`maximiza.`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/1`, testRef: `22`, tema: `Normalizacao`,
    prg: `2.Na _____________  forma normal um atributo composto é convertido em atributos simples.`, a: new aln(`Primeira`, 0), b: new aln(`Segunda`), c: new aln(`Terceira`), d: new aln(`Quarta.`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/2`, testRef: `22`, tema: `Normalizacao`,
    prg: `3.A primeira tarefa realizada na __________  é remover atributos repetidos  para tabelas separadas:`, a: new aln(`1FN.`, 0), b: new aln(`2FN.`), c: new aln(`3FN.`), d: new aln(`4FN.`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/3`, testRef: `22`, tema: `Normalizacao`,
    prg: `4. Uma relação está na 5FN quando dependências multivalor são isoladas na sua própria relação.`, a: new aln(`Falso`, 0), b: new aln(`Verade`), c: new aln(``), d: new aln(``), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/4`, testRef: `22`, tema: `Normalizacao`,
    prg: `5. Dada uma dependência funcional R—→S,R é chamado de determinante.`, a: new aln(`Verdadeiro`, 0), b: new aln(`Falso`), c: new aln(``), d: new aln(``), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/5`, testRef: `22`, tema: `Normalizacao`,
    prg: `6. Qual a forma normal que é baseada em dependència multivalor?
  `, a: new aln(`1FN`), b: new aln(`2FN`), c: new aln(`3FN`), d: new aln(`4FN`, 0), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/6`, testRef: `22`, tema: `Normalizacao`,
    prg: `7. Uma dependência funcional é um relacionamento entre ________
  `, a: new aln(`Tabelas.`), b: new aln(`Linhas.`), c: new aln(`Relações.`), d: new aln(`Atributos.`, 0), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/7`, testRef: `22`, tema: `Normalizacao`,
    prg: `8. A forma normal que satisfaz dependências multivalor e que está na BCFN é:`, a: new aln(`4FN`, 0), b: new aln(`3FN`), c: new aln(`2FN`), d: new aln(`Todas mencionadas`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/8`, testRef: `22`, tema: `Normalizacao`,
    prg: `9. Dada a dependência funcional R—→S,T. então é também verdade que R—→S`, a: new aln(`Verdadeiro`, 0), b: new aln(`Falso`), c: new aln(``), d: new aln(``), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/9`, testRef: `22`, tema: `Relacionamento `,
    prg: `10. Em qual das opções a seguir, uma tabela separada é criada, 
  consistindo desse atributo e da chave primária da entidade a que se refere?
  `, a: new aln(`Relacionamento muitos-para-muitos`), b: new aln(`Um atributo multivalor de uma entidade`, 0), c: new aln(`Um relacionamento de um-para-muitos`), d: new aln(`Nenhuma das situações`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/10`, testRef: `22`, tema: `Relacionamento `,
    prg: `11. Para algumas relações, alterar os dados pode ter consequências indesejáveis  chamadas:`, a: new aln(`Restrições de integridade referencial.`), b: new aln(`Anomalias de modificação.`, 0), c: new aln(`Formas normais.`), d: new aln(`Dependências transitivas.`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/11`, testRef: `22`, tema: `Relacionamento `,
    prg: `12.Qual das opções seguintes é verdadeira para a seguinte situação
    de Cada entidade relacionada com outra tem a sua própria tabela, 
   e há uma tabela adicional para o relacionamento.
  `, a: new aln(`Relacionamento muitos-para-muitos`, 0), b: new aln(`Um atributo multivalor de uma entidade`), c: new aln(`Um relacionamento de um-para-muitos`), d: new aln(`Nenhuma das situações`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/12`, testRef: `22`, tema: `Normalizacao`,
    prg: `13. Se os atributos A e B determinam o atributo C, então, é verdade que.`, a: new aln(`A—→C`), b: new aln(`B—→C`), c: new aln(`(A, B) é um determinante composto.`, 0), d: new aln(`C é um determinante.`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/13`, testRef: `22`, tema: `Normalizacao`,
    prg: `14. Muitas vezes, anomalias de modificação são criticas o suficiente para que as tabelas sejam normalizadas até.`, a: new aln(`1FN`), b: new aln(`2FN`), c: new aln(`3FN`), d: new aln(`BCFN`, 0), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/14`, testRef: `22`, tema: `Normalizacao`,
    prg: `16. Os desenhadores usam qual das seguintes opções para ajustar o desempenho ,dos sistemas para dar suporte a operações criticas?
  `, a: new aln(`Desnormalização.`, 0), b: new aln(`Optimização redundante.
            ,,`), c: new aln(`Optimização.
            ,,`), d: new aln(`Realização.
            ,,`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/15`, testRef: `22`, tema: `Normalizacao`,
    prg: `17. Uma tabela possui os campos F1, F2, F3, F4 e F5, com as seguintes dependências
  funcionais:
            ,,Df1: F1 —→ F3
            ,,Df2: F2 —→ F4
            ,,Df3: F1,F2 —→ F5
            ,,Em termos de normalização esta tabela está na`, a: new aln(`1FN.`, 0), b: new aln(`2FN.`), c: new aln(`3FN.`), d: new aln(`Nenhuma das mencionadas.`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/16`, testRef: `22`, tema: `Normalizacao`,
    prg: `18. Qual das seguintes frases é falsa?
  `, a: new aln(`Qualquer relação com dois atributos está na BCFN.`), b: new aln(`Uma relação em que a chave tem apenas um atributo está na 2FN.`, 0), c: new aln(`Um atributo pode estar transitivamente dependente da chave numa relação 3FN.`), d: new aln(`Um atributo pode estar transitivamente dependente da chave numa relação BCFN.`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/17`, testRef: `22`, tema: `Normalizacao`,
    prg: `19. Considere o seguinte esquema relacional para uma Livraria:
            ,,Livro (Titulo.Autor,  Catalogo_No, Editor, Ano, Preco)
            ,,Colecção (Titulo, Autor, Catalogo_No)
            ,,
            ,,Assuma que (Titulo, Autor) é chave para as duas 
             tabelas. 
            ,,
            ,,Qual destas alternativas é verdadeira?`, a: new aln(`Ambas Livro e Colecção estão na BCFN.`), b: new aln(`Ambas Livro e Colecção estão, apenas, na 3FN.`), c: new aln(`Livro está na 2FN e Colecção está na 3FN.`, 0), d: new aln(`Ambas Livro e Colecção estão, apenas, na 2FN.`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/18`, testRef: `22`, tema: `Normalizacao`,
    prg: `20. Dentro do contexto de modelação de uma base de dados relacional,em formas normais, é correcto afirmar que a técnica de 
  ,desnormalização consiste em.`, a: new aln(`criar tabelas intermediárias para quebra de cardinalidade N:N`), b: new aln(`criar indices B-tree para que as formas normais tenham melhor desempenho`), c: new aln(`rever as falhas geradas por eventuais erros no processo de normalização`), d: new aln(`sacrificar algumas regras normais a favor da execução mais rápida 
            ,,de determinadas consultas.`, 0), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/19`, testRef: `22`, tema: `Relacionamento `,
    prg: `21. A relação Empe é definida como se segue
  Empr (empcode, nome, rua, cidade, pais, código_postal)
  Para qualquer código postal há, apenas, uma cidade e um pais. 
  Também, para uma dada rua, cidade e pais, ha, apenas, um código_postal.Em termos de normalização, Empr é uma relação na`, a: new aln(`1FN, apenas`, 0), b: new aln(`2FN, e dai  também  na lFN`), c: new aln(`3FN, e dai  também  na 2FN e 1FN`), d: new aln(`BCFN,e dai também na 3FN, 2FN e 1FN`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/20`, testRef: `22`, tema: `Relacionamento `,
    prg: `22. Considere a relação R (A, B, C, D, E) e as seguintes dependências funcionais
            ,,Dfl: A—→B
            ,,Df2: B—→C
            ,,Df3: B.C—→A
            ,,Df4: A—→D
            ,,Df5: E—→A
            ,,Df6: D—→E
            ,,Qual das seguintes opções não é chave?`, a: new aln(`A.`), b: new aln(`E.`), c: new aln(`(B, C).`, 0), d: new aln(`D.`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/21`, testRef: `22`, tema: `Normalizacao`,
    prg: `23. Uma relação está na forma normal Boyce-Codd, se todo o determinante é chave composta.`, a: new aln(`Verdadeiro`), b: new aln(`Falso`, 0), c: new aln(``), d: new aln(``), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/22`, testRef: `22`, tema: `Normalizacao`,
    prg: `24.As técnicas de projecto de base de dados visam a 
  ,obtenção de très objectivos principais, que são:`, a: new aln(`normalização, preservação das dependências funcionais e decomposição sem perda.`, 0), b: new aln(`normalização, independência de dados e decomposição sem perda`), c: new aln(`normalização, independência de dados e controle de concorrência.`), d: new aln(`independência de dados, controle de concorrência e normalização. `), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/23`, testRef: `22`, tema: `Normalizacao`,
    prg: `25. Considere a tabela,MatriculaProjeto (CodMat, CodProj, Nome, CodCargo, NomeCargo, DataFim, Horas)
  ,com as seguintes dependências funcionais:
            ,,Dfl: CodMat—→Nome.
            ,,Df2: CodMat—→ CodCargo.
            ,,Df3: CodCargo—→ NomeCargo.
            ,,Df4: CodProj—→ DataFim.
            ,,Df5: CodMat+CodProj —→ Horas.
            ,,A normalização desta tabela para a 2FN resultarà, 
  no minimo, em:`, a: new aln(`1 tabela`), b: new aln(`2 tabela`), c: new aln(`3 tabela`, 0), d: new aln(`4 tabela`), e: new aln(`5 tabela`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/24`, testRef: `22`, tema: `Normalizacao`,
    prg: `26. Qual o número de tabelas normalizadas que seria necessário para fazer o mapeamento 
            ,,do MER apresentado na figura seguinte para o modelo relacional?,veja na imagem abaixo!
   `, a: new aln(`Três tabelas, no mínimo. `), b: new aln(`Quatro tabelas, no minimo.`), c: new aln(` Cinco tabelas, no mínimo. `, 0), d: new aln(`Seis tabelas, no minimo. `), e: new aln(``), imgs: [require('../testespics/teste2bd/teste21.26.jpeg')], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/25`, testRef: `22`, tema: `Pratica/comando`,
    prg: `27. Tomando como base o modelo relacional de dados, a modelação de dados na abordagem lógica, deve contemplar todas as formas normais: já o modelo fisico de dados pode dispensar algumas formas normais com o objectivo de incrementar o desempenho nas operações de consulta a dados.`, a: new aln(`Verdadeiro`, 0), b: new aln(`Falso`), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/26`, testRef: `22`, tema: `Normalizacao`,
    prg: `28. A desnormalização introduz redundancia visando reduzir o tempo das,consultas,inserções, actualizações e eliminações. 
  ,São formas de desnormalização a remoção de colunas cujos valores podem ser derivados 
            ,,dos valores de outras colunas visando reduzir a ocorrência de cálculos repetitivos;
            ,, a união de tabelas normalizadas numa tabela visando reduzir as junções
            ,,`, a: new aln(`Verdadeiro`), b: new aln(`Falso`, 0), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/27`, testRef: `22`, tema: `Pratica/comando`,
    prg: `29. Considere a tabela seguinte, onde código-animal é chave.
  [veja na Imagem abaixo, dps continue a leitura]
  Para que a tabela atenda às très formas normais usuais, 
  é necessário dividi-la em duas tabelas. 
  A primeira com os campos (#código-animal, nome-animal, idade, raça) e a segunda com os campos (#código-proprietário, 
  nome-proprietário,fazenda, região-fazenda).`, a: new aln(`Verdadeiro`), b: new aln(`Falso`, 0), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [require('../testespics/teste2bd/teste21.29.jpeg')], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/28`, testRef: `22`, tema: `Pratica/comando`,
    prg: `30. Bases de dados relacionais têm a capacidade de representar caracteristicas de objectos,como herança e encapsulamento`, a: new aln(`Verdadeiro`), b: new aln(`Falso`, 0), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/29`, testRef: `22`, tema: `Pratica/comando`,
    prg: `31. Marque V para as caracteristicas que pertencem às bases de dados objectos-relacionais,e F para as caracteristicas que não pertencem às bases de dados objectos-relacionais e em seguida, assinale a alternativa que apresenta a sequência correcta.
  
  () A extensibilidade dos tipos básicos
  () Implementação de objectos complexos. 
  () Suportar a herança.
  () Definir regras que permitem definir restrições gerais que actuam na base de dados quando um determinado evento acontece`, a: new aln(`F/F/V/F`), b: new aln(`V/V/V/V`, 0), c: new aln(`F/F/F/V`), d: new aln(`V/F/F/F`), e: new aln(`F/V/F/F`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/30`, testRef: `22`, tema: `Relacionamento `,
    prg: `32. Considere o diagrama entidade-relacionamento a seguir, 
  que expressa um modelo conceptual de dados.
  [veja na imagem abaixo]
  Suponha que, durante o mapeamento do modelo conceptual acima para modelo relacional,
            ,, o projectista de base de dados responsável pela tarefa decidiu mapear cada entidade 
            ,, para uma relação distinta. 
            ,, Ele também decidiu criar um minimo necessário de relações nesse mapeamento.
            ,,  Sendo assim, as quantidades de chaves primárias e de chaves estrangeiras 
            ,,  criadas nesse mapeamento são, respectivamente.`, a: new aln(`3 e 4`), b: new aln(`5 e 5`, 0), c: new aln(`4 e 4`), d: new aln(`3 e 5`), e: new aln(``), imgs: [require('../testespics/teste2bd/teste21.32.jpeg')], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/31`, testRef: `22`, tema: `Pratica/comando`,
    prg: `33. Qual das opções a seguir é usada para inserir a entrada e fornecer o resultado numa variável  procedure?
  `, a: new aln(`PUT & GET`), b: new aln(`RETURN e DBMS`), c: new aln(`INSERT & SELECT`), d: new aln(`IN & OUT`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/32`, testRef: `22`, tema: `Pratica/comando`,
    prg: `34. Seja dada uma Base de dados que contém um trigger (AFTER INSERT trigger) 
  sobre uma tabela XPTO. Das opções abaixo indique quantas vezes o trigger 
            ,,será executado se forem inseridos 50 registos, 
            ,,utilizando um único comando insert.`, a: new aln(`50 vezes, pois o trigger foi configurado para ser executado após inserção de dados.`), b: new aln(`Não será executado o trigger, pois só é válido quando se faz apenas uma única inserção.`), c: new aln(`1 única vez, pois os registos são inseridos utilizando um único comando insert`, 0), d: new aln(`Nenhuma das alternativas.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/33`, testRef: `22`, tema: `Pratica/comando`,
    prg: `35. Sobre a linguagem PL/SQL do Oracle, é correcto afirmar:
  `, a: new aln(`Um bloco de programa PL/SQL deve conter três secções declarativa 
            ,,(para declaração de variáveis, por exemplo}, executável (comandos)
            ,, e uma secção de tratamento de excepções.`), b: new aln(`É uma linguagem orientada a objectos destinada ao desenvolvimento 
            ,,de aplicações que acessam bases de dados.`), c: new aln(`É uma linguagem declarativa, ou seja, 
            ,,apresenta apenas instruções para consulta e actualização de dados.`), d: new aln(`Um bloco de programa PL/SQL pode conter uma secção declarativa 
            ,,(para declaração de variáveis, por exemplo) e uma secção de tratamento de excepções.
            ,,`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/34`, testRef: `22`, tema: `Pratica/comando`,
    prg: `36. Numa consulta, o tipo de variável que é usado para fazer loop de tuplas,, é chamado `, a: new aln(`CURSOR`), b: new aln(`Variável iterativa`), c: new aln(`Variável loop`), d: new aln(`Ambos A e B`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/35`, testRef: `22`, tema: `Pratica/comando`,
    prg: `37. Um procedimento é um programa que executa alguma acção nos dados e é armazenado na base de dados.`, a: new aln(`Verdadeiro`, 0), b: new aln(`Falso`), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/36`, testRef: `22`, tema: `Pratica/comando`,
    prg: `38. Se o cursor for movido para as próximas linhas no resultado das consultas o comando será:`, a: new aln(`OPEN CURSOR`), b: new aln(`FETCH`, 0), c: new aln(`CLOSE CURSOR-`), d: new aln(`UPDATE`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/37`, testRef: `22`, tema: `Pratica/comando`,
    prg: `39. Em programação, o tipo de cláusula que é usado para especificar valores que são para serem acedidos da base de dados é
  `, a: new aln(`INTO`, 0), b: new aln(`ONTO`), c: new aln(`FOR`), d: new aln(`WHILE`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `22/38`, testRef: `22`, tema: `Pratica/comando`,
    prg: `40. Três tipos de triggers são: BEFORE, AFTER & EXCEPTION
  `, a: new aln(`Verdadeiro`), b: new aln(`Falso`, 0), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  })
];

let bd19 = [
  new Prg({
    cadNome: `Bd1`, pId: `19/0`, testRef: `19`, tema: `Relacionamento`,
    prg: `1. Considere Modelo Entidade-Relação — MER, abaixo: 
   
  [imagem abaixo]
  
  Para realizar a derivação do MER acima para o esquema relacional, é correcto afirmar que`, a: new aln(`o relacionamento, em termos de máximo, entre País Origem, Setor e Tempo é tipo l : 1 :N.
          ,`), b: new aln(`uma associação do tipo N:N origina uma nova tabela que herda os atributos da associação 
          ,e cujo identificador pode ser composto 
          ,a partir dos identificadores das entidades participantes na associação. 
          ,`, 0), c: new aln(`são exemplos de tabelas derivadas: País Origem = {Nome, Código, População, PIB} 
          ,e Investe = {Designação, Setor}.
          ,`), d: new aln(`em uma associação do tipo 1:N o atributo identificador da entidade do lado N vai ser atributo 
          ,não identificador da entidade do lado l. 
          ,Exemplo: Investidor = {Nomelnvestidor, NomePaísOrigem, Investe}.
          ,`), e: new aln(` São exemplos de tabelas derivadas: Tempo = {Ano, Investe} e Setor = {NomePaís,
          , DesignaçãoSector, Ano, Montante}. 
          ,`), imgs: [require('../testespics/teste2bd/teste19.1.jpg')], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/1`, testRef: `19`, tema: `Esquema/Modelo`,
    prg: `2. Para criar as estruturas de tabelas usando um Sistema de Gestão de Base de Dados (SGBD),com base num Diagrama Entidade-Relação e de um Modelo Relacional Ampliado (MRA),deverá criar uma`, a: new aln(`tabela para cada Relacionamento apontado no Diagrama Entidade-Relação.`), b: new aln(`tabela com todos os atributos representados no Diagrama Entidade-Relação. `), c: new aln(`tabela para cada tupla representada no Modelo Relacional Ampliado. `), d: new aln(`tabela para cada Entidade do Diagrama Entidade-Relação.`, 0), e: new aln(` São exemplos de tabelas derivadas: Tempo = {Ano, Investe} e Setor = {NomePaís,
          , DesignaçãoSector, Ano, Montante}. 
          ,`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/2`, testRef: `19`, tema: `Esquema/Modelo`,
    prg: `3. O modelo lógico é desenhado usando um diagrama ER. Neste diagrama,num relacionamento:`, a: new aln(` l:n, uma ocorrência da entidade A pode se relacionar com várias ocorrências da entidade B
          , ou vice-versa.
          , `), b: new aln(`unário (de grau l}, uma entidade se relaciona com apenas uma outra entidade externa.
          , `), c: new aln(`ternário (ou de grau 3}, uma entidade está relacionada com outras três entidades em três relacionamentos diferentes.
          , `), d: new aln(`n:m há, na prática, uma divisão em duas relações 1:n e uma nova entidade é criada para representar o relacionamento. 
          ,`, 0), e: new aln(` São exemplos de tabelas derivadas: Tempo = {Ano, Investe} e Setor = {NomePaís,
          , DesignaçãoSector, Ano, Montante}. 
          ,`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/3`, testRef: `19`, tema: `Esquema/Modelo`,
    prg: `4.Com relação à elaboração e implantação de projecto de base de dados relacional utilizando,um mapeamento entidade-relacionamento (ER),assinale a(s) opção(ões) correcta(s).
  `, a: new aln(`Para cada entidade fraca Y no esquema ER, deve ser criada uma relação que inclua todos os atributos simples de Y,
          ,e o atributo-chave da entidade forte (pai) com que se relaciona, como parte da chave primária e chave estrangeira.
          ,`), b: new aln(`Todos os relacionamentos binários 1:1 devem ser ignorados, pois, nesse tipo de mapeamento, somente são considerados relacionamentos binários I:N.
          ,`), c: new aln(`para os relacionamentos binários N:M, deve ser escolhida apenas uma das entidades, por  exemplo, N, e nela deve ser inserida uma chave estrangeira advinda de M, que comporá uma chave primária simples. 
          ,`), d: new aln(`Para cada atributo multivalorado em uma entidade X, deve ser criada uma entidade  associativa Y em que a chave primária em Y será a chave estrangeira de X.
          , `), e: new aln(`Para cada entidade forte X no esquema ER, deve ser criada uma relação que inclua 
          ,todos os  atributos simples de X.
          ,`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/4`, testRef: `19`, tema: `Normalizacao`,
    prg: `5.Analise as afirmativas abaixo em relação ao processo de normalização de dados e às formas normais.
  
  I.Na Primeira Forma Normal (l FN), não deve existir relações aninhadas ou a relação não deve ter atributos multivalorados.
      
  II.Na Segunda Forma Normal (2FN), para relações em que a chave primária contém  apenas um atributo nenhum atributo não chave deverá ser funcionalmente dependente da chave primária.
     
  
  III. Na Terceira Forma Normal (3FN), não devem existir dependências transitivas de um atributo não chave sobre a chave primária.
          
  Assinale a alternativa correcta:`, a: new aln(`Apenas as afirmativas I e II estão correctas. `), b: new aln(`Apenas as afirmativas I e III estão correctas. `, 0), c: new aln(`Apenas as afirmativas II e III estão correctas. `), d: new aln(`Todas as afirmativas estão correctas. `), e: new aln(`Para cada entidade forte X no esquema ER, deve ser criada uma relação que inclua 
          ,todos os  atributos simples de X.
          ,`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/5`, testRef: `19`, tema: `Normalizacao`,
    prg: `6.São objectivos gerais do processo de normalização de dados os abaixo relacionados
  EXCEPTO:
  `, a: new aln(`eliminar certas espécies de redundâncias;`), b: new aln(`produzir um projecto com uma boa representação do mundo real;`), c: new aln(`evitar certas anomalias de actualização;`), d: new aln(`reduzir o número de junções que precisam ser realizadas em tempo de execução;`, 0), e: new aln(`simplificar a imposição de certas restrições de integridade.
          ,`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/6`, testRef: `19`, tema: `Normalizacao`,
    prg: `7. Na ________ forma normal um atributo composto é convertido em
  atributos individuais.`, a: new aln(`Primeira.`, 0), b: new aln(`Segunda.`), c: new aln(`Terceira.`), d: new aln(`Quarta. `), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/7`, testRef: `19`, tema: `Normalizacao`,
    prg: `8. Analise as seguintes afirmações relacionadas com a modelação de dados e o projecto de base de dados para ambiente relacional:
    
  I. Normalização é o processo formal passo a passo, que examina os atributos de uma entidade,com o objectivo de evitar anomalias observadas na inclusão, exclusão e alteração de tuplas exclusivas.
       
  II. Uma das condições para uma relação R estar na 3FN (terceira forma normal) é que todos os seus ,atributos,não chave, devem ser dependentes não transitivos da chave primária, isto é,cada atributo deve ser funcionalmente dependente apenas dos atributos componentes da chave primária e todos os seus atributos ,não-chave, devem ser independentes entre si.
   
  III. Uma relação R está na 2FN (segunda forma normal) se e somente se ela não atender à 1FN (primeira forma normal) e todos os atributos ,não-chave, forem totalmente dependentes da chave primária.
   
  IV. Uma relação R está na IFN (primeira forma normal) se e somente se todos os domínios básicos contiverem grupos repetitivos.
  Indique a opção que contenha todas as afirmações verdadeiras.
  `, a: new aln(`I e III`), b: new aln(`II e III`), c: new aln(`III e IV`), d: new aln(`I e II`, 0), e: new aln(`II e IV`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/8`, testRef: `19`, tema: `Normalizacao`,
    prg: `9. Quanto à base de dados, marque V para verdadeiro ou F para falso e em seguida, assinale a alternativa que apresenta a sequência correcta.
  
  ( ) Em algumas bases de dados, não há razões suficientes para se aplicar todas as regras de normalização.
  ( ) Nas bases de dados normalizadas, os atributos não chaves são dependentes da chave primária.
  ( ) A normalização de base de dados não elimina todas as redundâncias.
  ( ) A normalização de uma base de dados elimina todas as anomalias de actualização.
  `, a: new aln(`F/F/F/F`), b: new aln(`V/F/V/V`), c: new aln(`V/V/V/F`, 0), d: new aln(`F/V/F/V`), e: new aln(`V/F/F/F`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/9`, testRef: `19`, tema: `Normalizacao`,
    prg: `10. Em relação à normalização de tabelas em bases de dados relacionais, é correcto afirmar:`, a: new aln(`Normalizar tabelas da base de dados implica integrá-las em tabelas com finalidade de melhorar a eficiência na consulta da mesma.
          ,`), b: new aln(`Normalização é um processo que torna a base de dados mais confiável e eficiente, por isso, deve ser realizado no projecto físico da base de dados *
          ,`), c: new aln(`Problemas como anomalias de actualização são solucionados através de processo de normalização, que é aplicado no decorrer do projecto lógico da base de dados./
          ,`, 0), d: new aln(` Para a resolução de problemas de anomalias na base de dados, a normalização é aplicada após a criação das tabelas
          ,`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/10`, testRef: `19`, tema: `Normalizacao`,
    prg: `11. Ter um campo calculado numa tabela, ou seja,um campo que é resultante de cálculo com valores de outros campos viola directa e principalmente a:`, a: new aln(`primeira forma normal (1FN).`), b: new aln(`quarta forma normal (4FN). `), c: new aln(`terceira forma normal (3FN).`, 0), d: new aln(`quinta forma normal (5FN).`), e: new aln(`segunda forma normal (2FN).`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/11`, testRef: `19`, tema: `Normalizacao`,
    prg: `12. A definição da primeira forma normal em bases de dados relacionais estabelece que`, a: new aln(` cada conjunto de entidades não pode possuir mais do que cinco atributos.`), b: new aln(`não deve haver relacionamentos do tipo um para um entre conjuntos de entidades.`), c: new aln(`não deve haver relacionamentos do tipo muitos para muitos entre conjuntos de entidades. `), d: new aln(`os domínios de cada conjunto de entidades não podem ser do tipo booleano. `), e: new aln(`os domínios dos atributos de um conjunto de entidades devem ser atómicos. `, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/12`, testRef: `19`, tema: `Normalizacao`,
    prg: `13.Considere as entidades abaixo que são integrantes de um modelo de base de dados relacional.
   Candidato (idCandidato (PK), nomeCandidato)
   Candidado_Concurso (idCandidato (PK, FK), idConcurso (PK, FK))
   Concurso (idConcurso (PK), nome Concurso)
   Analisando-se as entidades, tem-se que:`, a: new aln(`se for incluído um atributo pontuacao, ele terá que ser incluído na entidade Candidato.
          ,`), b: new aln(`se for incluído o atributo DataInscricaoCandidato, ele terá que ser incluído na entidade
          ,Candidato_Concurso.`, 0), c: new aln(`para que a entidade Candidato esteja na 1a forma normal, a entidade Candidato_Concurso 
          ,precisa estar normalizada.`), d: new aln(` a entidade Candidato Concurso nunca estará na 2a forma normal porque ela possui chave primária composta.
          ,`), e: new aln(`estas entidades estabelecem dois relacionamentos n:m não-identificados (non-identifying). 
          ,`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/13`, testRef: `19`, tema: `Relacionamento`,
    prg: `14. Na derivação de dependências funcionais num projecto relacional,está correcto afirmar que se A, B —→ X,Y então é certo que:`, a: new aln(` A—→X`), b: new aln(` A—→ X, Y`), c: new aln(`X,Y—→A`), d: new aln(`A,B —→ X`, 0), e: new aln(`X, Y —→ A, B`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/14`, testRef: `19`, tema: `Normalizacao`,
    prg: `15. Uma Forma Normal (FN) é uma regra que deve ser obedecida por uma tabela para ser considerada,bem projectada. As descrições a seguir são de tabelas em Formas Normais.
  
  A. A tabela não contém dependências transitivas, ou seja, as colunas que não sejam chave primária,não dependem funcionalmente de outras colunas ou combinação de colunas que não sejam chave primária.
  
  
   B. A tabela não contém dependências parciais, ou seja,cada coluna não chave depende da chave primária completa e não apenas de parte dela.
  
  Os itens I e II descrevem, respectivamente, regras referentes à:
  `, a: new aln(`4FN e 2FN.`), b: new aln(`2FN e 3FN`), c: new aln(`3FN e 2FN`, 0), d: new aln(`1FN e 3FN`), e: new aln(`3FN e 4FN`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/15`, testRef: `19`, tema: `Normalizacao`,
    prg: `16. Na normalização, a eliminação dos atributos multivalorados ocorre durante a aplicação da:
  `, a: new aln(`IFN.`, 0), b: new aln(`2FN.`), c: new aln(`3FN.`), d: new aln(`BCFN.`), e: new aln(`4FN.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/16`, testRef: `19`, tema: `Relacionamento`,
    prg: `17. Considere a tabela funcionário a seguir, cuja chave primária é FuncNSS, numa base de dados relacional.
  
  [imagem abaixo]
  
  A manipulação de dados nesta tabela pode levar a problemas conhecidos como anomalias. Sobre elas,considere:
  
  I.Para incluir uma nova tupla na tabela será necessário incluir ou os valores dos atributos do departamento para o qual o funcionário trabalha ou valores NULL se o funcionário ainda não trabalha para nenhum departamento. 
   Este é um exemplo de anomalia de inserção.
  
   II. A única maneira de inserir um novo departamento que ainda não tenha funcionários é colocar valores NULL nos atributos para funcionário, já que este procedimento não viola a integridade de entidade.
   Este é um exemplo de anomalia de inserção.
     
  III. Se o funcionário António for excluído e este for o último funcionário trabalhando no departamento RH a informação referente a este departamento se perde da base de dados. 
  Este é um exemplo de anomalia de exclusão.
       
  IV. Se o valor de um dos atributos de determinado departamento for mudado (do departamento 5, por exemplo)
  será necessário actualizar as tuplas de todos os funcionários que trabalham neste departamento, caso contrário, a base de dados ficará incoerente. Este é um exemplo de anomalia de modificação.
  Está correcto o que se afirma APENAS em:
  `, a: new aln(`I, III e IV`, 0), b: new aln(`III e IV.`), c: new aln(`I, II e III.`), d: new aln(`II e IV.`), e: new aln(`I, II e IV.`), imgs: [require('../testespics/teste2bd/teste19.17.jpg')], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/17`, testRef: `19`, tema: `Normalizacao`,
    prg: `18. Num projecto de base de dados, o levantamento das dependências funcionais é importante,porque fornece subsídios indispensáveis para a fase de:
  `, a: new aln(`definição de vistas.`), b: new aln(`definição de restrições de integridade.`), c: new aln(`confecção do projecto físico.`), d: new aln(`estabelecimento dos perfis de segurança.`), e: new aln(`normalização.`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/18`, testRef: `19`, tema: `Relacionamento`,
    prg: `19. No contexto de base de dados relacionais, Dependência Funcional é caracterizada quando:
  `, a: new aln(`duas tabelas têm entre si relação N para N.`), b: new aln(`no relacionamento N para N há uma chave estrangeira.`), c: new aln(`para cada valor do atributo A existem n valores do atributo B.`), d: new aln(`a chave primária da tabela do lado 1 vai para a tabela do lado N.`), e: new aln(`para cada valor do atributo A existe exatamente um único valor do atributo B.`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/19`, testRef: `19`, tema: `Relacionamento`,
    prg: `20. Escolha a alternativa correcta sobre dependência funcional em base de dados:
          ,`, a: new aln(` Se um atributo da entidade A for dependente de um atributo da entidade B, 
          ,diz-se que há dependência funcional entre os dois.
          ,`), b: new aln(`Dependência funcional é a influência exercida por uma entidade sobre outra.
          ,`), c: new aln(`Dependência funcional ocorre quando um atributo de determinada entidade pode armazenar 
          ,valores diferentes para cada dupla.
          ,`), d: new aln(`Todos os atributos de uma entidade na 3a forma normal são dependentes funcionais apenas da
          , chave primária.`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/20`, testRef: `19`, tema: `Relacionamento`,
    prg: `21. Considere o seguinte esquema relacional, onde os atributos sublinhados constituem 
          ,a chave primária da tabela:
          ,R (A, B, C, D, F)
          ,[imagem nr1 ]
          ,
          ,Para satisfazer as dependências funcionais A,B—→C,D e C,D—→ F, a alternativa
          ,que decompõe a relação R em duas relações X e Y, tal que o novo esquema esteja na 
          ,Forma Normal de Boyce-Codd, é:
          ,
          ,[imagem nr2]`, a: new aln(`X (A, B, C, D)      Y(B,C,F)  [veja 2 PIC]`), b: new aln(`X (A, B, C, D)      Y(C,D,F)  [veja 2 PIC]`, 0), c: new aln(`X (A, D)            Y(A,C,D,F)[veja 2 PIC]`), d: new aln(`X (A, D)            Y(C,D,F)  [veja 2 PIC]`), e: new aln(`X (A, B, C, D, F)   Y(C,D,F)  [veja 2 PIC]`), imgs: [require('../testespics/teste2bd/teste19.21a.jpg')], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/21`, testRef: `19`, tema: `Normalizacao`,
    prg: `23. Uma base de dados relacional normalizada significa que as relações que a compõe atendem à`, a: new aln(`1FN, no máximo.`), b: new aln(`3FN, no mínimo.`, 0), c: new aln(`2FN, mas não necessariamente IFN.`), d: new aln(`2FN, no máximo.`), e: new aln(`3FN, mas não necessariamente a IFN e 2FN.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/22`, testRef: `19`, tema: `Relacionamento`,
    prg: `24. Uma relação que contém grupos repetitivos, mas NÃO contém dependências funcionais transitivas`, a: new aln(`está na 1FN;`), b: new aln(`não está normalizada;`, 0), c: new aln(`está na 2FN;`), d: new aln(`está na 3FN;`), e: new aln(`está na FNBC.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/23`, testRef: `19`, tema: `Relacionamento`,
    prg: `25. Considere a situação expressa pelas seguintes relações: um cliente faz n pedidos, mas um pedido específico é de somente um cliente. 
          ,Seguindo, num pedido específico são relacionados n produtos, 
          ,mas um mesmo produto pode constar em mais de um pedido.
          , Após normalizar essas relações é possível que se estabeleçam tabelas relacionais correspondentes, 
          , sendo elas: 
          ,`, a: new aln(`cliente, pedido e produto.`), b: new aln(`cliente, cliente-pedido e produto.`), c: new aln(` cliente, pedido, pedido-produto e produto.`, 0), d: new aln(`pedido-produto e cliente-produto.`), e: new aln(`pedido, pedido-produto e cliente-produto.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/24`, testRef: `19`, tema: `Normalizacao`,
    prg: `26. Suponha a seguinte tabela (com todos seus domínios atómicos) de uma base de dados relacional:
   
  T (A, B, C, D) (veja na imagem)
  
   [imagem abaixo]
     
    Considere, ainda, as seguintes dependências funcionais:
    DF1: A—→B, C, D
    DF2: C—→D
    A maior forma normal em que se encontra essa tabela é:`, a: new aln(`primeira forma normal.`), b: new aln(`segunda forma normal.`, 0), c: new aln(`terceira forma normal.`), d: new aln(`quarta forma normal.`), e: new aln(`forma normal de Boyce-Codd.`), imgs: [require('../testespics/teste2bd/teste19.26.jpg')], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/25`, testRef: `19`, tema: `Normalizacao`,
    prg: `27. Seja R um esquema de relação na primeira forma normal. Sobre a normalização em 
          ,bases de dados relacionais, considere as afirmativas a seguir:
          ,
          ,I. Se todo atributo não primário A de R possuir dependência funcional total 
          ,da chave de R (composta de dois atributos), então o esquema de relação R está na segunda forma normal.
          ,
          ,II. Se todo atributo não primário de R não for transitivamente dependente da chave de R,
          , então o esquema de relação R está na terceira forma normal.
          ,
          ,III. Se R está na terceira forma normal, então R está na forma normal de Boyce-Codd. 
          ,
          ,Assinale a alternativa CORRECTA.`, a: new aln(`I.`), b: new aln(`II.`), c: new aln(`III.`), d: new aln(`I e II.`, 0), e: new aln(`II e III.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/26`, testRef: `19`, tema: `Normalizacao`,
    prg: `28. Com relação à normalização, analise o texto a seguir:
          ,
          ,'Cada ocorrência da chave primária deve corresponder a uma e somente uma informação de cada atributo, 
          ,ou seja, a entidade não pode conter grupos repetitivos (multivalorados). 
          ,Para se obter entidades nesta forma, é necessário decompor cada entidade não normalizada 
          ,em tantas entidades quanto for o número de conjuntos de atributos repetitivos'
          ,
          ,O texto define:
          ,`, a: new aln(`O conceito de anomalia`), b: new aln(`A terceira forma normal`), c: new aln(`O conceito de generalização`), d: new aln(`A segunda forma normal`), e: new aln(`A primeira forma normal `, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/27`, testRef: `19`, tema: `Normalizacao`,
    prg: `29. Considere A Tabela Abaixo
          ,
          ,[Imagem abaixo]
          ,
          ,Analise as seguintes afirmativas sobre a Tabela-NF e assinale a alternativa correcta.
          ,
          ,I.Ela não está na primeira forma normal.  
          ,
          ,II.Ela está na primeira forma normal, mas não está na segunda forma normal. 
          ,
          ,III. Ela está na segunda forma normal, mas não está na primeira forma normal. 
          ,
          ,IV.Ela está na segunda forma normal, mas não está na terceira forma normal.
          ,
          ,V.Ela está na terceira forma normal.`, a: new aln(`Somente a afirmativa I está correcta.`, 0), b: new aln(`Somente a afirmativa I está correcta.`), c: new aln(`Somente a afirmativa IV está correcta.`), d: new aln(`Somente as afirmativas III e IV estão correctas.`), e: new aln(`Somente as afirmativas III e V estão correctas.`), imgs: [require('../testespics/teste2bd/teste19.29.jpg')], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/28`, testRef: `19`, tema: `Normalizacao`,
    prg: `30.Considere uma tabela relacional R com atributos A, B, C, D,
          , e as seguintes dependências funcionais.
          ,
          ,Dfl: A—→B
          ,Df2: B—→C
          ,Df3: A—→D
          ,Df4: B—→A
          ,
          ,Estabelecendo-se que os atributos sublinhados identificam chaves, primárias ou candidatas,
          , o esquema correcto para que se obtenha um projecto normalizado até à forma normal Boyce- Codd, é:
          ,
          ,[imagem abaixo]`, a: new aln(`R (A,......)[veja acima]`, 0), b: new aln(`R (A, B.......)[veja acima]`), c: new aln(`R (A, B, C, D)[veja acima]`), d: new aln(`RI (A, C, D); R2 (A, B)[veja acima]`), e: new aln(`RI (A, B, D); R2 (B, C) [veja acima]`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/29`, testRef: `19`, tema: `Normalizacao`,
    prg: `31. Numa base de dados relacional, considere uma tabela T, não normalizada contendo os atributos NSS, Matrícula, Nome, Endereço, Telefone. Sobre esses atributos, foram apuradas as seguintes dependências funcionais:
          ,Dfl: Matricula —→ NSS
          ,Df2: NSS —→ Nome
          ,Df3: Matrícula —→ Endereço
          ,Df4: Telefone —→ Matricula
          ,
          ,[imagem]`, a: new aln(`TI (NSS, Nome)
          ,T2 (Matrícula, NSS)
          ,T3 (Telefone, Matrícula, Endereço)
          ,`), b: new aln(`T1 (NSS, Matrícula, Nome, Endereço) 
          ,T2 (Telefone, Matrícula)
          ,`), c: new aln(`T1 (NSS, Nome)
          ,T2 (Matrícula, NSS, Endereço)
          ,T3 (Telefone, Matrícula)
          ,`), d: new aln(`T1 (NSS, Nome)
          ,T2 (Matrícula, NSS, Endereço)
          ,T3 (Telefone, Matrícula)
          ,`, 0), e: new aln(`T1 (NSS, Nome)
          ,T2 (Matrícula, NSS)
          ,T3 (Nome, Endereço)
          ,T4 (Telefone, Matrícula)
          ,`), imgs: [require('../testespics/teste2bd/teste19.31.jpg')], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/30`, testRef: `19`, tema: `Normalizacao`,
    prg: `32. Em relação à normalização de relações, considere a seguinte relação e suas dependências funcionais (DF).
  
  [imagem]
  
  Indique entre as opções abaixo de esquemas de relação aquela que é resultado da aplicação da
  segunda forma normal.
  
  [imagem abaixo]`, a: new aln(`TABELA1 (A, B, C, D) e TABELA2 (B, E, F, G)`, 0), b: new aln(`TABELA1 (A, B,C,D},    TABELA2 (B, E, F) e TABELA3 (F, G)`), c: new aln(`TABELA1 (A, B,C,D},    TABELA2 (B, E, F) e TABELA3 (B, F, G) `), d: new aln(`TABELA1 (A, B, C, D, E, F) e TABELA2 (E, G)`), e: new aln(``), imgs: [require('../testespics/teste2bd/teste19.32.jpg')], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/31`, testRef: `19`, tema: `Normalizacao`,
    prg: `33. Uma das razões para se realizar a desnormalização de um projecto de base de dados é quando:
  `, a: new aln(`É necessário construir consultas DDL.`), b: new aln(`Para agilizar a evolução do projecto de base de dados e compatibilidade de charset.
          ,`), c: new aln(`Não existe escolha, pois a desnormalização é obrigatória para qualquer tipo de projecto de
          ,base de dados.`), d: new aln(`Ele encontra a necessidade de reduzir a quantidade de associações (JOIN) em consultas e,
          ,consequentemente, reduzir o uso de recursos do SGBD.
          ,`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/32`, testRef: `19`, tema: `Relacionamento`,
    prg: `34. Considere a entidade associativa Empreitada entre as entidades Funcionário e Projecto de n:m. 
          ,Cada gestor de empreitada é também um funcionário que pode gerir n empreitadas,
          , mas cada empreitada só pode ser gerida por um único gestor.
          ,
          ,No modelo lógico de BDR normalizada, esta situação exige que
          ,`, a: new aln(`o relacionamento Gere entre Empreitada e Funcionário gestor (nesse sentido) 
          ,seja n:1 e entre Empreitada e Projecto (nesse sentido) seja n:1.
          ,`, 0), b: new aln(` o relacionamento Gere entre Empreitada e Funcionário gestor seja 1:n (nesse sentido) 
          ,e entre Empreitada e Projecto seja 1:n (nesse sentido)
          ,`), c: new aln(`o identificador de Projecto seja chave estrangeira em Funcionário na função de gestor.
          ,`), d: new aln(`o identificador de Funcionário gestor seja chave estrangeira em Projecto.
          ,`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/33`, testRef: `19`, tema: `Relacionamento`,
    prg: `35. Toda chave estrangeira que não é uma chave primária ou não faz parte de uma chave primária 
          ,composta representa um relacionamento
          ,`, a: new aln(`1:1 ou 1:N`, 0), b: new aln(`1:N ou M:N`), c: new aln(`1:1, somente`), d: new aln(`1:N, somente`), e: new aln(`M:N, somente
          ,`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/34`, testRef: `19`, tema: `Relacionamento`,
    prg: `36. Na associação 1:N (um para muitos) é correcto:
  `, a: new aln(`criar uma nova tabela com as chaves das classes envolvidas na associação.
          ,`), b: new aln(`acrescentar a chave da classe do lado n, como chave alheia, na tabela no lado 1.
          ,`), c: new aln(`acrescentar ambas as chaves, em todas as tabelas envolvidas, como chaves alheias.
          ,`), d: new aln(`criar chaves primárias adicionais, em cada uma das tabelas, 
          ,para estabelecer a associação entre as classes.
          ,`), e: new aln(`acrescentar a chave da classe do lado 1, como chave alheia, na tabela no lado N.
          ,`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/35`, testRef: `19`, tema: `Esquema/Modelo`,
    prg: `37.Em relação às principais fases do projecto de base de dados, 
  ,analise as seguintes afirmativas: 
  
          ,I. Na etapa do projecto conceptual de base de dados, é criado o esquema conceptual, 
          ,usando um modelo de dados conceptual de alto nível como, por exemplo, o modelo Entidade- Relação.
          ,
          ,II. O resultado da fase de projecto lógico é um esquema de base de dados para implementação no SGBD como,
          , por exemplo, o modelo relacional.
          ,
          ,III. No projecto físico são especificados, por exemplo, as estruturas de armazenamento interno
          ,e os índices.
          ,
          ,Marque a alternativa correcta:
          ,`, a: new aln(`apenas as afirmativas I e II são verdadeiras;`), b: new aln(`apenas as afirmativas I e III são verdadeiras;`), c: new aln(`apenas as afirmativas II e III são verdadeiras;`), d: new aln(`Todas as afirmativas são verdadeiras.`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/36`, testRef: `19`, tema: `Relacionamento`,
    prg: `38. Com relação à Modelação de Dados Objecto-Relacional, relacione as duas colunas
  
  [imagem abaixo]
  `, a: new aln(`I-A, II-C.`), b: new aln(`I-A, II-B.`, 0), c: new aln(`I-B, II-A.`), d: new aln(`I-B, II-C.`), e: new aln(`I-C, II-B.`), imgs: [require('../testespics/teste2bd/teste19.38.jpg')], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `19/37`, testRef: `19`, tema: `Relacionamento`,
    prg: `39. No relacionamento 1:N (um para muitos), na Modelação Objecto-Relacional é correcto
  `, a: new aln(`criar uma nova tabela com as chaves das classes envolvidas no relacionamento.
  `), b: new aln(`acrescentar a chave da classe do lado n, como chave alheia, na tabela no lado 1.
  `), c: new aln(`acrescentar ambas as chaves, em todas as tabelas envolvidas, como chaves alheias.
  `), d: new aln(`criar chaves primárias adicionais, em cada uma das tabelas, para estabelecer o ,relacionamento entre as classes.
  `), e: new aln(`acrescentar a chave da classe do lado 1, como chave alheia, na tabela no lado n. `, 0), imgs: [], fim: ""
  })
];

let bd18 = [
  new Prg({
    cadNome: `Bd1`, pId: `18/0`, testRef: `18`, tema: `Normalizacao`,
    prg: `1. Em relação à normalização de dados, NÃO é um objectivo desse processo:`, a: new aln(`eliminar a redundância causada pelos campos repetidos.`), b: new aln(`minimizar a integridade dos dados e melhorar o desempenho.`), c: new aln(`evitar anormalidades na actualização dos dados.`), d: new aln(`representar de forma precisa o que está sendo modelado.`, 0), e: new aln(`simplificar a manutenção e a recuperação de informações.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `18/1`, testRef: `18`, tema: `Normalizacao`,
    prg: `2.Numa base de dados relacional, a normalização é o processo de reunirem-se os dados 
          , que serão armazenados e separá-los em tabelas, 
          , tendo como objectivo principal a preservação da integridade dos dados. Para isso,
          , faz-se referência às integridades de entidade, de domínio,
          , referencial e à definida pelo utilizador.
          ,O conceito básico da integridade de entidade especifica `, a: new aln(`quais dados são absolutamente necessários para que a base de dados funcione apropriadamente.`), b: new aln(`as restrições nas informações armazenadas na base de dados. 
          ,Uma entidade dentro de uma base de dados é a representação de uma entidade no mundo real que 
          ,foi escolhida para ser armazenada.`), c: new aln(`que deve ser possível identificar exclusivamente cada entidade armazenada na base de dados. `, 0), d: new aln(`a garantia de que as linhas relacionadas em um par de tabelas continuem relacionadas mesmo depois 
          ,de terem sido feitas alterações.`), e: new aln(`que quando uma base de dados está armazenando um registo, ele precisa armazenar algo em cada campo,
          , mesmo que isso não seja necessário.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `18/2`, testRef: `18`, tema: `Normalizacao`,
    prg: `3.Um analista de sistemas necessita projectar uma base de dados relacional. 
          ,Para verificar se as tabelas que constituem a base de dados estão na Segunda Forma Normal, 
          ,o analista deverá empregar o conceito de:`, a: new aln(`atomicidade.`), b: new aln(`inconsistência de dados.`), c: new aln(`dependência funcional.`, 0), d: new aln(`replicação de dados.`), e: new aln(`chave estrangeira.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `18/3`, testRef: `18`, tema: `Normalizacao`,
    prg: `4.Considere as assertivas a seguir:
          ,
          ,1- Uma relação está na (4) se 'e somente se' estiver na (2) e cada atributo não-chave for 
          ,dependente da chave primária inteira, isto é, cada atributo não-chave não pode ser
          ,dependente de apenas parte da chave.
          ,
          ,2- Uma tabela está na (2) se 'e somente se' todos os valores de colunas em uma tabela forem atómicos.
          ,
          ,3- Uma tabela está na (3) se 'e somente se' estiver na (1) e não existirem dependências multivaloradas.
          ,
          ,4- Uma relação R está na (1) se estiver na (4) e cada atributo não-chave de R não possuir
          ,dependência transitiva, para cada chave candidata de R.
          ,
          ,A sequência que apresenta a associação correcta entre os números e os termos é`, a: new aln(`1-1FN; 2-2FN; 3-3FN; 4-4FN.
          ,`), b: new aln(`1-4FN; 2-3FN; 3-2FN; 4-1FN.
          ,`), c: new aln(`1-2FN; 2-4FN; 3-FN;  4-3FN.
          ,`), d: new aln(`1-3FN; 2-1FN; 3-4FN; 4-2FN.
          ,`), e: new aln(`1-2FN; 2-1FN; 3-4FN; 4-3FN.
          ,`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `18/4`, testRef: `18`, tema: `Normalizacao`,
    prg: `5. São todas características de uma relação que está na 4a forma normal - 4FN: 
          ,
          ,1. Não possuir atributos multivalorados.
          ,2. Cada atributo não chave depender da chave primária inteira.
          ,3. Não existirem dependências multivaloradas.
          ,
          ,Assinale a alternativa que indica todas as afirmativas correctas. `, a: new aln(`É correcta apenas a afirmativa 1.`), b: new aln(`São correctas apenas as afirmativas 1 e 2.`), c: new aln(`São correctas apenas as afirmativas 1 e 3.`), d: new aln(`São correctas apenas as afirmativas 2 e 3.`), e: new aln(`São correctas as afirmativas 1, 2 e 3.`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `18/5`, testRef: `18`, tema: `Normalizacao`,
    prg: `6. Considere a seguinte definição de uma das formas normais, utilizadas no projecto de base de dados:
          ,
          ,Uma tabela está nessa forma normal se, e somente se, cada determinante é uma chave candidata.
          ,
          ,Essa definição corresponde à:`, a: new aln(`primeira forma normal.`), b: new aln(`segunda forma normal.`), c: new aln(`terceira forma normal.`), d: new aln(`quarta forma normal.`), e: new aln(`forma normal de Boyce-Codd.`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `18/6`, testRef: `18`, tema: `Normalizacao`,
    prg: `7.Para que as tabelas referentes ao modelo estejam na 2FN é necessário:`, a: new aln(`mudar a ordem da cardinalidade dos relacionamentos, já que são originários de um 
          ,relacionamento N para N entre MEDICO e PACIENTE.`), b: new aln(`retirar os atributos EspecialidadeMedico e DiagnosticoConsulta da tabela CONSULTA 
          ,e colocá-los na tabela MEDICO, pois, esses atributos são dependentes apenas do atributo CRMMedico.
          ,`), c: new aln(`criar um atributo chave primária chamado CodigoConsulta na tabela CONSULTA 
          ,e definir os atributos CodigoPaciente, CRMMedico, DataConsulta e HoraConsulta como 
          ,atributos não chave primária.`), d: new aln(`retirar o atributo EspecialidadeMedico da tabela CONSULTA e colocá-lo na tabela MEDICO, 
          ,pois, o atributo EspecialidadeMedico é dependente apenas do atributo CRMMedico.
          ,`, 0), e: new aln(`mudar os atributos DataConsulta e HoraConsulta para a tabela PACIENTE, 
          ,já que é o paciente que agenda a consulta. Logo, esses atributos são dependentes apenas 
          ,do atributo CodigoPaciente.`), imgs: [require('../testespics/teste2bd/teste18.7.jpg')], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `18/7`, testRef: `18`, tema: `Relacionamento`,
    prg: `8. Analise as seguintes tabelas de base de dados.
          ,
          ,[veja imagem]
          ,
          ,Quanto à cardinalidade das tabelas apresentadas, assinale a alternativa correcta.`, a: new aln(`1:1.`, 0), b: new aln(`1:M.`), c: new aln(`1:N.`), d: new aln(`N:N.`), e: new aln(`M:N.`), imgs: [require('../testespics/teste2bd/teste18.8.jpg')], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `18/8`, testRef: `18`, tema: `Normalizacao`,
    prg: `9. Na normalização, a eliminação dos atributos multivalorados ocorre durante a aplicação da
          ,`, a: new aln(`1FN.`, 0), b: new aln(`2FN.`), c: new aln(`3FN.`), d: new aln(`BCFN.`), e: new aln(`4FN.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `18/9`, testRef: `18`, tema: `Normalizacao`,
    prg: `10. Considere as relações: veja as pics abaixo
          ,
          ,[veja imagem]
          ,
          ,Depois da análise das relações, conclui-se que:`, a: new aln(`as relações respeitam todas as formas normais.`), b: new aln(`ambas as relações contemplam a 2FN.`), c: new aln(`EMPREGADO contempla a primeira forma normal (IFN},
          , mas PONTO não satisfaz a segunda forma normal (2FN).
          ,`), d: new aln(`EMPREGADO não contempla IFN e PONTO satisfaz 2FN.`), e: new aln(`EMPREGADO não contempla IFN e PONTO não respeita a 2FN.`, 0), imgs: [require('../testespics/teste2bd/teste18.10a.jpg')], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `18/10`, testRef: `18`, tema: `Normalizacao`,
    prg: `11. Considere que um modelo relacional normalizado até a
          ,
          ,I.3FN contém apenas relacionamentos N:M.
          ,
          ,II.3FN contém apenas relacionamentos 1:1 e 1:N.
          ,
          ,III.3FN não pode conter dependências funcionais entre atributos não-chave.
          ,
          ,IV.1FN ou 2FN não pode conter dependências funcionais entre atributos não-chave e nem relacionamentos N:M.
          ,
          ,Está correcto o que se afirma APENAS em:`, a: new aln(`II, III e IV.`), b: new aln(`II e III.`, 0), c: new aln(`I e III.`), d: new aln(`II.`), e: new aln(`I.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `18/11`, testRef: `18`, tema: `Normalizacao`,
    prg: `12.Uma empresa possui informações sobre as horas extras trabalhadas de seus funcionários numa tabela que,
          , além de outras colunas, contém as colunas de horário de entrada e horário de saída e
          ,o valor total a ser pago pelas horas trabalhadas. Baseado nas informações apresentadas, é correcto afirmar que esta tabela
          ,`, a: new aln(`encontra-se na segunda forma normal.`), b: new aln(`encontra-se na primeira forma normal, mas não na segunda forma normal.`), c: new aln(`encontra-se na segunda forma normal, mas não na terceira forma normal.`), d: new aln(`não se encontra na primeira forma normal.`, 0), e: new aln(`encontra-se na terceira forma normal.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `18/12`, testRef: `18`, tema: `Normalizacao`,
    prg: `13. Considere um formulário eletrónico de pedidos onde conste o código e o nome do cliente
          , que faz o pedido; o número e a data do pedido; e a lista de produtos pedidos contendo 
          , o código do produto, o nome do produto, a quantidade pedida do produto e o valor unitário do produto. 
          , Todos os dados serão persistidos num SGBD relacional, com excepção dos totais. 
          , Todos os códigos são identificadores únicos.
          ,
          ,Com a aplicação das formas normais (até a 3 FN) o resultado será a existência de, APENAS,
          ,`, a: new aln(`2 tabelas.`), b: new aln(`3 tabelas.`), c: new aln(`4 tabelas.`, 0), d: new aln(`5 tabelas.`), e: new aln(`6 tabelas.
          ,`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `18/13`, testRef: `18`, tema: `Normalizacao`,
    prg: `14. Considere quatro relações compostas da seguinte forma:
          ,
          ,Pedido (NumPedido Data Pedido, IDClierite, Nome Cliente) 
          ,ItemPedido (NumPedido, Numitem, Qtd Item Peido) 
          ,Item (Numltem, Preco_Item) 
          ,Cliente (IDCliente, Nome Cliente, Endereco Cliente)
          ,
          ,Obs: O atributo identificador está a sublinhado.
          ,Quanto às regras de normalização, é correcto afirmar que Pedido, ItemPedido e Item, 
          ,estão normalizadas, respectivamente, até a:`, a: new aln(`1FN, IFN e 2FN.`), b: new aln(`1FN, 2FN e 2FN.`), c: new aln(`2FN, 2FN e 2FN. D2FN, 3FN e 3FN.`), d: new aln(`3FN, 3FN e 3FN.`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `18/14`, testRef: `18`, tema: `Normalizacao`,
    prg: `15. Uma base de dados relacional normalizada significa que as relações que a compõe atendem à
          ,`, a: new aln(`1FN, no máximo. B.JFN, no mínimo.`), b: new aln(`3FN, no mínimo.`, 0), c: new aln(`2FN, mas não necessariamente IFN.`), d: new aln(`2FN, no máximo.`), e: new aln(`3FN, mas não necessariamente a IFN e 2FN`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `18/15`, testRef: `18`, tema: `Relacionamento`,
    prg: `16. Na transformação de um modelo de dados conceptual para uma BD relacional normalizada, um relacionamento binário muitos-para-muitos só pode ser definido em termos de uma tabela:`, a: new aln(`que contém chaves primárias correspondentes as chaves estrangeiras das duas entidades
          ,associadas mais os atributos (se houverem) simultaneamente determinados por ambas.`), b: new aln(`igual a uma das entidades associadas que inclui, como chaves estrangeiras suas, 
          ,as chaves primárias correspondentes à outra entidade, de forma multivalorados.`), c: new aln(`igual a uma das entidades associadas cujas chaves primárias suas são compostas das chaves
          ,primárias correspondentes à outra entidade. `), d: new aln(`que contém chaves estrangeiras correspondentes as chaves primárias das duas entidades
          ,associadas mais os atributos (se houverem) simultaneamente determinados por ambas. 
          ,`, 0), e: new aln(`igual a uma das entidades associadas cujas chaves primárias suas são compostas das chaves
          ,estrangeiras correspondentes à outra entidade.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `18/16`, testRef: `18`, tema: `Normalizacao`,
    prg: `18. Observe a tabela a seguir, pertencente a uma base de dados relacional. A chave da tabela é
          ,{nomeproduto , nomefornecedor}
          ,
          ,[veja a IMAGEM]
          ,
          ,O problema que esta tabela apresenta é:`, a: new aln(`não existem chaves candidatas.`), b: new aln(`Ela viola a primeira forma normal (1FN).`), c: new aln(`ela está na IFN, mas viola a segunda forma normal (2FN).`, 0), d: new aln(`ela está na 2FN, mas viola a terceira forma normal (3FN). `), e: new aln(`ela não é uma relação, uma vez que existem valores duplicados para a chave primária.`), imgs: [require('../testespics/teste2bd/teste18.18.jpg')], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `18/17`, testRef: `18`, tema: `Normalizacao`,
    prg: `19. Considere a seguinte relação e dependências funcionais
          ,
          ,Funcionario = (IDfune, nome, rua, cp, cidade, pais) 
          ,IDfunc—→ nome, rua, cp, cidade, pais
          ,cp—→cidade, pais
          ,
          ,A forma normal mais elevada na qual a relação acima se encontra é a`, a: new aln(`primeira forma normal. `, 0), b: new aln(`segunda forma normal.`), c: new aln(`terceira forma normal.`), d: new aln(`quarta forma normal.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `18/18`, testRef: `18`, tema: `Normalizacao`,
    prg: `20. Eliminar as dependências multivaloradas (DMV) não triviais de uma tabela, 
          ,projectando-as para tabelas menores separadas e, assim, 
          ,eliminar as anomalias de actualização associadas às
          ,
          ,DMVs é objectivo da`, a: new aln(`1FN`), b: new aln(`2FN`), c: new aln(`3FN`), d: new aln(`4FN`, 0), e: new aln(`5FN`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `18/19`, testRef: `18`, tema: `Relacionamento`,
    prg: `21.Seja a relação R (A, B, C, D, E) e suponha a ocorrência das seguintes dependências funcionais
          ,entre seus atributos:
          ,
          ,(A, B) —→ C (A, B)—→ D (AB)—→ E D —→ E
          ,
          ,Nessa situação, considere as seguintes afirmativas: 
          ,
          ,1. A chave da relação R é (A, B).
          ,
          ,II. A relação R não está na forma normal de Boyce-Codd (BCNF) porque o atributo D não
          ,
          ,é uma de suas superchaves.
          ,
          ,III. A dependência funcional DE viola a condição BCNF.
          ,
          ,IV. A relação R está na terceira forma normal.
          ,
          ,Assinale:`, a: new aln(`se apenas as afirmativas I, II e III estiverem correctas. `, 0), b: new aln(`se apenas as afirmativas I e II e IV estiverem correctas.`), c: new aln(`se apenas as afirmativas II e III estiverem correctas.`), d: new aln(`se apenas as afirmativas e III estiverem correctas.`), e: new aln(`se todas as afirmativas estiverem correctas.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `18/20`, testRef: `18`, tema: `Relacionamento`,
    prg: `22. Considere a classe associação entre Médico e Paciente (n:m) intitulada Consulta que,
          , por sua vez, se relaciona com Medicamento em n:m. Na conversão para base de dados relacional, 
          , este modelo de dados completo será derivado para`, a: new aln(`très tabelas.`), b: new aln(`quatro tabelas.`), c: new aln(`cinco tabelas.`, 0), d: new aln(`seis tabelas.`), e: new aln(`sete tabelas.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `18/21`, testRef: `18`, tema: `Relacionamento`,
    prg: `23. Considere a entidade associativa Empreitada entre as entidades Funcionário 
          ,e Projecto de nom. Cada gestor de empreitada é também um funcionário que pode gerir n empreitadas, 
          ,mas cada empreitada só pode ser gerida por um único gestor.
          ,
          ,No projecto lógico de BDR normalizada, esta situação exige que`, a: new aln(`o relacionamento Gere entre Empreitada e Funcionário seja nm e entre Empreitada e
          ,Projecto (nesse sentido) seja 1:n`), b: new aln(`o relacionamento Gere entre Empreitada e Funcionário seja 1:n (nesse sentido) 
          ,e entre Empreitada e Projecto seja n:m`), c: new aln(`o identificador de projecto seja chave estrangeira em Funcionário na função de gestor.
          ,`), d: new aln(`o identificador de funcionário gestor seja chave estrangeira em Empreitada. 
          ,`, 0), e: new aln(`o identificador de funcionário gestor seja chave estrangeira em Projecto.
          ,`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `18/22`, testRef: `18`, tema: `Relacionamento`,
    prg: `24.Toda chave estrangeira que não é uma chave primária ou não faz parte de uma chave primária 
          ,composta representa um relacionamento`, a: new aln(`1:1 ou 1:N`, 0), b: new aln(`1:N ou M:N`), c: new aln(`1:1, somente`), d: new aln(`1:N, somente`), e: new aln(`M:N, somente`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `18/23`, testRef: `18`, tema: `Relacionamento`,
    prg: `25. Na associação I:N (um para muitos) é correcto
          ,`, a: new aln(`criar uma nova tabela com as chaves das classes envolvidas na associação.`), b: new aln(`acrescentar a chave da classe do lado n, como chave alheia, na tabela no lado 1.`), c: new aln(`acrescentar ambas as chaves, em todas as tabelas envolvidas, como chaves alheias.`), d: new aln(`criar chaves primárias adicionais, em cada uma das tabelas, 
          ,para estabelecer a associação entre as classes.`), e: new aln(`acrescentar a chave da classe do lado 1, como chave alheia, na tabela no lado N.`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `18/24`, testRef: `18`, tema: `Esquema/Modelo`,
    prg: `26.Com relação à elaboração e implantação de projecto de base de dados relacional utilizando 
          ,um mapeamento entidade-relacionamento (ER), 
          ,assinale a(s) opção(ões) correcta(s).`, a: new aln(`Para cada entidade fraca Y no esquema ER, deve ser criada uma relação que inclua todos os atributos simples de Y,
          ,e o atributo-chave da entidade forte (pai) com que se relaciona, como parte da chave primária e chave estrangeira.
          ,`), b: new aln(`Todos os relacionamentos binários 1:1 devem ser ignorados, pois, nesse tipo de mapeamento, somente são considerados relacionamentos binários I:N.
          ,`), c: new aln(` ara os relacionamentos binários N:M, deve ser escolhida apenas uma das entidades, por  exemplo, N, e nela deve ser inserida uma chave estrangeira advinda de M, que comporá uma chave primária simples. 
          ,`), d: new aln(`Para cada atributo multivalorado em uma entidade X, deve ser criada uma entidade  associativa Y em que a chave primária em Y será a chave estrangeira de X.
          , `), e: new aln(`Para cada entidade forte X no esquema ER, deve ser criada uma relação que inclua 
          ,todos os  atributos simples de X.`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `18/25`, testRef: `18`, tema: `Esquema/Modelo`,
    prg: `27. A descrição concisa dos requisitos de dados dos utilizadores, que inclui descrições detalhadas
          ,de tipos entidades, relacionamentos e restrições, expressos usando os conceitos fornecidos 
          ,pelo modelo de dados de alto nivel, é conhecida como esquema.`, a: new aln(` Conceptual.`, 0), b: new aln(`Lógico.`), c: new aln(`Fisico.`), d: new aln(`Interno.`), e: new aln(` Externo.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `18/26`, testRef: `18`, tema: `Esquema/Modelo`,
    prg: `28. Num projecto de base de dados, o levantamento das dependências funcionais é importante
          ,porque fornece subsidios indispensáveis para a fase de:`, a: new aln(`definição de vistas.`), b: new aln(`definição de restrições de integridade. C. confecção do projecto fisico.
          ,`), c: new aln(`confecção do projecto fisico.`), d: new aln(`estabelecimento dos perfis de segurança.`), e: new aln(`normalização. `, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `18/27`, testRef: `18`, tema: `Esquema/Modelo`,
    prg: `29. Um modelo lógico de dados é:`, a: new aln(`uma representação sucinta da base de dados a ser implementada`), b: new aln(`uma representação lógica das informações da área de negócios `, 0), c: new aln(`um modelo que guarda acentuada relação de dependência com o modelo fisico
          ,`), d: new aln(`dependente da tecnologia implementada em função das constantes mudanças dos produtos tecnológicos
          ,`), e: new aln(`um modelo que admite a replicação de atributos`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `18/28`, testRef: `18`, tema: `Esquema/Modelo`,
    prg: `30.Em relação às principais fases do projecto de base de dados, 
          ,analise as seguintes afirmativas: 
          ,
          ,I. Na etapa do projecto conceptual de base de dados, é criado o esquema conceptual, 
          ,usando um modelo de dados conceptual de alto nível como, por exemplo, o modelo Entidade- Relação.
          ,
          ,II. O resultado da fase de projecto lógico é um esquema de base de dados para implementação no SGBD como,
          , por exemplo, o modelo relacional.
          ,
          ,III. No projecto físico são especificados, por exemplo, as estruturas de armazenamento interno
          ,e os índices.
          ,
          ,Marque a alternativa correcta:`, a: new aln(`apenas as afirmativas I e II são verdadeiras;`), b: new aln(`apenas as afirmativas I e III são verdadeiras;`), c: new aln(`apenas as afirmativas II e III são verdadeiras;`), d: new aln(`Todas as afirmativas são verdadeiras.`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `18/29`, testRef: `18`, tema: `Relacionamento`,
    prg: `31. Com relação à Modelação de Dados Objecto-Relacional, relacione as duas colunas
          ,
          ,[veja a imagem]`, a: new aln(`I-A, II-C.`), b: new aln(`I-A, II-B.`, 0), c: new aln(`I-B, II-A.`), d: new aln(`I-B, II-C.`), e: new aln(`I-C, II-B.`), imgs: [require('../testespics/teste2bd/teste18.31.jpg')], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `18/30`, testRef: `18`, tema: `Relacionamento`,
    prg: `32.No relacionamento 1:N (um para muitos), na Modelação Objecto-Relacional é correcto :
          ,`, a: new aln(`criar uma nova tabela com as chaves das classes envolvidas no relacionamento.`), b: new aln(`acrescentar a chave da classe do lado n, como chave alheia, na tabela no lado 1. `), c: new aln(`criar chaves primárias adicionais, em cada uma das tabelas,
          , para estabelecer o relacionamento entre as classes.
          ,`), d: new aln(`acrescentar ambas as chaves, em todas as tabelas envolvidas, como chaves alheias.
          ,`), e: new aln(`acrescentar a chave da classe do lado 1, como chave alheia, na tabela no lado n.
          ,`, 0), imgs: [], fim: ""
  })
];

let bd16 = [
  new Prg({
    cadNome: `Bd1`,
    pId: `/0`,
    testRef: ``,
    tema: `normalizacaoT`,
    prg: `1. Em relação à normalização de dados, NÃO é um objectivo desse processo:
          ,`,
    a: new aln(`eliminar a redundância causada pelos campos repetidos;
          ,`),
    b: new aln(`minimizar a integridade dos dados e melhorar o desempenho;`),
    c: new aln(`evitar anormalidades na actualização dos dados;`),
    d: new aln(`representar de forma precisa o que está sendo modelado; `, 0),
    e: new aln(` simplificar a manutenção e a recuperação de informações.`),
    imgs: [],
    fim: "",
  }),
  new Prg({
    cadNome: `Bd1`,
    pId: `/1`,
    testRef: ``,
    tema: `normalizacaoT`,
    prg: `2. São características de uma base de dados normalizada:
          ,`,
    a: new aln(`Variedade acentuada de índices por tabela`),
    b: new aln(`Poucas tabelas largas com mais colunas`),
    c: new aln(`Poucos índices clusterizados`),
    d: new aln(`Várias tabelas estreitas com menos colunas`, 0),
    e: new aln(`Muitas junções relacionais complexas`),
    imgs: [],
    fim: "",
  }),
  new Prg({
    cadNome: `Bd1`,
    pId: `/2`,
    testRef: ``,
    tema: `Gst`,
    prg: `3. Normalização é o processo de organização eficiente dos dados dentro de uma base de dados. 
          ,Os seus objectivos são eliminar dados redundantes e garantir que as dependências entre os dados façam sentido. 
          ,Uma forma normal é uma regra que deve ser aplicada na construção das tabelas da base de dados 
          ,para que estas fiquem bem projectadas.
          , Assinale a alternativa que indique a forma normal que não permite atributos multivalorados, 
          , atributos compostos e suas combinações.
          ,`,
    a: new aln(`1FN.`, 0),
    b: new aln(`2FN.`),
    c: new aln(`3FN.`),
    d: new aln(`4FN.`),
    e: new aln(`BCFN`),
    imgs: [],
    fim: "",
  }),
  new Prg({
    cadNome: `Bd1`,
    pId: `/3`,
    testRef: ``,
    tema: ``,
    prg: `4. Considere uma tabela
          ,
          ,I. com todas as suas colunas contendo somente valores atómicos (um único valor para cada linha).
          ,II. cujos atributos não-chave são totalmente dependentes de toda a chave primária.
          ,III. na qual alguns atributos não-chave são dependentes de outros atributos não-chave.
          , É correcto afirmar que a tabela está normalizada até a
          ,`,
    a: new aln(`1FN.`),
    b: new aln(`2FN.`, 0),
    c: new aln(`3FN.`),
    d: new aln(`4FN.`),
    e: new aln(`BCFN`),
    imgs: [],
    fim: "",
  }),
  new Prg({
    cadNome: `Bd1`,
    pId: `/4`,
    testRef: ``,
    tema: ``,
    prg: `5. Para uma tabela estar na FNBC (Forma Normal Boyce- Codd), ela
          ,`,
    a: new aln(`não precisa da normalização 1FN`),
    b: new aln(`precisa estar somente na 2FN `),
    c: new aln(`também está normalizada na 3FN`, 0),
    d: new aln(` tem de estar normalizada até a 4FN`),
    e: new aln(`tem de estar normalizada até a 5FN.`),
    imgs: [],
    fim: "",
  }),
  new Prg({
    cadNome: `Bd1`,
    pId: `/5`,
    testRef: ``,
    tema: ``,
    prg: `7. O diagrama E-R a seguir contém informações relevantes sobre o negócio de uma empresa do
          ,ramo fonográfico.
          ,
          ,[imagem abaixo]
          ,
          ,Marque a alternativa que apresenta uma pergunta que NÃO pode ser respondida pelo modelo:
          ,
          ,`,
    a: new aln(`Quais são as músicas que fazem parte de um determinado CD?`),
    b: new aln(`Quantas gravações existem de uma determinada música?`),
    c: new aln(`Quais são os CDs que contêm uma determinada música?`),
    d: new aln(
      `Quais são os artistas que criaram as músicas de um determinado CD?`
    ),
    e: new aln(`Quais são as músicas cujo criador é anónimo?`, 0),
    imgs: [require("../testespics/teste2bd/teste16.7.jpg")],
    fim: "",
  }),
  new Prg({
    cadNome: `Bd1`,
    pId: `/6`,
    testRef: ``,
    tema: ``,
    prg: `8. No modelo entidade-relação, a cardinalidade de mapeamento expressa`,
    a: new aln(`o número de entidades ao qual um relacionamento pode estar associado a um outro relacionamento.
          ,`),
    b: new aln(`o número de relacionamentos ao qual outro relacionamento pode estar
          , associado via uma entidade o critério de classificação .`),
    c: new aln(`v segundo o qual as relações associam entidades.
          ,`),
    d: new aln(
      `o número de entidades ao qual outra entidade pode estar associada via um relacionamento. 
          ,`,
      0
    ),
    e: new aln(` o posicionamento de uma entidade dentro do mapeamento do modelo.
          ,`),
    imgs: [],
    fim: "",
  }),
  new Prg({
    cadNome: `Bd1`,
    pId: `/7`,
    testRef: ``,
    tema: ``,
    prg: `9.Considere uma modelagem entidade-relacionamento com duas entidades: 
          ,Bairros e Ruas. 
          ,
          ,Os atributos de Bairros são ID-b, nome e área. 
          ,Os atributos de Ruas são ID-r, extensão e nome.
          ,
          ,Estas entidades estão conectadas por um relacionamento 
          ,Pertence com cardinalidade muitos- para-muitos, 
          ,indicando os bairros aos quais uma rua pertence ou seja,
          ,uma rua pode cruzar diversos bairros.
          ,
          ,Um mapeamento correcto para uma base de dados relacional gera as seguintes tabelas,
          ,com chaves primárias sublinhadas:
          ,
          ,[imagem]
          ,`,
    a: new aln(`Bairros(ID-b, nome, área); 
          ,Ruas (ID-r, extensão, nome); 
          ,Pertence(ID-b, ID-r).
          ,`),
    b: new aln(`Bairros (ID-b, nome, área); 
          ,Ruas(ID-r, extensão, nome, ID-b).
          ,Bairros(ID-b, nome, área); 
          ,.
          ,`),
    c: new aln(
      `Bairros(ID-b, nome, área); 
          ,Ruas(ID-r, extensão, nome); 
          ,Pertence(ID-b, ID-r).`,
      0
    ),
    d: new aln(`Bairros(ID-b, nome, área, ID-r); 
          ,Ruas(ID-r, extensão, nome, ID-b).
          ,`),
    e: new aln(`Bairros(ID-b, nome, área, ID-r); 
          ,Ruas(ID-r, extensão, nome, ID-b); 
          ,Pertence(ID-b, ID-r). 
          ,`),
    imgs: [require("../testespics/teste2bd/teste16.9.jpg")],
    fim: "",
  }),
  new Prg({
    cadNome: `Bd1`,
    pId: `/8`,
    testRef: ``,
    tema: ``,
    prg: `10.Na transformação de um modelo de dados conceitual para um BD relacional normalizado, 
          ,um relacionamento binário muitos-para-muitos só pode ser definido 
          ,em termos de uma tabela. 
          ,`,
    a: new aln(`que contém chaves primárias correspondentes às chaves estrangeiras das duas entidades associadas mais os atributos (se houverem) simultaneamente determinados por ambas.
          ,`),
    b: new aln(`igual a uma das entidades associadas que inclui, como chaves estrangeiras suas, as chaves primárias correspondentes à outra entidade, de forma multivalorada.
          ,`),
    c: new aln(`igual a uma das entidades associadas cujas chaves primárias suas são compostas das chaves primárias correspondentes à outra entidade.
          ,`),
    d: new aln(
      `que contém chaves estrangeiras correspondentes às chaves primárias das duas entidades associadas mais os atributos (se houverem) simultaneamente determinados por ambas.
          ,`,
      0
    ),
    e: new aln(`igual a uma das entidades associadas cujas chaves primárias suas são compostas das chaves estrangeiras correspondentes à outra entidade.
          ,`),
    imgs: [],
    fim: "",
  }),
  new Prg({
    cadNome: `Bd1`,
    pId: `/9`,
    testRef: ``,
    tema: ``,
    prg: `11.Um Modelo de Dados corresponde a uma descrição formal da estrutura de uma base de dados. 
          ,Com relação à Modelação de Dados, relacione os modelos, apresentados na coluna da esquerda. 
          ,à respectiva característica, entre as indicadas na coluna da direita.
          ,
          ,[imagem]
          ,`,
    a: new aln(`I-P, II-Q, III - R.`),
    b: new aln(`I-Q, II-R, III - S.`),
    c: new aln(`I-S, II-P, III - R.`, 0),
    d: new aln(`I-S, II-R, III - Q.`),
    e: new aln(`I-S, II-P, III - Q.`),
    imgs: [require("../testespics/teste2bd/teste16.11.jpg")],
    fim: "",
  }),
  new Prg({
    cadNome: `Bd1`,
    pId: `/10`,
    testRef: ``,
    tema: ``,
    prg: `12.Projecto de uma base de dados é normalmente dividido em fases.
          ,
          ,`,
    a: new aln(` Projecto Conceptual: é analisado um modelo de dados em função do SGBD definido e 
          ,usa modelo de dados para descrever a realidade.
          ,`),
    b: new aln(`Projecto Lógico: linguagem usada para especificar esquemas lógicos, 
          ,consiste em criar um modelo físico de dados a partir do 
          ,modelo conceptual independente do SGBD escolhido.
          ,`),
    c: new aln(
      `Projecto Físico: descreve estruturas de armazenamento e métodos de acesso.
          ,`,
      0
    ),
    d: new aln(`Projecto Físico: total independência do SGBD específico.
          ,`),
    e: new aln(`Projecto Conceptual: define como os dados são armazenados no SGBD específico
          ,`),
    imgs: [],
    fim: "",
  }),
  new Prg({
    cadNome: `Bd1`,
    pId: `/11`,
    testRef: ``,
    tema: ``,
    prg: `13.Um modelo lógico de dados é:
          ,`,
    a: new aln(
      ` uma representação sucinta da base de dados a ser implementada.`
    ),
    b: new aln(
      `uma representação lógica das informações da área de negócios.`,
      0
    ),
    c: new aln(
      `um modelo que guarda acentuada relação de dependência com o modelo físico.`
    ),
    d: new aln(
      `dependente da tecnologia implementada em função das constantes mudanças dos produtos tecnológicos.`
    ),
    e: new aln(`um modelo que admite a replicação de atributos.`),
    imgs: [],
    fim: "",
  }),
  new Prg({
    cadNome: `Bd1`,
    pId: `/12`,
    testRef: ``,
    tema: ``,
    prg: `15.No relacionamento 1:N (um para muitos), na Modelação Objecto-Relacional é correcto:
          ,`,
    a: new aln(`criar uma nova tabela com as chaves das classes envolvidas no relacionamento.
          ,`),
    b: new aln(`acrescentar a chave da classe do lado n, como chave alheia, na tabela no lado 1.
          ,`),
    c: new aln(` acrescentar ambas as chaves, em todas as tabelas envolvidas, como chaves alheias.
          ,`),
    d: new aln(`criar chaves primárias adicionais, em cada uma das tabelas, 
          ,para estabelecer o relacionamento entre as classes.
          ,`),
    e: new aln(
      `acrescentar a chave da classe do lado 1, como chave alheia, na tabela no lado n. 
          ,`,
      0
    ),
    imgs: [],
    fim: "",
  }),
  new Prg({
    cadNome: `Bd1`,
    pId: `/13`,
    testRef: ``,
    tema: ``,
    prg: `16.Com relação à Modelação de Dados Objecto-Relacional, relacione as duas colunas
          ,
          ,[imagem abaixo]
          ,`,
    a: new aln(`I-A, II-C.`),
    b: new aln(`I-A, II-B.`, 0),
    c: new aln(`I-B, II-A.`),
    d: new aln(`I-B, II-C.`),
    e: new aln(`I-C, II-B.`),
    imgs: [require("../testespics/teste2bd/teste16.16.jpg")],
    fim: "",
  }),
];

let bd15 = [
  new Prg({
    cadNome: `Bd1`,
    pId: `2015/0`,
    testRef: `2015`,
    tema: ``,
    prg: `1. Em relação à normalização de tabelas em bases de dados relacionais, é correcto afirmar: 
          ,`,
    a: new aln(` Normalizar tabelas da base de dados implica integrá-las em tabelas 
          ,com finalidade de melhorar a eficiência na consulta da mesma.`),
    b: new aln(` Normalização é um processo que torna a base de dados mais confiável 
          ,e eficiente, por isso, deve ser realizado no projecto físico da base de dados
          ,`),
    c: new aln(
      `Problemas como anomalias de actualização são solucionados através de processo de normalização, 
          ,que é aplicado no decorrer do projecto lógico da base de dados.
          ,`,
      0
    ),
    d: new aln(`Para a resolução de problemas de anomalias na base de dados, 
          ,a normalização é aplicada após a criação das tabelas.
          ,`),
    e: new aln(` `),
    imgs: [],
    fim: "",
  }),
  new Prg({
    cadNome: `Bd1`,
    pId: `2015/1`,
    testRef: `2015`,
    tema: ``,
    prg: `2. Um modelo lógico de dados é
          ,`,
    a: new aln(
      `Uma representação sucinta da base de dados a ser implementada.`,
      0
    ),
    b: new aln(`Uma representação lógica das informações da área de negócios.`),
    c: new aln(
      `Um modelo que guarda acentuada relação de dependência com o modelo físico.`
    ),
    d: new aln(`Dependente da tecnologia implementada em função das constantes
          , mudanças dos produtos tecnológicos.`),
    e: new aln(` Um modelo que admite a replicação de atributos.`),
    imgs: [],
    fim: "",
  }),
  new Prg({
    cadNome: `Bd1`,
    pId: `2015/2`,
    testRef: `2015`,
    tema: ``,
    prg: `3. O Projecto de uma base de dados é normalmente dividido em fases. 
          ,Assinale a afirmativa correcta:`,
    a: new aln(`Projecto Conceptual: é analisado um modelo de dados em função do SGBD definido 
          ,e usa modelo de dados para descrever a realidade.`),
    b: new aln(`Projecto Lógico: linguagem usada para especificar esquemas lógicos,
          , consiste em criar um modelo físico de dados a partir do modelo conceptual 
          , independente do SGBD escolhido.`),
    c: new aln(
      `Projecto Físico: descreve estruturas de armazenamento e métodos de acesso.
          ,`,
      0
    ),
    d: new aln(`Projecto Físico: total independência do SGBD específico.
          ,`),
    e: new aln(`Projecto Conceptual: define como os dados são armazenados no SGBD específico
          ,`),
    imgs: [],
    fim: "",
  }),
  new Prg({
    cadNome: `Bd1`,
    pId: `2015/3`,
    testRef: `2015`,
    tema: ``,
    prg: `4. Aquando de avaliação da estrutura das tabelas de um conjunto de tabelas com dados,
          , determinar chaves primárias é (parte da):`,
    a: new aln(`1 FN.`),
    b: new aln(`2 FN.`, 0),
    c: new aln(`3 FN.`),
    d: new aln(`4 FN.`),
    e: new aln(``),
    imgs: [],
    fim: "",
  }),
  new Prg({
    cadNome: `Bd1`,
    pId: `2015/4`,
    testRef: `2015`,
    tema: ``,
    prg: `5. Em relação à normalização de dados, NÃO é um objectivo desse processo:
          ,`,
    a: new aln(`Eliminar a redundância causada pelos campos repetidos;`),
    b: new aln(`Minimizar a integridade dos dados e melhorar o desempenho;`),
    c: new aln(`Evitar anormalidades na atualização dos dados;`),
    d: new aln(`Rrepresentar de forma precisa o que está sendo modelado;`, 0),
    e: new aln(`Simplificar a manutenção e a recuperação de informações.`),
    imgs: [],
    fim: "",
  }),
  new Prg({
    cadNome: `Bd1`,
    pId: `2015/5`,
    testRef: `2015`,
    tema: ``,
    prg: `6. Uma relação que contém grupos repetitivos, mas NÃO contém dependências funcionais
          ,transitivas
          ,`,
    a: new aln(`está na 1FN;`),
    b: new aln(`não está normalizada;`, 0),
    c: new aln(`está na 2FN;`),
    d: new aln(`está na 3FN;`),
    e: new aln(`está na FNBC.`),
    imgs: [],
    fim: "",
  }),
  new Prg({
    cadNome: `Bd1`,
    pId: `2015/6`,
    testRef: `2015`,
    tema: ``,
    prg: `7. Aquando da avaliação da estrutura da tabela de um conjunto de tabelas com dados, determinar
          ,dependências funcionais é (parte da):`,
    a: new aln(`1 FN`),
    b: new aln(`2 FN`, 0),
    c: new aln(`3 FN`),
    d: new aln(`BCNF`),
    e: new aln(``),
    imgs: [],
    fim: "",
  }),
  new Prg({
    cadNome: `Bd1`,
    pId: `2015/7`,
    testRef: `2015`,
    tema: ``,
    prg: `8. Seja a relação EMP-PROJ (IdEmp, NumProj, Horas, NomeEmp, NomeProj, LocalProj) onde
          ,{IdEmp, NumProj} é a chave primária de EMP-PROJ
          , e as seguintes dependências funcionais:
          , 
          ,IdEmp, NumProj —→ Horas
          ,IdEmp —→ NomeEmp
          ,NumProj  —→  NomeProj, LocalProj
          ,
          ,
          ,
          ,A relação EMP-PROJ, com estas dependências funcionais, viola que forma normal?`,
    a: new aln(`Primeira Forma Normal;`),
    b: new aln(`Segunda Forma Normal;`, 0),
    c: new aln(`Terceira Forma Normal;`),
    d: new aln(`Forma Normal de Boyce-Codd;`),
    e: new aln(`Quarta Forma Normal.`),
    imgs: [],
    fim: "",
  }),
  new Prg({
    cadNome: `Bd1`,
    pId: `2015/8`,
    testRef: `2015`,
    tema: ``,
    prg: `9. Se uma tabela foi normalizada de modo que todos determinantes são chaves candidatas, então
          ,essa tabela está na:`,
    a: new aln(`1 FN`),
    b: new aln(`2 FN`),
    c: new aln(`3 FN`),
    d: new aln(`BCNF`, 0),
    e: new aln(``),
    imgs: [],
    fim: "",
  }),
  new Prg({
    cadNome: `Bd1`,
    pId: `2015/9`,
    testRef: `2015`,
    tema: ``,
    prg: `10. Cada resposta abaixo mostra exemplo de dados de uma tabela. Que resposta é um exemplo do problema valores em falta?
          ,`,
    a: new aln(`Três colunas têm valores 534-2435, 534-7867, e 546-2356 na mesma linha.
          ,`),
    b: new aln(`Três linhas têm os valores Castanho Pequeno Cadeira, Pequeno Cadeira Castanho,
          ,e Pequeno Castanho Cadeira na mesma coluna.
          ,`),
    c: new aln(
      `Três linhas têm os valores Castanho, NULL, Azul na mesma coluna.
          ,`,
      0
    ),
    d: new aln(` Uma linha tem o valor Ele está interessado em um Porsche prata desde os anos 1978-1988, num coluna.
          ,`),
    e: new aln(``),
    imgs: [],
    fim: "",
  }),
];

let bd14 = [
  new Prg({
    cadNome: `Bd1`,
    pId: `2014/0`,
    testRef: `2014`,
    tema: ``,
    prg: `1.Considere: Os funcionários podem usar muitos idiomas em qualquer um dentre muitos projectos. 
          ,Cada projecto possui muitos funcionários com vários idiomas. 
          ,Funcionário chefia funcionário na razão 1:n. Dado um projecto, 
          ,é necessário que se conheça os funcionários e  quais idiomas eles usam nesse projecto. 
          ,Também é necessário que se saiba (independentemente do projecto) quem é o chefe de quem.
          ,A derivação para BDR (relacional) apresentará um modelo com`,
    a: new aln(`Uma tabela`),
    b: new aln(`Duas tabelas`),
    c: new aln(`Três tabelas`),
    d: new aln(`Quatro tabelas`, 0),
    e: new aln(` Cinco tabelas`),
    imgs: [],
    fim: "",
  }),
  new Prg({
    cadNome: `Bd1`,
    pId: `2014/1`,
    testRef: `2014`,
    tema: ``,
    prg: `2. Um modelo lógico de dados é
          ,`,
    a: new aln(
      `uma representação sucinta da base de dados a ser implementada`,
      0
    ),
    b: new aln(` uma representação lógica das informações da área de negócios`),
    c: new aln(`um modelo que guarda acentuada relação de dependência com o modelo físico
          ,`),
    d: new aln(`dependente da tecnologia implementada
          , em função das constantes mudanças dos produtos tecnológicos
          ,`),
    e: new aln(`um modelo que admite a replicação de atributos
          ,`),
    imgs: [],
    fim: "",
  }),
  new Prg({
    cadNome: `Bd1`,
    pId: `2014/2`,
    testRef: `2014`,
    tema: ``,
    prg: `2. Um modelo lógico de dados é
          ,`,
    a: new aln(
      `uma representação sucinta da base de dados a ser implementada`,
      0
    ),
    b: new aln(` uma representação lógica das informações da área de negócios`),
    c: new aln(`um modelo que guarda acentuada relação de dependência com o modelo físico
          ,`),
    d: new aln(`dependente da tecnologia implementada
          , em função das constantes mudanças dos produtos tecnológicos
          ,`),
    e: new aln(`um modelo que admite a replicação de atributos
          ,`),
    imgs: [],
    fim: "",
  }),
  new Prg({
    cadNome: `Bd1`,
    pId: `2014/3`,
    testRef: `2014`,
    tema: ``,
    prg: `3. O Projecto de uma base de dados é normalmente dividido em fases.
          , Assinale a afirmativa correcta:`,
    a: new aln(` Projecto Conceptual: é analisado um modelo de dados em função do SGBD definido
          , e usa modelo de dados para descrever a realidade.
          ,`),
    b: new aln(` Projecto Lógico: linguagem usada para especificar esquemas lógicos, 
          ,consiste em criar um modelo físico de dados a partir do modelo conceptual 
          ,independente do SGBD escolhido.
          ,`),
    c: new aln(
      `Projecto Físico: descreve estruturas de armazenamento e métodos de acesso.
          ,`,
      0
    ),
    d: new aln(`Projecto Físico: total independência do SGBD específico.
          ,`),
    e: new aln(`Projecto Conceptual: define como os dados são armazenados no SGBD específico.
          ,`),
    imgs: [],
    fim: "",
  }),
  new Prg({
    cadNome: `Bd1`,
    pId: `2014/4`,
    testRef: `2014`,
    tema: ``,
    prg: `4. Considere que um modelo relacional normalizado até a
          ,
          ,I.   3FN contém apenas relacionamentos N:M.
          ,II.  3FN contém apenas relacionamentos 1:1 e 1:N.
          ,III. 3FN não pode conter dependências funcionais entre atributos não-chave.
          ,IV.  1FN ou 2FN não pode conter dependências funcionais entre atributos não-chave 
          ,e nem relacionamentos N:M.
          ,
          ,Está correto o que se afirma APENAS em:`,
    a: new aln(`II, III e IV.`),
    b: new aln(`II e III.`, 0),
    c: new aln(`I e III.`),
    d: new aln(`II.`),
    e: new aln(`I.`),
    imgs: [],
    fim: "",
  }),
  new Prg({
    cadNome: `Bd1`,
    pId: `2014/5`,
    testRef: `2014`,
    tema: ``,
    prg: `5. Considere quatro relações compostas da seguinte forma:
          
          [imagem abaixo]
          
          Obs.: O termo sublinhado é o atributo identificador da relação.
          Quanto às regras de normalização, é correcto afirmar que Pedido, 
          ItemPedido e Item, estão normalizadas, respectivamente, até à
          `,
    a: new aln(`1FN, IFN e 2FN.`),
    b: new aln(`1FN, 2FN e 2FN.`),
    c: new aln(`2FN, 2FN e 2FN.`),
    d: new aln(`2FN, 3FN e 3FN. `, 0),
    e: new aln(`3FN, 3FN e 3FN.`),
    imgs: [require("../testespics/teste2bd/teste14.5.jpg")],
    fim: "",
  }),
  new Prg({
    cadNome: `Bd1`,
    pId: `2014/6`,
    testRef: `2014`,
    tema: ``,
    prg: `6. Em relação à normalização de dados, NÃO é um objectivo desse processo:
          ,`,
    a: new aln(`eliminar a redundância causada pelos campos repetidos;`),
    b: new aln(`minimizar a integridade dos dados e melhorar o desempenho;`),
    c: new aln(`evitar anormalidades na atualização dos dados;`),
    d: new aln(`representar de forma precisa o que está sendo modelado;`, 0),
    e: new aln(`simplificar a manutenção e a recuperação de informações.`),
    imgs: [],
    fim: "",
  }),
  new Prg({
    cadNome: `Bd1`,
    pId: `2014/7`,
    testRef: `2014`,
    tema: ``,
    prg: `7. Uma relação que contém grupos repetitivos,mas NÃO contém dependências funcionais
          ,transitivas`,
    a: new aln(`está na 1FN;`),
    b: new aln(`não está normalizada;`, 0),
    c: new aln(`está na 2FN;`),
    d: new aln(`está na 3FN;`),
    e: new aln(`está na FNBC..`),
    imgs: [],
    fim: "",
  }),
  new Prg({
    cadNome: `Bd1`,
    pId: `2014/8`,
    testRef: `2014`,
    tema: ``,
    prg: `8. Seja a relação EMP-PROJ (IdEmp, NumProj, Horas, NomeEmp, NomeProj, LocalProj) 
          ,onde {IdEmp, NumProj} é a chave primária de EMP-PROJ 
          ,e as seguintes dependências funcionais:
          ,
          ,IdEmp, NumProj —→ Horas
          ,IdEmp —→ NomeEmp
          ,NumProj —→ NomeProj, LocalProj
          ,
          ,A relação EMP-PROJ, com estas dependências funcionais, viola que forma normal?`,
    a: new aln(`Primeira Forma Normal;`),
    b: new aln(`Segunda Forma Normal;`, 0),
    c: new aln(`Terceira Forma Normal;`),
    d: new aln(`Forma Normal de Boyce-Codd;`),
    e: new aln(`Quarta Forma Normal.`),
    imgs: [],
    fim: "",
  }),
];


/////////////////////////////////////BD@////////////////////////////////////////

let bd2_t2_23 = [
  new Prg({
    cadNome: `Bd2`, pId: `2/0`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `1. Qual dos seguintes não é um dos estágios na evolução de SGBD Distribuido?`, a: new aln(` Unidade de trabalho.`, 0), b: new aln(` Unidade de trabalho remota.`), c: new aln(` Unidade distribuida de trabalho.`), d: new aln(` Solicitação distribuida.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/1`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `2. Uma unidade de trabalho distribuida permite que várias instruções dentro de uma unidade de trabalho se refiram a vários locais remotos do DBMS.`, a: new aln(` Verdadeiro`, 0), b: new aln(` Falso`), c: new aln(``), d: new aln(` Solicitação distribuida.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/2`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `3. Uma base de dados distribuida pode usar qual das seguintes estratégias?`, a: new aln(` Totalmente centralizada num local e acessada por vários sites. `), b: new aln(` Parcial ou totalmente replicada nos sites.`), c: new aln(` Particionada em fragmentos em locais diferentes.`), d: new aln(` Todas as opções citadas.`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/3`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `4. São desvantagens dos sistemas distribuidos: (escolha três)`, a: new aln(` Dependência de hardware.`), b: new aln(` Maior custo de desenvolvimento.`, 0), c: new aln(` Maior probabilidade de ocorrências de falhas no programa.`, 0), d: new aln(` Dependência de sistemas operacionais.`), e: new aln(` Aumento do overhead de processamento.`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/4`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `5. Cada local (ou no) num sistema distribuído está sujeito aos mesmos tipos de falha que num sistema centralizado.`, a: new aln(`A Verdadeiro`, 0), b: new aln(` Falso`), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/5`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `6. A replicação de dados é mais usada onde a maioria das solicitações de processo são somente de leitura e onde os dados são relativamente estáticos.`, a: new aln(` Verdadeiro`, 0), b: new aln(` Falso`), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/6`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `7.Qual das seguintes opções é uma desvantagem da replicação?`, a: new aln(` Reduzido tráfego da rede.`), b: new aln(` Se a base de dados falha num site, uma cópia pode ser localizada noutro site.`), c: new aln(` Cada site deve ter a mesma capacidade de armazenamento.`, 0), d: new aln(` Cada transacção pode prosseguir sem coordenação na rede.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/7`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `8. A tecnologia assíncrona pode resultar num tempo de resposta insatisfatoriamente lento porque o DBMS distribuído gasta um tempo considerável a verificar se uma atualização é propagada de forma precisa e completa pela rede.`, a: new aln(` Verdadeiro`), b: new aln(` Falso`, 0), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/8`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `9. Seja dado o cenário. Indique nas opções que se seguem a alternativa correcta:`, a: new aln(` B: TNSNames.or C: SQLPlus -> D: Listener`), b: new aln(` B: init.ora-> C: Listener> D: SQLPLUS`), c: new aln(` B: OracleNet->C: TCP/IP D: OracleNet`), d: new aln(` B: OracleNet C: Listener> D: OracleNet`, 0), e: new aln(` Nenhuma das alternativas anteriores.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/9`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `10. Seja dado o cenário referente a conexão cliente servidor.Indique a opção que é usada para estabelecer conexão sem que seja necessário configurar os ficheirosTnsNames.ora e Listener.ora?`, a: new aln(` Easy Connecting`, 0), b: new aln(` Local Naming`), c: new aln(` Directory naming`), d: new aln(` Nenhuma das alternativas anteriores.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/10`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `12. Com transparência de falha, todas as acções de uma transacção são confirmadas ou nenhuma delas é confirmada `, a: new aln(`A Verdadeiro`, 0), b: new aln(` Falso`), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/11`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `13. O bloqueio de recursos é um processo para evitar que várias aplicações obtenham cópias do mesmo registo quando o mesmo está prestes a ser alterado.`, a: new aln(` Verdadeiro`, 0), b: new aln(` Falso`), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/12`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `14. A replicação deve ser usada quando existir qual das seguintes situações?`, a: new aln(` Quando a velocidade e capacidade de transmissão numa rede proibem a actualização frequente de tabelas grandes.`), b: new aln(` Ao usar muitos nós com diferentes sistemas operativos, SGBDs e desenho de base de dados.`), c: new aln(` Os dados da aplicação podem estar um pouco desactualizados. `, 0), d: new aln(` Todas as opções mencionadas.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/13`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `15. Armazenar uma cópia separada da base de dados em vários locais, é qual das seguintes opções?`, a: new aln(` Replicação de dados.`, 0), b: new aln(` Fragmentação horizontal.`), c: new aln(` Fragmentação vertical.`), d: new aln(` Fragmentação horizontal e vertical.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/14`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `16. Algumas das colunas de uma relação estão em locais diferentes, é qual das seguintes opções?`, a: new aln(` Replicação de dados.`), b: new aln(` Fragmentação horizontal.`), c: new aln(` Fragmentação vertical`, 0), d: new aln(` Fragmentação horizontal e vertical.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/15`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `17. Qual das opções seguintes é uma vantagem da fragmentação`, a: new aln(` Complexidade.`), b: new aln(` Velocidade de acesso inconsistente.`), c: new aln(` Espaço extra`), d: new aln(` Segurança.`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/16`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `18. Com a tecnologia assincrona, se qualquer cópia de um dado for actualizada em qualquer lugar da rede, a mesma actualização será aplicada imediatamente a todas as outras copias ou será abortada`, a: new aln(` Verdadeiro`), b: new aln(` Falso`, 0), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/17`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `19. O problema do controle de concorrência é mais complexo numa base de dados distribuida`, a: new aln(` Verdadeiro`, 0), b: new aln(` Falso`), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/18`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `20. Seja dado o seguinte cenário de um sistema distribuido para Gestão de Pacientes de um Hospital. O sistema é constituído por 3 Nós, a saber:No1: Responsável pela Internamento dos Pacientes;No2: Responsável pela Venda e Gestão de Medicamentos,No3: Responsável pela Atendimento de Pacientes:No4: Responsável pela Administração do Negócio:No final do mês, Administrador do Negócio conectado ao (No 4), pretende ter acesso em tempo real aos pacientes que passaram pelos Nos 1, 2 e 3 com idade menor que 18 anos: Qual das opções abaixo é utilizada para responder ao pedido:`, a: new aln(`A Fragmentação Horizontal dos Nós 1. 2 e 3`, 0), b: new aln(` Fragmentação Mista dos Nós 1, 2 e 3`), c: new aln(` Snapshot dos Nós 1, 2 e 3`), d: new aln(` Consulta Remota dos Nós 1, 2 e 3`), e: new aln(` Nenhuma das alternativas anteriores`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/19`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `
  21. Seja dado o seguinte cenário de um sistema distribuido para Gestão de Pacientes de uma rede de hospitais. O sistema é constituido por 4 Nós, a saber:
  
  No1: Responsável pela Administração do Negócio
  No2: Responsável pela Venda Medicamentos;
  No3: Responsável pela Atendimento de Pacientes, (Create Tabela Pacientes atendidos [])
  No4: Responsável pelo Interramento dos Pacientes (Create Tabela Pacientes internation [])
  
  Um Médico conectado so (No4), pretendo em tempo real consultar a tabela Pacientes internados e encontrar os dados dos medicamentos prescritos aos pacientes após o atendimento no No3 sem ter de inseri-los. 
  Qual das opções abaixo é utilizada para responder ao pedido:
  `, a: new aln(` A tabela Pacientes internados deve possuir uma fragmentação horizontal da tabela pacientes do No 3`), b: new aln(` O Médico pode recorrer à utilização do Database link para aceder informação armazenada no No 3`), c: new aln(` A tabela Pacientes internados deve ser um snapshot tabela Pacientes Atendidos do Nó 3`), d: new aln(` O Administrador pode configurar um Trigger para inserção dos dados da pacientes internados do No3 para o No4.`, 0), e: new aln(` Nenhuma das alternativas anteriores.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/20`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `22. Uma base de dados distribuida homogénea é qual das seguintes opções?`, a: new aln(` O mesmo SGBD é usado em cada local e os dados não estão distribuídos ao longo dos nós`), b: new aln(` O mesmo SGBD é usado em cada local e os dados estão distribuidos ao longo dos nós.`, 0), c: new aln(` Diferente SGBD é usado em cada local e os dados não estão distribuidos ao longo dos nos`), d: new aln(` Diferente SGBD é usado em cada local e os dados estão distribuidos ao longo dos nos`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/21`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `23. Quando uma transação le um registo alterado que não foi confirmado na base de dados, ocorre uma leitura suja (inconsistent.`, a: new aln(` Verdadeiro.`), b: new aln(` Falso.`, 0), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/22`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `24. Qual das seguintes opções é verdadeira em relação a uma transacção global?`, a: new aln(` Os dados necessários estão num site local e o SGBD distribuido roteia solicitações conforme necessário.`), b: new aln(` Os dados necessários estão localizados em pelo menos um site não local e o SGBD distribuido roteia solicitações conforme necessário`, 0), c: new aln(` Os dados necessários estão num site local e o SGBD distribuido passa a solicitação apenas para o SGBD local`), d: new aln(` Os dados necessários estão localizados em pelo menos um site não local e o SGBD distribuido passa a solicitação apenas para o SGBD local. `), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/23`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `25. Considere duas bases de dados, B1 e 82, localizadas, respectivamente, nos servidores $1 e S2, conectadas entre si pola Internet: Considere ainda que as tabelas T1 T2 pertencem,respectivamente, ás bases de dados B1 B2Neste cenário, a sequência de operações que NÃO caracteriza uma transacção distribuida é:`, a: new aln(` leitura de um registo em T1, leitura de todos os registos de T2 `, 0), b: new aln(` remoção de um registo em T1, inclusão de um registo em T2`), c: new aln(` remoção de um registo em T1, remoção de todos os registos de T2.`), d: new aln(` alteração de um registo em Ti, alteração de um registo no T2`), e: new aln(` remoção de todos os registos de TI, remoção de todos os registos de T2.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/24`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `26. Não é uma regra associada ao principio fundamental de base de dados distribuidos:`, a: new aln(` Não dependência de um site central`), b: new aln(` Autonomia local`), c: new aln(` Operação continua.`), d: new aln(` Dependência da rede`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/25`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `27. Considere a seguinte acção:TRANSACTION…COMMIT;ROLLBACK;O que faz o Rollback nesta transacção?`, a: new aln(` Desfaz as transacções antes do commit`), b: new aln(` Limpa todas as transacções.`), c: new aln(` Refaz as transacções antes do commit`), d: new aln(` Nenhuma acção,`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/26`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `28. Uma opção cada vez mais popular para distribuição de dados, bem como para tolerância a falhas de qualquer base de dados, é armazenar uma cópia separada da base de dados em cada um dos sites.`, a: new aln(` Verdadeiro`, 0), b: new aln(` Falso`), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/27`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `29. A transparência de localização permite qual das seguintes opções?`, a: new aln(` Os utilizadores tratar os dados como se estivessem num local.`), b: new aln(` Os programadores tratar os dados como se estivessem num local`), c: new aln(` Os gestores tratar os dados como se estivessem num local`), d: new aln(` Todas as opções`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/28`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `
  30. Considere as afirmações a seguir sobre as transacções T1, T2 e T3, e os escalonamentos S1 e S2
  dados abaixo:
  
  TI: R1(x); R1(z); W1(x).
  T2: R2(2); R2(y); W2(2), W2(y).
  T3. R3(x); R3(y); W3(y).
  SI: R1(x); R2(2); RI(x); R3(x); R3(y): W1(x); W3(y); R2(y); W2(2); W2(y).
  S2: R1(x); R2(z); R3(x); R1(z), R2(y); R3(y); W1(x); W2(z); W3(y); W2(y)
  
  I-TI não obedece as propriedades ACID.
  II-S1 é um escalonamento serializável e S2 não é um escalonamento serializável.
  III-S1 e S2 são escalonamentos serializáveis.
  IV-T2 e T3 são transacções somente-leitura.
  Está correcta, apenas a opção___.`, a: new aln(` Apenas I.`), b: new aln(` Apenas II.`, 0), c: new aln(` Apenas I e III`), d: new aln(` Apenas I e IV.`), e: new aln(` Apenas II e III.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/29`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `31.Bloqueios colocados por comandos são chamados___________`, a: new aln(` Bloqueios implícitos`), b: new aln(` Bloqueios explicitas`, 0), c: new aln(` Bloqueios exclusivos`), d: new aln(` Bloqueios partilhados`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/30`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `32. Em relação ao protocolo two-phase commit, analise as afirmativas a seguir:
  
  I. Durante a primeira fase do protocolo, o nó coordenador da transação consulta um nó participante para saber se ele está apto para concluir a transação e, após conhecer a resposta dele, consulta o próximo nó participante.
  
  II. Se o nó coordenador da transação falhar, os participantes podem não receber a decisão final para executar commit ou rollback e, portanto, ficarem bloqueados.
  
  III. Se o nó participante falhar após receber a decisão final para executar um commit, a transação será abortada pelo nó coordenador da transação.
  
  Está correcto o que se afirma em:`, a: new aln(` Somente I.`), b: new aln(` Somente II. C. Somente III.`, 0), c: new aln(` Somente II e III.`), d: new aln(` I, II e III.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/31`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `33. Um ponto de sincronização entre a base de dados e o log de transacções é chamado de stop point.`, a: new aln(` Verdadeiro.`), b: new aln(` Falso`, 0), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/32`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `34. Qual das seguintes opções bloqueia um item da alteração, mas não da leitura?`, a: new aln(` Bloqueios implícitos`), b: new aln(` Bloqueios explícitos`), c: new aln(` Bloqueios exclusivos`), d: new aln(` Bloqueios partilhados`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/33`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `35. Uma leitura fantasma (inconsistent ocorre quando uma transacção relê os dados lidos anteriormente e encontra modificações ou exclusões causadas por uma transacção confirmada.`, a: new aln(` Verdadeiro`), b: new aln(`Falso`, 0), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/34`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `36. Uma transacção para a qual todas as alterações confirmadas são permanentes é chamada:`, a: new aln(` Atómica.`), b: new aln(` Consistente.`), c: new aln(` Isolada.`), d: new aln(` Durável.`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/35`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `37. Duas transacções que são executadas simultaneamente e geram resultados consistentes com os resultados que teriam ocorrido se tivessem sido executadas separadamente são chamadas de transacções serializáveis`, a: new aln(` Verdadeiro`, 0), b: new aln(` Falso`), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/36`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `38. Um bloqueio compartilhado permite que ocorra qual dos seguintes tipos de transacções?`, a: new aln(` Leitura`, 0), b: new aln(` Exclusão`), c: new aln(` Actualização`), d: new aln(` Inserção`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/37`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `39. Os bloqueios colocados pelo DBMS são chamados de ___`, a: new aln(` Bloqueios implicites`), b: new aln(` Bloqueios explicitos`, 0), c: new aln(` Bloqueios exclusivos`), d: new aln(` Bloqueios partilhados`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/38`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `40. Um bloqueio exclusivo bloqueia um item de alteração, mas não de leitura`, a: new aln(`A Verdadeiro.`), b: new aln(`R. Falso`, 0), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/39`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `41. Uma transacção durável é aquela em que todas as mudanças gravadas são permanentes.`, a: new aln(` Verdadeiro`, 0), b: new aln(` Falso`), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/40`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `42. A base de dados está aberta e os utilizadores estão a usar o LISTENER listener. O novo DBA do sistema para o listener usando o seguinte comando:LSNRCTL > STOP`, a: new aln(`O que acontece ás sessões que estão nesse momento conectadas à instância da base de dados?`), b: new aln(` As sessões são capazes apenas de realizar consultas`, 0), c: new aln(` As sessões não são afectadas e continuam a funcionar normalmente`), d: new aln(` As transacções activas são retomadas (rolled hack) e as sessões terminam`), e: new aln(` As sessões não têm permissão para realizar qualquer operação até que o listener reinicie.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/41`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `43. Que modo de nomeação o ficheiro maenat a conecto de descricao usado pelo cliente enquanto se começa a instância da base de dados duma maquina remota?`, a: new aln(` Hast naming method`), b: new aln(` Local naming method`, 0), c: new aln(` External naming method`), d: new aln(` Directory naming method`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/42`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `44. Ao definir a escala de processamento distribuido de uma consulta numa base de dados distribuida não e necessário considerar:`, a: new aln(` O custo de transmissão dos dados`), b: new aln(` A replicação dados`), c: new aln(` A capacidade de armazenamento de cada servidor`, 0), d: new aln(` A fragmentação de dados`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/43`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `45. Que parte do specifica a nie du enderece IP do servidor onde o process  e ouvido?`, a: new aln(` PORT`), b: new aln(` CONNECT DATA`), c: new aln(` SERVICE NAME`), d: new aln(` HOST`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/44`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `46 Objectos de base de dados são quase sempre transitórios.`, a: new aln(` Verdadeiro`), b: new aln(` Falso`, 0), c: new aln(``), d: new aln(` HOST`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/45`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `47. Qual das seguintes opções e verdadeira em relação ao SGBDOO?`, a: new aln(` Eles têm a capacidade de armazenar tipos de dados complexos`, 0), b: new aln(` Eles estão a passar a frente dos SGBDR para todas as aplicações`), c: new aln(` Eles são mais úteis para aplicações de base de dados tradicionais, tabelas bidimensionais`), d: new aln(` Todas as opções`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/46`, testRef: `2`, tema: `Sistemas de base de dados distribuídos`,
    prg: `48. Acerca de uma base de dados com orientação a objectos:
  
  I - Os objectos não podem conter referências para outros objectos.
  
  II-A organização dos objectos obedece a uma hierarquia de tipos, subtipos e supertipos.
  
  III - A implementação de uma base de dados orientada a objectos não traz mudanças quanto à forma de acesso por parte das aplicações,
  o que muda é a forma como os dados serão organizados na base de dados. 
  
  Está correcta, apenas a alternativa`, a: new aln(` Apenas a afirmativa I.`), b: new aln(` Apenas a afirmativa II.`), c: new aln(` Apenas as afirmativas II e III.`, 0), d: new aln(` Todas as afirmativas.`), e: new aln(``), imgs: [], fim: ""
  })
];

let bd2_t2_22 = [
  new Prg({
    cadNome: `Bd2`, pId: `22/0`, testRef: `22`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `1. Qual dos seguintes não é um dos estágios na evolução de SGBD Distribuido?
  `, a: new aln(`Unidade de trabalho.`, 0), b: new aln(`Unidade de trabalho remota.`), c: new aln(`Unidade distribuida de trabalho.`), d: new aln(`Solicitação distribuída.`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/1`, testRef: `22`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `2. Uma base de dados distribuida pode usar qual das seguintes estratégias?
  `, a: new aln(`Totalmente centralizada num local e acessada por vários sites `), b: new aln(`Parcial ou totalmente replicada nos sites.`), c: new aln(`Particionada em fragmentos em locais diferentes`), d: new aln(`Todas as opções citadas.`, 0), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/2`, testRef: `22`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `3.São desvantagens dos sistemas distribuidos: (escolha duas)`, a: new aln(`Dependência de hardware..`), b: new aln(`Maior custo de desenvolvimento.`, 0), c: new aln(`Maior probabilidade de ocorrências de falhas no programa.`, 0), d: new aln(`Dependência de sistemas operacionais..`), e: new aln(` Dependência do tipo de rede para ligar as localidades.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/3`, testRef: `22`, tema: ` Administracão  de bd`,
    prg: `4. Qual das seguintes opções é uma desvantagem da replicação?`, a: new aln(`Reduzido tráfego da rede.`), b: new aln(`Se a base de dados falha num site, uma cópia pode ser localizada noutro site. `), c: new aln(`Cada site deve ter a mesma capacidade de armazenamento.`, 0), d: new aln(`Cada transacção pode prosseguir sem coordenação na rede.`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/4`, testRef: `22`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `5. Seja dado o cenário. Indique nas opções que se seguem a alternativa correcta:`, a: new aln(`B: TNSNames.ora C: SQLPlus -> D: Listener`), b: new aln(`B: init.ora C: Listener> D: SQLPLUS `), c: new aln(`B: OracleNet->C: TCP/IP -> D: OracleNet`), d: new aln(`B: OracleNet->C: Listener> D: OracleNet`, 0), e: new aln(`Nenhuma das alternativas anteriores.`), imgs: [require('../testespics/bd2/t2/t2_22_5.jpg')], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/5`, testRef: `22`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `6.Uma base de dados distribuida é qual das seguintes opções:
  `, a: new aln(`Uma base de dados lógica que é espalhada por vários locais e interconectada por uma rede `, 0), b: new aln(`Uma colecção de ficheiros que é espalhada por vários locais e é interconectada por uma rede`), c: new aln(`Uma única base de dados lógica que está limitada a um local.`), d: new aln(`Uma colecção de ficheiros que está limitada a um local.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/6`, testRef: `22`, tema: ` Administracão  de bd`,
    prg: `7. Seja dado o cenário referente a conexão cliente servidor.
  
  [imagem abaixo]
  
  Indique a opção que é usada para estabelecer conexão sem que seja necessário configurar os ficheiros TnsNames.ora e Listener.ora?
  `, a: new aln(`Easy Connecting,`, 0), b: new aln(`Local Naming`), c: new aln(`Directory naming `), d: new aln(`Nenhuma das alternativas anteriores.`), e: new aln(``), imgs: [require('../testespics/bd2/t2/t2_22_7.jpg')], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/7`, testRef: `22`, tema: ` Mecanismos de gestão de transacções`,
    prg: `8. Com transparência de falha, todas as acções de uma transacção são confirmadas ou nenhuma delas é confirmada `, a: new aln(`Verdadeiro`, 0), b: new aln(`Falso`), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/8`, testRef: `22`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `9.Seja dado o cenário de um sistema distribuído para Gestão e Venda de Electrodomésticos.
  
  Nól: Responsável pela Gestão das logísticas e 
  Nó2: Responsável pela venda dos artigos
  Nó3: Responsável pela Administração do Negócio. 
  
  Os Administradores do Negócio (Nó 3), pretendem ter acesso em tempo real aos registos de vendas efectuadas 
  pelo No2 para efeitos de monitoria e controle. Qual das opções abaixo é utilizada para responder ao pedido:
  
  [Imagem Abaixo]`, a: new aln(`O Nó 3 deverá fazer a Replicação da tabela Vendas do No2; `), b: new aln(`O Nó 3 deverá fazer fragmentação Mista da tabela Vendas do No2;`), c: new aln(` O No 3, deverá fazer snapshot da tabela vendas do No2;`, 0), d: new aln(`O No 3, pode programar através de PL/SQL um loop para realização uma consulta remota ao No2; 
  `), e: new aln(`Nenhuma das alternativas anteriores.`), imgs: [require('../testespics/bd2/t2/t2_22_9.jpg')], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/9`, testRef: `22`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `10. A replicação deve ser usada quando existir qual das seguintes situações?
  `, a: new aln(`Quando a velocidade e capacidade de transmissão numa rede proíbem a actualização frequente
  de tabelas grandes.`), b: new aln(`Ao usar muitos nós com diferentes sistemas operativos, SGBDs e desenho de base de dados! `), c: new aln(`Os dados da aplicação podem estar um pouco desactualizados. `, 0), d: new aln(`Todas as opções mencionadas.`), e: new aln(`Nenhuma das alternativas anteriores.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/10`, testRef: `22`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `11. Armazenar uma cópia separada da base de dados em vários locais, é qual das seguintes opções?
  `, a: new aln(`Replicação de dados.`, 0), b: new aln(`Fragmentação horizontal.`), c: new aln(`Fragmentação vertical.`), d: new aln(`Fragmentação horizontal e vertical.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/11`, testRef: `22`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `12. Seja dado o seguinte cenário de um sistema distribuído para Gestão e Venda de Electrodomésticos. 
  O sistema é constituído por 3 Nós, a saber:
  
  Nól: Responsável pela Gestão das logísticas
  Nó2: Responsável pela venda dos artigos e
  Nó3: Responsável pela Administração do Negócio. 
  
  Um Administrador do Negócio (Nó 3),efectuou através do sistema um pedido de encomenda de 10
  artigos de Ginásio. O Gestor Sénior de Logística (Nó 1) pretende apenas ter acesso a esse registo em específico 
  para efeitos de procurement. Qual das opções abaixo é utilizada para responder ao pedido:
  
  [imagem abaixo]
  `, a: new aln(`O Gestor Logística deverá fazer uma consulta remota ao Nó3, local onde foi feita a requisição;
  `), b: new aln(`O Gestor Logística deverá fazer fragmentação Mista da tabela Vendas do Nó2;
  `), c: new aln(` O Gestor Logística, deverá fazer snapshot da tabela vendas do Nó2; `), d: new aln(`O Gestor Logística deverá fazer uma consulta remota ao Nó2;
  `, 0), e: new aln(`Nenhuma das alternativas anteriores.
  `), imgs: [require('../testespics/bd2/t2/t2_22_12.jpg')], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/12`, testRef: `22`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `13. Algumas das colunas de uma relação estão em locais diferentes, é qual das seguintes opções?
  `, a: new aln(`Replicação de dados.
  `), b: new aln(`Fragmentação horizontal. 
  `), c: new aln(`Fragmentação vertical.
  `, 0), d: new aln(`Fragmentação horizontal e vertical.
  `), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/13`, testRef: `22`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `14.Qual das opções seguintes é uma vantagem da fragmentação?
  `, a: new aln(`Complexidade
  `), b: new aln(`Velocidade de acesso inconsistente.
  `), c: new aln(`Espaço extra.
  `), d: new aln(`Segurança.
  `, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/14`, testRef: `22`, tema: ` Administracão  de bd`,
    prg: `15. Com a tecnologia assíncrona, se qualquer cópia de um dado for actualizada em qualquer lugar da rede, 
  a mesma actualização será aplicada imediatamente a todas as outras cópias ou será abortada.
  `, a: new aln(`Verdadeiro `), b: new aln(`Falso`, 0), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/15`, testRef: `22`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `16. Seja dado o seguinte cenário de um sistema distribuído para Gestão, Venda e importação de Viaturas.
  O sistema é constituído por 4 Nós, a saber.
  
  Nó1: Responsável pela Venda e Gestão das Importações
  N62: Responsável pela Venda e Gestão das Importações.
  N63: Responsável pela Venda e Gestão das Importações
  N64: Responsável pela Administração do Negócio.
  
  [ Imagem presente aqui, Abaixo! ]
  
  Um Administrador do Negócio (Nó 4), pretende ter acesso em tempo real dos registos de pedidos de importação de Viaturas feitas por clientes Nacionais dos Nós 1, 2 e 3. Qual das opções abaixo é utilizada
  para responder ao pedido:
  `, a: new aln(`Fragmentação Horizontal dos Nós 1, 2 e 3 
  `, 0), b: new aln(`Fragmentação Mista dos Nós 1, 2 e 3
  `), c: new aln(`Snapshot dos Nós 1, 2 e 3
  `), d: new aln(`Consulta Remota dos Nós 1, 2 e 3
  `), e: new aln(`Nenhuma das alternativas anteriores. 
  `), imgs: [require('../testespics/bd2/t2/t2_22_16.jpg')], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/16`, testRef: `22`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `17. Uma base de dados distribuída homogénea é qual das seguintes opções? 
  `, a: new aln(`O mesmo SGBD é usado em cada local e os dados não estão distribuídos ao longo dos nós.
  `), b: new aln(` O mesmo SGBD é usado em cada local e os dados estão distribuídos ao longo dos nós
  `, 0), c: new aln(`Diferente SGBD é usado em cada local e os dados não estão distribuídos ao longo dos nós.
  `), d: new aln(`Diferente SGBD é usado em cada local e os dados estão distribuídos ao longo dos nós.
  `), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/17`, testRef: `22`, tema: ` Mecanismos de gestão de transacções`,
    prg: `18. Qual das seguintes opções é verdadeira em relação a uma transacção global? 
  `, a: new aln(` Os dados necessários estão num site local e o SGBD distribuido roteia solicitações conforme
  necessário.`), b: new aln(`Os dados necessários estão localizados em pelo menos um site não local e o SGBD distribuído
  roteia solicitações conforme necessário.
  `, 0), c: new aln(`Os dados necessários estão num site local e o SGBD distribuído passa a solicitação apenas para
  o SGBD local.
  `), d: new aln(`Os dados necessários estão localizados em pelo menos um site não local 
  e o SGBD distribuído passa a solicitação apenas para o SGBD local.
  `), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/18`, testRef: `22`, tema: ` Mecanismos de gestão de transacções`,
    prg: `19. Considere duas bases de dados, B1 e B2, localizadas, respectivamente, 
  nos servidores S1 e S2,conectadas entre si pela Internet. 
  
  Considere ainda que as tabelas T1 e T2 pertencem, respectivamente, às bases de dados B1 e B2.
  Neste cenário.
  
  A sequência de operações que NÃO caracteriza uma transacção distribuída é: 
  `, a: new aln(`leitura de um registo em TI; leitura de todos os registos de T2.
  `, 0), b: new aln(`remoção de um registo èm T1; inclusão de um registo em T2. 
  `), c: new aln(`remoção de um registo em T1; remoção de todos os registos de T2.
  `), d: new aln(`alteração de um registo em T1; alteração de um registo em T2. 
  `), e: new aln(`remoção de todos os registos de T1; remoção de todos os registos de T2.
  `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/19`, testRef: `22`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `20. Não é uma regra associada ao princípio fundamental de base de dados distribuídos:
  `, a: new aln(`Não dependência de um site central.
  `), b: new aln(`Autonomia local.
  `), c: new aln(`Operação continua.
  `), d: new aln(`Dependência da rede. 
  `, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/20`, testRef: `22`, tema: ` Mecanismos de gestão de transacções`,
    prg: `21. Considere a seguinte acção:
  TRANSACTION ...,
  COMMIT; 
  ROLLBACK;
  O que faz o Rollback nesta transacção? `, a: new aln(`Desfaz as transacções antes do commit..`), b: new aln(`Limpa todas as transacções.
  `), c: new aln(` Refaz as transacções antes do
  `), d: new aln(`Nenhuma acção..
  `, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/21`, testRef: `22`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `
  22. Uma opção cada vez mais popular para distribuição de dados, 
  bem como para tolerância a falhas de qualquer base de dados, 
  é armazenar uma cópia separada da base de dados em cada um dos sites.
  `, a: new aln(` Verdadeiro`, 0), b: new aln(` Falso
  `), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/22`, testRef: `22`, tema: ` Mecanismos de gestão de transacções`,
    prg: `23. A transparência de localização permite qual das seguintes opções? 
  `, a: new aln(`Os utilizadores tratar os dados como se estivessem num local.
  `), b: new aln(`Os programadores tratar os dados como se estivessem num local. 
  `), c: new aln(` Os gestores tratar os dados como se estivessem num local.
  `), d: new aln(`Todas as opções.
  `, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/23`, testRef: `22`, tema: ` Mecanismos de gestão de transacções`,
    prg: `24. Considere as afirmações a seguir sobre as transacções T1, T2 e T3, e os escalonamentos S1 e S2
  dados abaixo:
  T1: R1(x); RI(z); W1(x).
  T2: R2(z); R2(y); W2(z); W2(y).
  T3: R3(x); R3(y); W3(y).
  
  S1: R1(x); R2(z); R1(x); 
  R3(x); R3(y); 
  W1(x); W3(y); 
  R2(y); W2(z); W2(y). 


  S2: R1(x); R2(z); 
  R3(x); R1(z); R2(y); 
  R3(y); W1(x); W2(z); 
  W3(y); W2(y).
  
  I- T1 não obedece às propriedades ACID. 
  II - ȘI é um escalonamento serializável e S2 não é um escalonamento serializável.
  III SI e S2 são escalonamentos serializáveis.
  IV - T2 e T3 são transacções somente-leitura.
  
  Está(ão) correcta(s):
  `, a: new aln(`Apenas I
  `), b: new aln(`Apenas II.
  `, 0), c: new aln(` Apenas I e III.
  `), d: new aln(`Apenas I e IV.
  `), e: new aln(`Apenas II e III.
  `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/24`, testRef: `22`, tema: ` Mecanismos de gestão de transacções`,
    prg: `25. Em relação ao protocolo two-phase commit, analise as afirmativas a seguir: 
  
  I. Durante a primeira fase do protocolo, o nó coordenador da transação consulta um nó participante 
  para saber se ele está apto para concluir a transação e, após conhecer a resposta dele,
  consulta o próximo nó participante, 
  
  II. Se o nó coordenador da transação falhar, os participantes podem não receber a decisão final 
  para executar commit ou rollback e, portanto, ficarem bloqueados.
  
  III. Se o nó participante falhar após receber a decisão final para executar um commit, 
  a transação será abortada pelo nó coordenador da transação.
  Está correcto o que se afirma em:`, a: new aln(`Somente I.
  `), b: new aln(`Somente II.
  `, 0), c: new aln(`Somente III.
  `), d: new aln(`Somente II e III.
  `), e: new aln(`I, II e III.
  `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/25`, testRef: `22`, tema: ` Mecanismos de gestão de transacções`,
    prg: `26. Um ponto de sincronização entre a base de dados e o log de transacções é chamado de stop point. 
  `, a: new aln(`Verdadeiro `), b: new aln(`Falso`, 0), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/26`, testRef: `22`, tema: ` Mecanismos de gestão de transacções`,
    prg: `27. Bloqueios colocados por comandos são chamados_________`, a: new aln(`Bloqueios implícitos
  `), b: new aln(`Bloqueios explícitos 
  `, 0), c: new aln(`Bloqueios exclusivos
  `), d: new aln(`Bloqueios partilhados
  `), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/27`, testRef: `22`, tema: ` Mecanismos de gestão de transacções`,
    prg: `28. Qual das seguintes opções bloqueia um item da alteração, mas não da leitura? 
  `, a: new aln(`Bloqueios implícitos
  `), b: new aln(`Bloqueios explícitos 
  `), c: new aln(`Bloqueios exclusivos
  `), d: new aln(`Bloqueios partilhados
  `, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/28`, testRef: `22`, tema: ` Mecanismos de gestão de transacções`,
    prg: `29. Qual das seguintes opções ocorre quando uma transacção relê os dados, 
  e encontra novas linhas que foram inseridas por outra transacção desde a leitura anterior?
  `, a: new aln(`Leitura não repetível (não reprodutível).
  `), b: new aln(`Leitura fantasma (inconsistente).
  `, 0), c: new aln(`Leitura suja (erróneas). 
  `), d: new aln(`Leitura consistente.
  `), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/29`, testRef: `22`, tema: ` Mecanismos de gestão de transacções`,
    prg: `30. Uma transacção para a qual todas as alterações confirmadas são permanentes é chamada:
  `, a: new aln(`Atómica.
  `), b: new aln(`Consistente.
  `), c: new aln(`Isolada.
  `), d: new aln(`Durável. 
  `, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/30`, testRef: `22`, tema: ` Mecanismos de gestão de transacções`,
    prg: `31. Duas transacções que são executadas simultaneamente e geram resultados consistentes com os resultados que teriam ocorrido se tivessem sido executadas separadamente são chamadas de transacções serializáveis.
  `, a: new aln(`Verdadeiro. 
  `, 0), b: new aln(`Falso.
  `), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/31`, testRef: `22`, tema: ` Mecanismos de gestão de transacções`,
    prg: `32. O problema de perda de actualização é quando o utilizador A lê dados que foram processados por uma parte de uma transacção do utilizador B..
  `, a: new aln(`Verdadeiro. 
  `), b: new aln(`Falso.
  `, 0), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/32`, testRef: `22`, tema: ` Mecanismos de gestão de transacções`,
    prg: `33. Um bloqueio compartilhado permite que ocorre qual dos seguintes tipo de transação?
  `, a: new aln(`Leitura
  `, 0), b: new aln(`exclusão
  `), c: new aln(`Actualização 
  `), d: new aln(`Inserção
  `), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/33`, testRef: `22`, tema: ` Administracão  de bd`,
    prg: `34. Bloqueios colocados pelo SGBD sao exclusivos.
  `, a: new aln(`Verdadeiro`), b: new aln(`Falso
  `, 0), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/34`, testRef: `22`, tema: ` Administracão  de bd`,
    prg: `35. Um bloqueio exclusivo bloqueia um item de alteração, mas nao de leitura 
  `, a: new aln(`Verdadeiro`), b: new aln(`Falso
  `, 0), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/35`, testRef: `22`, tema: ` Mecanismos de gestão de transacções`,
    prg: `36. Uma transação durável é aquela em que todas as mudanças gravadas sao permanentes.
  `, a: new aln(`Verdadeiro`, 0), b: new aln(`Falso
  `), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/36`, testRef: `22`, tema: `SGBD orientados a objectos`,
    prg: `37. Quais duas instrucoes to verdadeiras sobre o inicio da instancia da base de dados usando o
  seguinte comando? (Escola duas,) SQL:
   STARTUP UPGRADE
  
  `, a: new aln(`Permite todos os triggers do sistema
  `), b: new aln(`Permite apenas conexbes do SYSDBA.
  `, 0), c: new aln(`Garante que todas as filas de tarefas permaneçam activas durante o processo de actualização, 
  `), d: new aln(`Ele define parámetros de inicialização do sistema para valores específicos que to necessários
  `, 0), e: new aln(`para permitir que scripts de actualização de base de dados sejam executados.
  `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/37`, testRef: `22`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `38. A base de dados está aberta e os ulizadores estao a usar o LISTENER listener, 
  O novo DBA do sistema para o listener usado o seguinte comando,
  LSNRCTL>STOP
  
  O que acontece as sessões que estão nesse momento conectadas à instancia da base de dados?
  `, a: new aln(` As sessões são capazes apenas de realizar consultas,
  `), b: new aln(`As sessões não são afectadas e continuam a funcionar normalmente,
  `, 0), c: new aln(`As transacties achavas são retomadas (rolled back) e as sessões terminan.
  `), d: new aln(`As sessões não tem permissão para realizar qualquer operação até que o listener reinicie.
  `), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/38`, testRef: `22`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `39. Trata-se de regras ou objectivos secundários aplicados aos SGBDs distribuídos:
  
  I. Processamento de consultas centralizado
  II. Dependência de um site central.
  III. Independência de fragmentação.
  IV. Autonomia local.Está correcto o que consta APENAS em`, a: new aln(` I e II.`), b: new aln(` I, II e III.`), c: new aln(` II e III.`, 0), d: new aln(` II, III e IV.`), e: new aln(` III e IV.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/39`, testRef: `22`, tema: `SGBD orientados a objectos`,
    prg: `40. Que método de nomeação usa o ficheiro tnsnames.ora para armazenar o conector de descrição usado pelo cliente enquanto se conecta a uma instância da base de dados duma máquina remota?`, a: new aln(` Host naming method`), b: new aln(` Local naming method`, 0), c: new aln(` External naming method`), d: new aln(` Directory naming method`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/40`, testRef: `22`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `41. Ao definir a escala de processamento distribuído de uma consulta numa base de dados distribuídanão é necessário considerar:`, a: new aln(` O custo de transmissão dos dados`), b: new aln(` A replicação dos dados`), c: new aln(` A capacidade de armazenamento de cada servidor`, 0), d: new aln(` A fragmentação de dados`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/41`, testRef: `22`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `42.Uma das desvantagens dos sistemas de base de dados distribuída é`, a: new aln(` a redução da confiabilidade.`), b: new aln(` a redução da disponibilidade.`), c: new aln(` a redução da escalabilidade.`), d: new aln(` o aumento do overhead de processamento.`, 0), e: new aln(` o compartilhamento de dados e o controle distribuído.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/42`, testRef: `22`, tema: ` Administracão  de bd`,
    prg: `43. C++ é uma linguagem orientada a objectos e é mais simples que Java. `, a: new aln(`Verdadeiro.`), b: new aln(`Falso`, 0), c: new aln(``), d: new aln(``), e: new aln(` o compartilhamento de dados e o controle distribuído.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/43`, testRef: `22`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `44. Que parte do tnsnames.ora especifica o nome ou endereço IP do servidor onde o processo listener é ouvido? `, a: new aln(` PORT`), b: new aln(` CONNECT_DATA `), c: new aln(` SERVICE_NAME`), d: new aln(` HOST `, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/44`, testRef: `22`, tema: `SGBD orientados a objectos`,
    prg: `45. Acerca de uma base de dados com orientação a objectos: 
    I - Os objectos não podem conter referências para outros objectos.

    II-A organização dos objectos obedece a uma hierarquia de tipos, subtipos e supertipos. 

    III - A implementação de uma base de dados orientada a objectos não traz mudanças quanto àforma de acesso por parte das aplicações, 
    o que muda é a forma como os dados serão organizadosna base de dados.
    Está(ão) correcta(s):
    `, a: new aln(` Apenas a afirmativa I. `), b: new aln(` Apenas a afirmativa II.`), c: new aln(` Apenas as afirmativas II e III`, 0), d: new aln(` Todas as afirmativas.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/45`, testRef: `22`, tema: `SGBD orientados a objectos`,
    prg: `46. Objectos de base de dados são quase sempre transitórios.
  `, a: new aln(`Verdadeiro.`), b: new aln(`Falso`, 0), c: new aln(``), d: new aln(``), e: new aln(` o compartilhamento de dados e o controle distribuído.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/46`, testRef: `22`, tema: `SGBD orientados a objectos`,
    prg: `47. Qual das seguintes opções é verdadeira em relação ao SGBDOO?`, a: new aln(` Eles têm a capacidade de armazenar tipos de dados complexos.`, 0), b: new aln(` Eles estão a passar à frente dos SGBDR para todas as aplicações. `), c: new aln(` Eles são mais úteis para aplicações de base de dados tradicionais, tabelas bidimensionais.`), d: new aln(` Todas as opções.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/47`, testRef: `22`, tema: ` Administracão  de bd`,
    prg: `48. De quem é o papel de determinar os requisitos e o desenho de uma base de dados?`, a: new aln(` Analista de base de dados `, 0), b: new aln(` Administrador de base de dados`), c: new aln(` Ambos A e B`), d: new aln(` Nem A nem B.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `22/48`, testRef: `22`, tema: ``,
    prg: `39. Trata-se de regras ou objectivos secundários aplicados aos SGBDs distribuídos:
  
  I. Processamento de consultas centralizado
  II. Dependência de um site central.
  III. Independência de fragmentação.
  IV. Autonomia local.Está correcto o que consta APENAS em`, a: new aln(` I e II.`), b: new aln(` I, II e III.`), c: new aln(` II e III.`, 0), d: new aln(` II, III e IV.`), e: new aln(` III e IV.`), imgs: [], fim: ""
  })
];

let bd2_r_22 = [
  new Prg({
    cadNome: `Bd2`, pId: `3/0`, testRef: `3`, tema: `Sistemas de base de dados distribuídos`,
    prg: `1. Quando as etapas de desenvolvimento de uma base de dados são executadas, espera-se como resultado um repositório que atenda as necessidades do utilizador. Após a validação dos requisitos pela equipe de desenvolvimento, a tarefa é transferida para as mãosdo administrador de base de dados, o qual é responsável por :`, a: new aln(` Intermediar a integração entre a equipe de desenvolvimento de programas, a equipe de projecto, os utilizadores finais e a concepção de base de dados.Faz o papel de gestor, garantindo que as acções de integração sejam executadas.`), b: new aln(` Gerir os possíveis problemas relacionados aos acessos e permissões das bases de dados. O suporte do administrador de base de dados à equipe de desenvolvimento deve ser restrito.`), c: new aln(` Cuidar do processo de lapidação do modelo de base de dados, verificando os possíveis erros de estrutura. O administrador de base de dados deve tomar decisões sobre a construção das aplicações que acessam a base de dados administrada.`), d: new aln(` Preparar a infraestrutura necessária para a base de dados ser disponibilizada, garantindo o funcionamento, segurança, integridade e escalabilidade.`, 0), e: new aln(` Garantir a integridade das aplicações que acessarão a base de dados em questão,além degarantir o funcionamento e a segurança da mesma, ou seja,administrar as aplicações do utilizador final na base de dados.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `3/1`, testRef: `3`, tema: `   Administracão  de bd`,
    prg: `2. Que tipo de arquivos NÃO são parte de uma base de dados Oracle? (escolha duas)`, a: new aln(` CONTROL FILE.`), b: new aln(` PASSWORD FILE.`, 0), c: new aln(` PARAMETER FILES.`, 0), d: new aln(` REDO LOG FILES.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `3/2`, testRef: `3`, tema: `   Administracão  de bd`,
    prg: `3. Quais dos seguintes são processos associados com recovery? (escolha três)`, a: new aln(` PMON`, 0), b: new aln(` SMON`, 0), c: new aln(` ARCn`, 0), d: new aln(` DBWR `), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `3/3`, testRef: `3`, tema: `   Administracão  de bd`,
    prg: `4. Qual é a área de memória que é criada quando um processo de servidor dedicado é inicializado, e contém dados e informação de control daquele processo servidor?`, a: new aln(` SGA`), b: new aln(` PGA`, 0), c: new aln(` Shared Pool`), d: new aln(` Streams Pool`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `3/4`, testRef: `3`, tema: `   Administracão  de bd`,
    prg: `5. Que opção de startup é inválida?`, a: new aln(` STARTUP NORMAL`, 0), b: new aln(` STARTUP MOUNT`), c: new aln(` STARTUP NOMOUNT`), d: new aln(` STARTUP FORCE`), e: new aln(` Nenhuma das anteriores`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `3/5`, testRef: `3`, tema: `   Administracão  de bd`,
    prg: `6. Que frase sobre shared pool é verdadeira?`, a: new aln(` A shared pool NÃO PODE ser dinamicamente redimensionada.`), b: new aln(` A shared pool contém apenas estruturas fixas. `), c: new aln(` A shared pool consiste de library cache e buffer cache.`), d: new aln(` A shared pool armazena instruções SQL mais recentemente executadas e definições de dados mais recentemente acessados.`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `3/6`, testRef: `3`, tema: `   Administracão  de bd`,
    prg: `7. Que afirmações são verdadeiras sobre control file? (escolha duas) `, a: new aln(` O control file pode ser multiplexado até oito vezes`, 0), b: new aln(` O control file é aberto e lido na fase de arranque NOMOUNT`), c: new aln(` O control file é um ficheiro de texto que define o estado actual da base de dados física `), d: new aln(` O control file mantém a integridade da base de dados, portanto, a perda do control file exigerecovery da base de dados `, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `3/7`, testRef: `3`, tema: `   Administracão  de bd`,
    prg: `8.Que frases sobre o uso de online redo log file são verdadeiras? (Escolha três) `, a: new aln(` Redo log files são usados apenas para recovery.`, 0), b: new aln(` Cada redo log dentro de um grupo é chamado de membro. `, 0), c: new aln(` Redo log files são organizados no minimo em três grupos.`), d: new aln(` Redo log files providencia o meio de recuperar transacções quando há falha de uma instância.`), e: new aln(` Redo log files providencia a BD de um método de consistência na leitura.`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `3/8`, testRef: `3`, tema: `   Administracão  de bd`,
    prg: `9. Que frase sobre instância Oracle  é verdadeira?`, a: new aln(` Redo log buffer NÃO é parte de shared memory area de uma instância Oracle.`), b: new aln(` Múltiplas instâncias podem ser criadas no mesmo computador, acessando cada uma a sua própria base de dados fisica.`, 0), c: new aln(` Uma instância Oracle é uma combinação de estruturas de memória, processos de segundo plano, e processos do utilizador.`), d: new aln(` Num ambiente de servidor partilhado (shared server), a componente da estrutura de memóriade uma instância consiste de uma única SGA e uma única PGA.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `3/9`, testRef: `3`, tema: `Sistemas de base de dados distribuídos`,
    prg: `10. Quais destas afirmações sobre estruturas de armazenamento numa base de dados Oracle são verdadeiras? (escolha três)`, a: new aln(` Um data block é uma estrutura lógica`, 0), b: new aln(` Um único data file pode pertencer a várias tablespaces `), c: new aln(` Quando um segment é criado, ele consiste de, pelo menos, um extent`, 0), d: new aln(` Os data blocks de um extent podem ou não pertencer a um mesmo ficheiro`), e: new aln(` Uma tablespace pode consistir de múltiplos data files, cada um de um disco separado`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `3/10`, testRef: `3`, tema: `Sistemas de base de dados distribuídos`,
    prg: `11. Configurou a autenticação no password file da base de dados. Acidentalmente, perdeu oarquivo de senhas. Qual seria o efeito desta perda na base de dados funcional?`, a: new aln(` A base de dados estará funcional e nenhum dos utilizadores terão problemas ao ligar. `), b: new aln(` A base de dados estará funcional, mas nenhum dos utilizadores serão capazes de se conectar como SYSDBA.`, 0), c: new aln(` A base de dados falha e precisa de recuperação.`), d: new aln(` A base de dados desliga-se, o arquivo de senha (password fil será criado automaticamente na próxima inicialização`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `3/11`, testRef: `3`, tema: `Sistemas de base de dados distribuídos`,
    prg: `12. Considerando uma instância do sistema de gestão de base de dados Oracle, há os processos que rodam em background. O processo dessa categoria que numa base de dados distribuída resolve, automaticamente, falhas de transacções distribuídas é o`, a: new aln(` Process Monitor Process (PMON).`), b: new aln(` Checkpoint Process (CKPT).`), c: new aln(` System Monitor Process (SMON). `), d: new aln(` Database Writer Process (DBWn).`), e: new aln(` Recoverer Process (RECO).`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `3/12`, testRef: `3`, tema: `Sistemas de base de dados distribuídos`,
    prg: `13. Quando cria uma base de dados, onde necessitam de serem criados?`, a: new aln(` No ficheiro de parâmetro de inicialização `, 0), b: new aln(` Na linha de comando do CREATE DATABASE`), c: new aln(` Na variável de ambiente`), d: new aln(` Ficheiro criado sob SORACLE_HOME e nome derivado de <db_name>.ctl`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `3/13`, testRef: `3`, tema: `Sistemas de base de dados distribuídos`,
    prg: `14. Que estrutura providencia consistência no nivel de leitura?`, a: new aln(` UNDO SEGMENTS`, 0), b: new aln(` REDO LOG FILES`), c: new aln(` DATA DICTIONARY TABLES `), d: new aln(` ARCHIVED REDO LOG FILES`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `3/14`, testRef: `3`, tema: `   Administracão  de bd`,
    prg: `15. O que determina o tamanho inicial de uma tablespace? `, a: new aln(` A cláusula INITIAL da instrução CREATE TABLESPACE`, 0), b: new aln(` A cláusula MINEXTENTS da instrução CREATE TABLESPACE`), c: new aln(` A cláusula MINIMUM EXTENT da instrução CREATE TABLESPACE `), d: new aln(` A soma das cláusulas INITIAL e NEXT da instrução CREATE TABLESPACE`), e: new aln(` A soma dos tamanhos de todos os data files especificados na instrução CREATETABLESPACE`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `3/15`, testRef: `3`, tema: `Sistemas de base de dados distribuídos`,
    prg: `16. Omitiu a cláusula UNDO tablespace no comando CREATE DATABASE. O parâmetro UNDO_MANAGEMENT está definido como AUTO. Qual o resultado do comando CREATE DATABASE?`, a: new aln(` O servidor ORACLE não cria undo tablespaces.`, 0), b: new aln(` O servidor ORACLE cria um undo tablespaces na tablespace SYSTEM`), c: new aln(` O servidor ORACLE cria um undo tablespaces com o nome SYS_UNDOTBS `), d: new aln(` A criação da base de dados falha porque não foi especificada um undo tablespace no comando CREATE DATABASE`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `3/16`, testRef: `3`, tema: `Sistemas de base de dados distribuídos`,
    prg: `17. Que comando é apropriado para alocar um role a um utilizador?`, a: new aln(` ALTER DATABASE `), b: new aln(` ALTER SYSTEM`), c: new aln(` GRANT`, 0), d: new aln(` ALTER USER`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `3/17`, testRef: `3`, tema: `   Administracão  de bd`,
    prg: `18. Que cláusula no comando CREATE USER pode ser usada para especificar que não há limite de espaço permitido na tablespace `, a: new aln(` DEFAULT TABLESPACE`), b: new aln(` UNLIMITED TABLESPACE`), c: new aln(` QUOTA`, 0), d: new aln(` PROFILE`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `3/18`, testRef: `3`, tema: `   Administracão  de bd`,
    prg: `19. Após um DBA criar um utilizador executando a instrução         CREATE USER Paulo IDENTIFIED BY abcd;
  
  o utilizador Paulo ainda não tem nenhum privilégio. Para conceder o privilégio de sistema para criar tabelas e views o DBA deve digitar no Oracle, a instrução`, a: new aln(` CREATE PERMISSION create table, create view TO Paulo;`), b: new aln(` CREATE GRANT table, view TO Paulo;`), c: new aln(` GRANT create table, create view TO Paulo; `), d: new aln(` CREATE ROLE create table, create view TO Paulo;`, 0), e: new aln(` GRANT OPTION create table AND create view TO Paulo;`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `3/19`, testRef: `3`, tema: `Sistemas de base de dados distribuídos`,
    prg: `20. Que acções causam um log switch? (Escolha duas)`, a: new aln(` Uma transacção termina.`), b: new aln(` A instância é iniciada.`), c: new aln(` A instância é desligada`), d: new aln(` O actual online redo log group está preenchido`, 0), e: new aln(` O comando ALTER SYSTEM SWITCH LOGFILE é emitido.`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `3/20`, testRef: `3`, tema: `   Mecanismos de gestão de transacções`,
    prg: `21. Considere:
  
  I. Se uma transacção é concluída com sucesso (operação commit bem-sucedid, então seus efeitos são persistentes.
  
  II. Ou todas as acções da transacção acontecem, ou nenhuma delas acontece.As propriedades (I) e (II) das transacções em SGBDs, significam, respectivamente,`, a: new aln(` Durabilidade e consistência `), b: new aln(` Persistência e automação`), c: new aln(` Isolação e atomicidade.`), d: new aln(` Durabilidade e atomicidade.`, 0), e: new aln(` Consistência e persistência.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `3/21`, testRef: `3`, tema: `   Mecanismos de gestão de transacções`,
    prg: `22.Sobre controle de concorrência de transacções, é correcto afirmar:`, a: new aln(` Bloqueios (lock) de tabelas são sempre realizados de forma automática pelo Oracle `), b: new aln(` O Oracle define modos de bloqueios para tabelas, para linhas de tabelas, para colunas de tabelas`), c: new aln(` Transacções só podem executar concorrentemente se estiverem a actuar sobre um protocolo do tipo serializável`), d: new aln(` Transacções de utilizadores, podem bloquear através de comandos SQL, tanto tabelas quanto partes do dicionário de dados`), e: new aln(` Um bloqueio mantido num recurso por uma transacção T é libertado somente quando T encerra com sucesso (commit) ou em decorrência de um rollback ou savepoint.`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `3/22`, testRef: `3`, tema: `Sistemas de base de dados distribuídos`,
    prg: `23. Trata-se de regras ou objectivos secundários aplicados aos SGBDs distribuídos:
  
  I. Processamento de consultas centralizado.
  
  II. Dependência de um site central.
  
  III. Independência de fragmentação.IV. Autonomia local.Está correcto o que consta APENAS em
  `, a: new aln(` I e II.`), b: new aln(` I, II e III.`), c: new aln(` II e III.`), d: new aln(` II, III e IV.`), e: new aln(` III e IV.`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `3/23`, testRef: `3`, tema: `Sistemas de base de dados distribuídos`,
    prg: `24. No Oracle, após um comando COMMIT ser executado`, a: new aln(` todos os savepoints são mantidos para que os dados possam ser salvos numa futura operaçãode backup.`), b: new aln(` o estado anterior dos dados pode ser recuperado mediante a utilização do comando ROLLBACK.`), c: new aln(` as linhas afectadas pelos comandos DML são bloqueadas e tornam-se indisponíveis paraserem manipuladas por outros utilizadores. `), d: new aln(` o utilizador actual pode rever os resultados das operações DML usando a instrução SELECTe, se necessário, retornar os dados ao seu estado anterior.`), e: new aln(` outros utilizadores poderão ver os resultados das operações DML do utilizador actual.`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `3/24`, testRef: `3`, tema: `Sistemas de base de dados distribuídos`,
    prg: `25. Um erro na rede, inesperadamente, termina a sessão do utilizador de base de dados. Que eventos ocorrem neste cenário? (escolha dois)`, a: new aln(` Ocorre um checkpoint.`), b: new aln(` Ocorre um commit.`), c: new aln(` PMON reverte transacção do utilizador actual.`, 0), d: new aln(` SMON reverte transacção do utilizador actual.`), e: new aln(` PMON liberta os bloqueios de tabela e linha mantidos pela sessão do utilizador.`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `3/25`, testRef: `3`, tema: `Sistemas de base de dados distribuídos`,
    prg: `26. Que método de nomeação usa o ficheiro tnsnames.ora para armazenar o conector de descrição usado pelo cliente enquanto se conecta a uma instância da base de dados duma máquina remota?`, a: new aln(` Host naming method`), b: new aln(` Local naming method`, 0), c: new aln(` External naming method`), d: new aln(` Directory naming method`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `3/26`, testRef: `3`, tema: ``,
    prg: `27. Que tipo de backup melhor representa um backup fechado? (Escolha duas)`, a: new aln(` ONLINE BACKUP `), b: new aln(` OFFLINE BACKUP`, 0), c: new aln(` HOT BACKUP`), d: new aln(` COLD BACKUP`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `3/27`, testRef: `3`, tema: `   Administracão  de bd`,
    prg: `28. Para auditar as actividades da base de dados executa o seguinte comando: 
  SQL> AUDIT DROP ANY TABLE BY scott BY SESSION WHENEVER SUCCESSFUL; 
  
  Qual é o efeito deste comando?`, a: new aln(` Um registo de auditoria é criado para toda a sessão se o utilizador SCOTT elimina com sucesso uma ou mais tabelas na sua sessão.`, 0), b: new aln(` Um registo de auditoria é criado para toda a sessão quando um utilizador qualquer eliminacom sucesso uma tabela propriedade de SCOTT. `), c: new aln(` Um registo de auditoria é criado para cada comando DROP TABLE bem-sucedido executadopor qualquer utilizador para eliminar tabelas propriedade de SCOTT.`), d: new aln(` Um registo de auditoria é gerado para a sessão quando SCOTT concede o privilégio DROPANY TABLE para outros utilizadores na sua sessão. `), e: new aln(` Um registo de auditoria é criado para cada comando DROP TABLE bem-sucedido na sessão de SCOTT.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `3/28`, testRef: `3`, tema: `   SGBD orientados a objectos`,
    prg: `29. Sobre uma pura base de dados orientada a objectos, considere:I. Os dados são armazenados como objectos que podem ser manipulados por métodos de acesso de SGBDs relacionais ou hierárquicos, apenas.II. Os objectos são organizados numa hierarquia de tipos e subtipos que recebem as características de seus supertipos.III. Os objectos não podem conter referências para outros objectos.É correcto o que consta em`, a: new aln(` I, apenas`), b: new aln(` II, apenas`, 0), c: new aln(` III, apenas`), d: new aln(` I e III, apenas`), e: new aln(` I, II e III`), imgs: [], fim: ""
  })
];

let bd2_t1_19 = [
  new Prg({
    cadNome: `Bd2`, pId: `1/0`, testRef: `1`, tema: `random++`,
    prg: `1. Que frase sobre instância Oracle é verdadeira? `, a: new aln(` Redo log buffer NÃO é parte de shared memory area de uma instância Oracle.`), b: new aln(` Múltiplas instâncias podem ser criadas no mesmo computer, acessando cada uma a sua própria base de dados fisica.`, 0), c: new aln(` Uma instância Oracle é uma combinação de estruturas de memória,processos background, e processos do utilizador.`), d: new aln(` Num ambiente de servidor partilhado (shared server),a componente da estrutura de memória de uma instância consiste de uma única SGA e uma única PGA.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/1`, testRef: `1`, tema: `random++`,
    prg: `2. Que frases são verdadeiras sobre o uso de online redo log files? (Escolha três.)`, a: new aln(` Redo log files são usados apenas para recovery.`, 0), b: new aln(` Cada redo log dentro de um grupo é chamado um membro. `), c: new aln(` Redo log files são organizados em, no mínimo, três grupos.`), d: new aln(` Uma base de dados Oracle requer pelo menos três online redo log members.`, 0), e: new aln(` Redo log files providencia um meio para redo transactions em caso de falha de uma instância.`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/2`, testRef: `1`, tema: `random++`,
    prg: `3. Que frase sobre shared pool é verdadeira?`, a: new aln(` A shared pool NÃO PODE ser dinamicamente redimensionada.`), b: new aln(` A shared pool contém apenas estruturas fixas.`), c: new aln(` A shared pool consiste de library cache e buffer cache. `), d: new aln(` A shared pool armazena instruções SQL mais recentemente executadas e definições de dados mais recentemente acessados.`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/3`, testRef: `1`, tema: `random++`,
    prg: `4. Que acções causam um log switch? (Escolha duas.)`, a: new aln(` Uma transacção termina.`, 0), b: new aln(` A instância é iniciada.`), c: new aln(` A instância é desligada `), d: new aln(` O actual online redo log group está preenchido`, 0), e: new aln(` O comando ALTER SYSTEM SWITCH LOGFILE é emitido.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/4`, testRef: `1`, tema: `random++`,
    prg: `5. Ao examinar o alert log file verifica que estão sendo gerados erros a partir de uma sessãode SQL*Plus. Qual o arquivo que lhe dá melhor e mais informação sobre a natureza doproblema? `, a: new aln(` Control file`), b: new aln(` User trace files`, 0), c: new aln(` Background trace files`), d: new aln(` Initialization parameter files`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/5`, testRef: `1`, tema: `random++`,
    prg: `6. Que tipo de arquivo é parte de uma base de dados Oracle?`, a: new aln(` Control file `, 0), b: new aln(` Password file`), c: new aln(` Parameter files`), d: new aln(` Archived log files`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/6`, testRef: `1`, tema: `random++`,
    prg: `7. Examine estas frases:1. MOUNT monta a base de dados para algumas actividades do DBA mas não providencia acessode usuário à base de dados. V2. NOMOUNT cria apenas o Data Buffer não providencia acesso à base de dados. F3. OPEN permite o usuário acessar a base de dados.4. STARTUP inicia uma instância. Que opção descreve corretamente se algumas ou todas as afirmações são verdadeiras ou falsas?`, a: new aln(` 2 e 3 são VERDADEIRAS `), b: new aln(` 1 e 3 são VERDADEIRAS`, 0), c: new aln(` 1 é VERDADEIRA, 4 é FALSA`), d: new aln(` 1 é FALSA, 4 é VERDADEIRA`), e: new aln(` 1 é FALSA, 3 é VERDADEIRA`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/7`, testRef: `1`, tema: `random++`,
    prg: `8. Num ambiente de base de dados Oracle, quando é criada a SGA?`, a: new aln(` Quando a base de dados é criada`), b: new aln(` Quando a instância é iniciada`, 0), c: new aln(` Quando a base de dados é montada`), d: new aln(` Quando um processo de usuário é iniciado`), e: new aln(` Quando um processo servidor é iniciado`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/8`, testRef: `1`, tema: `random++`,
    prg: `9. Tem uma base de dados com o DB_NAME configurado para PROD e ORACLE_SIDconfigurado para PROD. Estes arquivos estão, por defeito, no local para ficheiros de inicialização:-init.ora-initPROD.ora-spfile.ora-spfilePROD.oraA base de dados é iniciada com o seguinte comando:SQL> startup Que ficheiros de inicialização deve Oracle Server tentar ler, e em que ordem?`, a: new aln(` init.ora, initPROD.ora, spfilePROD.ora `), b: new aln(` spfile.ora, spfilePROD.ora, initPROD.ora`), c: new aln(` spfilePROD.ora, spfile.ora, initPROD.ora`, 0), d: new aln(` initPROD.ora, spfilePROD.ora, spfile.ora`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/9`, testRef: `1`, tema: `random++`,
    prg: `10. Que parâmetro de initialização determina a localização do alert log file?`, a: new aln(` USER DUMP_DEST`), b: new aln(` DB CREATE FILE DEST`), c: new aln(` BACKGROUND DUMP DEST`, 0), d: new aln(` DB_CREATE_ONLINE_LOG_DEST_n`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/10`, testRef: `1`, tema: `random++`,
    prg: `11. Necessita de encerrar a base de dados. Quer que todos os usuários que estão conectadossejam capazes de completer qualquer transacção em curso. Que modo de shutdown deve especificar no comando SHUTDOWN?`, a: new aln(` ABORT`), b: new aln(` NORMAL`), c: new aln(` IMMEDIATE`), d: new aln(` TRANSACTIONAL`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/11`, testRef: `1`, tema: `random++`,
    prg: `12. Extents são uma colecção lógica de contiguos`, a: new aln(` Segments `), b: new aln(` Database blocks`, 0), c: new aln(` Tablespaces`), d: new aln(` Operating system blocks`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/12`, testRef: `1`, tema: `random++`,
    prg: `13. Que processo de background realiza um checkpoint na base de dados, escrevendo blocos modificados do database buffer cache na SGA para data files?`, a: new aln(` LGWR `), b: new aln(` SMON`), c: new aln(` DBWn`, 0), d: new aln(` CKPT `), e: new aln(` PMON`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/13`, testRef: `1`, tema: `random++`,
    prg: `14. Qual a lista completa de components lógicos da base de dados Oracle?`, a: new aln(` Tablespaces, segments, extents, e data files`, 0), b: new aln(` Tablespaces, segments, extents, e Oracle blocks`), c: new aln(` Tablespaces, database, segments, extents, e data files`), d: new aln(` Tablespaces, database, segments, extents, e Oracle blocks `), e: new aln(` Tablespaces, segments, extents, data files, e Oracle blocks`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/14`, testRef: `1`, tema: `random++`,
    prg: `15. Que três opções constituem as estruturas fisicas da base de dados Oracle? (Escolha três.)`, a: new aln(` Table `), b: new aln(` Extent`), c: new aln(` Control file`, 0), d: new aln(` Data file`, 0), e: new aln(` Log file`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/15`, testRef: `1`, tema: `random++`,
    prg: `16. Quais as duas frases sobre segments são verdadeiras? (Escolha duas.) `, a: new aln(` Cada tabela num cluster tem o seu próprio segment.`), b: new aln(` Cada partição numa tabela particionada é um segment. `, 0), c: new aln(` Todos os dados num segment de tabela devem ser armazenados numa tablespace.`, 0), d: new aln(` Se uma tabela tem três indexes apenas um segment é usado para todos indexes. `), e: new aln(` Um segment é criado quando um extent é criado, estendido, ou alterado. `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/16`, testRef: `1`, tema: `random++`,
    prg: `17. Está a desenhar o layout fisico da base de dados. Qual a relação entre tablespaces e datafiles na base de dados Oracle? `, a: new aln(` Uma tablespace tem apenas um datafile.`), b: new aln(` Muitas tablespaces podem partilhar um datafile.`), c: new aln(` Uma tablespace pode ter muitos datafiles. `, 0), d: new aln(` Um datafile pode conter muitas tablespaces.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/17`, testRef: `1`, tema: `random++`,
    prg: `18. Que vista mostra o espaço disponível numa certa tablespace?`, a: new aln(` DBA EXTENTS `), b: new aln(` V$FREESPACE`), c: new aln(` DBA_FREE_SPACE`, 0), d: new aln(` DBA_TABLESPACES `), e: new aln(` DBA_FREE_EXTENTS`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/18`, testRef: `1`, tema: `random++`,
    prg: `19. A fim de descobrir quantos objectos de base de dados um usuário criou, que vista deve o DBA consultar no dicionário de dados Oracle?`, a: new aln(` DBA USERS `), b: new aln(` DBA_OBJECTS`, 0), c: new aln(` DBA_TS QUOTAS `), d: new aln(` DBA_TAB_PRIVS`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/19`, testRef: `1`, tema: `random++`,
    prg: `20. Identificou uma tabela na base de dados que está experimentando severo encadeamento de linha. Qual das seguintes opções identifica um caminho para corrigir o problema?`, a: new aln(` Aumentar PCTUSED. `), b: new aln(` Aumentar PCTFREE.`, 0), c: new aln(` Aumentar PCTINCREASE. `), d: new aln(` Aumentar NEXT.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/20`, testRef: `1`, tema: `random++`,
    prg: `21. Que privilégio é necessário para criar uma base de dados?`, a: new aln(` DBA `), b: new aln(` SYSDBA`, 0), c: new aln(` SYSOPER`), d: new aln(` RESOURCE`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/21`, testRef: `1`, tema: `random++`,
    prg: `22. A nova aplicação de Recursos Humanos será usada para gerir dados dos empregados na tabela EMPLOYEES. 
  Está a desenvolver uma estratégia para gerir privilégios do usuário. 
  A estratégia deve permitir conceder ou revogar privilégios de usuários individuais ou grupo de usuários,com um mínimo de esforço. 
  Os usuários da aplicação têm os seguintes requisitos:
  -Um Gestor deve ser capaz de ver a informação pessoal dos empregados no seu grupo e fazer mudanças no seu Titulo e Salario. 
  O que deve conceder ao usuário Gestor?++
  
  `, a: new aln(` Grant SELECT na tabela EMPLOYEES`), b: new aln(` Grant INSERT na tabela EMPLOYEES `), c: new aln(` Grant UPDATE na tabela EMPLOYEES`), d: new aln(` Grant SELECT na tabela EMPLOYEES e depois grant UPDATE nas colunas TITLE e SALARY `, 0), e: new aln(` Grant SELECT na tabela EMPLOYEES e depois grant INSERT nas colunas TITLE e SALARY `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/22`, testRef: `1`, tema: `random++`,
    prg: `23. Os usuários Pedro e Paulo deixaram a empresa. E não se pretende que eles tenham acesso à base de dados. Precisa de ter a certeza que os objectos por eles criados continuam na basede dados. O que precisa fazer?`, a: new aln(`A  Revogar o privilégio CREATE SESSION do usuário.`, 0), b: new aln(` Eliminar o usuário da base de dados com opção CASCADE.`), c: new aln(` Apagar os usuários e revogar o privilégio CREATE SESSION. `), d: new aln(` Apagar os usuários da base de dados, usando o comando DROP USER.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/23`, testRef: `1`, tema: `random++`,
    prg: `24. Que comando poderá revogar o role ROLE_EMP de todos os usuários?`, a: new aln(` REVOKE role_emp FROM ALL; `), b: new aln(` REVOKE role_emp FROM PUBLIC;`, 0), c: new aln(` REVOKE role_emp FROM default;`), d: new aln(` REVOKE role_emp FROM ALL_USERS:`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/24`, testRef: `1`, tema: `random++`,
    prg: `25. Como SYSDBA criou um role PAGADOR e concedeu o role a Ana. Ana por sua vez tenta 
  modificar o método de autenticação do role PAGADOR do SALARY para NOT IDENTIFIED,mas ao fazê-lo recebe uma mensagem de erro de privilégio insuficiente, como se vê em baixo.
  SQL> connect ana/crusader
         Connected.
  SQL> alter role pagador not identified; 
  alter role pagador not identified
  *
  ERROR at line 1: 
  ORA-01031: insufficient privileges
  
  Que privilégio Ana necessita ter para modificar o método de autenticação do role PAGADOR?
  
  `, a: new aln(` ALTER ANY ROLE `, 0), b: new aln(` MANAGE ANY ROLE`), c: new aln(` UPDATE ANY ROLE`), d: new aln(` MODIFY ANY ROLE`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/25`, testRef: `1`, tema: `random++`,
    prg: `26. Aceitou o cargo de DBA numa nova empresa. Uma das primeiras coisas que quer fazer é examinar a performance da base de dados. Que ferramenta o ajudará a fazer isso?`, a: new aln(` Recovery Manager `), b: new aln(` Oracle Enterprise Manager`, 0), c: new aln(` Oracle Universal Installer`), d: new aln(` Oracle Database Configuration Assistant`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/26`, testRef: `1`, tema: `random++`,
    prg: `27. O DBA está prestes a activar a auditoria na base de dados Oracle numa tentativa de descobrir actividades suspeitas. Informação de audit trail é guardada em qual dos seguinte objectos da base de dados?`, a: new aln(` SYS.SOURCES `), b: new aln(` SYS.AUD$`), c: new aln(` DBA_SOURCE`), d: new aln(` DBA_AUDIT_TRAIL`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/27`, testRef: `1`, tema: `random++`,
    prg: `28. Como DBA, está tentando limitar o uso indevido, por parte dos usuários, da capacidade do Oracle para usar recursos da máquina. Qual dos seguintes recursos da base de dadosOracle é útil para este propósito? `, a: new aln(` UNDO segments`), b: new aln(` Roles `), c: new aln(` Profiles`, 0), d: new aln(` Parameter files`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/28`, testRef: `1`, tema: `random++`,
    prg: `29. O DBA está a definir role para usuários. Qual das seguintes opções não é método aceitávelpara definir default role? `, a: new aln(` ALTER USER DEFAULT ROLE ALL;`), b: new aln(` ALTER USER DEFAULT ROLE ALL EXCEPT ROLE_1; `), c: new aln(` ALTER USER DEFAULT ROLE NONE;`), d: new aln(` ALTER USER DEFAULT ROLE NONE EXCEPT ROLE_1;`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/29`, testRef: `1`, tema: `random++`,
    prg: `30. Para alocar outro role a um usuário, qual o commando mais apropriado?`, a: new aln(` ALTER USER `), b: new aln(` ALTER DATABASE`), c: new aln(` ALTER SYSTEM`), d: new aln(` GRANT`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/30`, testRef: `1`, tema: `random++`,
    prg: `31. Que ferramenta gráfica de administração o DBA usará para sintonizar(tun uma base de dados Oracle?`, a: new aln(` SQL*Plus`), b: new aln(` Oracle Enterprise Manager `, 0), c: new aln(` Oracle Universal Installer`), d: new aln(` Oracle Database Configuration Assistant`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/31`, testRef: `1`, tema: `random++`,
    prg: `32. O que providencia informação para recuperação de dados que não foram escritos para os data files antes da falha?`, a: new aln(` Redo log`, 0), b: new aln(` Undo segment`), c: new aln(` Rollback segment`), d: new aln(` System tablespace`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/32`, testRef: `1`, tema: `random++`,
    prg: `33. Deve fazer back up do control file, após que comandos serem executados? (Escolha dois.)`, a: new aln(` CREATE USER `), b: new aln(` CREATE TABLE`), c: new aln(` CREATE INDEX`), d: new aln(` CREATE TABLESPACE `, 0), e: new aln(` ALTER TABLESPACE <tablespace name> ADD DATAFILE`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/33`, testRef: `1`, tema: `random++`,
    prg: `34. Em que estado necessita de estar a BD para permitir archiving?`, a: new aln(` Opened `), b: new aln(` Closed`), c: new aln(` Mounted`, 0), d: new aln(` Unmounted`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/34`, testRef: `1`, tema: `random++`,
    prg: `35. A tabela ORDEM tem uma carga de transacção constante de 24 horas por dia, por isso,tempo de inactividade não é permitido. Os indexes tornam-se fragmentados. Que frase é verdadeira?`, a: new aln(` O index necessita de ser apagado e então re-criado. `), b: new aln(` A resolução da fragmentação do index depende do tipo de index.`), c: new aln(` index pode ser reconstruído enquanto os usuários continuam a trabalhar sobre a tabela. `, 0), d: new aln(` O index pode ser reconstruído, mas os usuários não têm acesso ao index durante esse tempo. `), e: new aln(` A fragmentação pode ser ignorada porque Oracle resolve fragmentação do index por meio de freelist.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/35`, testRef: `1`, tema: `random++`,
    prg: `36. A base de dados está em modo ARCHIVELOG. Que frases devem ser verdadeiras antes do Log Writer (LGWR) poder reusar um redo log file online preenchido? (Escolha duas). `, a: new aln(` O redo log file deve ser arquivado.`), b: new aln(` Todos os data files devem ser backed up.`), c: new aln(` Todas as transacções com entrada no redo log file devem completar-se. `, 0), d: new aln(` Os data files pertencentes a tablespace SYSTEM devem ser backed up.`), e: new aln(` As mudanças registadas no redo log file devem ser escritas para os data files.`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/36`, testRef: `1`, tema: `random++`,
    prg: `37. Que tipo de backup melhor representa um backup aberto? (Escolha duas)`, a: new aln(` Online backup `, 0), b: new aln(` Offline backup`), c: new aln(` Hot backup`, 0), d: new aln(` Cold backup`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/37`, testRef: `1`, tema: `random++`,
    prg: `38. Quando se usa RMAN, em que modo deve estar a BD para realizar restore e recovery?`, a: new aln(` Opened`), b: new aln(` Nomount`), c: new aln(` Closed`), d: new aln(` Mount`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/38`, testRef: `1`, tema: `random++`,
    prg: `39. Que tipo de backup de base de dados requer um shutdown da mesma? (Escolha duas) `, a: new aln(` Uma base de dados em ARCHIVELOG `), b: new aln(` Uma base de dados em NOARCHIVELOG`, 0), c: new aln(` Cold backup (offline backup)`), d: new aln(` Hot Backup (online backup)`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `1/39`, testRef: `1`, tema: `random++`,
    prg: `40. Quais dos seguintes são processos associados com recovery? (Escolha três)`, a: new aln(` PMON `, 0), b: new aln(` SMON`, 0), c: new aln(` ARCn`, 0), d: new aln(` DBWR`), e: new aln(``), imgs: [], fim: ""
  })
];

let bd2_t1_23 = [
  new Prg({
    cadNome: `Bd1`, pId: `0/0`, testRef: `0`, tema: ``,
    prg: `1. Entre as funções listadas abaixo, assinale a que NÃO É da competência especifica de um DBA. `, a: new aln(`Conceder autorização para acesso a dados a utilizadores.`), b: new aln(`Zelar pela integridade da base de dados e definir procedimentos para criação e recuperação debackups. `), c: new aln(`Auxiliar equipes de desenvolvimento e de testes a maximizar o desempenho e uso da base dedados.`), d: new aln(` Planear, documentar, gerir e integrar recursos de informações corporativas de forma a manter as regras de negócio cocrentes.`, 0), e: new aln(` Projectar o armazenamento dos dados de forma a atender às necessidades de acesso.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/1`, testRef: `0`, tema: ``,
    prg: `2. Quais são as duas afirmações verdadeiras sobre a arquitectura do servidor de base de dados Oracle? `, a: new aln(` Um processo de servidor de base de dados Oracle representa o estado de login de um utilizador numa instância.`), b: new aln(` Um processo do servidor de base de dados Oracle está sempre associado a uma sessão.`), c: new aln(` Cada processo do servidor tem sua própria Program Global Area (PGA). `, 0), d: new aln(` Uma conexão representa o estado de login de um utilizador numa instância.`, 0), e: new aln(` Todo o dicionário de dados é sempre armazenado em cache no pool grande.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/2`, testRef: `0`, tema: ``,
    prg: `3. Quando um processo de usuário falha, qual processo em segundo plano limpa depois disso?`, a: new aln(` PCLEAN`), b: new aln(` PMON`, 0), c: new aln(` SMON`), d: new aln(` CKPT`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/3`, testRef: `0`, tema: ``,
    prg: `4. PFILE é simplesmente um arquivo em texto`, a: new aln(` Verdadeiro.`, 0), b: new aln(` Falso.`), c: new aln(``), d: new aln(` CKPT`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/4`, testRef: `0`, tema: ``,
    prg: `5. Qual é a área de memória que é criada quando um processo de servidor dedicado é inicializado, e contém dados e informação de control daquele processo servidor?`, a: new aln(` SGA`), b: new aln(` PGA`, 0), c: new aln(` Shared Pool`), d: new aln(` Streams Pool`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/5`, testRef: `0`, tema: ``,
    prg: `6. A shared pool consiste de library cache e database buffer cache.`, a: new aln(` Verdadeiro.`), b: new aln(` Falso.`, 0), c: new aln(``), d: new aln(` Streams Pool`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/6`, testRef: `0`, tema: ``,
    prg: `7. Quais são as duas afirmações verdadeiras sobre os arquivos de rastreamento (trace fil produzidospelo servidor Oracle Database? (Escolha duas.)`, a: new aln(` Eles podem ser escritos por processos servidor `, 0), b: new aln(` Os arquivos de rastreamento são gravados na Fast Recovery Area (FRA)`), c: new aln(` Eles podem ser escritos por processos em segundo plano `, 0), d: new aln(` Todos os arquivos de rastreamento contêm informações de erro que exigem contacto com o Suporte Oracle`), e: new aln(` Os nomes dos arquivos de rastreamento são baseados no nome da base de dados concatenadocom um número sequencial`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/7`, testRef: `0`, tema: ``,
    prg: `8. Seja uma Base de Dados no qual um DBA modifica com sucesso a lista de control files no pfile, apontando apenas para um CONTROL01 CTL inexistente na Base de Dados XE. O que acontece ao iniciar normalmente a instância, montar a base de dados e abrir a base de dados (STARTUP). `, a: new aln(` Apenas é inicializada a instância`), b: new aln(` Inicializa-se a instância, monta-se a Base de Dados XE e abre-se a Base de Dados XE`), c: new aln(` Será exibida uma mensagem de erro (ora-00205: error in identifying control file, check alert log for more info)`, 0), d: new aln(` Inicializa-se a instância, monta-se a Base de Dados XE, mas dá erro ao tentar abrir a Base deDados `), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/8`, testRef: `0`, tema: ``,
    prg: `9. Toda a estrutura da base de dados é mantida num ficheiro chamado:`, a: new aln(` REDOLOG FILE `), b: new aln(` DATA FILE`), c: new aln(` CONTROL FILE`, 0), d: new aln(` PARAMETER FILE`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/9`, testRef: `0`, tema: ``,
    prg: `10. A instância de base de dados foi encerrada normalmente e iniciada no estado NOMOUNT. A seguir, executa este comando:ALTER DATABASE MOUNT;Quais são as duas acções executadas? (Escolha duas.)`, a: new aln(` Os redo logs online são abertos. `), b: new aln(` Os arquivos de dados online são abertos`), c: new aln(` O alert log regista os detalhes da execução`, 0), d: new aln(` Os processos em segundo plano do Oracle são iniciados`), e: new aln(` O arquivo de controle é lido`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/10`, testRef: `0`, tema: ``,
    prg: `11. Seja dado o seguinte cenário de BD, no qual existe uma tabela ALUNOS com 5mil registos. 1. Desmontar a Base de Dados, parar a BD e fechar a instância;2. Inicializar apenas a instância da Base de Dados; 3. Montar a Base de Dado e abrir a Base de Dados;4. Visualizar todos os registos da tabela ALUNOS:5. ?Identifique nas opções abaixo os comandos envolvidos para permitir uma mensagem positiva na linha 5:`, a: new aln(` SHUTDOWN, STARTUP, ALTER DATABASE OPEN; SELECT * FROM ALUNOS; `), b: new aln(` SHUTDOWN, STARTUP, ALTER DATABASE MOUNT: DESC ALUNOS;`), c: new aln(` SHUTDOWN, STARTUP NO MOUNT, STARTUP; SELECT * FROM ALUNOS;`), d: new aln(` SHUTDOWN, STARTUP NO MOUNT, ALTER DATABASE OPEN; SELECT * FROM ALUNOS;`, 0), e: new aln(` NENHUMA DAS ALTERNATIVAS ANTERIORES`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/11`, testRef: `0`, tema: ``,
    prg: `12. O____ regista todas as alterações feitas nos dados:`, a: new aln(` REDO LOG`, 0), b: new aln(` ARCHIVE LOG`), c: new aln(` Ambos A e B`), d: new aln(` DATA FILE`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/12`, testRef: `0`, tema: ``,
    prg: `13. DBA_DATA_FILES é usado para?`, a: new aln(` Ver todos os arquivos de dados`, 0), b: new aln(` Ver os caracteres de um arquivo de dados`), c: new aln(` Ambos B e D`), d: new aln(` Ver o tamanho de um arquivo de dados`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/13`, testRef: `0`, tema: ``,
    prg: `14. Os seguintes parámetros são opcionais no ficheiro de parâmetros init.ora: DB_BLOCK_SIZE,PROCESS. `, a: new aln(` VERDADEIRO `), b: new aln(` FALSO`, 0), c: new aln(``), d: new aln(` Ver o tamanho de um arquivo de dados`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/14`, testRef: `0`, tema: ``,
    prg: `15. Que processo de background realiza um checkpoint na base de dados, escrevendo blocos modificados do database buffer cache na SGA para data files?`, a: new aln(` LGWR `), b: new aln(` SMON`), c: new aln(` DBWn`, 0), d: new aln(` PMON`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/15`, testRef: `0`, tema: ``,
    prg: `16. Examine os seguintes parâmetros de inicialização:MEMORY_MAX_TARGET = 0MEMORY_TARGET= 500MSGA TARGET= 300MPGA_AGGREGATE_TARGET = 70MQual afirmação é verdadeira sobre gestão de memória para a instância de base de dados recém iniciada?`, a: new aln(`MEMORY_TARGET define o limite máximo para SGA_TARGET.`), b: new aln(` SGA_TARGET e PGA_AGGREGATE_TARGET combinados nunca crescerão além de 500M.`, 0), c: new aln(` O valor para MEMORY_MAX_TARGET é a soma de SGA_TARGET e PGA_AGGREGATE_TARGET`), d: new aln(` SGA_TARGET e PGA_AGGREGATE_TARGET continuarão crescendo até um máximo de 300M e 70M, respectivamente`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/16`, testRef: `0`, tema: ``,
    prg: `17. O processo LGWR grava as informações em`, a: new aln(` Arquivos de base de dados.`), b: new aln(` Arquivos de controle.`), c: new aln(` Arquivos redolog.`, 0), d: new aln(` Arquivos archived log.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/17`, testRef: `0`, tema: ``,
    prg: `18. O tamanho de uma tablespace pode ser aumentada por:`, a: new aln(` Aumentando o tamanho de um dos datafile.`), b: new aln(` Adicionando um ou mais datafiles.`), c: new aln(` Não pode ser aumentada.`), d: new aln(` Nenhuma das acima.`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/18`, testRef: `0`, tema: ``,
    prg: `19. Relativamente a instância e base de dados XE e, recorrendo aos comandos do bash e sqlplus,sequencialmente, executar as seguintes acções:i. Desmontar a base de dados, parar a base de dados e parar a instância. ii. Copiar todos control files pertencentes a base de dados XE para a directoria ./temp.iii. Iniciar a Instância e montar a Base de Dados XE.O que é possível observar?`, a: new aln(` Mensagem de ERRO:(ora-00205: error in identifying control file, check alert log for more info)`), b: new aln(` Mensagem de SUCESSO:  Database Mounted.`), c: new aln(` Mensagem de ERRO:
   Oracle instance opened 
  Database Mounted.`), d: new aln(` Mensagem de SUCESSO:     
  Oracle instance opened     
  Database Mounted.`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/19`, testRef: `0`, tema: ``,
    prg: `20. Que comando deveria executar um Administrador de Base de Dados que pretende verificar oscontrol files utilizados por uma Base de Dados XE.I. select name from V$CONTROLFILE;II. grep -i '.ctl' $ORACLE_HOME/dbs/initXE.ora;III. select name from $CONTROLFILE_RECORD_SECTION;IV. find /-name V$CONTROLFILE;Indique a opção correcta:`, a: new aln(` Alternativa I`), b: new aln(` Alternativa II`), c: new aln(` Alternativas I e II`, 0), d: new aln(` Alternativa III`), e: new aln(` Nenhuma das alternativas`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/20`, testRef: `0`, tema: ``,
    prg: `21. Todos os arquivos de dados relacionados a uma tablespace são removidos quando a tablespace édescartada`, a: new aln(` Verdadeiro.`, 0), b: new aln(` Falso`), c: new aln(``), d: new aln(` Alternativa III`), e: new aln(` Nenhuma das alternativas`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/21`, testRef: `0`, tema: ``,
    prg: `22. Que estrutura providencia consistência no nível de leitura?`, a: new aln(` UNDO SEGMENTS `, 0), b: new aln(` REDO LOG FILES`), c: new aln(` DATA DICTIONARY TABLES`), d: new aln(`D ARCHIVED REDO LOG FILES`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/22`, testRef: `0`, tema: ``,
    prg: `23. Quais são as duas afirmações verdadeiras em relação à gestão de espaço livre em blocos de dados?(escolha duas) `, a: new aln(` O padrão PCTFREE é 10% para todos os blocos em todos os segmentos para todos os métodos de compactação`), b: new aln(` As operações de actualização sempre tentam encontrar blocos com espaço livre apropriado ao comprimento da linha que está sendo actualizada.`, 0), c: new aln(` As operações de inserção sempre tentam encontrar blocos com espaço livre apropriado aocomprimento da linha que está sendo inserida`), d: new aln(` Um bloco sempre será elegível para inserções se a linha for curta o suficiente para caber no bloco`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/23`, testRef: `0`, tema: ``,
    prg: `24. Quais são as duas afirmações verdadeiras sobre segmentos de undo e o uso de undo por transações numa instância de base de dados Oracle? (Escolha duas)`, a: new aln(` Um segmento de undo pode ser usado por várias transações simultaneamente`, 0), b: new aln(` Os segmentos de undo podem envolver a primeira extensão quando uma transação preenche a última extensão do segmento de undoC. Os segmentos de undo têm no mínimo três extensões`), c: new aln(` Os segmentos de undo podem se estender quando uma transação preenche a última extensão dosegmento de undo`), d: new aln(` Uma única transação pode usar vários segmentos de undo simultaneamente`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/24`, testRef: `0`, tema: ``,
    prg: `25. Quais são as duas afirmações verdadeiras sobre vistas usadas para visualizar informações de tablespaces e datafiles? (Escolha duas.)`, a: new aln(` O espaço livre da tablespace pode ser visualizada em V$TABLESPACE`), b: new aln(` V$TABLESPACE exibe informações que estão contidas no controlfile sobre tablespaces`), c: new aln(` V$TABLESPACE exibe informações sobre tablespaces contidos no dicionário de dados`), d: new aln(` O espaço livre da tablespace pode ser visualizado em DBA_TABLESPACES`, 0), e: new aln(` Um arquivo de dados pode ser renomeado quando a base de dados está no estado MOUNT e o novo nome do arquivo é exibido ao consultar DBA_DATA_FILES depois que a base de dados é aberta`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/25`, testRef: `2`, tema: ``,
    prg: `26. Muitas tablespaces podem partilhar um único datafile.`, a: new aln(` Verdadeiro.`), b: new aln(` Falso `, 0), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `2/26`, testRef: `2`, tema: ``,
    prg: `27. Quando uma transacção modifica a base de dados, Oracle copia os dados originais antes de modificá-los. A cópia original dos dados modificados é chamada `, a: new aln(` ARCHIVE DATA`), b: new aln(` REDO DATA`), c: new aln(` UNDO DATA`, 0), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/27`, testRef: `0`, tema: ``,
    prg: `28. Os privilégios de sistema SYSDBA e SYSOPER permitem acesso a uma instância de base de dados mesmo quando a base de dados não está aberta`, a: new aln(` Verdadeira`, 0), b: new aln(` Falsa`), c: new aln(``), d: new aln(``), e: new aln(` Um arquivo de dados pode ser renomeado quando a base de dados está no estado MOUNT e o novo nome do arquivo é exibido ao consultar DBA_DATA_FILES depois que a base de dados é aberta`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/28`, testRef: `0`, tema: ``,
    prg: `29. Criou um utilizador executando o seguinte comando:SQL> CREATE USER user01 IDENTIFIED BY user01      DEFAULT TABLESPACE users    TEMPORARY TABLESPACE temp; A seguir concedeu privilégios ao user01 executando o seguinte comando:SQL> GRANT CREATE SESSION, CREATE TABLE TO user01;Quais das seguintes opcões é verdadeira neste cenário? (Escolha duas)`, a: new aln(` O utilizador pode efectuar log in na instância da base de dados`, 0), b: new aln(` O utilizador pode criar tabelas`, 0), c: new aln(` O utilizador não pode consultar nenhuma tabela`), d: new aln(` O utilizador pode conceder o privilégio CREATE SESSION a outros utilizadores`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/29`, testRef: `0`, tema: ``,
    prg: `30. Seja dado o cenário:O Administrador de Base de Dados, recebeu notificação sobre um utilizador que não consegue conectar ao SQLPlus para executar o comando (SELECT * FROM ALUNOS) na Base de Dados, Nas opções abaixo indique o que é necessário para ter informação referente sobre o que está acontecer?`, a: new aln(` Consultar se o utilizador tem o privilégio SELECT table.`), b: new aln(` Consultar informação nos registos da auditoria activa na Base de Dados.`), c: new aln(` Consultar se o utilizador tem o privilégio GRANT.`), d: new aln(` Consultar se o utilizador tem o privilégio CONNECT.`, 0), e: new aln(` Nenhuma das alternativas anteriores.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/30`, testRef: `0`, tema: ``,
    prg: `31. Seja uma Base de Dados no qual um Administrador está a gerir todas as tablespaces existentes. O Administrador em causa quer garantir que os utilizadores alocados a cada tablespace tenham espaço limitado (ex: 1M) para utilização.Nas opções abaixo indique qual comando deverá utilizar para resolver o problema acima: `, a: new aln(` Definir o tamanho QUOTA durante a criação do utilizador`, 0), b: new aln(` Definir o tamanho do DATAFILE igual a IM durante a criação da tablespace `), c: new aln(` Definir o atributo LOCAL UNIFORME size IM durante a criação da tablespace`), d: new aln(` Utilizar o atributo DEFAULT TABLESPACE size IM durante a criação do utilizador`), e: new aln(` Todas as alternativas anteriores`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/31`, testRef: `0`, tema: ``,
    prg: `32. Executa o seguinte comando:SQL> DROP USER user01;   The command fails displaying the following error:    ORA-01922: CASCADE must be specified to drop 'USER01'O que causou a falha no comando?`, a: new aln(` O password do utilizador expirou. `), b: new aln(` A conta do utilizador está bloqueada.`), c: new aln(` O esquema da base de dados tem objectos na base de dados.`, 0), d: new aln(` O utilizador está conectado à base de dados.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/32`, testRef: `0`, tema: ``,
    prg: `33. Quais são os quatro recursos de gestão de contas que podem ser configurados usando perfis (profil Oracle? (Escolha quatro.)`, a: new aln(` O número de horas para o qual uma conta é bloqueada após o número configurado de tentativas de login ter sido alcançado`, 0), b: new aln(` o número de dias durante os quais uma conta pode ficar inativa antes de ser bloqueada`, 0), c: new aln(` o número de dias durante os quais uma conta é bloqueada após o número configurado de Tentativas de login ter sido atingido`), d: new aln(` a capacidade de impedir que uma senha seja reutilizada`, 0), e: new aln(` o número de alterações de senha necessárias dentro de um período antes que uma senha possa ser reutilizada`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/33`, testRef: `0`, tema: ``,
    prg: `34. Seja dada o seguinte cenário no qual um utilizador A tenta verificar tudo que foi feito na base de Dados do seu estabelecimento. Nas opções abaixo indique o que é necessário para ter informação relativas a TODAS as operações feitas na Base de Dados.`, a: new aln(` Entrar como utilizador SYS ou SYSDBA`), b: new aln(` Utilizar o comando SELECT para consultar toda Base de Dados XE (SELECT FROM DATABASES)`), c: new aln(` Activar auditoria na tablespace USER`), d: new aln(` Utilizar o comando SELECT para consultar todas as operações feitas pelo utilizador A`), e: new aln(` Nenhuma das Operações anteriores`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/34`, testRef: `0`, tema: ``,
    prg: `35. Para auditar as actividades da base de dados executa o seguinte comando:    SQL> AUDIT DROP ANY TABLE BY scott BY SESSION WHENEVER SUCCESSFUL;Qual é o efeito deste comando?`, a: new aln(` Um registo de auditoria é criado para toda a sessão se o utilizador SCOTT elimina com sucesso uma ou mais tabelas na sua sessão `, 0), b: new aln(` Um registo de auditoria é criado para toda a sessão quando um utilizador qualquer elimina comsucesso uma tabela propriedade de SCOTT `), c: new aln(` Um registo de auditoria é criado para cada comando DROP TABLE bem-sucedido executado por qualquer utilizador para eliminar tabelas propriedade de SCOTT`), d: new aln(` Um registo de auditoria é criado para cada comando DROP TABLE bem-sucedido na sessão de SCOTT`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/35`, testRef: `0`, tema: ``,
    prg: `36. Qual arquivo de backup e recuperação do Oracle contém dados do utilizador e do sistema?`, a: new aln(` CONTROL FILE`), b: new aln(` DATAFILE`, 0), c: new aln(` ONLINE REDO FILE`), d: new aln(` OFFLINE REDO FILE`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/36`, testRef: `0`, tema: ``,
    prg: `37. Qual das opções a seguir é a forma para recuperar uma base de dados após o término anormal de uma transacção em andamento?`, a: new aln(` Rollback`, 0), b: new aln(` Rollforward`), c: new aln(` Mudar para uma base de dados duplicada`), d: new aln(` Reprocessar a transacção`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/37`, testRef: `0`, tema: ``,
    prg: `38. Para criar um backup_______,a base de dados deve ter sido encerrada normalmente.`, a: new aln(` Hot`), b: new aln(` Consistente`, 0), c: new aln(` Inconsistente`), d: new aln(` Soft`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/38`, testRef: `0`, tema: ``,
    prg: `39. A recuperação para trás (backward recorevy) é qual das seguintes opções?`, a: new aln(` Onde as imagens do segmento de rollback são aplicadas à base de dados `, 0), b: new aln(` Onde as imagens do ficheiro redo log são aplicadas à base de dados`), c: new aln(` Onde as duas imagens são aplicadas à base de dados`), d: new aln(` Mudança para uma cópia da base de dados existente`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd1`, pId: `0/39`, testRef: `0`, tema: ``,
    prg: `40. A técnica de restauração/recuperação (restore/recovere envolve o reprocessamento das transações do dia até ao ponto de falha`, a: new aln(` Verdadeiro`, 0), b: new aln(` Falso`), c: new aln(``), d: new aln(` Mudança para uma cópia da base de dados existente`), e: new aln(``), imgs: [], fim: ""
  })
];

let bd2_r_16 = [
  new Prg({
    cadNome: `Bd2`, pId: `/0`, testRef: ``, tema: ``,
    prg: `1. Que processo de segundo plano não é inicializado por defeito, quando se inicializa uma instância,Oracle?`, a: new aln(`DBWn
  ,`), b: new aln(`LGWR
  ,`), c: new aln(`CKPT
  ,`), d: new aln(`ARCn
  ,`, 0), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `/1`, testRef: ``, tema: ` Administracão  de bd`,
    prg: `2. Escolha a hierarquia correcta, do maior ao menor, desta lista de estrutura lógica da base de dados.`, a: new aln(`Database, tablespace, extent, segment, block 
  ,`), b: new aln(`Database, tablespace, segment, extent, block
  ,`, 0), c: new aln(`Database, segment, tablespace, extent, block
  ,`), d: new aln(`Database, extent, tablespace, segment, block
  ,`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `/2`, testRef: ``, tema: ` Administracão  de bd`,
    prg: `3. Que opção de startup é inválida?
  ,`, a: new aln(`STARTUP NORMAL 
  ,`, 0), b: new aln(`STARTUP MOUNT
  ,`), c: new aln(`STARTUP NOMOUNT 
  ,`), d: new aln(`STARTUP FORCE
  ,`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `/3`, testRef: ``, tema: ` Administracão  de bd`,
    prg: `4. Qual o principal beneficio em se usar o SPFILE para manter o ficheiro de parâmetros?
  ,`, a: new aln(`O SPFILE pode ser espelhado noutros drives, ao contrário do PFILE 
  ,`), b: new aln(`Mudanças na configuração da base de dados podem tornar-se persistentes durante o shutdown e startup
  ,`, 0), c: new aln(`Porque o SPFILE é binário, o administrador de BD não poderá editá-lo 
  ,`), d: new aln(`O comando ALTER SYSTEM não pode modificar o SPFILE.
  ,`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `/4`, testRef: ``, tema: ` Administracão  de bd`,
    prg: `5. Que frase sobre instância Oracle é verdadeira? 
  `, a: new aln(`Numa instância Oracle, redo log buffer não é parte da área de memória partilhada
  `), b: new aln(`Múltiplas instâncias podem executar-se no mesmo computador, acessando cada uma a sua própria base de dados fisica
  `, 0), c: new aln(`Uma instância Oracle é uma combinação de estruturas de memória, processos de segundo plano
  e processos do utilizador`), d: new aln(`Num ambiente de servidor parthado, a componente estrutura de memória de uma instância consiste de uma única SGA e uma única PGA.
  `), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `/5`, testRef: ``, tema: ` Administracão  de bd`,
    prg: `6. Quando cria uma base de dados, onde Oracle encontra informação sobre control files que,necessitam de serem criados?
  ,`, a: new aln(`No ficheiro de parámetro de inicialização
  ,`, 0), b: new aln(`Na linha de comando do CREATE DATABASE
  ,`), c: new aln(`Na variável de ambiente 
  ,`), d: new aln(`Ficheiro criado sob SORACLE_HOME e nome derivado de <db_name>.ctl
  ,`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `/6`, testRef: ``, tema: ` Administracão  de bd`,
    prg: `7. Que frases sobre o uso de online redo log file são verdadeiras? (escolha três)
  `, a: new aln(`Redo log files são usados apenas para recovery
  `, 0), b: new aln(`Cada redo log dentro de um grupo é chamado de membro 
  `, 0), c: new aln(`Redo log files são organizados num mínimo em três grupos
  `), d: new aln(`Uma base de dados Oracle precisa, pelo menos, de três online redo log members.
  `), e: new aln(`Redo log files providencia o meio de recuperar transacções, quando da falha de uma instância
  `, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `/7`, testRef: ``, tema: ` Administracão  de bd`,
    prg: `8.A BD tem uma tablespace de tamanho uniforme, gerida localmente, 
  ,com gestão automática de espaço de segmento, que contém apenas tabelas. 
  ,Neste momento, o tamanho uniforme para a tablespace é de 512K. 
  ,Porque as tabelas irão tornar-se muito grandes, a sua configuração deve mudar para melhorar o desempenho. 
  ,Agora as tabelas devem residir numa tablespace gerida localmente 
  ,com tamanho uniforme de 5 MB e gestão automática de espaço de segmento.
  ,`, a: new aln(`As novas exigências não podem ser satisfeitas
  ,`), b: new aln(`Re-criar o control file com as novas configurações
  ,`), c: new aln(`Utilizar o commando ALTER TABLESPACE para aumentar o tamanho uniforme
  ,`), d: new aln(`Criar uma nova tablespace com as configurações correctas, em seguida, mover as tabelas para a
  ,nova tablespace.
  ,`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `/8`, testRef: ``, tema: ` Administracão  de bd`,
    prg: `9. Que tipo de arquivos não são parte de uma base de dados Oracle? (escolha dois)
  ,`, a: new aln(` Control file
  ,`), b: new aln(`Password file
  ,`, 0), c: new aln(`Parameter files
  ,`, 0), d: new aln(`Redo log files 
  ,`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `/9`, testRef: ``, tema: ` Administracão  de bd`,
    prg: `10. Como elimina uma tablespace se não está vazia? 
  `, a: new aln(`Renomeia todos os objectos na tablespace e depois elimina a tablespace.
  `), b: new aln(`Remove do disco os data files da tablespace 
  `), c: new aln(`Usa ALTER DATABASE DROP <Tablespace Name> CASCADE
  `), d: new aln(`Usa DROP TABLESPACE Tablespace
  `, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `/10`, testRef: ``, tema: ` Administracão  de bd`,
    prg: `11. Que visão do dicionário de dados deverá consultar para saber os extents livres numa tablespace.
  ,`, a: new aln(`DBA TABLESPACES
  ,`), b: new aln(`DBA EXTENTS
  ,`), c: new aln(`DBA FREE SPACE 
  ,`, 0), d: new aln(`DBA SEGMENTS
  ,`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `/11`, testRef: ``, tema: ` Administracão  de bd`,
    prg: `12. Que comando é usado para assignar um profile a um utilizador que já existe? 
  ,`, a: new aln(`ALTER PROFILE
  ,`, 0), b: new aln(`ALTER USER
  ,`), c: new aln(`SET PROFILE
  ,`), d: new aln(`O profile deve ser especificado quando se cria o utilizador, não pode ser mudado.
  ,`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `/12`, testRef: ``, tema: ` Administracão  de bd`,
    prg: `13. Que cláusula no comando CREATE USER pode ser usada para especificar que não há limite no,espaço permitido numa tablespace?`, a: new aln(`DEFAULT TABLESPACE 
  ,`), b: new aln(`UNLIMITED TABLESPACE
  ,`), c: new aln(`QUOTA
  ,`, 0), d: new aln(`PROFILE
  ,`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `/13`, testRef: ``, tema: ` Administracão  de bd`,
    prg: `14. Que cláusula deve especificar para permitir que se possa conceder o privilégio de sistema a outros,utilizadores?`, a: new aln(`CASCADE
  ,`), b: new aln(`WITH ADMIN OPTION
  ,`, 0), c: new aln(`WITH GRANT OPTION 
  ,`), d: new aln(`WITH MANAGE OPTION
  ,`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `/14`, testRef: ``, tema: ` Sistemas de base de dados distribuídos`,
    prg: `15. Uma das formas de implementação de uma base de dados ocorre por meio da distribuição de dados em mais de um local. ,Essa distribuição pode ser feita por meio da chamada fragmentação vertical,na qual`, a: new aln(`Os indices são divididos em dois indices, sendo que há um indice principal e um outro
  ,secundário`), b: new aln(`O arquivo de log da base de dados sofre um processo de criptografia e armazenamento
  ,redundante`), c: new aln(`As tabelas da base de dados são decompostas, ou seja, os atributos das tabelas são divididos nos
  ,diversos locais`, 0), d: new aln(`Parte dos dados da base de dados são convertidos para o formato XML 
  ,E`), e: new aln(`É armazenada exactamente uma tabela da base de dados original em cada local.
  ,`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `/15`, testRef: ``, tema: ` Sistemas de base de dados distribuídos`,
    prg: `16. A respeito de bases de dados distribuídas, é correcto afirmar:
  ,`, a: new aln(`A replicação de dados em diversos nodos integrantes da arquitectura distribuida é sempre uma boa prática de projecto de bases de dados distribuidas, 
  ,pois torna qualquer dado sempre disponível em qualquer nodo
  ,`), b: new aln(`A falha de um nodo integrante da arquitectura distribuída sempre causa o colapso de todas as transacções distribuídas em execução
  ,`), c: new aln(`Consultas distribuidas são sempre processadas num único nodo integrante da arquitectura
  ,distribuida`), d: new aln(`Uma das vantagens da fragmentação de dados de uma relação em diversos nodos integrantes de uma arquitectura distribuída 
  ,é manter o dado disponivel no nodo onde ele é mais frequentemente acessado
  ,`, 0), e: new aln(`O controle da execução concorrente de transacções distribuidas é sempre responsabilidade de um único nodo integrante da arquitectura distribuida.
  ,`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `/16`, testRef: ``, tema: ` Sistemas de base de dados distribuídos`,
    prg: `17. Qual das seguintes opções é uma desvantagem da replicação?
  ,`, a: new aln(`Reduzido tráfego da rede
  ,`), b: new aln(`Se uma BD falha num site, uma cópia pode ser encontrada noutro site
  ,`), c: new aln(`Cada site deve ter a mesma capacidade de armazenamento 
  ,`, 0), d: new aln(`Cada transacção pode prosseguir sem coordenação através da rede
  ,`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `/17`, testRef: ``, tema: ` Sistemas de base de dados distribuídos`,
    prg: `18. Uma base de dados distribuida tem qual das seguintes vantagens em relação a uma base de dados,centralizada? 
  ,`, a: new aln(`Custo do software
  ,`), b: new aln(`Complexidade do software
  ,`), c: new aln(`Resposta lenta
  ,`), d: new aln(`Crescimento modular 
  ,`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `/18`, testRef: ``, tema: ` Sistemas de base de dados distribuídos`,
    prg: `19. NÃO é uma regra associada ao principio fundamental de bases de dados distribuidas:
  ,`, a: new aln(`não dependência de um site central
  ,`), b: new aln(`autonomia local
  ,`), c: new aln(`operação continua
  ,`), d: new aln(`independência de SGBD 
  ,`), e: new aln(`dependência da rede
  ,`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `/19`, testRef: ``, tema: ` Sistemas de base de dados distribuídos`,
    prg: `20. Qual o número máximo de base de dados que um processo listener pode ouvir?
  `, a: new aln(`1 bd
  `), b: new aln(`2 bd
  `), c: new aln(`10 bd
  `), d: new aln(`25 bd
  `), e: new aln(`Nenhuma das acima
  `, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `/20`, testRef: ``, tema: ` Sistemas de base de dados distribuídos`,
    prg: `21. Que porção do tnsnames.ora especifica o nome ou endereço IP do servidor onde o processo listene é ouvido?
  `, a: new aln(`CONNECT_DATA
  `), b: new aln(`PORT
  `), c: new aln(`SERVICE_NAME
  `), d: new aln(`HOST
  `, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `/21`, testRef: ``, tema: ` Sistemas de base de dados distribuídos`,
    prg: `22. Que método de nomeação usa o ficheiro tnsnames.ora para armazenar o conector de descrição usado pelo cliente enquanto se conecta a uma instância da base de dados duma máquina remota?
  `, a: new aln(`Host naming method
  `), b: new aln(`Local naming method
  `, 0), c: new aln(`External naming method
  `), d: new aln(`Directory naming method
  `), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `16/22`, testRef: `16`, tema: ``,
    prg: `23. Sobre as propriedades ACID de transacções de base de dados, é correcto afirmar: 
  `, a: new aln(`Uma transacção deve atender, pelo menos, a uma das propriedades ACID
  `), b: new aln(`A propriedade de ISOLAMENTO é garantida quando uma transacção aguarda outra transacção
  actualizar um dado que ela deseja utilizar
  `, 0), c: new aln(`A propriedade de ATOMICIDADE é garantida quando o SGBD permite a execução 
  de um backup completo de uma BD que contém actualizações de transacções activas e de transacções efectivadas (commited)
  `), d: new aln(`A propriedade de CONSISTÊNCIA não é garantida quando uma transacção é abortada por
  violar uma restrição de integridade
  `), e: new aln(`A propriedade de DURABILIDADE não é garantida quando o SGBD exclui um arquivo de log
  com actualizações de transacções posteriores à realização do último backup da BD.
  `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `/23`, testRef: ``, tema: ` Mecanismos de gestão de transacções`,
    prg: `24. Considere a seguinte acção 
  TRANSACTION....
  COMMIT;
  ROLLBACK;
  O que faz o Rollback nesta transacção?
  `, a: new aln(`Desfaz as transacções antes do commit;
  `), b: new aln(`Limpa todas as transacções;
  `), c: new aln(`Refaz as transacções antes do commit;
  `), d: new aln(`Nenhuma acção
  `, 0), e: new aln(`A propriedade de DURABILIDADE não é garantida quando o SGBD exclui um arquivo de log
  com actualizações de transacções posteriores à realização do último backup da BD.
  `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `/24`, testRef: ``, tema: ` Mecanismos de gestão de transacções`,
    prg: `25. Considere que duas transacções, T1 e T2, executadas concorrentemente, 
  são as únicas transacções activas num SGBD. 
  Considerando todas as operações realizadas por TI e por T2 apresentadas na ordem descrita a seguir, 
  qual das situações abaixo pode gerar um estado inconsistente na base de dados no final da execução 
  sem falhas de TI e de T2? `, a: new aln(`T1 lê o dado X, T2 lê o dado X, T2 actualiza o dado X e T1 actualiza o dado X.
  `, 0), b: new aln(`T1 lê o dado X. T2 lê o dado XTI actualiza o dado X. 
  `), c: new aln(`T1 actualiza o dado Y, T2 lê o dado Y, T2 lê o dado Xe T1 lê o dado X.
  `), d: new aln(`T1 actualiza o dado X, T2 lê o dado Y e T1 actualiza o dado X.
  `), e: new aln(` T1 lê o dado X. T2 lê o dado X, T2 actualiza o dado X e T2 actualiza o dado Y.
  `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `/25`, testRef: ``, tema: ` Mecanismos de gestão de transacções`,
    prg: `26. Algumas das principais técnicas usadas para controle de execução concorrente de transacções em bases de dados são, 
  em relação aos itens de dados, baseadas no conceito de
  `, a: new aln(`blocagem (block)
  `), b: new aln(`ordenação (sort)
  `), c: new aln(`decomposição de dados
  `), d: new aln(`indice multinível dinâmico
  `), e: new aln(`Bloqueio (lock)
  `, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `/26`, testRef: ``, tema: `SGBD orientados a objectos`,
    prg: `27. Analise as seguintes afirmações relacionadas às capacidades que devem ser atendidas pelas bases
  ,de dados orientados a objectos:
  ,
  ,I. Concorrência: o SGBD orientado a objectos não necessita nem implementa controle de concorrência, 
  ,que deve ser feita pelas transacções solicitadas pelo aplicativo conectado à BD.
  ,
  ,II. Transacções: unidades executadas inteiramente ou não. Se um conjunto de actualizações
  ,ocorreu dentro de uma transacção, todas ou parte delas devem ser visiveis ao mundo exterior,
  ,independentemente do estado final da transacção.
  ,
  ,III. Recuperação: o SGBD deve garantir que os resultados parciais ou actualizações parciais de transacções que falharam não sejam propagados p
  ,ara a base de dados persistente. IV. Persistência: capacidade de objectos persistirem através de diferentes chamadas do programa.
  ,Dados manipulados por bases de dados orientados a objectos devem ser persistentes ou transientes. 
  ,Dados transientes são somente válidos dentro de um programa ou transacção; eles são perdidos uma vez que o programa ou transacção termine. 
  ,Dados persistentes são armazenados fora de uma transacção e sobrevivem às actualizações.
  ,Indique a opção que contenha todas as afirmações verdadeiras:
  ,`, a: new aln(`I e ll
  ,`), b: new aln(`II e IV
  ,`), c: new aln(`II e III
  ,`), d: new aln(`III e IV
  ,`, 0), e: new aln(`I e III
  ,`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `/27`, testRef: ``, tema: `SGBD orientados a objectos`,
    prg: `28. Base de dados pode garantir armazenamento persistente para objectos programas. 
      A esse respeito, analise as assertivas e assinale a alternativa que aponta as correctas.
  
  I. Uma das principais justificativas para sistemas de base de dados orientados a objectos ,é a possibilidade de oferecer um armazenamento persistente aos objectos programas e estruturas de dados.
  
  ,II. Sistemas de base de dados orientados a objetos geralmente são compativeis com linguagens de programação como C++ e Java.
  
  ,III. Um objecto complexo em C++ pode ser armazenado, permanentemente, num SGBD orientado a objecto.
  ,IV. Os sistemas tradicionais de base de dados geralmente possuem o chamado problema de separação por impedância, 
  ,quando as estruturas de dados fornecidas pelo SGBD são incompatíveis com as estruturas de dados da linguagem de programação.
  ,`, a: new aln(`Apenas I e II.`), b: new aln(`Apenas I e III.`), c: new aln(`Apenas II e III.`), d: new aln(`Apenas II, III e IV`), e: new aln(`I, II, III e IV`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `/28`, testRef: ``, tema: `SGBD orientados a objectos`,
    prg: `29. Em BDOO qual é o nome dado à habilidade dos objectos existirem depois do fim do programa aplicação? de
  ,`, a: new aln(`Ligação estática`), b: new aln(`Persistência`, 0), c: new aln(`Two-phase commit`), d: new aln(`Integridade do objecto`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `/29`, testRef: ``, tema: ` Sistemas de base de dados distribuídos`,
    prg: `30.Um banco de dados distribuído tem quais das seguintes vantagens sobre um banco de dados centralizado?
  ,`, a: new aln(`Custo do software`), b: new aln(`Complexidade do software`), c: new aln(`Resposta Lenta`), d: new aln(`Crescimento modular`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `/30`, testRef: ``, tema: ` Mecanismos de gestão de transacções`,
    prg: `31.Um gerenciador de transações é qual das seguintes opções?
  ,`, a: new aln(`Mantém um registro de transações`), b: new aln(` Mantém antes e depois das imagens do banco de dados
  ,`), c: new aln(`Mantém o controle de simultaneidade apropriado
  ,`), d: new aln(`Todos os anteriores
  ,`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `/31`, testRef: ``, tema: `SGBD orientados a objectos`,
    prg: `32.Um ambiente homogêneo autônomo é qual dos seguintes?
  ,`, a: new aln(`O mesmo DBMS está em cada nó e cada DBMS funciona de forma independente.
  ,`, 0), b: new aln(`O mesmo DBMS está em cada nó e um DBMS central coordena o acesso ao banco de dados.
  ,`), c: new aln(`Um DBMS diferente está em cada nó e cada DBMS funciona de forma independente.
  ,`), d: new aln(`Um DBMS diferente está em cada nó e um DBMS central coordena o acesso ao banco de dados.
  ,`), e: new aln(``), imgs: [], fim: ""
  })
];

let bd2_t2_16 = [
  new Prg({
    cadNome: `Bd2`, pId: `16/0`, testRef: `16`, tema: ` Mecanismos de gestão de transacções`,
    prg: `1. Sobre as propriedades ACID de transacções de base de dados, é correcto afirmar: `, a: new aln(` Uma transacção deve atender, pelo menos, a uma das propriedades ACID.`), b: new aln(` A propriedade de ISOLAMENTO é garantida quando uma transacção aguarda outra transacção actualizar um dado que ela deseja utilizar`, 0), c: new aln(` A propriedade de ATOMICIDADE é garantida quando o SGBD permite a execução de um backup completo de uma BD que contém actualizações de transacções activas e de transacções efectivadas (commite`), d: new aln(` A propriedade de CONSISTENCIA não é garantida quando uma transacção é abortada porviolar uma restrição de integridade`), e: new aln(` A propriedade de DURABILIDADE não é garantida quando o SGBD exclui um arquivo de log com actualizações de transacções posteriores à realização do último backup da BD.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `16/1`, testRef: `16`, tema: ` Mecanismos de gestão de transacções`,
    prg: `2. Sobre controle de concorrência de transacções, é correcto afirmar:`, a: new aln(` Bloqueios (lock) de tabelas são sempre realizados de forma automática pelo Oracle`), b: new aln(` O Oracle define modos de bloqueios para tabelas, para linhas de tabelas, para colunas de tabelas `), c: new aln(` Transacções só podem executar concorrentemente se estiverem a actuar sobre um protocolo dotipo serializável`), d: new aln(` Transacções de utilizadores, podem bloquear através de comandos SQL, tanto tabelas quanto partes do dicionário de dados`), e: new aln(` Um bloqueio mantido num recurso por uma transacção Té libertado somente quando T encerra com sucesso (commit) ou em decorrência de um rollback ou savepoint.`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `16/2`, testRef: `16`, tema: ` Mecanismos de gestão de transacções`,
    prg: `3.Para que uma transacção seja efectivada, todas as acções que compõem a respectiva unidade de trabalho devem ser concluidas com sucesso. 
  
  Caso contrário,a acção que constituiu falha e a transacção devem ser desfeitas.A afirmação refere-se a uma das quatro propriedades da integridade de uma transação,denominada:`, a: new aln(` Atomicidade`, 0), b: new aln(` Consistência`), c: new aln(` Isolamento`), d: new aln(` Durabilidade`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `16/3`, testRef: `16`, tema: ` Mecanismos de gestão de transacções`,
    prg: `4. Considere a seguinte acção:
  
  TRANSACTION ...
  COMMIT; 
  ROLLBACK;
  
  O que faz o Rollback nesta transacção? `, a: new aln(` Desfaz as transacções antes do commit..`), b: new aln(` Limpa todas as transacções.`), c: new aln(` Refaz as transacções antes do`), d: new aln(` Nenhuma acção..`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `16/4`, testRef: `16`, tema: ` Mecanismos de gestão de transacções`,
    prg: `5. Considere que duas transacções, T1 e T2, executadas concorrentemente, são as únicas transacções activas num SGBD. Considerando todas as operações realizadas por T1 e por T2 apresentadas na ordem descrita a seguir, 
  
  qual das situações abaixo pode gerar um estado inconsistente na base de dados no final da execução sem falhas de T1 e de T2? `, a: new aln(` T1 lê o dado X, T2 lê o dado X, T2 actualiza o dado X e T1 actualiza o dado X.`, 0), b: new aln(` T1 lê o dado X. T2 lê o dado XTI actualiza o dado X. `), c: new aln(` T1 actualiza o dado Y, T2 lê o dado Y, T2 lê o dado Xe T1 lê o dado X.`), d: new aln(` T1 actualiza o dado X, T2 lê o dado Y e T1 actualiza o dado X.`), e: new aln(` T1 lê o dado X. T2 lê o dado X, T2 actualiza o dado X e T2 actualiza o dado Y.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `16/5`, testRef: `16`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `6. Um ambiente homogéneo autónomo é qual das seguintes opções?`, a: new aln(` O mesmo SGBD està em cada nó e cada SGBD trabalha independentemente `, 0), b: new aln(` O mesmo SGBD está em cada né e um SGBD central controla o acesso à BD`), c: new aln(` Diferentes SGBD estão em cada nó e cada SGBD trabalha independentemente `), d: new aln(` Diferentes SGBD estão em cada nó e um SGBD central controla e acesso à BD`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `16/6`, testRef: `16`, tema: ` Mecanismos de gestão de transacções`,
    prg: `7. Relativamente a transacção global, qual das seguintes opções é verdadeira?`, a: new aln(` Os dados necessários estão num site local e o SGBDD encaminha o pedido. se necessário`), b: new aln(` Os dados necessários estão localizados em pelo menos um site não local e o SGBDD encaminhao pedido se necessário`, 0), c: new aln(` Os dados necessários estão num site local e o SGBDD encaminha o pedido para apenas o SGBD local`), d: new aln(`Os dados necessários estão localizados em pelo menos um site não local e o SGBDD encaminha o pedido para apenas o SGBD local`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `16/7`, testRef: `16`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `8. Qual das seguintes opções é uma desvantagem da replicação?`, a: new aln(` Reduzido tráfego da rede `), b: new aln(` Se uma BD falha num site, uma cópia pode ser encontrada noutro site`), c: new aln(` Cada site deve ter a mesma capacidade de armazenamento`, 0), d: new aln(` Cada transacção pode prosseguir sem coordenação através da rede`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `16/8`, testRef: `16`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `9. Transparência de localização permite qual das seguintes opções? `, a: new aln(` Utilizadores tratarem os dados como se estivessem num local`), b: new aln(` Programadores tratarem os dados como se estivessem num local`), c: new aln(` Gestores tratarem os dados como se estivessem num local `), d: new aln(` Todas acima`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `16/9`, testRef: `16`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `10. Uma BDD pode usar qual das seguintes estratégias? `, a: new aln(` Totalmente centralizada num site e acedida por muitos outros sites`), b: new aln(` Parcialmente ou totalmente replicada através dos sites`), c: new aln(` Particionada em segmentos em diferentes sites`), d: new aln(` Todas acima`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `16/10`, testRef: `16`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `11. Uma base de dados distribuida tem qual das seguintes vantagens em relação a uma base de dadoscentralizada? `, a: new aln(` Custo do software`), b: new aln(` Complexidade do software`), c: new aln(` Resposta lenta `), d: new aln(` Crescimento modular`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `16/11`, testRef: `16`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `12. Uma base de dados distribuida heterogénea, è qual das seguintes? `, a: new aln(` O mesmo SGBD e usado em cada sitio e os dados não são distribuidos ao longo dos nós.`), b: new aln(` O mesmo SGBD é usado em cada sitio e os dados são distribuidos ao longo dos nós `), c: new aln(` Um SGBD diferente é usado em cada sitio e os dados não são distribuidos ao longo dos nós`), d: new aln(` Um SGBD diferente é usado em cada sitio e os dados são distribuidos ao longo dos nós.`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `16/12`, testRef: `16`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `13. A regra de SGBDD que define que a probabilidade do sistema funcionar, sem queda, em qualquer momento, mesmo diante da falha de algum componente individual, tal como um site isolado, édesignada como?`, a: new aln(` Independência de localização `), b: new aln(` Durabilidade`), c: new aln(` Confiabilidade`, 0), d: new aln(` Consistência`), e: new aln(` Dependência da replicação`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `16/13`, testRef: `16`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `14. Qual o número máximo de base de dados que um processo listener pode ouvir?`, a: new aln(` 1 bd`), b: new aln(` 2 bd `), c: new aln(` 10 bd`), d: new aln(` 25 bd`), e: new aln(` Nenhuma das acima`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `16/14`, testRef: `16`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `15. Há um listener chamado LISTENER. O método correcto para iniciar o listener seria`, a: new aln(` Isnrctl startup listener`), b: new aln(` Isnrctl start`, 0), c: new aln(` listener start`), d: new aln(` listener start listener`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `16/15`, testRef: `16`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `16. Que método de nomeação usa o ficheiro tnsnames.ora para armazenar o conector de descrição usado pelo cliente enquanto se conecta a uma instância da base de dados duma máquina remota`, a: new aln(` Host naming method`), b: new aln(` Local naming method`, 0), c: new aln(` External naming method `), d: new aln(` Directory naming method`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `16/16`, testRef: `16`, tema: ` SGBD orientados a objectos`,
    prg: `17. Sobre SGBDOO é correcto afirmar: (escolha três)`, a: new aln(` Não suportam tipos de dades definidos pelo utilizador, so dominios `), b: new aln(` Um objecto tem existência independente de seu valor e do endereço de seu armazenamento fisico`, 0), c: new aln(` Providencia modularidade e independència logica dos dados `, 0), d: new aln(` Um objecto complexo em C`, 0), e: new aln(` pode ser armazenado, permanentemente, num SGBD orientado a objecto`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `16/17`, testRef: `16`, tema: ` SGBD orientados a objectos`,
    prg: `18. Analise as seguintes afirmações:
  
  I. Concorrência. o SGBD orientado a objetos não necessita nem implementa controle de concorrência, que deve ser feita pelas transacções solicitadas pelo aplicativo conectado à BD. 
  
  II. Transacções: unidades executadas inteiramente ou não. Se um conjunto de actualizações ocorreu dentro de uma transacção, todas ou parte delas devem ser visiveis ao mundo exterior. independentemente do estado final da transacção.
  
  III.Recuperação: o SGBD deve garantir que os resultados parciais ou actualizações parciais de transacções que falharam não sejam propagados para a base de dados persistente.
  
  IV. Persistència: capacidade de objectos persistirem através de diferentes chamadas do programa Dados manipulados por bases de dados orientados a objectos devem ser persistentes ou transientes.
  
  Quais são correctas?`, a: new aln(` I e II`), b: new aln(` II e III`), c: new aln(` III e IV`), d: new aln(` I e III`), e: new aln(`III e IV`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `16/18`, testRef: `16`, tema: ` SGBD orientados a objectos`,
    prg: `19. Em BDOO qual é o nome dado à habilidade dos objectos existirem depois do fim do programa deaplicação?`, a: new aln(`Ligação estática`), b: new aln(`Persistência`, 0), c: new aln(`Two-phase commit `), d: new aln(`Integridade do objecto`), e: new aln(``), imgs: [], fim: ""
  })
];

let bd2_r_14 = [
  new Prg({
    cadNome: `Bd2`, pId: `14/0`, testRef: `14`, tema: ` Administracão  de bd`,
    prg: `1. Qual o método correcto para iniciar uma instância para criar uma base de dados?`, a: new aln(` STARTUP`), b: new aln(` STARTUP OPEN `), c: new aln(` STARTUP MOUNT`), d: new aln(` STARTUP NOMOUNT`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `14/1`, testRef: `14`, tema: ` Administracão  de bd`,
    prg: `2. Examine os requisitos de tablespace para uma nova base de dadosQuais as três tablespaces podem ser criadas no comando CREATE DATABASE? (Escolha 3)
  
  [Imagem abaixo]`, a: new aln(` TEMP`, 0), b: new aln(` USERS`), c: new aln(` SYSTEM`, 0), d: new aln(` APP NDX`), e: new aln(` UNDOTBS`, 0), imgs: [require('../testespics/bd2/t2/r_14_2.png')], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `14/2`, testRef: `14`, tema: ` Administracão  de bd`,
    prg: `3.Está a criar uma nova base de dados, mas não quer que os utilizadores usem a tablespace SYSTEM para diversas operações. oque deve incluir no comando CREATE DATABASE para prevenir o uso do SYSTEM?`, a: new aln(`Criar uma UNDO tablespace; `), b: new aln(`Criar uma DEFAULT TEMPORARY tablespace;`, 0), c: new aln(`Criar uma tablespace com UNDO keyword;`), d: new aln(`Criar uma tablespace com TEMPORARY keyword.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `14/3`, testRef: `14`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `4. Que processo é iniciado quando um utilizador se conecta ao servidor Oracle no modo servidor dedicado?`, a: new aln(` DBWn`), b: new aln(` PMON`), c: new aln(` SMON`), d: new aln(` Server.`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `14/4`, testRef: `14`, tema: ` Administracão  de bd`,
    prg: `5. Quando se prepara para criar uma base de dados, tem de ter a certeza que tem espaço suficiente para os database files. Quando calcula os requisitos de espaço tem de ter em consideração que alguns ficheiros podem ser multiplicados (multiplexe)?
  
  Quais os dois tipos de ficheiros deve planear multiplicar (multiplex? (Escolha 2)`, a: new aln(` Data files`, 0), b: new aln(` Control file`), c: new aln(` Password file`), d: new aln(` Online redo log files `, 0), e: new aln(` Initialization parameter file`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `14/5`, testRef: `14`, tema: ` Administracão  de bd`,
    prg: `6. Pode usar o Database Configuration Assistant para criar um template, usando a estrutura de uma base de dados que já existe.Qual das opções incluirá no seu template? (Escolha 3)`, a: new aln(` Data files`, 0), b: new aln(` Tablespaces`, 0), c: new aln(` User defined schemas `), d: new aln(` User defined schema data`), e: new aln(` Initialization parameters`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `14/6`, testRef: `14`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `7.Está a criar uma base de dados manualmente e precisa de limitar o número inicial de online redo log groups e membros. 
  
  Que duas palavras chave deve usar no comando CREATE DATABASE para definir onúmero máximo de online redo log files? (Escolha 2)`, a: new aln(`MAXLOGMEMBERS, que determina o número máximo de membros por grupo. `, 0), b: new aln(`MAXREDOLOGS, que especifica o número máximo de online redo log files. `), c: new aln(`MAXLOGFILES, que determina o máximo absoluto de online redo log groups.`, 0), d: new aln(`MAXLOGGROUPS, que especifica o número máximo de online redo log files, groups e members.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `14/7`, testRef: `14`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `8. Uma base de dados distribuída tem qual das seguintes vantagens em relação a uma base de dados centralizada?`, a: new aln(` Custo do software software`), b: new aln(` Complexidade do `), c: new aln(` Resposta lenta`), d: new aln(` Crescimento modular`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `14/8`, testRef: `14`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `9. Uma base de dados distribuída heterogénea, é qual das seguintes?`, a: new aln(` O mesmo SGBD é usado em cada sitio e os dados não são distribuidos ao longo dos nós.`), b: new aln(` O mesmo SGBD é usado em cada sítio e os dados são distribuidos ao longo dos nós `), c: new aln(` Um SGBD diferente é usado em cada sítio e os dados não são distribuídos ao longo dos nós`), d: new aln(` Um SGBD diferente é usado em cada sitio e os dados são distribuídos ao longo dos nós.`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `14/9`, testRef: `14`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `10. Qual das seguintes é uma desvantagem da replicação?`, a: new aln(` Tráfico de rede reduzido`), b: new aln(` Se uma base de dados falha num site, uma cópia pode ser localizada noutro site `), c: new aln(` Cada site deve ter a mesma capacidade de armazenamento`, 0), d: new aln(` Cada transacção pode prosseguir, sem coordenação, através da rede.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `14/10`, testRef: `14`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `11. A regra de SGBDD que define que a probabilidade do sistema funcionar, sem queda, em qualquer momento, mesmo diante da falha de algum componente individual, tal como um site isolado, é designada como?`, a: new aln(` Independência de localização`), b: new aln(` Durabilidade`), c: new aln(` Confiabilidade`, 0), d: new aln(` Consistência`), e: new aln(` Dependência da replicação`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `14/11`, testRef: `14`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `12. Qual o número máximo de base de dados que um processo listener pode ouvir?`, a: new aln(` 1 bd`), b: new aln(` 2 bd`), c: new aln(` 10 bd`), d: new aln(` 25 bd`), e: new aln(` Nenhuma das acima`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `14/12`, testRef: `14`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `13. Há um listener chamado listener. O método correcto para iniciar o listener seria`, a: new aln(` Isnrctl startup listener `), b: new aln(` Isnrctl start`, 0), c: new aln(` listener start`), d: new aln(` listener start listener`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `14/13`, testRef: `14`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `14. Que método de nomeação usa o ficheiro tnsnames.ora para armazenar o conector de descrição usado pelo cliente enquanto se conecta a uma instância da base de dados duma máquina remota?`, a: new aln(` Host naming method`), b: new aln(` Local naming method `, 0), c: new aln(` External naming method`), d: new aln(` Directory naming method`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `14/14`, testRef: `14`, tema: ` Sistemas de base de dados distribuídos`,
    prg: `15. Para que uma transacção seja efectivada, todas as acções que compõem a respectiva unidade de trabalho devem ser concluidas com sucesso. Caso contrário, a acção que constituiu falha e a transação devem ser desfeitas.A afirmação refere-se a uma das quatro propriedades da integridade de uma transação, denominada:`, a: new aln(` Atomicidade`, 0), b: new aln(` Consistência`), c: new aln(` Isolamento`), d: new aln(` Durabilidade`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `14/15`, testRef: `14`, tema: ` Mecanismos de gestão de transacções`,
    prg: `16. Considere a seguinte acção
  Transaction...
  Commit;
  Rollback;
  
  O que faz o Rollback?`, a: new aln(` Desfaz as transacções antes do commit`), b: new aln(` Limpa todas as transacções;`), c: new aln(` Refaz as transacções antes do commit;`), d: new aln(` Nenhuma acção.`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `14/16`, testRef: `14`, tema: ` Mecanismos de gestão de transacções`,
    prg: `17.Considere que duas transacções, T1 e T2, executadas concorrentemente, são as únicas transacções activas num SGBD. 
  
  Considerando todas as operações realizadas por T1 e por T2 apresentadas na ordem descrita a seguir
  
  qual das situações abaixo pode gerar um estado inconsistente na base de dados no final da execução sem falhas de T1 e de T2? `, a: new aln(` T1 lê o dado X, T2 lê o dado X, T2 actualiza o dado X e T1 actualiza o dado X.`, 0), b: new aln(` T1 lê o dado X. T2 lê o dado XTI actualiza o dado X. `), c: new aln(` T1 actualiza o dado Y, T2 lê o dado Y, T2 lê o dado Xe T1 lê o dado X.`), d: new aln(` T1 actualiza o dado X, T2 lê o dado Y e T1 actualiza o dado X.`), e: new aln(` T1 lê o dado X. T2 lê o dado X, T2 actualiza o dado X e T2 actualiza o dado Y.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `14/17`, testRef: `14`, tema: ` SGBD orientados a objectos`,
    prg: `18. Todos os produtos OODBMS, nomeadamente, O2, Objectivity, Object Store e Versant suportam consultas ad-hoc com as seguintes:`, a: new aln(` ADA`), b: new aln(` 4GL `), c: new aln(` C++ `, 0), d: new aln(` PASCAL`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Bd2`, pId: `14/18`, testRef: `14`, tema: ` SGBD orientados a objectos`,
    prg: `19. Em BDOO qual é o nome dado à habilidade dos objectos existirem depois do fim do programa de aplicação?`, a: new aln(` Ligação estática`), b: new aln(` Persistência`, 0), c: new aln(` Two-phase commit`), d: new aln(` Integridade do objecto`), e: new aln(``), imgs: [], fim: ""
  })
];

//////////////////////////ES1 ////////////////

let es_t2_21 = [
  new Prg({
    cadNome: `Es1`, pId: `2/0`, testRef: `2`, tema: `nada`,
    prg: `1. Julgue os itens que se seguem, em relação a metodologias de análise, projeto e desenvolvimento de sistemas, e assinale os verdadeiros:`, a: new aln(` O escopo, a importância e a estimativa de um Sprint do Scrum são definidos pelo product owner.`, 0), b: new aln(` Uma das atribuições do product owner, papel definido pelo Scrum, é a responsabilidade pela gestão do backlog. Tal atribuição pode ser delegada aos outros membros do time Scrum.`), c: new aln(` O Scrum é utilizado, como função primária, para a gestão de projetos de desenvolvimento de software, mas também tem sido usado o extreme programming e outras metodologias de desenvolvimento. Teoricamente, o Scrum pode ser aplicado em qualquer contexto no qual um grupo de pessoas necessitem de trabalhar juntas para atingir um objetivo comum.`, 0), d: new aln(` O único papel definido pelo Scrum com autoridade para cancelar uma Sprint é o do product owner.`, 0), e: new aln(` Num um projeto gerido com a metodologia Scrum, um produto estará, ao final de cada sprint, completamente testado, estando 100% completos todos os requisitos do product backlog.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `2/1`, testRef: `2`, tema: `nada`,
    prg: `3. Analise o texto: “O Scrum enfatiza o uso de um conjunto de padrões de processos de software que provaram ser eficazes para projetos com prazo de entrega apertados, requisitos mutáveis e críticos de negócio. Cada um desses padrões de processos define um conjunto de ações de desenvolvimento. Uma dessas ações consiste em manter uma lista com prioridades dos requisitos ou funcionalidades do projeto que fornecem valor comercial ao cliente. Os itens podem ser adicionados a esse registo em qualquer momento. O gerente de produto avalia o registo e atualiza as prioridades conforme requisitado”. ..A lista citada no texto é conhecida como: (1,0 V)`, a: new aln(` urgências scrum.`), b: new aln(` registo ágil de requisitos.`), c: new aln(` Alterações scrum.`), d: new aln(` Registo pendente de trabalhos (Backlog).`, 0), e: new aln(` Registo iterativo de desenvolvimento (sprint).`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `2/2`, testRef: `2`, tema: `nada`,
    prg: `4. A figura abaixo mostra uma ferramenta utilizada no desenvolvimento de sistemas orientados a objectos:[Imagem]Esta ferramenta é conhecida como: `, a: new aln(` Diagrama de Actividades.`), b: new aln(` Diagrama de Pacotes.`), c: new aln(` Diagrama de Classes.`), d: new aln(` Diagrama de Colaboracao.`, 0), e: new aln(` Diagrama de Objectos`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `2/3`, testRef: `2`, tema: `nada`,
    prg: `7. Para utilizar o processo de estimativa por Story Points em Scrum, inicialmente… (1,5 V)`, a: new aln(` O Product Owner deve atribuir valores de negócio para cada um dos itens do Product Backlog.`), b: new aln(` O Product Backlog deve considerar todos os fatores de Sprint contidos no Backlog Owner.`, 0), c: new aln(` Os Stakeholders devem atribuir os riscos do Product Owner para cada Sprint Planning.`), d: new aln(` Os Stakeholders devem atribuir valores de negócio do Product Owner para cada Sprint.`), e: new aln(` O Product Planning deve avaliar cada Sprint contida no Backlog transacional e decidir pela prioridade de atividades`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `2/4`, testRef: `2`, tema: `nada`,
    prg: `8. Na metodologia Scrum, NÃO faz parte de uma revisão do sprint (sprint review) o seguinte procedimento: (1,5 V)`, a: new aln(` Todo o time colabora no que deve ser feito em seguida, de modo que esta revisão contribua para reuniões de planeamento subsequentes.`), b: new aln(` O proprietário do produto identifica o que está pronto e o que ainda está por fazer.`), c: new aln(` O time de desenvolvimento discute quais fatores positivos e negativos ocorreram durante o sprint e como os problemas foram resolvidos.`), d: new aln(` O time de desenvolvimento apresenta o trabalho que foi desenvolvido e responde questões sobre o incremento.`), e: new aln(` Todo o time cria um plano para implementar melhorias no modo como o time efetua seu trabalho`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `2/5`, testRef: `2`, tema: `nada`,
    prg: `Correlacione as colunas a seguir, considerando o símbolo da UML que representa o tipo de relacionamento do RUP: 
  [imagem Abaixo!!!]`, a: new aln(`agregação, herança, dependência, associação, composição`), b: new aln(`herança,composição,agregação, dependência, associação `, 0), c: new aln(`agregação,composição, herança, dependência, associação `), d: new aln(`composição, agregação, associação, dependência, herança`), e: new aln(``), imgs: [require('../testespics/es1/t2/t2_21_2.jpeg')], fim: ""
  })
];

let es_t2_22 = [
  new Prg({
    cadNome: `Es1`, pId: `/0`, testRef: ``, tema: `Metodologia Estruturada de Desenvolvimento`,
    prg: `1.Quanto as metodologias de análise, projeto e desenvolvimento de sistemas, são corretas as afirmações  seguintes: `, a: new aln(` O escopo, a importância e a estimativa de um Sprint do Scrum são definidos pelo product owner. `, 0), b: new aln(` Uma das atribuições do product owner, papel definido pelo Scrum, é a responsabilidade pela gestão do backlog. Tal atribuição pode ser delegada aos outros membros do time Scrum. `), c: new aln(` O único papel definido pelo Scrum com autoridade para cancelar uma Sprint é o do product owner. `, 0), d: new aln(` Num um projeto gerido com a metodologia Scrum, um produto estará, ao final de cada sprint, completamente testado, estando 100% completos todos os requisitos do product backlog. `), e: new aln(` O Scrum é utilizado, como função primária, para a gestão de projetos de desenvolvimento de software, mas também tem sido usado o extreme programming e outras metodologias de desenvolvimento. Teoricamente, o Scrum pode ser aplicado em qualquer contexto no qual um grupo de pessoas necessitem de trabalhar juntas para atingir um objetivo comum. `, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `/1`, testRef: ``, tema: `Metodologia Agil`,
    prg: `3. Analise o texto: “O Scrum enfatiza o uso de um conjunto de padrões de processos de software que provaram ser eficazes para projetos com prazo de entrega apertados, requisitos mutáveis e críticos de negócio. Cada um desses padrões de processos define um conjunto de ações de desenvolvimento. Uma dessas ações consiste em manter uma lista com prioridades dos requisitos ou funcionalidades do projeto que fornecem valor comercial ao cliente. Os itens podem ser adicionados a esse registo em qualquer momento. O gerente de produto avalia o registo e atualiza as prioridades conforme requisitado”. A lista citada no texto é conhecida como:`, a: new aln(` Registo ágil de requisitos. `), b: new aln(` Alterações scrum. `), c: new aln(` Registo pendente de trabalhos (Backlog). `, 0), d: new aln(` Urgências scrum. `), e: new aln(` Registo iterativo de desenvolvimento (sprint).`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `/2`, testRef: ``, tema: `Processos de Desenvolvimento de Software`,
    prg: `4. Para utilizar o processo de estimativa por Story Points em Scrum, inicialmente… `, a: new aln(` O Product Owner deve atribuir valores de negócio para cada um dos itens do Product Backlog. `, 0), b: new aln(` O Product Backlog deve considerar todos os fatores de Sprint contidos no Backlog Owner. `), c: new aln(` Os Stakeholders devem atribuir os riscos do Product Owner para cada Sprint Planning. `), d: new aln(` Os Stakeholders devem atribuir valores de negócio do Product Owner para cada Sprint. `), e: new aln(` O Product Planning deve avaliar cada Sprint contida no Backlog transacional e decidir pela prioridade de atividades. `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `/3`, testRef: ``, tema: `Metodologia Orientada a Objectos `,
    prg: `5. Os padrões a partir dos quais os objetos são criados, são denominados:`, a: new aln(` Atributos. `), b: new aln(` Métodos. `), c: new aln(` Entidades. `), d: new aln(` Classes. `, 0), e: new aln(` Instâncias.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `/4`, testRef: ``, tema: `Metodologia Orientada a Objectos `,
    prg: `6. A figura abaixo mostra uma ferramenta utilizada no desenvolvimento de sistemas orientados a objectos:Esta ferramenta é conhecida como: [imagem]`, a: new aln(` Diagrama de Actividades. `), b: new aln(` Diagrama de Pacotes. `), c: new aln(` Diagrama de Classes. `), d: new aln(` Diagrama de Colaboração. `, 0), e: new aln(` Diagrama de Objectos. `), imgs: [require('../testespics/es1/t2/t2_22_6.jpeg')], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `/5`, testRef: ``, tema: `Metodologia Agil`,
    prg: `7. Na metodologia Scrum, NÃO faz parte de uma revisão do sprint (sprint review) o seguinte procedimento: `, a: new aln(` Toda a equipa colabora no que deve ser feito em seguida, de modo que esta revisão contribua para reuniões de planeamento subsequentes. `), b: new aln(` O proprietário do produto identifica o que está pronto e o que ainda está por fazer. `), c: new aln(` A equipa de desenvolvimento discute quais fatores positivos e negativos ocorreram durante o sprint e como os problemas foram resolvidos. `), d: new aln(` A equipa de desenvolvimento apresenta o trabalho que foi desenvolvido e responde questões sobre o incremento. `), e: new aln(` Toda a equipa cria um plano para implementar melhorias no modo como esta efetua o seu trabalho. `, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `/6`, testRef: ``, tema: `Metodologia Orientada a Objectos `,
    prg: `8. Um Analista pretende desenvolver um projeto utilizando UML 2.0 e, em seus propósitos, verificou a possibilidade de uso de alguns diagramas. Um deles é o Diagrama de Sequência que representa a indicação do conjunto de objectos envolvidos num cenário e a especificação das mensagens trocadas entre estes ao longo de linhas do tempo (linhas tracejadas verticalmente da base dos objectos até a parte inferior do diagram. Retângulos colocados sobre as linhas de tempo indicam:`, a: new aln(` O tempo decorrido entre as iterações de um processo recursivo. `), b: new aln(` As interações entre as actividades, no tempo. `), c: new aln(` Os períodos de ativação do objecto. `, 0), d: new aln(` Os casos de uso de cada objecto. `), e: new aln(` As etapas em que o objecto estará inativo. `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `/7`, testRef: ``, tema: `Metodologia Orientada a Objectos `,
    prg: `9. O uso da Linguagem de Modelagem Unificada (U.M.L.) não auxilia o processo do Scrum a evitar e/ou amenizar problemas de … (1 V)`, a: new aln(` Comunicação entre a equipa de desenvolvimento. `), b: new aln(` Cronograma e atrasos no projecto. `), c: new aln(` Escopo deficiente e falta de documentação. `), d: new aln(` Ocorrência de fatores positivos e negativos durante o sprint. `, 0), e: new aln(` Sobrecarga de trabalho no processo de validação. `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `/8`, testRef: ``, tema: `Metodologia Agil`,
    prg: `10. No SCRUM, o processo de desenvolvimento inicia com uma reunião de planeamento na qual o Product Owner e a equipe decidem, em conjunto, o que deverá ser implementado do Product Backlog. Assim, a equipe planeia seu trabalho, definindo o Sprint Backlog, na... `, a: new aln(` Primeira parte da Sprint Planning Meeting. `), b: new aln(` Segunda parte da Sprint Planning Meeting. `, 0), c: new aln(` Terceira parte da Sprint Planning Meeting. `), d: new aln(` Sprint. `), e: new aln(` Sprint Burndown. `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `/9`, testRef: ``, tema: `Metodologia Orientada a Objectos `,
    prg: `11. A figura abaixo apresenta alguns dos principais artefactos do RUP (Rational Unified Process) e o fluxo de informações existente entre eles. O artefacto identificado pela letra “X”, representa…? [imagem]`, a: new aln(` Projeto do Sistema `), b: new aln(` Requisitos dos Stakeholders `), c: new aln(` Plano de Teste `), d: new aln(` Plano de Desenvolvimento de Software `, 0), e: new aln(` Especificação Suplementar `), imgs: [require('../testespics/es1/t2/t2_22_11.jpeg')], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `/10`, testRef: ``, tema: `Metodologia Agil`,
    prg: `12. Sobre o processo unificado de desenvolvimento de software, é errado afirmar que … :`, a: new aln(` Há vários benefícios em se adotar um processo iterativo controlado, entre os quais podemos destacar a redução dos riscos envolvendo custos a um único incremento. `), b: new aln(` A tomada de decisão nas organizações é facilitada pela utilização da tecnologia da informação, que permite criar, administrar e manter a gestão da informação de uma instituição por meio de dispositivos para acesso, operação e armazenamento de dados. `), c: new aln(` Define-se como o conjunto de atividades necessárias para transformar requisitos do utilizador num sistema de software, baseado em componentes. `, 0), d: new aln(` O final de uma fase é marcado por um ponto de verificação. Um dos propósitos destes pontos de verificação é que permitem a monitorização do progresso dos trabalhos. `), e: new aln(` Os aspectos que distinguem o processo unificado são capturados em três conceitos chaves: direccionado a casos de uso; iterativo e incremental; com foco em desempenho. `, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `/11`, testRef: ``, tema: `Metodologia Estruturada de Desenvolvimento`,
    prg: `13. figura, que representa um Sistema de Emissão de Bilhetes de Comboio, denomina-se…:[imagem]`, a: new aln(` Modelo de domínio. `), b: new aln(` Diagrama de Fluxo de Dados N1. `, 0), c: new aln(` Modelo de Entidades Relacionamento (MER). `), d: new aln(` Diagrama de Contexto. `), e: new aln(` Diagrama de Actividades.`), imgs: [require('../testespics/es1/t2/t2_22_13.jpeg')], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `/12`, testRef: ``, tema: `Metodologia Orientada a Objectos `,
    prg: `14. A figura exemplifica responsabilidades, actividades e artefatos obrigatórios no RUP (Rational Unified Process). Identifique o que representam as letras A e B, respectivamente. [Imagem]`, a: new aln(` Programador, Plano de Projecto `), b: new aln(` Requisitos dos Stakeholders; Plano do Projecto. `), c: new aln(` Analista de sistemas; Descrição do Sistema. `), d: new aln(` Requisitos dos Stakeholders,`), e: new aln(` Especificação de Casos de  Uso.  `, 0), imgs: [require('../testespics/es1/t2/t2_22_14.jpeg')], fim: ""
  })
];

let es_mt2_17 = [
  new Prg({
    cadNome: `Es1`, pId: `/0`, testRef: ``, tema: ``,
    prg: `2. Sobre o processo unificado de desenvolvimento de software marque abaixo a(s) alternativa(s) errada(s): `, a: new aln(`O processo unificado de desenvolvimento de software é o conjunto de atividades necessárias para transformar requisitos do utilizador num sistema de software, baseado em componentes. `, 0), b: new aln(`Há vários benefícios em se adotar um processo iterativo controlado, entre os quais podemos destacar a redução dos riscos envolvendo custos a um único incremento. `), c: new aln(` Os aspectos que distinguem o processo unificado são capturados em três conceitos chaves: direccionado a casos de uso; iterativo e incremental; com foco em desempenho. `, 0), d: new aln(`O final de uma fase é marcado por um ponto de verificação. Um dos propósitos destes pontos de verificação é que permitem a monitoração do progresso dos trabalhos. `), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `/1`, testRef: ``, tema: ``,
    prg: `3. No Unified Process os papéis não são pessoas, eles descrevem como as pessoas se comportam no negócio e quais são as responsabilidades que elas têm. Nesse sentido, um Desenvolvedor desempenha os papéis de: `, a: new aln(`Analista de Sistemas, Designer de Negócios e Revisor de Requisitos. `), b: new aln(`Analista de Teste, Implementador e Designer de Interface de Utilizador. `), c: new aln(`Revisor de Requisitos, Analista de Teste e Revisor do Projeto. `), d: new aln(` Implementador, Integrador e Designer.`, 0), e: new aln(` Gerente de Teste, Gerente de Projeto e Designer.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `/2`, testRef: ``, tema: ``,
    prg: `4. São produtos da fase de elaboração do RUP:`, a: new aln(`Documento de visão e produto de software integrado. `), b: new aln(`Descrição da arquitectura do software e lista de riscos revista. `, 0), c: new aln(`Manual do utilizador e base de dados operacionais convertidas. `), d: new aln(`Lista de riscos revista e base de dados operacionais convertidas. `), e: new aln(`Produto de software integrado e descrição da arquitectura do software. `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `/3`, testRef: ``, tema: ``,
    prg: `5. No Processo Unificado, a maior porção do core workflow denominado Analysis é executada na fase ...`, a: new aln(`Elaboration Implementation `, 0), b: new aln(`Transition  Construction `), c: new aln(`Inception Deployment`), d: new aln(``), e: new aln(`Produto de software integrado e descrição da arquitectura do software. `), imgs: [], fim: ""
  })
];

let es14 = [new Prg({
  cadNome: `ES1`, pId: `19/0`, testRef: `19`, tema: `Testex`,
  prg: `Catch fire?`, a: new aln(`o relacionamento, em termos de máximo, entre País Origem, Setor e Tempo é tipo l : 1 :N.
        ,`), b: new aln(`uma associação do tipo N:N origina uma nova tabela que herda os atributos da associação 
        ,e cujo identificador pode ser composto 
        ,a partir dos identificadores das entidades participantes na associação. 
        ,`, 0), c: new aln(`são exemplos de tabelas derivadas: País Origem = {Nome, Código, População, PIB} 
        ,e Investe = {Designação, Setor}.
        ,`), d: new aln(`em uma associação do tipo 1:N o atributo identificador da entidade do lado N vai ser atributo 
        ,não identificador da entidade do lado l. 
        ,Exemplo: Investidor = {Nomelnvestidor, NomePaísOrigem, Investe}.
        ,`), e: new aln(` São exemplos de tabelas derivadas: Tempo = {Ano, Investe} e Setor = {NomePaís,
        , DesignaçãoSector, Ano, Montante}. 
        ,`), imgs: [require('../testespics/teste2bd/teste19.1.jpg')], fim: ""
}),
new Prg({
  cadNome: `ES1`, pId: `19/0`, testRef: `19`, tema: `normalizacaoT`,
  prg: `Battle through heavens?`, a: new aln(` a`), b: new aln(`b`, 0), c: new aln(`c`), d: new aln(``), e: new aln(` São exemplos de tabelas derivadas: Tempo = {Ano, Investe} e Setor = {NomePaís,
        , DesignaçãoSector, Ano, Montante}. 
        ,`), imgs: [require('../testespics/teste2bd/teste19.1.jpg')], fim: ""
}),
];
let es15 = [new Prg({
  cadNome: `ES1`, pId: `19/0`, testRef: `19`, tema: `Testex`,
  prg: `outro man`, a: new aln(`BTT`), b: new aln(`Henkkaku`, 0), c: new aln(``), d: new aln(`Henkaku`), e: new aln(``),
  imgs: [], fim: ""
}),
new Prg({
  cadNome: `ES1`, pId: `19/0`, testRef: `19`, tema: `normalizacaoT`,
  prg: `Gostas de ?`, a: new aln(`PS ita`), b: new aln(`PS`, 0), c: new aln(`Switch`), d: new aln(``), e: new aln(` São exemplos de tabelas derivadas: Tempo = {Ano, Investe} e Setor = {NomePaís,
        , DesignaçãoSector, Ano, Montante}. 
        ,`), imgs: [require('../testespics/teste2bd/teste19.1.jpg')], fim: ""
}),
];



//Exame

let es1_ex_20 = [
  new Prg({
    cadNome: `Es1`, pId: `20/0`, testRef: `20`, tema: `randon`,
    prg: `1.	Dentro da Engenharia de Software, encontramos uma gama de conceitos. Com base nisso, analise e assinale a(s) afirmação(ções) correta(s) sobre Processos de Software.	`, a: new aln(`	Podemos definir um processo de software como um conjunto de atividades relacionadas que levam à produção de um produto de software.	`, 0), b: new aln(`	A definição das funcionalidades do software e as restrições ao seu funcionamento são atividades incluídas no processo de software.	`, 0), c: new aln(`	A validação de software também é uma atividade presente no processo de software.	`, 0), d: new aln(`	Os processos de software são complexos e, como todos os processos intelectuais e criativos, dependem de pessoas para tomar decisões e fazer julgamentos. Não existe um processo ideal, a maioria das organizações desenvolve seus próprios processos de desenvolvimento de software.`, 0), e: new aln(``, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/1`, testRef: `20`, tema: `randon`,
    prg: `2.	“É baseado na idéia de desenvolvimento de uma implementação inicial, expondo o resultado aos comentários do utilizador e refinando esse resultado por meio de diversas versões, até que seja desenvolvido um sistema adequado”. No âmbito do processo de software, trata-se de…	`, a: new aln(`	Desenvolvimento evolucionário.	`, 0), b: new aln(`	Modelo em cascata.	`), c: new aln(`	Engenharia de software baseada em componentes.	`), d: new aln(`	Desenvolvimento em espiral.	`), e: new aln(`	Programação estruturada.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/2`, testRef: `20`, tema: `randon`,
    prg: `3.	O modelo em cascata inclui 5 estágios considerados fundamentais para o desenvolvimento de um software: a análise e definição de requisitos, o projeto de sistema e software, a implementação e o teste de unidade, a integração e o teste de sistema e a operação e manutenção. Apesar disso, o modelo em cascata tem como desvantagens… 	`, a: new aln(`Documentação produzida em cada estágio.	`), b: new aln(`Aderência a outros modelos de processo de engenharia.	`, 0), c: new aln(`Dificuldade de reação a mudanças de requisitos do utilizador.	`, 0), d: new aln(`Falta de estruturação para desenvolvimento de software.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/3`, testRef: `20`, tema: `randon`,
    prg: `4.	Identifique com V as afirmações verdadeiras e com F, as falsas.	`, a: new aln(`	Os requisitos não funcionais restringem o sistema que está sendo desenvolvido e o processo de desenvolvimento que deve ser usado e estão, frequentemente, relacionados às propriedades emergentes do sistema de modo que se aplicam ao sistema na sua totalidade.	`, 0), b: new aln(`	A prototipação não é considerada uma técnica usada para validação de requisitos, pois ocorre na fase final do processo de desenvolvimento, representado a entrega do sistema aos utilizadors finais e clientes.	`), c: new aln(`	Pode-se considerar que a entrada para o estudo de viabilidade consiste em um conjunto preliminar de requisitos de negócios, um esboço da descrição do sistema e como esse sistema pretende apoiar os processos de negócios.`, 0), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/4`, testRef: `20`, tema: `randon`,
    prg: `5.	Um processo de desenvolvimento de software é um conjunto de atividades, parcialmente ordenadas, com a finalidade de se obter um produto de software. Cada processo tem suas particularidades, entretanto, podem-se destacar atividades que são comuns à maioria dos processos. Assinale a opção correta.	`, a: new aln(`	O levantamento de requisitos tem como objetivo compreender o problema a ser resolvido e identificar necessidades. Os requisitos podem ser funcionais ou não funcionais.	`, 0), b: new aln(`	A análise tem como foco construir uma estratégia de solução. Os modelos construídos nessa fase devem ser verificados e validados. A verificação tem como objetivo assegurar que as necessidades do cliente estão sendo atendidas pelo sistema, enquanto a validação tem o objetivo de analisar se os modelos estão em conformidade com os requisitos definidos.	`), c: new aln(`	O projeto produz uma descrição computacional do software sem restrições de tecnologia, ou seja, aspectos físicos e dependentes de implementação não são considerados.	`), d: new aln(`	Na fase de implementação, o sistema é codificado, ou seja, a descrição computacional obtida na fase de projeto é traduzida para código executável, por meio do uso de uma ou mais linguagens de programação.	`), e: new aln(`	Na fase de implantação, o sistema é testado, empacotado, distribuído e instalado no ambiente do cliente.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/5`, testRef: `20`, tema: `randon`,
    prg: `6.	13. Informação - assinale a(s) verdadeira(s) ...	`, a: new aln(`	É o conjunto de todos os dados de uma empresa com um nome.	`), b: new aln(`	É o tratamento e organização dos dados para definir o conhecimento empresarial.	`, 0), c: new aln(`	É igual a Dado + Significado + Qualidade.	`, 0), d: new aln(`	Gerada em tempo hábil é aquela que possui tempo de sobra para ser tratada.	`), e: new aln(`	São dados relevantes moldados em formato útil e significativo.`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/6`, testRef: `20`, tema: `randon`,
    prg: `7.	Considerando os conceitos de sistemas de informação e de tecnologia da informação, julgue os itens a seguir (V ou F):	`, a: new aln(`	Segundo Karl Bertalanffy Sistema é um objeto de qualquer tipo, constituído de componentes inter-relacionados com o todo e inter-dependentes, com funções cujos resultados pertencem a cada componente.	`), b: new aln(`	Dos sistemas de informação fazem parte elementos como: dados, informações, recursos materiais e tecnológicos, recursos humanos e procedimentos.	`, 0), c: new aln(`	O sistema de informação permite agregar valor às organizações, uma vez que se trata de um recurso valioso e repercute em todos os níveis da estrutura organizacional: estratégico, operacional e administrativo.	`, 0), d: new aln(`	A tomada de decisão nas organizações é facilitada pela utilização da tecnologia da informação, que permite criar, administrar e manter a gestão da informação de uma instituição por meio de dispositivos para acesso, operação e armazenamento de dados.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/7`, testRef: `20`, tema: `randon`,
    prg: `8.	Em Engenharia de Software, é correto o que se afirma em …	`, a: new aln(`	Não visa o desenvolvimento de teorias e fundamentações, preocupando-se unicamente com as práticas de desenvolvimento de software.	`), b: new aln(`	Tem como foco o tratamento dos aspectos de desenvolvimento de software, abstraindo-se dos sistemas baseados em computadores, incluindo hardware e software.	`), c: new aln(`	Tem como métodos as abordagens estruturadas para o desenvolvimento de software que incluem os modelos de software, notações, regras e maneiras de desenvolvimento.	`, 0), d: new aln(`	Segue princípios, tais como, o da Abstração, que identifica os aspectos importantes sem ignorar os detalhes e o da Composição, que agrupa as atividades em um único processo para distribuição aos especialistas.`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/8`, testRef: `20`, tema: `randon`,
    prg: `9.	Na Engenharia de Software, um modelo de processo considera as atividades fundamentais do processo, compreendendo especificação, desenvolvimento, validação e evolução, e as representa como fases de processo separadas, tais como especificação de requisitos, projeto de software, implementação, teste e assim por diante. Esse modelo de processo é conhecido por Modelo:	`, a: new aln(` Baseado em componentes;	`), b: new aln(` Baseado em protótipos;	`), c: new aln(` Por objetivos;	`), d: new aln(` Em espiral;	`), e: new aln(` Em cascata`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/9`, testRef: `20`, tema: `randon`,
    prg: `10.	Por ser inadequada, a utilização de protótipos para a validação dos requisitos não funcionais deve ser descartada. `, a: new aln(`	Certo`), b: new aln(`	Errado`, 0), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/10`, testRef: `20`, tema: `randon`,
    prg: `11.	Um processo de software é um conjunto de atividades relacionadas que levam à produção de um produto de software. Existem muitos processos de software diferentes, mas todos devem incluir quatro atividades fundamentais: especificação, projeto e implementação, validação e …`, a: new aln(` teste	`), b: new aln(` evolução	`, 0), c: new aln(` prototipação	`), d: new aln(` entrega	`), e: new aln(` modelagem `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/11`, testRef: `20`, tema: `randon`,
    prg: `12.	Os estágios do processo de software incluem situação atual, definição do problema, desenvolvimento técnico e integração da solução.`, a: new aln(`	Certo`, 0), b: new aln(`	Errado`), c: new aln(``), d: new aln(` entrega	`), e: new aln(` modelagem `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/12`, testRef: `20`, tema: `randon`,
    prg: `13.	Em Engenharia de Software, temos o Desenvolvimento em Espiral, cada loop da espiral é dividido em quatro setores, a seguir apresentamos alguns deles. Analise as assertivas e assinale a alternativa que apresenta os corretos.
  
   I. Desenvolvimento de integração: O software que não puder ser comprado será desenvolvido, e os componentes e sistemas COTS serão integrados, a fim de criar um sistema. A integração de sistemas, nesse modelo, pode ser parte do processo de desenvolvimento, em vez de uma atividade separada. 
  
  II. Definição de objetivos: São definidos os objetivos específicos para essa fase do projeto. São identificadas as restrições para o processo e o produto, e é preparado um plano de gerenciamento detalhado. São identificados os riscos do projeto e, dependendo dos riscos, poderão ser planejadas estratégias alternativas. 
  
  III. Avaliação e redução de riscos: Para cada um dos riscos de projeto identificados, é realizada uma análise detalhada e são tomadas providências para reduzir esses riscos. Por exemplo, se houver um risco de os requisitos serem inadequados, poderá ser desenvolvido um protótipo. 
  
  IV. Panejamento: O projeto é revisto e é tomada uma decisão sobre continuar com o próximo loop da espiral. Se a decisão for continuar, serão traçados os planos para a próxima fase do projeto. 	`, a: new aln(` Apenas I e II`), b: new aln(` Apenas II, III e IV.`), c: new aln(` Apenas IV`, 0), d: new aln(` Apenas III e IV`), e: new aln(` I, II, III e IV`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/13`, testRef: `20`, tema: `randon`,
    prg: `14.	Dentro da Engenharia de Software, encontramos uma gama de conceitos. Com base nisso, analise as assertivas e assinale a alternativa que aponta a(s) correta(s) sobre Processos de Software. I.	Podemos definir um processo de software como um conjunto de atividades relacionadas que levam à produção de um produto de software.II.	A definição das funcionalidades do software e as restrições a seu funcionamento devem ser definidas na produção de um software. Essa atividade está incluída no processo de software.III.	A validação de software também é uma atividade presente no processo de software.IV. Os processos de software são complexos e, como todos os processos intelectuais e criativos, dependem de pessoas para tomar decisões e fazer julgamentos. Não existe um processo ideal, a maioria das organizações desenvolve seus próprios processos de desenvolvimento de software.`, a: new aln(` Apenas I.`), b: new aln(` Apenas I e III.`), c: new aln(` Apenas I e IV`), d: new aln(` Apenas II, III e IV.`), e: new aln(` I, II, III e IV`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/14`, testRef: `20`, tema: `randon`,
    prg: `15.	O modelo de processo de desenvolvimento de software que combina as atividades de desenvolvimento com o gerenciamento de risco é o Modelo…`, a: new aln(` Transformacional`), b: new aln(` De Especificação Operacional`), c: new aln(` Em V`), d: new aln(` Em Cascata`), e: new aln(` Em Espiral`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/15`, testRef: `20`, tema: `randon`,
    prg: `16.	No desenvolvimento em cascata, os passos são ordenados em sequência e executados até a etapa final de teste, mesmo que o cliente esteja insatisfeito com determinado resultado intermediário.`, a: new aln(`	Certo`), b: new aln(`	Errado`, 0), c: new aln(``), d: new aln(` Em Cascata`), e: new aln(` Em Espiral`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/16`, testRef: `20`, tema: `randon`,
    prg: `17.	Os diversos modelos de processo de software disponíveis permitem a representação abstrata de um processo de software sob diferentes perspectivas. No modelo evolucionário, sob a perspectiva da arquitetura, a velocidade de desenvolvimento faz que a produção de documentos que reflitam cada versão do sistema seja economicamente inviável, gerando problemas na validação independente de sistemas.`, a: new aln(`	Certo`), b: new aln(`	Errado`, 0), c: new aln(``), d: new aln(` Em Cascata`), e: new aln(` Em Espiral`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/17`, testRef: `20`, tema: `randon`,
    prg: `18.	Metodologias de desenvolvimento de software se baseiam em um modelo de ciclo de vida, tais como cascata, espiral e prototipagem; sendo assim, é correto afirmar que 	`, a: new aln(` Metodologias que seguem o modelo em espiral normalmente possuem um maior potencial de risco, uma vez que esse modelo não lida explicitamente com isso.	`), b: new aln(` Metodologias que seguem o modelo de prototipagem devem, necessariamente, descartar os protótipos construídos; dessa forma, essas metodologias costumam ser mais custosas.	`), c: new aln(` Metodologias que seguem o modelo em cascata possuem fases bem definidas, que podem ser desenvolvidas incrementalmente, em diferentes ciclos de desenvolvimento,. Isto é, a fase seguinte pode ser executada, ainda que a fase anterior não tenha sido finalizada completamente.	`), d: new aln(` Metodologias que seguem o modelo em cascata possuem fases bem definidas e executadas sequencialmente. Além disso, não há sobreposição entre as fases, isto é, a fase seguinte somente pode ser executada após a finalização da fase anterior.	`, 0), e: new aln(` Em metodologias que seguem o modelo em espiral, o software é desenvolvido em apenas uma iteração.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/18`, testRef: `20`, tema: `randon`,
    prg: `19.	Atividades comuns a todos os processos de software incluem a especificação, o projeto, a implementação e a validação.`, a: new aln(`	Certo`, 0), b: new aln(`	Errado`), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/19`, testRef: `20`, tema: `randon`,
    prg: `20.	A principal metodologia tradicional utilizada no desenvolvimento de software é o modelo clássico também conhecido como cascata ou sequencial. Nesse modelo… 	`, a: new aln(`	Cada etapa tem associada ao seu término uma documentação que deve ser aprovada para que a etapa posterior possa ter início	`, 0), b: new aln(`	O projeto é dividido em fases de maneira flexível.	`), c: new aln(`	O custo das alterações do software diminui à medida que o desenvolvimento progride.	`), d: new aln(`	Utiliza-se o desenvolvimento incremental e iterativo.	`), e: new aln(`	Os requisitos não podem ser estáveis.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/20`, testRef: `20`, tema: `randon`,
    prg: `21.	“É baseado na idéia de desenvolvimento de uma implementação inicial, expondo o resultado aos comentários do utilizador e refinando esse resultado por meio de diversas versões, até que seja desenvolvido um sistema adequado”.No âmbito do processo de software, trata-se de 	`, a: new aln(`	Desenvolvimento evolucionário.	`, 0), b: new aln(`	Modelo em cascata.	`), c: new aln(`	Engenharia de software baseada em componentes.	`), d: new aln(`	Desenvolvimento em espiral.	`), e: new aln(`	Programação estruturada.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/21`, testRef: `20`, tema: `randon`,
    prg: `22.A figura abaixo representa um Sistema de Emissão de Bilhetes de Comboio: 
  
  [Imagem Abaixo!]`, a: new aln(`A figura representa...`), b: new aln(`Modelo de domínio`), c: new aln(`Diagrama de Actividades`), d: new aln(`Modelo de Entidade-Relacionamento (MER)`), e: new aln(`Diagrama de Contexto`, 0), imgs: [require('../testespics/es1/t2/ex_21_16.jpeg')], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/22`, testRef: `20`, tema: `randon`,
    prg: `23.	Como Modelo evolucionário do processo de software, uma característica da prototipagem é: `, a: new aln(` independer do estabelecimento e da definição de requisitos.`, 0), b: new aln(` configurar um processo interativo e rápido de desenvolvimento.`), c: new aln(` iniciar o processo de desenvolvimento pela implantação e pelos testes.`), d: new aln(` gerar uma primeira versão do sistema completa e isenta de erros.`), e: new aln(` descartar a participação do cliente no processo de desenvolvimento e de implantação.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/23`, testRef: `20`, tema: `randon`,
    prg: `24.	O modelo em cascata inclui 5 estágios considerados fundamentais para o desenvolvimento de um software: a análise e definição de requisitos, o projeto de sistema e software, a implementação e o teste de unidade, a integração e o teste de sistema e a operação e manutenção. Apesar disso, o modelo em cascata tem como desvantagem a… `, a: new aln(`	documentação produzida em cada estágio.`), b: new aln(`	aderência a outros modelos de processo de engenharia.`, 0), c: new aln(`	dificuldade de reação a mudanças de requisitos do utilizador.`, 0), d: new aln(`	falta de estruturação para desenvolvimento de software.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/24`, testRef: `20`, tema: `randon`,
    prg: `25.	O conjunto de atividades e resultados associados que resulta em um produto de software recebe o nome de...`, a: new aln(` engenharia de software.`), b: new aln(` processo de software.`, 0), c: new aln(` especificação de software.`), d: new aln(` implantação de software.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/25`, testRef: `20`, tema: `randon`,
    prg: `26.	Um processo de desenvolvimento de software é um conjunto de atividades, parcialmente ordenadas, com a finalidade de se obter um produto de software. Cada processo tem suas particularidades, entretanto, podem-se destacar atividades que são comuns à maioria dos processos. Com relação a processos de desenvolvimento de software, assinale a opção correta.	`, a: new aln(`	O levantamento de requisitos tem como objetivo compreender o problema a ser resolvido e identificar necessidades. Os requisitos podem ser funcionais, que definem as funcionalidades do sistema, ou não funcionais, que não estão relacionados às funcionalidades.	`, 0), b: new aln(`	A análise tem como foco construir uma estratégia de solução. Os modelos construídos nessa fase devem ser verificados e validados. A verificação tem como objetivo assegurar que as necessidades do cliente estão sendo atendidas pelo sistema, enquanto a validação tem o objetivo de analisar se os modelos estão em conformidade com os requisitos definidos.	`), c: new aln(`	O projeto produz uma descrição computacional do software sem restrições de tecnologia, ou seja, aspectos físicos e dependentes de implementação não são considerados.	`), d: new aln(`	Na fase de implementação, o sistema é codificado, ou seja, a descrição computacional obtida na fase de projeto é traduzida para código executável, por meio do uso de uma ou mais linguagens de programação.	`), e: new aln(`	Na fase de implantação, o sistema é testado, empacotado, distribuído e instalado no ambiente do cliente.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/26`, testRef: `20`, tema: `randon`,
    prg: `27.	O processo de desenvolvimento iterativo em que se desenvolve rapidamente um sistema apenas para explorar opções de requisitos e de projeto, mas não deverá ser implantado no cliente é o...	`, a: new aln(` modelo em espiral.	`), b: new aln(` prototipação throw-away.	`, 0), c: new aln(` modelo sequencial linear.	`), d: new aln(` método ágil programação extrema.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/27`, testRef: `20`, tema: `randon`,
    prg: `28.	Em relação à prototipagem, todas as afirmativas estão corretas, EXCETO:	`, a: new aln(` O protótipo ajuda no entendimento dos requisitos do sistema.	`), b: new aln(` O número de iterações não é previsível.	`), c: new aln(` Apenas a fase final produz uma entrega que não é um documento.	`, 0), d: new aln(` Deve ser utilizada apenas quando os utilizadors podem participar ativamente do projeto.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/28`, testRef: `20`, tema: `randon`,
    prg: `29.	Identifique com as afirmativas verdadeiras:. 	`, a: new aln(`	A prototipação não é considerada uma técnica usada para validação de requisitos, pois ocorre na fase final do processo de desenvolvimento, representado a entrega do sistema aos utilizadors finais e clientes.	`), b: new aln(`	Pode-se considerar que a entrada para o estudo de viabilidade consiste em um conjunto preliminar de requisitos de negócios, um esboço da descrição do sistema e como esse sistema pretende apoiar os processos de negócios.	`, 0), c: new aln(`	Os requisitos não funcionais restringem o sistema que está sendo desenvolvido e o processo de desenvolvimento que deve ser usado e estão, frequentemente, relacionados às propriedades emergentes do sistema de modo que se aplicam ao sistema em sua totalidade.`, 0), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/29`, testRef: `20`, tema: `randon`,
    prg: `30.	A prototipação pode representar uma abordagem interessante em situações em que a incerteza está presente na definição de requisitos, objetivos e procedimentos. As alternativas a seguir apresentam vantagens da prototipação, à exceção de uma. Assinale-a.	`, a: new aln(` A prototipação é um mecanismo eficaz de identificação de requisitos.	`), b: new aln(` O treinamento de utilizadores pode ser feito antes do produto ficar pronto.	`, 0), c: new aln(` As partes do protótipo podem ser utilizadas no desenvolvimento do sistema final.	`), d: new aln(` O cliente vê o protótipo como uma versão de trabalho e exige a sua adequação para o produto.	`), e: new aln(` A melhora na qualidade da especificação de futuros programas, leva à diminuição dos gastos de manutenção.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/30`, testRef: `20`, tema: `randon`,
    prg: `31.	Um protótipo de software pode ser usado em um processo de desenvolvimento de software para:I. Ajudar na descoberta e validação dos requisitos do sistema, durante a engenharia de requisitos.II. Explorar soluções específicas de software e apoiar o projeto de interface com o utilizador, durante o projeto do sistema.III. Realizar testes completos com o sistema que será entregue para o cliente, durante o processo de teste.Está correto o que se afirma em...`, a: new aln(` I, II e III.`), b: new aln(` II e III, apenas.`), c: new aln(` I e II, apenas.`), d: new aln(` II, apenas.`), e: new aln(` I, apenas.`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/31`, testRef: `20`, tema: `randon`,
    prg: `32.	Muito utilizada pelos engenheiros de software, a prototipação consiste na(o) …`, a: new aln(`	Análise dos custos e dos riscos de desenvolvimento, com base nos requisitos iniciais.	`), b: new aln(`	Coleta inicial dos requisitos e no planeamento do projeto, com base no grupo de programadores envolvidos.	`), c: new aln(`	Decisão de prosseguir ou não na direção de um sistema concluído, com base nos comentários do cliente.	`, 0), d: new aln(`	Procedimento estruturado que avalia os requisitos finais de um sistema em fase de testes.	`), e: new aln(`	Processo que capacita o desenvolvedor a criar um modelo do software que será implementado.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/32`, testRef: `20`, tema: `randon`,
    prg: `33.	A Engenharia de Software ...I. Não visa o desenvolvimento de teorias e fundamentações, preocupando-se unicamente com as práticas de desenvolvimento de software. II. Tem como foco o tratamento dos aspectos de desenvolvimento de software, abstraindo-se dos sistemas baseados em computadores, incluindo hardware e software. III. Tem como métodos as abordagens estruturadas para o desenvolvimento de software que incluem os modelos de software, notações, regras e maneiras de desenvolvimento. IV. Segue princípios, tais como, o da Abstração, que identifica os aspectos importantes sem ignorar os detalhes e o da Composição, que agrupa as atividades em um único processo para distribuição aos especialistas. É correto o que se afirma em …	`, a: new aln(`	III e IV, apenas.	`, 0), b: new aln(`	I, II, III e IV.	`), c: new aln(`	I e II, apenas.	`), d: new aln(`	I, II e III, apenas.	`), e: new aln(`	II, III e IV, apenas.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/33`, testRef: `20`, tema: `randon`,
    prg: `34.	Considerando os conceitos de sistemas de informação e de tecnologia da informação, julgue os itens a seguir E assinale os verdadeiros:	`, a: new aln(`	A tomada de decisão nas organizações é facilitada pela utilização da tecnologia da informação, que permite criar, administrar e manter a gestão da informação de uma instituição por meio de dispositivos para acesso, operação e armazenamento de dados.	`), b: new aln(`	O sistema de informação permite agregar valor às organizações, uma vez que se trata de um recurso valioso e repercute em todos os níveis da estrutura organizacional: estratégico, operacional e administrativo.	`, 0), c: new aln(`	Segundo Karl Bertalanffy Sistema é um objeto de qualquer tipo, constituído de componentes inter-relacionados com o todo e inter-dependentes, com funções cujos resultados pertencem a cada componente.	`), d: new aln(`	Dos sistemas de informação fazem parte elementos como: dados, informação, recursos materiais e tecnológicos, recursos humanos e procedimentos.`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/34`, testRef: `20`, tema: `randon`,
    prg: `35.	“É baseado na idéia de desenvolvimento de uma implementação inicial, expondo o resultado aos comentários do utilizador e refinando esse resultado por meio de diversas versões, até que seja desenvolvido um sistema adequado”. No âmbito do processo de software, trata-se de…	`, a: new aln(`Engenharia de software baseada em componentes.	`), b: new aln(`Modelo em cascata.	`), c: new aln(`Desenvolvimento evolucionário.	`, 0), d: new aln(`Desenvolvimento em espiral.	`), e: new aln(`Programação estruturada.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/35`, testRef: `20`, tema: `randon`,
    prg: `36.	Sobre o processo unificado de marque abaixo a(s) alternativa(s) errada(s): 	`, a: new aln(`O processo unificado de desenvolvimento de software é o conjunto de atividades necessárias para transformar requisitos do utilizador num sistema de software, baseado em componentes.	`, 0), b: new aln(`No Unified Process um Desenvolvedor desempenha os papéis de Revisor de Requisitos, Analista de Teste e Revisor do Projeto.	`, 0), c: new aln(`Há vários benefícios em se adotar um processo iterativo controlado, entre os quais podemos destacar a redução dos riscos envolvendo custos a um único incremento.	`), d: new aln(`O final de uma fase é marcado por um ponto de verificação. Um dos propósitos destes pontos de verificação é que permitem a monitoração do progresso dos trabalhos.	`), e: new aln(`Os aspectos que distinguem o processo unificado são capturados em três conceitos chaves: direccionado a casos de uso; iterativo e incremental; com foco em desempenho.`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/36`, testRef: `20`, tema: `randon`,
    prg: `37.	No Processo Unificado, a maior porção do core workflow denominado Analysis é executada na fase ... 	`, a: new aln(`Inception			   `), b: new aln(`    b.Implementation			   `), c: new aln(`    c.Transition	`), d: new aln(`Construction			`), e: new aln(`Elaboration			`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/37`, testRef: `20`, tema: `randon`,
    prg: `38.	São produtos da fase de elaboração do RUP: 	`, a: new aln(`Documento de visão e produto de software integrado.	`), b: new aln(`Manual do utilizador e base de dados operacionais convertidas.	`), c: new aln(`Descrição da arquitectura do software e lista de riscos revista.	`, 0), d: new aln(`Produto de software integrado e descrição da arquitectura do software.	`), e: new aln(`Lista de riscos revista e base de dados operacionais convertidas.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/38`, testRef: `20`, tema: `randon`,
    prg: `39.Em relação aos tipos de relacionamentos do RUP, correlacione as colunas a seguir, considerando o símbolo e a defnição mais adequada da UML:( 1,5V )  
  
   [Imagem Abaixo!]     
  
  a.Herança 
  
  e.Associação	
  
  d.Dependência	
  
  b.Composição	
  
  c.Agregação`, a: new aln(`herança,agregação, dependência, associação, composição`), b: new aln(`herança,composição,agregação, dependência, associação `, 0), c: new aln(`agregação,composição, herança, dependência, associação `), d: new aln(`herança,composição, agregação, associação, dependência `), e: new aln(` `), imgs: [require('../testespics/es1/t2/t2_21_2.jpeg')], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/39`, testRef: `20`, tema: `randon`,
    prg: `40.Nos métodos ágeis XP e Scrum, as entregas de partes funcionais do projeto são divididas em ciclos, geralmente compreendidos no período de 1 a 4 semanas. Estes ciclos denominam-se, respectivamente:		`, a: new aln(`Backlog e planeamento da produção.	`), b: new aln(`Período de entrega e reunião de revisão.	`), c: new aln(`Reunião de planeamento e backlog.	`), d: new aln(`Iterações e sprint.	`, 0), e: new aln(`Entrega e retrospectiva.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/40`, testRef: `20`, tema: `randon`,
    prg: `42.O Extreme Programming (XP) é, talvez, o mais conhecido e mais utilizado dos métodos ágeis. Dentre suas práticas se encontram programação em pares, integração contínua, refatoração e:	   `, a: new aln(`Propriedade colectiva, que garante uma participação nos lucros aos membros da equipe de desenvolvimento, técnica que incentiva e aumenta o desempenho de toda a equipe.	`), b: new aln(`Envolvimento do cliente apenas na fase final do sistema, fator que difere de outras metodologias como SCRUM e TDD e confere agilidade ao processo de desenvolvimento.	`), c: new aln(`Desenvolvimento incremental e sustentado por meio de pequenos e frequentes releases do sistema. Os requisitos são baseados em cenários ou em simples histórias de clientes.	`, 0), d: new aln(`Utilização de técnicas de ofuscação do código fonte, trazendo segurança e garantindo que apenas a equipe de desenvolvimento poderá ter acesso a este código.	`), e: new aln(`Processo de desenvolvimento contínuo, em que a equipe se mantém focada no sistema até que uma funcionalidade específica seja entregue, comumente agregando horas extras ao turno de trabalho.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/41`, testRef: `20`, tema: `randon`,
    prg: `43.No Processo Unificado, a maior porção do core workflow denominado Analysis é executada na fase ... 		`, a: new aln(`Elaboration			  `, 0), b: new aln(`Implementation			  `), c: new aln(`Transition`), d: new aln(`Construction			  `), e: new aln(`Inception		`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/42`, testRef: `20`, tema: `randon`,
    prg: `44.Observe a figura, que mostra uma ferramenta empregada no desenvolvimento orientado a objectos, utilizada na construção do modelo do sistema desde o nível de análise até o de especificação. De todos, é o mais rico em notação.	 
  
   [Imagem Abaixo!] 
  
  Esta ferramenta é conhecida como Diagrama de:	
  
    `, a: new aln(`  Actividades	    `), b: new aln(`  Classes.	`), c: new aln(`  Objectos.		    `, 0), d: new aln(`  Componentes.`), e: new aln(``), imgs: [require('../testespics/es1/t2/ex_20_44.jpeg')], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/43`, testRef: `20`, tema: `randon`,
    prg: `45.	 Observe a figura, que mostra uma ferramenta utilizada no desenvolvimento orientado a objectos, para a construção do modelo do sistema desde o nível de análise até o de especificação.   [Imagem Abaixo!]Esta ferramenta é conhecida como Diagrama de:	`, a: new aln(`Classes.	`), b: new aln(`Componentes.	`, 0), c: new aln(`Actividades.	`), d: new aln(`Colaboração.	`), e: new aln(`Objectos.`), imgs: [require('../testespics/es1/t2/ex_20_45.jpg')], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/44`, testRef: `20`, tema: `randon`,
    prg: `46.	Sobre o processo unificado de desenvolvimento de software marque abaixo a(s) alternativa(s) errada(s): 	   `, a: new aln(`O processo unificado de desenvolvimento de software é o conjunto de atividades necessárias para transformar requisitos do utilizador num sistema de software, baseado em componentes.	`, 0), b: new aln(`Há vários benefícios em se adotar um processo iterativo controlado, entre os quais podemos destacar a redução dos riscos envolvendo custos a um único incremento. 	`), c: new aln(`Os aspectos que distinguem o processo unificado são capturados em três conceitos chaves: direccionado a casos de uso; iterativo e incremental; com foco em desempenho.	`, 0), d: new aln(`O final de uma fase é marcado por um ponto de verificação. Um dos propósitos destes pontos de verificação é que permitem a monitoração do progresso dos trabalhos.  `), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/45`, testRef: `20`, tema: `randon`,
    prg: `47.	No Unified Process os papéis não são pessoas, eles descrevem como as pessoas se comportam no negócio e quais são as responsabilidades que elas têm. Nesse sentido, um Desenvolvedor desempenha os papéis de:	`, a: new aln(`Analista de Sistemas, Designer de Negócios e Revisor de Requisitos.	`), b: new aln(`Analista de Teste, Implementador e Designer de Interface de Utilizador.	`), c: new aln(`Revisor de Requisitos, Analista de Teste e Revisor do Projeto.	`), d: new aln(`Implementador, Integrador e Designer.	`, 0), e: new aln(`Gerente de Teste, Gerente de Projeto e Designer.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/46`, testRef: `20`, tema: `randon`,
    prg: `48.	São produtos da fase de elaboração do RUP: 	`, a: new aln(`Documento de visão e produto de software integrado.	`), b: new aln(`Descrição da arquitectura do software e lista de riscos revista.	`, 0), c: new aln(`Manual do utilizador e base de dados operacionais convertidas.	`), d: new aln(`Lista de riscos revista e base de dados operacionais convertidas.	`), e: new aln(`Produto de software integrado e descrição da arquitectura do software.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/47`, testRef: `20`, tema: `randon`,
    prg: `50.
  
  [Imagem Abaixo!]
  
  A figura abaixo apresenta alguns dos principais artefactos do RUP (Rational Unified Process) e o fluxo de informações existentes entre eles.Identifique abaixo, qual é o nome do artefacto identificado, na figura acima, pela palavra ARTEFATO e por um círculo?	`, a: new aln(`	Projeto do Sistema	`), b: new aln(`	Lista de Riscos	`, 0), c: new aln(`	Plano de Teste	`), d: new aln(`	Requisitos dos Stakeholders	`), e: new aln(`	Especificação Suplementar`), imgs: [require('../testespics/es1/t2/ex_20_50.jpg')], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/48`, testRef: `20`, tema: `randon`,
    prg: `51.Considere:
  
  I. Dirigido por caso de uso.
  
  II. Orientado por quatro workflows.
  
  III. Centrado em arquitetura.
  
  IV. Distribuído em cinco fases.V. Com foco no desempenho.
  
  VI. Iterativo e incremental.São características do Processo Unificado (UP), o que consta APENAS em:	`, a: new aln(`I, II e III.	`), b: new aln(`I, II e IV.	`), c: new aln(`I, III e VI.	`, 0), d: new aln(`III, V e VI.`), e: new aln(`III, IV e V.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/49`, testRef: `20`, tema: `randon`,
    prg: `52.No Processo Unificado, a(o):	`, a: new aln(`versão pronta para instalação sobrevém a cada iteração terminada.	`), b: new aln(`fase de Construção tem, normalmente, um número maior de iterações que as demais.	`), c: new aln(`duração de uma iteração é fixada antes do seu início, não podendo ultrapassar duas semanas.	`), d: new aln(`objetivo da fase de Elaboração é construir um protótipo que demonstre a viabilidade da solução proposta, que será implementada na fase de Construção.	`, 0), e: new aln(`Documento da Arquitetura de Software (SAD) deve estar pronto antes do término da fase de Elaboração.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/50`, testRef: `20`, tema: `randon`,
    prg: `53.O Processo Unificado divide a realização de um projeto para desenvolvimento de um sistema de software em fases. Em cada uma dessas fases, são executadas actividades de diversas disciplinas em diferentes proporções. No desenvolvimento de um sistema de software complexo, esse processo recomenda: 	`, a: new aln(`construir uma arquitetura executável ao final da fase de construção, para validar as regras do negócio e os requisitos funcionais do sistema.	`), b: new aln(`criar um modelo de casos de uso durante a fase de elaboração, para documentar as regras do negócio e os requisitos não funcionais do sistema.	`), c: new aln(`usar a abordagem de desenvolvimento iterativa e incremental, para dividir as actividades em iterações em que cada iteração gera um incremento do software.	`, 0), d: new aln(`ordenar os riscos envolvidos no projeto, para que os riscos menos críticos sejam considerados logo na fase de iniciação e os mais críticos nas fases finais.	`), e: new aln(`entregar a primeira versão do sistema logo após a fase de transição, para evitar os problemas existentes no modelo de ciclo de vida em cascata tradicional.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/51`, testRef: `20`, tema: `randon`,
    prg: `54.Uma das características do Processo Unificado (Unified Process) é ser dirigido a casos de uso (use case driven). Nesse contexto, analise as afirmações a seguir.O modelo de casos de uso representa o comportamento de um sistema, conforme percebido do ponto de vista externo a esse sistema.PORQUE A construção do modelo de classes conceituais de um sistema pode usar como ponto de partida o modelo de entidades e relacionamentos (DER).A esse respeito, conclui-se que:	`, a: new aln(`as duas afirmações são verdadeiras e a segunda justifica a primeira. 	`), b: new aln(`as duas afirmações são verdadeiras e a segunda não justifica a primeira.	`), c: new aln(`a primeira afirmação é verdadeira e a segunda é falsa.	`, 0), d: new aln(`a primeira afirmação é falsa e a segunda é verdadeira.	`), e: new aln(`as duas afirmações são falsas.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/52`, testRef: `20`, tema: `randon`,
    prg: `55.	O Extreme Programming (XP) é, talvez, o mais conhecido e mais utilizado dos métodos ágeis. Dentre suas práticas se encontram programação em pares, integração contínua, refatoração e:	`, a: new aln(`	propriedade colectiva, que garante uma participação nos lucros aos membros da equipe de desenvolvimento, técnica que incentiva e aumenta o desempenho de toda a equipe.	`), b: new aln(`	envolvimento do cliente apenas na fase final do sistema, fator que difere de outras metodologias como SCRUM e TDD e confere agilidade ao processo de desenvolvimento.	`), c: new aln(`	processo de desenvolvimento contínuo, em que a equipe se mantém focada no sistema até que uma funcionalidade específica seja entregue, comumente agregando horas extras ao turno de trabalho.	`), d: new aln(`	utilização de técnicas de ofuscação do código fonte, trazendo segurança e garantindo que apenas a equipe de desenvolvimento poderá ter acesso a este código.	`), e: new aln(`	desenvolvimento incremental e sustentado por meio de pequenos e frequentes releases do sistema. Os requisitos são baseados em cenários ou em simples histórias de clientes.`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/53`, testRef: `20`, tema: `randon`,
    prg: `56.	Assegurar que a equipe se concentre em fazer, primeiro, apenas aquilo que é claramente necessário e evite fazer o que poderia vir a ser necessário, mas ainda não se provou essencial. Este é um dos cinco valores fundamentais do XP (Extreme Programming), denominado:	`, a: new aln(`	Coragem.	`), b: new aln(`	Respeito	`), c: new aln(`	Simplicidade.	`, 0), d: new aln(`	Comunicação	`), e: new aln(`	Feedback.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/54`, testRef: `20`, tema: `randon`,
    prg: `57.	Nos métodos ágeis XP e Scrum, as entregas de partes funcionais do projeto são divididas em ciclos, geralmente compreendidos no período de 1 a 4 semanas. Estes ciclos denominam-se, respectivamente:	`, a: new aln(`	Iterações e sprint.	`, 0), b: new aln(`	Período de entrega e reunião de revisão.	`), c: new aln(`	Reunião de planeamento  e backlog.	`), d: new aln(`	Backlog e planeamento  da produção.	`), e: new aln(`	Entrega e retrospectiva.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/55`, testRef: `20`, tema: `randon`,
    prg: `58.Observe a figura, que mostra uma ferramenta empregada no desenvolvimento orientado a objectos, utilizada na construção do modelo do sistema desde o nível de análise até o de especificação. 
  
  [Imagem Abaixo!]
  
  Esta ferramenta é conhecida como Diagrama de:	`, a: new aln(` Classes. 	`), b: new aln(` Objectos.	`), c: new aln(` Colaboração.	`, 0), d: new aln(` Actividades.	`), e: new aln(` Componentes.`), imgs: [require('../testespics/es1/t2/t2_21_4.jpeg')], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/56`, testRef: `20`, tema: `randon`,
    prg: `59.	Assinale a alternativa que apresenta um exemplo de diagrama comportamental da UML.	 		`, a: new aln(` Diagrama de implantação.	`), b: new aln(` Diagrama de actividades.	`), c: new aln(` Diagrama de caso de uso.	`, 0), d: new aln(` Diagrama de sequência.	`), e: new aln(` Diagrama de máquina de estados.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `20/57`, testRef: `20`, tema: `randon`,
    prg: `60.	Um Analista pretende desenvolver um projeto utilizando UML 2.0 e, em seus propósitos, verificou a possibilidade de uso de alguns diagramas. Um deles é o Diagrama de Sequência que representa a indicação do conjunto de objectos envolvidos num cenário e a especificação das mensagens trocadas entre estes ao longo de linhas do tempo (linhas tracejadas verticalmente da base dos objectos até a parte inferior do diagram. Retângulos colocados sobre as linhas de tempo indicam:		`, a: new aln(` o tempo decorrido entre as iterações de um processo recursivo.	`), b: new aln(` as interações entre as actividades, no tempo.	`), c: new aln(` os casos de uso de cada objecto.	`), d: new aln(` os períodos de ativação do objecto.	`, 0), e: new aln(` as etapas em que o objecto estará inativo.`), imgs: [], fim: ""
  })
];

let es1_ex2_20 = [
  new Prg({
    cadNome: `Es1`, pId: `3/0`, testRef: `3`, tema: `PLACEhOLDER`,
    prg: `1.Na Engenharia de Software, um modelo de processo considera as atividades fundamentais do processo, compreendendo especificação, desenvolvimento, validação e evolução, e as representa como fases de processo separadas, tais como especificação de requisitos, projeto de software, implementação, teste e assim por diante. Esse modelo de processo é conhecido por Modelo:`, a: new aln(` Baseado em componentes;`), b: new aln(` Baseado em protótipos;`), c: new aln(` Por objetivos;`), d: new aln(` Em espiral;`), e: new aln(` Em cascata`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/1`, testRef: `3`, tema: `PLACEhOLDER`,
    prg: `2.Por ser inadequada, a utilização de protótipos para a validação dos requisitos não funcionais deve ser descartada. `, a: new aln(`Certo`), b: new aln(`Errado`, 0), c: new aln(`	`), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/2`, testRef: `3`, tema: `PLACEhOLDER`,
    prg: `3.Um processo de software é um conjunto de atividades relacionadas que levam à produção de um produto de software. Existem muitos processos de software diferentes, mas todos devem incluir quatro atividades fundamentais: especificação, projeto e implementação, validação e …`, a: new aln(` teste`), b: new aln(` evolução`, 0), c: new aln(` prototipação`), d: new aln(` entrega`), e: new aln(` modelagem`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/3`, testRef: `3`, tema: `PLACEhOLDER`,
    prg: `4.Os estágios do processo de software incluem situação atual, definição do problema, desenvolvimento técnico e integração da solução.`, a: new aln(`Certo`, 0), b: new aln(`Errado`), c: new aln(`	`), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/4`, testRef: `3`, tema: `PLACEhOLDER`,
    prg: `5.Em Engenharia de Software, temos o Desenvolvimento em Espiral, cada loop da espiral é dividido em quatro setores, a seguir apresentamos alguns deles. Analise as assertivas e assinale a alternativa que apresenta os corretos. 
  
  I. Desenvolvimento de integração: O software que não puder ser comprado será desenvolvido, e os componentes e sistemas COTS serão integrados, a fim de criar um sistema. A integração de sistemas, nesse modelo, pode ser parte do processo de desenvolvimento, em vez de uma atividade separada. 
  
  II. Definição de objetivos: São definidos os objetivos específicos para essa fase do projeto. São identificadas as restrições para o processo e o produto, e é preparado um plano de gerenciamento detalhado. São identificados os riscos do projeto e, dependendo dos riscos, poderão ser planejadas estratégias alternativas. 
  
  III. Avaliação e redução de riscos: Para cada um dos riscos de projeto identificados, é realizada uma análise detalhada e são tomadas providências para reduzir esses riscos. Por exemplo, se houver um risco de os requisitos serem inadequados, poderá ser desenvolvido um protótipo. 
  
  IV. Panejamento: O projeto é revisto e é tomada uma decisão sobre continuar com o próximo loop da espiral. Se a decisão for continuar, serão traçados os planos para a próxima fase do projeto. `, a: new aln(` Apenas I e II`), b: new aln(` Apenas II, III e IV.`), c: new aln(` Apenas IV`, 0), d: new aln(` Apenas III e IV`), e: new aln(` I, II, III e IV`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/5`, testRef: `3`, tema: `PLACEhOLDER`,
    prg: `6.Dentro da Engenharia de Software, encontramos uma gama de conceitos. Com base nisso, analise as assertivas e assinale a alternativa que aponta a(s) correta(s) sobre Processos de Software.
  
   I.Podemos definir um processo de software como um conjunto de atividades relacionadas que levam à produção de um produto de software.
  
  II.A definição das funcionalidades do software e as restrições a seu funcionamento devem ser definidas na produção de um software. Essa atividade está incluída no processo de software.
  
  III.A validação de software também é uma atividade presente no processo de software.
  
  IV. Os processos de software são complexos e, como todos os processos intelectuais e criativos, dependem de pessoas para tomar decisões e fazer julgamentos. Não existe um processo ideal, a maioria das organizações desenvolve seus próprios processos de desenvolvimento de software.`, a: new aln(` Apenas I.`), b: new aln(` Apenas I e III.`), c: new aln(` Apenas I e IV`), d: new aln(` Apenas II, III e IV.`), e: new aln(` I, II, III e IV`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/6`, testRef: `3`, tema: `PLACEhOLDER`,
    prg: `7.O modelo de processo de desenvolvimento de software que combina as atividades de desenvolvimento com o gerenciamento de risco é o Modelo…`, a: new aln(` Transformacional`), b: new aln(` De Especificação Operacional`), c: new aln(` Em V`), d: new aln(` Em Cascata`), e: new aln(` Em Espiral`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/7`, testRef: `3`, tema: `PLACEhOLDER`,
    prg: `8.No desenvolvimento em cascata, os passos são ordenados em sequência e executados até a etapa final de teste, mesmo que o cliente esteja insatisfeito com determinado resultado intermediário.`, a: new aln(`Certo`), b: new aln(`Errado`, 0), c: new aln(`	`), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/8`, testRef: `3`, tema: `PLACEhOLDER`,
    prg: `9.Os diversos modelos de processo de software disponíveis permitem a representação abstrata de um processo de software sob diferentes perspectivas. No modelo evolucionário, sob a perspectiva da arquitetura, a velocidade de desenvolvimento faz que a produção de documentos que reflitam cada versão do sistema seja economicamente inviável, gerando problemas na validação independente de sistemas.`, a: new aln(`Certo`, 0), b: new aln(`Errado`), c: new aln(`	`), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/9`, testRef: `3`, tema: `PLACEhOLDER`,
    prg: `10.Metodologias de desenvolvimento de software se baseiam em um modelo de ciclo de vida, tais como cascata, espiral e prototipagem; sendo assim, é correto afirmar que `, a: new aln(` Metodologias que seguem o modelo em espiral normalmente possuem um maior potencial de risco, uma vez que esse modelo não lida explicitamente com isso.`), b: new aln(` Metodologias que seguem o modelo de prototipagem devem, necessariamente, descartar os protótipos construídos; dessa forma, essas metodologias costumam ser mais custosas.`), c: new aln(` Metodologias que seguem o modelo em cascata possuem fases bem definidas, que podem ser desenvolvidas incrementalmente, em diferentes ciclos de desenvolvimento,. Isto é, a fase seguinte pode ser executada, ainda que a fase anterior não tenha sido finalizada completamente.`), d: new aln(` Metodologias que seguem o modelo em cascata possuem fases bem definidas e executadas sequencialmente. Além disso, não há sobreposição entre as fases, isto é, a fase seguinte somente pode ser executada após a finalização da fase anterior.`, 0), e: new aln(` Em metodologias que seguem o modelo em espiral, o software é desenvolvido em apenas uma iteração.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/10`, testRef: `3`, tema: `PLACEhOLDER`,
    prg: `11.Atividades comuns a todos os processos de software incluem a especificação, o projeto, a implementação e a validação.`, a: new aln(`Certo`, 0), b: new aln(`Errado`), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/11`, testRef: `3`, tema: `PLACEhOLDER`,
    prg: `12.A principal metodologia tradicional utilizada no desenvolvimento de software é o modelo clássico também conhecido como cascata ou sequencial. Nesse modelo… `, a: new aln(`Cada etapa tem associada ao seu término uma documentação que deve ser aprovada para que a etapa posterior possa ter início`, 0), b: new aln(`O projeto é dividido em fases de maneira flexível.`), c: new aln(`O custo das alterações do software diminui à medida que o desenvolvimento progride.`), d: new aln(`Utiliza-se o desenvolvimento incremental e iterativo.`), e: new aln(`Os requisitos não podem ser estáveis.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/12`, testRef: `3`, tema: `PLACEhOLDER`,
    prg: `13.“É baseado na idéia de desenvolvimento de uma implementação inicial, expondo o resultado aos comentários do utilizador e refinando esse resultado por meio de diversas versões, até que seja desenvolvido um sistema adequado”.No âmbito do processo de software, trata-se de `, a: new aln(`Desenvolvimento evolucionário.`, 0), b: new aln(`Modelo em cascata.`), c: new aln(`Engenharia de software baseada em componentes.`), d: new aln(`Desenvolvimento em espiral.`), e: new aln(`Programação estruturada.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/13`, testRef: `3`, tema: `PLACEhOLDER`,
    prg: `14.Como Modelo evolucionário do processo de software, uma característica da prototipagem é: `, a: new aln(` independer do estabelecimento e da definição de requisitos.`, 0), b: new aln(` configurar um processo interativo e rápido de desenvolvimento.`), c: new aln(` iniciar o processo de desenvolvimento pela implantação e pelos testes.`), d: new aln(` gerar uma primeira versão do sistema completa e isenta de erros.`), e: new aln(` descartar a participação do cliente no processo de desenvolvimento e de implantação.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/14`, testRef: `3`, tema: `PLACEhOLDER`,
    prg: `15.O modelo em cascata inclui 5 estágios considerados fundamentais para o desenvolvimento de um software: a análise e definição de requisitos, o projeto de sistema e software, a implementação e o teste de unidade, a integração e o teste de sistema e a operação e manutenção. Apesar disso, o modelo em cascata tem como desvantagem a… `, a: new aln(`documentação produzida em cada estágio.`), b: new aln(`aderência a outros modelos de processo de engenharia.`, 0), c: new aln(`dificuldade de reação a mudanças de requisitos do utilizador.`, 0), d: new aln(`falta de estruturação para desenvolvimento de software.`), e: new aln(`	`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/15`, testRef: `3`, tema: `PLACEhOLDER`,
    prg: `16.O conjunto de atividades e resultados associados que resulta em um produto de software recebe o nome de...`, a: new aln(` engenharia de software.`), b: new aln(` processo de software.`, 0), c: new aln(` especificação de software.`), d: new aln(` implantação de software.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/16`, testRef: `3`, tema: `PLACEhOLDER`,
    prg: `17.Um processo de desenvolvimento de software é um conjunto de atividades, parcialmente ordenadas, com a finalidade de se obter um produto de software. Cada processo tem suas particularidades, entretanto, podem-se destacar atividades que são comuns à maioria dos processos. Com relação a processos de desenvolvimento de software, assinale a opção correta.`, a: new aln(`O levantamento de requisitos tem como objetivo compreender o problema a ser resolvido e identificar necessidades. Os requisitos podem ser funcionais, que definem as funcionalidades do sistema, ou não funcionais, que não estão relacionados às funcionalidades.`, 0), b: new aln(`A análise tem como foco construir uma estratégia de solução. Os modelos construídos nessa fase devem ser verificados e validados. A verificação tem como objetivo assegurar que as necessidades do cliente estão sendo atendidas pelo sistema, enquanto a validação tem o objetivo de analisar se os modelos estão em conformidade com os requisitos definidos.`), c: new aln(`O projeto produz uma descrição computacional do software sem restrições de tecnologia, ou seja, aspectos físicos e dependentes de implementação não são considerados.`), d: new aln(`Na fase de implementação, o sistema é codificado, ou seja, a descrição computacional obtida na fase de projeto é traduzida para código executável, por meio do uso de uma ou mais linguagens de programação.`), e: new aln(`Na fase de implantação, o sistema é testado, empacotado, distribuído e instalado no ambiente do cliente.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/17`, testRef: `3`, tema: `PLACEhOLDER`,
    prg: `20.Identifique com V as afirmativas verdadeiras e com F, as falsas. V	Os requisitos não funcionais restringem o sistema que está sendo desenvolvido e o processo de desenvolvimento que deve ser usado e estão, frequentemente, relacionados às propriedades emergentes do sistema de modo que se aplicam ao sistema em sua totalidade.F	A prototipação não é considerada uma técnica usada para validação de requisitos, pois ocorre na fase final do processo de desenvolvimento, representado a entrega do sistema aos utilizadors finais e clientes.V	Pode-se considerar que a entrada para o estudo de viabilidade consiste em um conjunto preliminar de requisitos de negócios, um esboço da descrição do sistema e como esse sistema pretende apoiar os processos de negócios.A alternativa que contém a sequência correta, de cima para baixo, é a:`, a: new aln(` V V F`), b: new aln(` V F V`, 0), c: new aln(` F F V`), d: new aln(` F V F`), e: new aln(` V V V`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/18`, testRef: `3`, tema: `PLACEhOLDER`,
    prg: `21.A prototipação pode representar uma abordagem interessante em situações em que a incerteza está presente na definição de requisitos, objetivos e procedimentos. As alternativas a seguir apresentam vantagens da prototipação, à exceção de uma. Assinale-a.`, a: new aln(` A prototipação é um mecanismo eficaz de identificação de requisitos.`), b: new aln(` O treinamento de utilizadores pode ser feito antes do produto ficar pronto.`, 0), c: new aln(` As partes do protótipo podem ser utilizadas no desenvolvimento do sistema final.`), d: new aln(` O cliente vê o protótipo como uma versão de trabalho e exige a sua adequação para o produto.`), e: new aln(` A melhora na qualidade da especificação de futuros programas, leva à diminuição dos gastos de manutenção.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/19`, testRef: `3`, tema: `PLACEhOLDER`,
    prg: `23.Muito utilizada pelos engenheiros de software, a prototipação consiste na(o) …`, a: new aln(`Análise dos custos e dos riscos de desenvolvimento, com base nos requisitos iniciais.`), b: new aln(`Coleta inicial dos requisitos e no planeamento do projeto, com base no grupo de programadores envolvidos.`), c: new aln(`Decisão de prosseguir ou não na direção de um sistema concluído, com base nos comentários do cliente.`, 0), d: new aln(`Procedimento estruturado que avalia os requisitos finais de um sistema em fase de testes.`), e: new aln(`Processo que capacita o desenvolvedor a criar um modelo do software que será implementado.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/20`, testRef: `3`, tema: `PLACEhOLDER`,
    prg: `24.A Engenharia de Software I. não visa o desenvolvimento de teorias e fundamentações, preocupando-se unicamente com as práticas de desenvolvimento de software. II. tem como foco o tratamento dos aspectos de desenvolvimento de software, abstraindo-se dos sistemas baseados em computadores, incluindo hardware e software. III. tem como métodos as abordagens estruturadas para o desenvolvimento de software que incluem os modelos de software, notações, regras e maneiras de desenvolvimento. IV. Segue princípios, tais como, o da Abstração, que identifica os aspectos importantes sem ignorar os detalhes e o da Composição, que agrupa as atividades em um único processo para distribuição aos especialistas. É correto o que se afirma em …`, a: new aln(`III e IV, apenas.`, 0), b: new aln(`I, II, III e IV.`), c: new aln(`I e II, apenas.`), d: new aln(`I, II e III, apenas.`), e: new aln(`II, III e IV, apenas.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/21`, testRef: `3`, tema: `PLACEhOLDER`,
    prg: `25.	Considerando os conceitos de sistemas de informação e de tecnologia da informação, julgue os itens a seguir E assinale os verdadeiros:`, a: new aln(`	A tomada de decisão nas organizações é facilitada pela utilização da tecnologia da informação, que permite criar, administrar e manter a gestão da informação de uma instituição por meio de dispositivos para acesso, operação e armazenamento de dados.`), b: new aln(`	O sistema de informação permite agregar valor às organizações, uma vez que se trata de um recurso valioso e repercute em todos os níveis da estrutura organizacional: estratégico, operacional e administrativo.`, 0), c: new aln(`	Segundo Karl Bertalanffy Sistema é um objeto de qualquer tipo, constituído de componentes inter-relacionados com o todo e inter-dependentes, com funções cujos resultados pertencem a cada componente.`), d: new aln(`	Dos sistemas de informação fazem parte elementos como: dados, informação, recursos materiais e tecnológicos, recursos humanos e procedimentos.`, 0), e: new aln(`	`), imgs: [], fim: ""
  })
];

let es1_ex_21 = [
  new Prg({
    cadNome: `Es1`, pId: `3/0`, testRef: `3`, tema: `placeHolder`,
    prg: `1.Durante a fase inicial do ciclo de vida do desenvolvimento de sistemas, na etapa de investigação, a tarefa que determina a probabilidade de sucesso do sistema proposto e propicia uma avaliação superficial da área técnica, econômica e comportamental do projeto, sendo decisivamente importante para o processo do desenvolvimento de sistemas, é chamada: `, a: new aln(` Estudo de viabilidade. `, 0), b: new aln(`Análise de equilíbrio. `), c: new aln(`Design lógico do sistema. `), d: new aln(`Estudo de caso. `), e: new aln(`Análise de requisitos. `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/1`, testRef: `3`, tema: `placeHolder`,
    prg: `2. Os padrões a partir dos quais os objetos são criados, são denominados: `, a: new aln(`atributos `, 0), b: new aln(`métodos `), c: new aln(`entidades `), d: new aln(`classes `), e: new aln(`instâncias `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/2`, testRef: `3`, tema: `placeHolder`,
    prg: `3. "Técnica que faz o levantamento de ideias, onde cada uma das ideias sugeridas pode ser combinada na proposta de uma nova. Atividade de livre imaginação que deve ser tratada sem críticas ou debates". O texto descreve a técnica de elicitação de requisitos denominada: (5P)`, a: new aln(`Reunião `, 0), b: new aln(`Questionário `), c: new aln(`Entrevista `), d: new aln(`Brainstorm `), e: new aln(`Casos de Uso `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/3`, testRef: `3`, tema: `placeHolder`,
    prg: `4. A Engenharia de Software define uma gama de conceitos. Com base nisso, analise e assinale a afirmação julgar a mais correta: (10P)`, a: new aln(`Podemos definir um processo de software como um conjunto de atividades independentes que levam à produção de um produto de software. `, 0), b: new aln(`A definição das funcionalidades do software e as restrições ao seu funcionamento devem ser definidas na instalação de um software. `), c: new aln(`Essa atividade está incluída no processo de software. A validação de software é uma atividade extra no processo de software.`), d: new aln(`Os processos de software são complexos e, como todos os processos intelectuais e criativos, dependem de pessoas para tomar decisões e fazer julgamentos, levando a maioria das organizações a desenvolver os seus próprios processos de desenvolvimento de software.`), e: new aln(`Nos métodos ágeis XP e Scrum, as entregas de partes funcionais do projeto são divididas em ciclos, geralmente compreendidos no período de 1 a 4 semanas. Estes ciclos denominam-se, respectivamente sprint e retrospectiva. `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/4`, testRef: `3`, tema: `placeHolder`,
    prg: `5. No SCRUM, o processo de desenvolvimento inicia com uma reunião de planeamento na qual o Product Owner e a equipe decidem, em conjunto, o que deverá ser implementado do Product Backlog. Assim, a equipe planeia seu trabalho, definindo o Sprint Backlog, na: (5P)`, a: new aln(`Primeira parte da Sprint Planning Meeting.`, 0), b: new aln(`Segunda parte da Sprint Planning Meeting. `), c: new aln(`Terceira parte da Sprint Planning Meeting. `), d: new aln(`Sprint.`), e: new aln(`Sprint Burndown. `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/5`, testRef: `3`, tema: `placeHolder`,
    prg: `6. Identifique as afirmações verdadeiras: (10P)`, a: new aln(` Os requisitos não funcionais restringem o sistema que está sendo desenvolvido e o processo de desenvolvimento que deve ser usado e estão, frequentemente, relacionados às propriedades emergentes do sistema, de modo que se aplicam ao sistema na sua totalidade. `, 0), b: new aln(`A prototipação não é considerada uma técnica usada para validação de requisitos, pois ocorre na fase final do processo de desenvolvimento, representando a entrega do sistema aos utilizadores finais e clientes. `), c: new aln(` Pode-se considerar que a entrada para o estudo de viabilidade consiste em um conjunto preliminar de requisitos de negócios, um esboço da descrição do sistema e como esse sistema pretende apoiar os processos de negócios.`), d: new aln(`O desenvolvimento em espiral baseia-se numa implementação inicial, expondo o resultado aos comentários do utilizador e refinando-o por meio de diversas versões, até que seja desenvolvido um sistema adequado. `), e: new aln(`No desenvolvimento em cascata, os passos são ordenados em sequência e executados até a etapa final de teste, mesmo que o cliente esteja insatisfeito com determinado resultado intermediário. `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/6`, testRef: `3`, tema: `placeHolder`,
    prg: `7. É correto afirmar que … (10P) `, a: new aln(`A Engenharia de Software tem como métodos as abordagens estruturadas para o desenvolvimento de software que incluem os modelos de software, notações, regras e maneiras de desenvolvimento. `, 0), b: new aln(`Informação é o conjunto de todos os dados de uma empresa com um nome e que são gerados em tempo útil.`), c: new aln(`A Engenharia de Software tem como foco o tratamento dos aspectos de desenvolvimento de software, abstraindo-se dos sistemas baseados em computadores, incluindo hardware e software. `), d: new aln(` A Engenharia de Software segue princípios, tais como, o da Abstração, que identifica os aspectos importantes sem ignorar os detalhes e o da Composição, que agrupa as atividades em um único processo para distribuição aos especialistas.`), e: new aln(`A Engenharia de Software não visa o desenvolvimento de teorias e fundamentações, preocupando-se unicamente com as práticas de desenvolvimento de software. `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/7`, testRef: `3`, tema: `placeHolder`,
    prg: `8. O software também pode ser classificado como: Software de sistema e Software aplicativo. Também chamados de sistema operacional, o software de sistema é responsável por operar os demais periféricos que estejam conectados ao hardware. Na figura, associe a coluna da esquerda com a coluna da direita e em seguida marque a alternativa correta, considerando a sequência de cima para baixo: (15P)[Imagem ]`, a: new aln(` 2, 1, 3, 4, 5 `, 0), b: new aln(` 5, 4, 1, 3, 2 `), c: new aln(` 4, 3, 5, 1, 2 `), d: new aln(` 5, 1, 3, 2, 4 `), e: new aln(` 1, 2, 5, 3, 4 `), imgs: [require('../testespics/es1/t2/ex_21_8.jpeg')], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/8`, testRef: `3`, tema: `placeHolder`,
    prg: `9. Sobre o processo unificado de desenvolvimento de software, é errado afirmar que … (10P)`, a: new aln(`Há vários benefícios em se adotar um processo iterativo controlado, entre os quais podemos destacar a redução dos riscos envolvendo custos a um único incremento. `, 0), b: new aln(`O final de uma fase é marcado por um ponto de verificação. Um dos propósitos destes pontos de verificação é que permitem a monitorização do progresso dos trabalhos. `), c: new aln(`A tomada de decisão nas organizações é facilitada pela utilização da tecnologia da informação, que permite criar, administrar e manter a gestão da informação de uma instituição por meio de dispositivos para acesso, operação e armazenamento de dados. `), d: new aln(` Define-se como o conjunto de atividades necessárias para transformar requisitos do utilizador num sistema de software, baseado em componentes. `), e: new aln(` Os aspectos que distinguem o processo unificado são capturados em três conceitos chaves: direccionado a casos de uso; iterativo e incremental; com foco em desempenho. `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/9`, testRef: `3`, tema: `placeHolder`,
    prg: `10. Na atividade de análise no Processo de Desenvolvimento de Software vemos a importância de se fazer uma modelagem para identificar se há uma falha no Levantamento de Requisitos.Uma dessas  linguagens de modelação é o UML - Unified Modeling Language, cuja característica é: (10P)I - Visualizar o desenho do sistema e a intercomunicação entre objetos. II - Permitir que desenvolvedores visualizem os produtos de seus trabalhos em diagramas padronizados. III - Modelar o problema, e não a solução. É correto o que se afirma em: `, a: new aln(`Apenas em III; `, 0), b: new aln(`Apenas em I; `), c: new aln(`Apenas em II; `), d: new aln(`Apenas em II e III; `), e: new aln(`Apenas em I e II; `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/10`, testRef: `3`, tema: `placeHolder`,
    prg: `11. A figura exemplifica responsabilidades, actividades e artefatos obrigatórios no RUP (Rational Unified Process). Identifique o que representam as letras A e B, respectivamente. (15P)
  
  [Imagem Abaixo!]`, a: new aln(`Programador, Plano de Projecto `, 0), b: new aln(`Requisitos dos Stakeholders; Plano do Projecto. `), c: new aln(`Analista de sistemas; Descrição do Sistema. `), d: new aln(`Requisitos dos Stakeholders, Especificação de Casos de Uso. `), e: new aln(`Analista de sistemas, Especificação de Casos de Uso.`), imgs: [require('../testespics/es1/t2/t2_22_14.jpeg')], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/11`, testRef: `3`, tema: `placeHolder`,
    prg: `12. Considerando os conceitos de sistemas de informação, tecnologia da informação e engenharia de software, podemos afirmar que…: (10P)`, a: new aln(`Segundo Karl Bertalanffy Sistema é um objeto de qualquer tipo, constituído de componentes inter-relacionados com o todo e inter-dependentes, com funções cujos resultados pertencem a cada componente. `, 0), b: new aln(`O sistema de informação permite agregar valor às organizações, uma vez que se trata de um recurso valioso e repercute em todos os níveis da estrutura organizacional: estratégico, operacional e administrativo. `), c: new aln(`Por ser inadequada, a utilização de protótipos para a validação dos requisitos não funcionais deve ser descartada.`), d: new aln(`Dentre as práticas do Extreme Programming (XP) destacam-se a programação em pares, a integração contínua, a refatoração e, ainda, o envolvimento do cliente apenas na fase final do sistema, fator que difere de outras metodologias ágeis como SCRUM e TDD, e confere agilidade ao processo de desenvolvimento.`), e: new aln(`Dos sistemas de informação fazem parte elementos como: dados, informações, recursos materiais e tecnológicos, recursos humanos e procedimentos.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/12`, testRef: `3`, tema: `placeHolder`,
    prg: `13. Em Engenharia de Software, temos o Desenvolvimento em Espiral, cada loop da espiral é dividido em quatro setores, a seguir apresentamos alguns deles. Analise os conceitos a seguir e assinale a alternativa que apresenta os corretos. (10P)I. Desenvolvimento de integração: O software que não puder ser comprado será desenvolvido, e os componentes e sistemas COTS serão integrados, a fim de criar um sistema. A integração de sistemas, nesse modelo, pode ser parte do processo de desenvolvimento, em vez de uma atividade separada. II. Definição de objetivos: São definidos os objetivos específicos para essa fase do projeto. São identificadas as restrições para o processo e o produto, e é preparado um plano de gerenciamento detalhado. São identificados os riscos do projeto e, dependendo dos riscos, poderão ser planejadas estratégias alternativas. III. Paneamento: O projeto é revisto e é tomada uma decisão sobre continuar com o próximo loop da espiral. Se a decisão for continuar, serão traçados os planos para a próxima fase do projeto. IV. Avaliação e redução de riscos: Para cada um dos riscos de projeto identificados, é realizada uma análise detalhada e são tomadas providências para reduzir esses riscos. Por exemplo, se houver um risco de os requisitos serem inadequados, poderá ser desenvolvido um protótipo. `, a: new aln(`Apenas I e II `, 0), b: new aln(`I, II, III e IV `), c: new aln(`Apenas II, III e IV. `), d: new aln(`Apenas IV `), e: new aln(` Apenas III. `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/13`, testRef: `3`, tema: `placeHolder`,
    prg: `14. Após o sistema ter sido instalado no ambiente do utilizador, ou seja, entrado em produção, começa a fase de Manutenção deste sistema. Esta fase depende muito da qualidade no processo de desenvolvimento e da documentação atualizada. Uma das soluções aplicadas para a melhoria nas funções do sistema existente, é conhecida por: (10P)`, a: new aln(`Efeito dominó, que é uma técnica para modificação da estrutura do software, sem alterar o comportamento; `, 0), b: new aln(`Rotatividade, que é utilizada apenas para implementação de novas funções; `), c: new aln(`Refatoração, que é uma técnica ou ferramenta para auxiliar a identificar o foco do problema; `), d: new aln(`Emergencial, que é utilizada quando acumulamos demandas que justifiquem a intervenção para a manutenção; `), e: new aln(`Separação estática, que é utilizada para identificar todos os códigos de programa que são afetados por alguma variável; `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/14`, testRef: `3`, tema: `placeHolder`,
    prg: `16. A figura, que representa um Sistema de Emissão de Bilhetes de Comboio, denomina-se…: (5P)
  
  [imagem Abaixo!]`, a: new aln(`Diagrama de Fluxo de Dados `, 0), b: new aln(`Modelo de Entidade-Relacionamento (MER) `), c: new aln(`Diagrama de Contexto `), d: new aln(`Diagrama de Actividades `), e: new aln(`DFD de Nível 1 `), imgs: [require('../testespics/es1/t2/ex_21_16.jpeg')], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/15`, testRef: `3`, tema: `placeHolder`,
    prg: ` 17. Como Modelo evolucionário do processo de software, uma característica da prototipagem é: (5P)`, a: new aln(` Configurar um processo interativo e rápido de desenvolvimento. `, 0), b: new aln(` Iniciar o processo de desenvolvimento pela implantação e pelos testes. `), c: new aln(` Não depender do estabelecimento e da definição de requisitos. `), d: new aln(`Gerar uma primeira versão do sistema completa e isenta de erros. `), e: new aln(`Descartar a participação do cliente no processo de desenvolvimento e de implantação. `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/16`, testRef: `3`, tema: `placeHolder`,
    prg: `18. Cada processo de desenvolvimento de software tem as suas particularidades, entretanto, podem-se destacar atividades que são comuns à maioria dos processos. Relativamente a processos de desenvolvimento de software, assinale o que é correto. (10P)`, a: new aln(`A análise tem como foco construir uma estratégia de solução. Os modelos construídos nessa fase devem ser verificados e validados. A verificação tem como objetivo assegurar que as necessidades do cliente estão sendo atendidas pelo sistema, enquanto a validação tem o objetivo de analisar se os modelos estão em conformidade com os requisitos definidos. `, 0), b: new aln(` O levantamento de requisitos tem como objetivo compreender o problema a ser resolvido e identificar necessidades. Os requisitos podem ser funcionais, que definem as funcionalidades do sistema, ou não funcionais, que não estão relacionados às funcionalidades. `), c: new aln(`O projeto produz uma descrição computacional do software sem restrições de tecnologia, ou seja, aspectos físicos e dependentes de implementação não são considerados. `), d: new aln(`Na fase de implementação, o sistema é codificado, ou seja, a descrição computacional obtida na fase de projeto é traduzida para código executável, por meio do uso de uma ou mais linguagens de programação. `), e: new aln(` Na fase de implantação, o sistema é testado, empacotado, distribuído e instalado no ambiente do cliente. `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/17`, testRef: `3`, tema: `placeHolder`,
    prg: `19. Muito utilizada pelos engenheiros de software, a prototipação consiste na(o) … (5P)`, a: new aln(`Análise dos custos e dos riscos de desenvolvimento, com base nos requisitos iniciais. `, 0), b: new aln(` Decisão de prosseguir ou não na direção de um sistema concluído, com base nos comentários do cliente. `), c: new aln(`Coleta inicial dos requisitos e no planeamento do projeto, com base no grupo de programadores envolvidos. `), d: new aln(`Procedimento estruturado que avalia os requisitos finais de um sistema em fase de testes. `), e: new aln(`Processo que capacita o desenvolvedor a criar um modelo do software que será implementado. `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/18`, testRef: `3`, tema: `placeHolder`,
    prg: `20. Um Analista pretende desenvolver um projeto utilizando UML 2.0 e, em seus propósitos, verificou a possibilidade de uso de alguns diagramas. Um deles é o Diagrama de Sequência que representa a indicação do conjunto de objectos envolvidos num cenário e a especificação das mensagens trocadas entre estes ao longo de linhas do tempo (linhas tracejadas verticalmente da base dos objectos até a parte inferior do diagram. Retângulos colocados sobre as linhas de tempo indicam:(5P)`, a: new aln(`O tempo decorrido entre as iterações de um processo recursivo.`, 0), b: new aln(`Os casos de uso de cada objecto.`), c: new aln(` Os períodos de ativação do objecto. `), d: new aln(`As interações entre as actividades, no tempo`), e: new aln(`As etapas em que o objecto estará inativo.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/19`, testRef: `3`, tema: `placeHolder`,
    prg: `21. O uso da Linguagem de Modelagem Unificada (U.M.L.) não auxilia o processo do Scrum a evitar e/ou amenizar problemas de … (10P)`, a: new aln(`Comunicação entre a equipa de desenvolvimento `, 0), b: new aln(`Sobrecarga de trabalho no processo de validação. `), c: new aln(`Cronograma e atrasos no projeto. `), d: new aln(` Ocorrência de fatores positivos e negativos durante o sprint.`), e: new aln(`Escopo deficiente e falta de documentação. `), imgs: [], fim: ""
  })
];


let es1_ex_23 = [
  new Prg({
    cadNome: `Es1`, pId: `3/0`, testRef: `3`, tema: `random`,
    prg: `1. "É baseado na idéia de desenvolvimento de uma implementação inicial, expondo o resultado aos comentários do utilizador e refinando esse resultado por meio de diversas versões, até que seja desenvolvido um sistema adequado". 
  
  No âmbito do processo de software, trata-se de... `, a: new aln(` Engenharia de software baseada em componentes.`), b: new aln(` Modelo em cascata.`), c: new aln(` Desenvolvimento evolucionário. `, 0), d: new aln(` Desenvolvimento em espiral.`), e: new aln(` Programação estruturada.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/1`, testRef: `3`, tema: `random`,
    prg: `2. No Rational Unified Process, a maior porção do fluxo de trabalho principal denominado Analysis é executada na fase de ...`, a: new aln(` Inception`), b: new aln(` Construction`), c: new aln(` Implementation`), d: new aln(` Elaboration`, 0), e: new aln(` Transition`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/2`, testRef: `3`, tema: `random`,
    prg: `3. Durante a fase inicial do ciclo de vida do desenvolvimento de sistemas, na etapa de investigação, a tarefa que determina a probabilidade de sucesso do sistema proposto e propicia uma avaliação superficial da área técnica, econômica e comportamental do projeto, sendo decisivamente importante para o processo do desenvolvimento de sistemas, é chamada:`, a: new aln(`Estudo de viabilidade.`, 0), b: new aln(` Análise de equilibrio.`), c: new aln(` Design lógico do sistema.`), d: new aln(` Estudo de caso.`), e: new aln(` Análise de requisitos.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/3`, testRef: `3`, tema: `random`,
    prg: `4. Os padrões a partir dos quais os objetos são criados, 
  são denominados:`, a: new aln(` Atributos.`), b: new aln(` Métodos.`), c: new aln(` Entidades.`), d: new aln(` Classes.`, 0), e: new aln(` instâncias`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/4`, testRef: `3`, tema: `random`,
    prg: `5. São produtos da fase de elaboração do RUP: `, a: new aln(` Documento de visão e produto de software integrado.`), b: new aln(` Manual do utilizador e base de dados operacionais convertidas. `), c: new aln(` Descrição da arquitectura do software e lista de riscos revista.`, 0), d: new aln(` Produto de software integrado e descrição da arquitectura do software. `), e: new aln(` Lista de riscos revista e base de dados operacionais convertidas.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/5`, testRef: `3`, tema: `random`,
    prg: `6. Assinale as) atimações incorreta(s):`, a: new aln(` A UMI (unified modeling languag umo tecnologia concorrente com o processo unificado, no que diz respeito ao apoio à prática de engenharia de software orientada a objetos`, 0), b: new aln(` No Processo Unificado, a maior porção do core workflow denominado Analysis & executada na fase elaboração.`), c: new aln(` No desenvolvimento em cascata, os passos cliente sequencia e executados até a etapa final de teste, mesmo que o cliente esteja insatisfeito com determinado resultado intermediário`, 0), d: new aln(` O modelo em cascata embora inclua 5 estágios considerados fundamentais para o desenvolvimento de um software, tem como desvantagem a dificuldade de integraçãode novos requisitos do utilizador.`, 0), e: new aln(` O pequeno ganho de curto prazo na produtividade, ao diminuir a qualidade, não écompensado por perdas ou entraves no processo de desenvolvimento a médio e longo prazo. Por essa razão, a XP incentiva o controlo da qualidade como variável do projeto. `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/6`, testRef: `3`, tema: `random`,
    prg: `7. Nos métodos ágeis XP e Scrum, as entregas de partes funcionais do projeto são divididasem ciclos, geralmente compreendidos no período de 1 a 4 semanas. 
  Estes ciclosdenominam-se, respectivamente:`, a: new aln(` Backlog e planeamento da produção.`), b: new aln(` Periodo de entrega e reunião de revisão. `), c: new aln(` Reunião de planeamento e backlog.`), d: new aln(` Iterações e sprint.`, 0), e: new aln(` Entrega e retrospectiva.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/7`, testRef: `3`, tema: `random`,
    prg: `8. Identifique a(s) afirmação(ões) verdadeira(s):`, a: new aln(` Os requisitos não funcionais restringem o sistema que está sendo desenvolvido e o processo de desenvolvimento que deve ser usado e estão, frequentemente, relacionados ás propriedades emergentes do sistema, de modo que se aplicam ao sistema na sua totalidade.`), b: new aln(` A prototipação não é considerada uma técnica usada para validação de requisitos, pois ocorre na fase final do processo de desenvolvimento, representando a entrega do sistema aos utilizadores finais e clientes. `, 0), c: new aln(` o desenvolvimento em espiral baseia-se numa implementação inicial, expondo oresultado aos comentanos do utilizador e refinando-o por meio de diversas versões, até que seja desenvolvido um sistema adequado.`), d: new aln(` Pode-se considerar que a entrada para a estudo de viabilidade consiste em um conjunto preliminar de requisitos de negócios, um esboço da descrição do sistema e como essesistema pretende apoiar os processos de negócios. `), e: new aln(` No desenvolvimento em cascata, os passos são ordenados em sequência e executados até a etapa final de teste, mesmo que o cliente esteja insatisfeito com determinado resultado intermediário.`, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/8`, testRef: `3`, tema: `random`,
    prg: `9. "Técnica que faz o levantamento de ideias, onde cada uma das ideias sugeridas pode ser combinada na proposta de uma nova. Atividade de livre imaginação que deve ser tratada sem criticas ou debates". O texto descreve a técnica de elicitação de requisitos denominada:`, a: new aln(` Reunião.`), b: new aln(` Questionário,`), c: new aln(` Entrevista. `), d: new aln(` Brainstorm`, 0), e: new aln(` Casos de Uso.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/9`, testRef: `3`, tema: `random`,
    prg: `10.A figura abaixo mostra ferramentas utilizadas no desenvolvimento de sistemas orientados a objectos:[Imagens abaixo!]
  
  As figuras 1. 2 e 3, respectivamente, apresentam os diagramas de:`, a: new aln(` Implantação, casos de uso e pacotes;`), b: new aln(` Colaboração, componentes e sequência; `), c: new aln(` Actividades, pacotes e componentes:`), d: new aln(` Actividades, colaboração e componentes.`, 0), e: new aln(` Casos de uso, classes e objectos.`), imgs: [require('../testespics/es1/t2/es_ex1_23_10a.jpg'), require('../testespics/es1/t2/es_ex1_23_10b.jpg'), require('../testespics/es1/t2/es_ex1_23_10c.jpg')], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/10`, testRef: `3`, tema: `random`,
    prg: `11. No SCRUM, o processo de desenvolvimento inicia com uma reunião de planeamento na qual o Product Owner e a equipe decidem, em conjunto, o que deverá ser implementado do Product Backlog. Assim, a equipe planeia seu trabalho,  
  definindo o Sprint Backlog. na: `, a: new aln(` Primeira parte da Sprint Planning Meeting.`), b: new aln(` Segunda parte da Sprint Planning Meeting. `, 0), c: new aln(` Terceira parte da Sprint Planning Meeting.`), d: new aln(` Sprint.`), e: new aln(` Sprint Burndown.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/11`, testRef: `3`, tema: `random`,
    prg: `12. A figura, que representa um Sistema de Emissão de Bilhetes de Comboio, denomina-se....`, a: new aln(` Diagrama de Fluxo de Dados.`), b: new aln(` Modelo de Entidade-Relacionamento (MER). `), c: new aln(` Diagrama de Contexto.`), d: new aln(` Diagrama de Casos de Uso.`), e: new aln(` DFD de Nível 1.`, 0), imgs: [require('../testespics/es1/t2/ex_21_16.jpeg')], fim: ""
  }),
  new Prg({
    cadNome: `Es1`, pId: `3/12`, testRef: `3`, tema: `random`,
    prg: `13. Muito utilizada pelos engenheiros de software, a prototipação consiste na(o)...`, a: new aln(` Análise dos custos e dos riscos de desenvolvimento, com base nos requisitos iniciais. `), b: new aln(` Decisão de prosseguir ou não na direção de um sistema concluído, com base nos comentários do cliente. `, 0), c: new aln(` Coleta inicial dos requisitos e no planeamento do projeto, com base no grupo de programadores envolvidos. `), d: new aln(` Procedimento estruturado que avalia os requisitos finais de um sistema em fase de testes.`), e: new aln(` Processo que capacita o desenvolvedor a criar um modelo do software que será implementado.`), imgs: [], fim: ""
  })
];

//////////////////////////IA ////////////////


let ia_t2_23 = [
  new Prg({
    cadNome: `Ia`, pId: `2/0`, testRef: `2`, tema: `asaA`,
    prg: `1. Qual busca usa o conhecimento especifico do problemaalém da definição do problema? `, a: new aln(`Busca informada`, 0), b: new aln(`Busca em profundidade Busca em largura`), c: new aln(`Busca em largura`), d: new aln(`Busca desinformada `), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/1`, testRef: `2`, tema: `asaA`,
    prg: `2. O processo de remoção de detalhes de uma determinadarepresentação de estado é chamado de`, a: new aln(` Extração`), b: new aln(` Abstração`, 0), c: new aln(`Recuperação de Informações`), d: new aln(` Mineração de dados `), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/2`, testRef: `2`, tema: `asaA`,
    prg: `3. Quais são os dois principais tipos de problemas de busca`, a: new aln(` Busca e optimização`), b: new aln(` Busca não informada e busca informada `, 0), c: new aln(` Busca sequencial e busca paralela`), d: new aln(` Busca local e busca global`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/3`, testRef: `2`, tema: `asaA`,
    prg: `4. Qual é o objetivo da árvore de busca em um problema debusca"`, a: new aln(` Representar graficamente todos os estadospossiveis.`, 0), b: new aln(` Encontrar a solução ótima em tempo mínimo.`), c: new aln(` Realizar uma busca heuristica. `), d: new aln(` Organizar os nós do espaço de busca de formahierárquica.`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/4`, testRef: `2`, tema: `asaA`,
    prg: `5. O que é uma função de custo em um problema de busca?`, a: new aln(`Uma função que estima a qualidade de umasolução.`), b: new aln(` Uma função que determina a distância entre dois nós.`), c: new aln(`Uma função que atribui um custo a cada ação emum problema.`, 0), d: new aln(` Uma função que calcula o número de nós expandidos na busca.`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/5`, testRef: `2`, tema: `asaA`,
    prg: `6. O que é uma heuristica em um problema de buscainformada?`, a: new aln(` Uma função que estima a qualidade de uma solução semgarantia de optimalidade.`, 0), b: new aln(` Uma função que atribui um custo a cada ação em um problema.`), c: new aln(` Uma função que determina a distância entre dois nós.`), d: new aln(` Uma função que calcula o número de nós expandidos na busca.`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/6`, testRef: `2`, tema: `asaA`,
    prg: `7. Qual é a complexidade do espaço da busca Gulosa?`, a: new aln(` O(b)`), b: new aln(` O(m)`), c: new aln(` O(bl)`), d: new aln(` O(bm)`, 0), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/7`, testRef: `2`, tema: `asaA`,
    prg: `8. O que é a busca A*?`, a: new aln(` Um algoritmo de busca informada que utiliza uma funçãoheuristica para estimar o custo total.`, 0), b: new aln(` Um algoritmo de busca que utiliza um processo de busca paralela.`), c: new aln(` Um algoritmo de busca local que não garante a optimalidade da solução. `), d: new aln(` Um algoritmo de busca não informada que utiliza um espaço de busca em forma de árvore. `), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/8`, testRef: `2`, tema: `asaA`,
    prg: `9. Quais são as duas propriedades essenciais que uma heuristicadeve possuir?`, a: new aln(` Consistência e admissibilidade`, 0), b: new aln(` Adaptação e eficiència`), c: new aln(` Precisão e complexidade `), d: new aln(` Aleatoriedade e determinismo`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/9`, testRef: `2`, tema: `asaA`,
    prg: `10. Qual é a função de avaliação na abordagem gulosa?`, a: new aln(` Função heuristica`), b: new aln(` Custo do caminho do nó inicial ao nó atual`), c: new aln(` Custo do caminho do nó inicial ao nó atual +custo heuristico`, 0), d: new aln(` Média do custo do caminho do nó inicial ao nóatual e custo heuristico`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/10`, testRef: `2`, tema: `asaA`,
    prg: `11. Qual é a função de avaliação na abordagem A*?`, a: new aln(`  Função heuristica`), b: new aln(`  Custo do caminho do nó inicial ao nó atual`), c: new aln(` Custo do caminho do nó inicial ao nó atual + custo heuristico`, 0), d: new aln(`  Média do custo do caminho do nó inicial ao nó atual e custo heurístico`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/11`, testRef: `2`, tema: `asaA`,
    prg: `12. Uma heuristica é uma maneira de tentar:`, a: new aln(`Descobrir algo ou uma ideia incorporada em umprograma`), b: new aln(` Buscar e medir o quão longe um nó em uma árvore de Busca parece estar de um objetivo `), c: new aln(` Comparar dois nós em uma árvore de Busca para ver se um é melhor que o outro `), d: new aln(` Todos os mencionados`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/12`, testRef: `2`, tema: `asaA`,
    prg: `13. Estratégias de Busca desinformadas são melhores do queestratégias de Busca informadas`, a: new aln(` Verdadeiro`), b: new aln(` Falso`, 0), c: new aln(` `), d: new aln(` Todos os mencionados`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/13`, testRef: `2`, tema: `asaA`,
    prg: `14. Um problema em um espaço de busca é definido por umdesses estados.`, a: new aln(` Estado inicial`, 0), b: new aln(` Último estado`), c: new aln(` Estado intermediário`), d: new aln(` Todas anteriores`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/14`, testRef: `2`, tema: `asaA`,
    prg: `15. A função heuristica h(n) é:`, a: new aln(`é Custo de caminho mais baixo`), b: new aln(`Caminho mais barato da raiz ao nó objetivo`), c: new aln(`Custo estimado do caminho da raiz ao nó objetivo`, 0), d: new aln(`Custo médio do caminho`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/15`, testRef: `2`, tema: `asaA`,
    prg: `16. O algoritmo A estrela é baseado em:`, a: new aln(`Busca em largura`), b: new aln(`Busca em profundidade`), c: new aln(`Melhor-primeiro-Busca`, 0), d: new aln(`Subida de colinas`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/16`, testRef: `2`, tema: `asaA`,
    prg: `17. Qual é usado para melhorar o desempenho de uma buscaheuristica? `, a: new aln(` Qualidade dos nós`), b: new aln(` Qualidade da função heuristica`, 0), c: new aln(` Forma simples de nós `), d: new aln(` Nenhuma das mencionadas`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/17`, testRef: `2`, tema: `asaA`,
    prg: `19. Qual é o outro nome da estratégia de Busca informada?`, a: new aln(` Busca simples `), b: new aln(` Busca heuristica`), c: new aln(` Busca on-line `, 0), d: new aln(`Nenhum dos mencionados`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/18`, testRef: `2`, tema: `asaA`,
    prg: `20. Qual busca é completa e ótima quando h(n) é consistente?`, a: new aln(` Melhor primeira Busca `), b: new aln(` Busca em profundidade`), c: new aln(` Busca em primeiro lugar e em profundidade `), d: new aln(` Busca A*`, 0), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/19`, testRef: `2`, tema: `asaA`,
    prg: `21. O que é Business Intelligence (BI)?`, a: new aln(` Um software específico para criar gráficos e tabelas.`), b: new aln(` Uma técnica para coletar e analisar informações de redes sociais.`), c: new aln(` Um conjunto de estratégias e ferramentas para coleta, análisee visualização de dados para tomada de decisões.`, 0), d: new aln(` `), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/20`, testRef: `2`, tema: `asaA`,
    prg: `22. Qual é o objetivo principal do Business Intelligence (BI)?`, a: new aln(` Coletar dados de forma automatizada.`), b: new aln(` Criar relatórios complexos para gerentes executivos. `), c: new aln(`Fornecer informações valiosas para apoiar a tomada dedecisões.`, 0), d: new aln(`Automatizar todos OS processos de organização.`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/21`, testRef: `2`, tema: `asaA`,
    prg: `23. O que é um data warehouse?`, a: new aln(`Um local fisico onde os dados são armazenadosem discos rígidos.`), b: new aln(` Um conjunto de software e hardware para à análise de big data. `), c: new aln(` Um repositório centralizado de dados integrados e históricosde uma organização.`, 0), d: new aln(`Um método de armazenamento de dados emnuvem.`), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/22`, testRef: `2`, tema: `asaA`,
    prg: `A busca em largura sempre encontra a solução ótima++`, a: new aln(` Verdadeiro`), b: new aln(` Falso`, 0), c: new aln(` `), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/23`, testRef: `2`, tema: `asaA`,
    prg: `B) A busca em profundidade é mais eficiente do que a busca em
  largura`, a: new aln(` Verdadeiro`), b: new aln(` Falso`, 0), c: new aln(` `), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/24`, testRef: `2`, tema: `asaA`,
    prg: ` A busca em profundidade limitada é uma variante da busca
  em profundidade.+`, a: new aln(` Verdadeiro`, 0), b: new aln(` Falso`), c: new aln(` `), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/25`, testRef: `2`, tema: `asaA`,
    prg: `A busca de custo uniforme é uma estratégia de busca não
  informada.`, a: new aln(` Verdadeiro`, 0), b: new aln(` Falso`), c: new aln(` `), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/26`, testRef: `2`, tema: `asaA`,
    prg: `E) A busca em largura é menos propensa a ficar presa em loops
  do que a busca em profundidade.`, a: new aln(` Verdadeiro`, 0), b: new aln(` Falso`), c: new aln(` `), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/27`, testRef: `2`, tema: `asaA`,
    prg: `F) Uma heuristica admissível nunca superestima o custo para
  alcançar o objetivo.`, a: new aln(` Verdadeiro`, 0), b: new aln(` Falso`), c: new aln(` `), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/28`, testRef: `2`, tema: `asaA`,
    prg: `G) A busca gulosa utiliza uma heuristica para estimar o custo
  total de uma solução.`, a: new aln(` Verdadeiro`), b: new aln(` Falso`, 0), c: new aln(` `), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/29`, testRef: `2`, tema: `asaA`,
    prg: `H) A busca A combina a busca em largura com uma heuristica
  admissível.`, a: new aln(` Verdadeiro`), b: new aln(` Falso`, 0), c: new aln(` `), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/30`, testRef: `2`, tema: `asaA`,
    prg: `I) A busca A sempre encontra a solução ótima.`, a: new aln(` Verdadeiro`), b: new aln(` Falso`, 0), c: new aln(` `), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/31`, testRef: `2`, tema: `asaA`,
    prg: `J) A busca em profundidade pode ser implementada usando uma
  pilha (LIFO).`, a: new aln(` Verdadeiro`, 0), b: new aln(` Falso`), c: new aln(` `), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/32`, testRef: `2`, tema: `asaA`,
    prg: `K) A busca gulosa sempre encontra a solução ótima.`, a: new aln(` Verdadeiro`), b: new aln(` Falso`, 0), c: new aln(` `), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/33`, testRef: `2`, tema: `asaA`,
    prg: `L) Uma heurística consistente é sempre admissível`, a: new aln(` Verdadeiro`), b: new aln(` Falso`, 0), c: new aln(` `), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/34`, testRef: `2`, tema: `asaA`,
    prg: `M) BI refere-se ao processo de coleta, organização e análise de
  dados para obter insights e tomar decisões informadas.`, a: new aln(` Verdadeiro`, 0), b: new aln(` Falso`), c: new aln(` `), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/35`, testRef: `2`, tema: `asaA`,
    prg: `N) A modelagem de dados no contexto de BI envolve a criação
  de representações gráficas de dados.`, a: new aln(` Verdadeiro`), b: new aln(` Falso`, 0), c: new aln(` `), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/36`, testRef: `2`, tema: `asaA`,
    prg: `O) A mineração de dados é uma técnica usada para descobrir
  padrões e relações em conjuntos de dados.`, a: new aln(` Verdadeiro`, 0), b: new aln(` Falso`), c: new aln(` `), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/37`, testRef: `2`, tema: `asaA`,
    prg: `P) A modelagem de dados é o processo de projetar e definir a
  estrutura e os relacionamentos dos dados em um sistema de
  informações.`, a: new aln(` Verdadeiro`, 0), b: new aln(` Falso`), c: new aln(` `), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  })
];


let ia_t2_22 = [
  new Prg({
    cadNome: `Ia`, pId: `2/0`, testRef: `2`, tema: `asaA`,
    prg: `1. O agente de resolução de problemas com várias opções imediatas de valor desconhecido pode decidir o que fazer apenas examinando diferentes sequências possiveis de ações que levam a estados de valor conhecido e, em seguida, escolher a melhor sequencia. Este processo de procurar por tal sequência é chamado de busca:`, a: new aln(` Verdadeiro`), b: new aln(` Falso`, 0), c: new aln(``), d: new aln(``), e: new aln(` `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/1`, testRef: `2`, tema: `asaA`,
    prg: `2. Um algoritmo de busca recebe___como entra e retorna___como saida`, a: new aln(`Entrada, saida`), b: new aln(` Problema, solução`), c: new aln(` Solução, problema`), d: new aln(` Parâmetros, sequência de ações`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/2`, testRef: `2`, tema: `asaA`,
    prg: `3. Um problema em um espaço de busca é definido por umdesses estados.`, a: new aln(` Estado inicial `, 0), b: new aln(` Ultimo estado`), c: new aln(`Estado intermediário`), d: new aln(` Todos os mencionados`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/3`, testRef: `2`, tema: `asaA`,
    prg: `4. Qual busca usa o conhecimento especifico do problemaalém da definição do problema?`, a: new aln(` Busca informada`, 0), b: new aln(` Busca em profundidade`), c: new aln(` Busca em largura`), d: new aln(` Busca desinformada`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/4`, testRef: `2`, tema: `asaA`,
    prg: `5. O processo de remoção de detalhes de uma determinadarepresentação de estado é chamado de____`, a: new aln(` Extração `), b: new aln(` Abstração`, 0), c: new aln(` Recuperação de Informações`), d: new aln(` Mineração de dados`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/5`, testRef: `2`, tema: `asaA`,
    prg: `6. ____número de métodos de busca informados queaprendemos na cadeira de Inteligência Artificial.`, a: new aln(`4`, 0), b: new aln(`3`), c: new aln(`2 `), d: new aln(`1`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/6`, testRef: `2`, tema: `asaA`,
    prg: `7. Qual Busca é implementada com uma fila vazia deprimeiro a entrar, primeiro a sair?`, a: new aln(` Busca em profundidade`), b: new aln(` Busca em largura`, 0), c: new aln(` Busca bidirecional`), d: new aln(` Nenhuma das mencionadas`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/7`, testRef: `2`, tema: `asaA`,
    prg: `8. Quando a busca em largura é ideal?`, a: new aln(` Quando há menor número de nós`), b: new aln(` Quando todos os custos das etapas são iguais`, 0), c: new aln(` Quando todos os custos das etapas são desiguais `), d: new aln(` Nenhuma das mencionadas.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/8`, testRef: `2`, tema: `asaA`,
    prg: `9. O DFS é ___eficiente e o BFS ___é`, a: new aln(`a Espaço. Tempo `), b: new aln(` Tempo. Espaço`, 0), c: new aln(` Tempo, Tempo`), d: new aln(` Espaço, Espaço`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/9`, testRef: `2`, tema: `asaA`,
    prg: `10. Qual é a complexidade do espaço da buscaprofundidade?`, a: new aln(`  O(b) `), b: new aln(`  O(bl)`), c: new aln(`  O(bm)`), d: new aln(`  O(m)`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/10`, testRef: `2`, tema: `asaA`,
    prg: `11. Qual busca implementa a operação de pilha para buscar osestados? `, a: new aln(` Busca com profundidade limitada`), b: new aln(` Busca em profundidade`, 0), c: new aln(` Busca em largura`), d: new aln(` Nenhum dos mencionados`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/11`, testRef: `2`, tema: `asaA`,
    prg: `12. Qual é o termo geral da busca cega?`, a: new aln(`  Busca informada`), b: new aln(` Busca desinformada`, 0), c: new aln(` Busca informada e Não Informada`), d: new aln(` Busca heuristica`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/12`, testRef: `2`, tema: `asaA`,
    prg: `13. Estratégia de busca gulosa escolhe o nó para expansão____`, a: new aln(` Mais raso`), b: new aln(` Mais profundo`), c: new aln(` Mais próximo do no objetivo`), d: new aln(` Com o custo heuristico minimo `, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/13`, testRef: `2`, tema: `asaA`,
    prg: `14. Qual é a função de avaliação na abordagem gulosa? `, a: new aln(` Função heuristica `), b: new aln(` Custo do caminho do nó inicial ao nó atual`), c: new aln(` Custo do caminho do nó inicial ao no atual +custo heuristico `, 0), d: new aln(` Média do custo do caminho do nó inicial ao nó atual e custo heuristico`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/14`, testRef: `2`, tema: `asaA`,
    prg: `15. Qual é a complexidade do espaço da busca Gulosa?`, a: new aln(` O(b)`), b: new aln(` O(bl)`, 0), c: new aln(` O(m) `), d: new aln(` O(bm)`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/15`, testRef: `2`, tema: `asaA`,
    prg: `16. Uma heuristica é uma maneira de tentar:`, a: new aln(` Descobrir algo ou uma ideia incorporada em um programa`), b: new aln(` Buscar e medir o quão longe um nó em uma árvore de Busca parece estar de um objetivo`, 0), c: new aln(` Comparar dois nós em uma árvore de Busca para ver se um é melhor que o outro`), d: new aln(` Todos os mencionados`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/16`, testRef: `2`, tema: `asaA`,
    prg: `17. Estratégias de Busca desinformada sao  melhores do doque estratégias de Busca informada`, a: new aln(`Verdadeira`), b: new aln(`Falso`, 0), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/17`, testRef: `2`, tema: `asaA`,
    prg: `18. Qual metodo de busca expandira no mais próximo do objetivo?`, a: new aln(` Melhor Primeiro`), b: new aln(`Busca gulosa por melhor primeiro`, 0), c: new aln(` busca A*`), d: new aln(` Nenhuma das mencionadas`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/18`, testRef: `2`, tema: `asaA`,
    prg: `19. Um problema em um espaço de busca é definido por um desses estados`, a: new aln(` Estado inicial `, 0), b: new aln(` Ultimo estado`), c: new aln(` Estado intermediario`), d: new aln(` todas anteriores`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/19`, testRef: `2`, tema: `asaA`,
    prg: `20 ___numero de metodos de busca informados que aprendemos na cadeira de Inteligência Artificial.`, a: new aln(` 6`), b: new aln(` 5`, 0), c: new aln(` 4`), d: new aln(` 3`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/20`, testRef: `2`, tema: `asaA`,
    prg: `21. A fimção heuristica (n) é ___`, a: new aln(` Custo de caminho mais baixo`), b: new aln(` Caminho mais barato da raiz ao no objetivo `), c: new aln(` Custo estimado do caminho da raiz ao no objetivo`, 0), d: new aln(` Custo medio do caminho `), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/21`, testRef: `2`, tema: `asaA`,
    prg: `22.Qual declaração é válida para a função heuristica?`, a: new aln(` função heuristica é usada para resolver problemas matemáticos`), b: new aln(` A função heuristica recebe parâmetros do tipo string e retorna um valor inteiro`), c: new aln(` A função heuristica não possui nenhum tipo de retorno.`), d: new aln(` A função heuristica calcula o custo de um caminho ótimo entre o par de estadoss`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/22`, testRef: `2`, tema: `asaA`,
    prg: `23. O algoritmo A* é baseado em ___`, a: new aln(` Busca em largura `, 0), b: new aln(` Busca em profundidade `), c: new aln(` Melhor-primeiro-Busca`), d: new aln(` Subida de colinas`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/23`, testRef: `2`, tema: `asaA`,
    prg: `24. A* é ótimo se h(n) for uma heuristica admissivel - isto é, desde que h(n) nunca subestime o custo para atingir a meta.`, a: new aln(`Verdadeira`, 0), b: new aln(`falso`), c: new aln(``), d: new aln(` Subida de colinas`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/24`, testRef: `2`, tema: `asaA`,
    prg: `25. Qual é a função de avaliação na abordagem A"?`, a: new aln(` Falso`), b: new aln(` Função heuristica `), c: new aln(` Custo do caminho do nó inicial ao no atual`, 0), d: new aln(` Custo do caminho do no inicial no no atual + custo heuristico`), e: new aln(` Média do custo do caminho do no inicial ao no atual e custo heuristico `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/25`, testRef: `2`, tema: `asaA`,
    prg: `26. Qual é usado para melhorar o desempenho da buscaheuristica?`, a: new aln(` Qualidade dos nós`), b: new aln(` Qualidade da função heuristica `, 0), c: new aln(` Forma simples de nós`), d: new aln(` Nenhuma das mencionadas`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/26`, testRef: `2`, tema: `asaA`,
    prg: `27, Qual é o outro nome da estratégia de Busca informada?`, a: new aln(`Busca simples`), b: new aln(`Busca heuristica`, 0), c: new aln(`Busca on-line`), d: new aln(`Nenhum dos mencionados`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/27`, testRef: `2`, tema: `asaA`,
    prg: `28. Qual é a função heuristica da busca gulosa do melhorprimeiro?`, a: new aln(` f(n) != h(n)`), b: new aln(` f(n) < h(n)`), c: new aln(` f(n) = h(n)`), d: new aln(` f(n) >h(n)`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `2/28`, testRef: `2`, tema: `asaA`,
    prg: `29. Qual busca é completa e ótima quando h(n) é consistente?`, a: new aln(` Melhor primeira Busca`), b: new aln(` Busca em profundidade `), c: new aln(` Busca em primeiro lugar e em profundidade`), d: new aln(` Busca A*`, 0), e: new aln(``), imgs: [], fim: ""
  })
];


let ia_t1_23 = [
  new Prg({
    cadNome: `Ia`, pId: `1/0`, testRef: `1`, tema: `asaA`,
    prg: `1 Quais instrumentos são usados para perceber e agir sobre omeio ambiente?`, a: new aln(` Sensores e Atuadores`, 0), b: new aln(` Sensores `), c: new aln(` Perceptor`), d: new aln(` Nenhum dos mencionados`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `1/1`, testRef: `1`, tema: `asaA`,
    prg: `2 Quantos tipos de agentes existem na inteligência artificial?`, a: new aln(` 1`), b: new aln(` 2`), c: new aln(` 3`), d: new aln(` 4`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `1/2`, testRef: `1`, tema: `asaA`,
    prg: `3. O que faz um agente racional?`, a: new aln(`Reuna o máximo de informações possivel antes de tomar uma decisão.`), b: new aln(` Maximize o desempenho esperado.`, 0), c: new aln(` Maximize o desempenho atual.`), d: new aln(` Use apenas conhecimento a priori `), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `1/3`, testRef: `1`, tema: `asaA`,
    prg: `4. O que é a busca em profundidade de aprofundamentoiterativo?`, a: new aln(` Pesquisa de profundidade-hst com um limite de profundidadegradualmente crescente.`, 0), b: new aln(` Pesquisa em profundidade com um limite deprofundidade predeterminado, `), c: new aln(`Uma estratégia de pesquisa em que duas pesquisas são executadas simultaneamente. `), d: new aln(` Pesquisa em profundidade que expande primeiro o nó de menor custo`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `1/4`, testRef: `1`, tema: `asaA`,
    prg: `5. O PEAS no ambiente de tarefa é sobre:`, a: new aln(`Par, Meio Ambiente, Amadores, Sentido`), b: new aln(` Desempenho, Ambiente, Atuadores, Sensores`, 0), c: new aln(` Percepção, Ambiente, Atuadores, Sensores`), d: new aln(` Nenhuma das acima`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `1/5`, testRef: `1`, tema: `asaA`,
    prg: `6. O que se entende por sequência de percepção do agente?`, a: new aln(` Usado para perceber o ambiente `), b: new aln(` História completa do atuador`), c: new aln(` História completa das coisas percebidas`, 0), d: new aln(` Nenhum dos mencionados `), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `1/6`, testRef: `1`, tema: `asaA`,
    prg: `7. Qual é a composição para agentes em inteligênciaartificial?`, a: new aln(` Programa`), b: new aln(` Arquitetura`), c: new aln(` Tanto o programa quanto a arquitetura `, 0), d: new aln(` Nenhum dos mencionados`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `1/7`, testRef: `1`, tema: `asaA`,
    prg: `8. Um problema em um espaço de busca é definido por umdesses estados.`, a: new aln(` Estado inicial `), b: new aln(` Último estado`), c: new aln(` Estado intermediário`), d: new aln(` Todas anteriores`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `1/8`, testRef: `1`, tema: `asaA`,
    prg: `9.O que é espaço de estados?`, a: new aln(` Todo o problema`), b: new aln(` Sua definição para um problema `), c: new aln(` Problema que você projeta`), d: new aln(` Representando seu problema com variável e parâmetro`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `1/9`, testRef: `1`, tema: `asaA`,
    prg: `10. No espaço de estados, o conjunto de ações determinadoproblema é expresso por`, a: new aln(` Estados intermediários `), b: new aln(` Função sucessora que executa a ação atual e retorna opróximo estado`, 0), c: new aln(` Estados iniciais`), d: new aln(` Nenhuma das acima `), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `1/10`, testRef: `1`, tema: `asaA`,
    prg: `11. Um algoritmo de busca recebe ____ como entrada eretorna ____ como saida.`, a: new aln(` Entrada, saida `), b: new aln(` Solução do problema`), c: new aln(` Solução, problema `), d: new aln(` Parâmetros, sequência de ações`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `1/11`, testRef: `1`, tema: `asaA`,
    prg: `12. O conjunto de ações para um problema em um espaço deestados é formulado por um`, a: new aln(`Estados intermediános`), b: new aln(` Estado inicial`), c: new aln(`  Função sucessora, que executa a ação atual e retorna opróximo estado imediato`, 0), d: new aln(` Nenhum dos mencionados`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `1/12`, testRef: `1`, tema: `asaA`,
    prg: `13. Os principais componentes para medir o desempenho daresolução de problemas são:`, a: new aln(` Completude`), b: new aln(` Otimização `), c: new aln(` Complexidade de tempo e espaço`), d: new aln(` Todos os mencionados `, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `1/13`, testRef: `1`, tema: `asaA`,
    prg: `14. O criador de chamou inicialmente de "jogo deimitação".`, a: new aln(` O teórico da lógica`), b: new aln(` O Teste de Turing`, 0), c: new aln(` Cibernética`), d: new aln(` LISP`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Ia`, pId: `1/14`, testRef: `1`, tema: `asaA`,
    prg: `15. A principal tarefa de um agente de resolução de problema é:`, a: new aln(` Resolva o problema dado e alcance a meta`), b: new aln(` Para descobrir qual sequência de ação o levará aoestado objectivo`), c: new aln(` Todos os mencionados`, 0), d: new aln(` Nenhum dos mencionados`), e: new aln(``), imgs: [], fim: ""
  })
];

///////////////////////////  Marketing //////////////////////////


let mkEx1 = [
  new Prg({
    cadNome: `Es2`, pId: `0/0`, testRef: `0`, tema: `asaA`,
    prg: `1. O processo de formulação de estratégia de marketing deve inicial com. `, a: new aln(` analise do ambiente de Marketing `, 0), b: new aln(` A analise do contesto competitivo`), c: new aln(` analise do ambiente da empresa `), d: new aln(` A analise do ambiente de negocios`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es2`, pId: `0/1`, testRef: `0`, tema: `asaA`,
    prg: `2. Ganhar vantagem competitiva através de uma entrega cuidadosa e rápida é um exemplo de diferenciação de ___.`, a: new aln(` Pessoal`), b: new aln(` serviços`), c: new aln(` Imagem`), d: new aln(` Canal`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es2`, pId: `0/2`, testRef: `0`, tema: `asaA`,
    prg: `3.Não é elemento do Microambiente `, a: new aln(`Taxa de juros`, 0), b: new aln(` Os consumidores`), c: new aln(` Concorrentes`), d: new aln(` Os Publicos`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es2`, pId: `0/3`, testRef: `0`, tema: `asaA`,
    prg: `4."Qualidade" significa zero defeitos - fazer a coisa certa à primeira" (PARAZURAMAN, ZEITHAML e BERRY - 1985)`, a: new aln(` Qualidade técnica`, 0), b: new aln(` Qualidade orientada para a satisfação dos clientes`), c: new aln(` Qualidade percebida`), d: new aln(` Qualidade Superior`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es2`, pId: `0/4`, testRef: `0`, tema: `asaA`,
    prg: `5. Incentivos de curto prazo para estimular a compra ou a venda de um produto são chamados de `, a: new aln(` Publicidade`), b: new aln(` Propaganda`), c: new aln(` Vendas pessoais `), d: new aln(` Promoção de vendas`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es2`, pId: `0/5`, testRef: `0`, tema: `asaA`,
    prg: `6. Qual dos seguintes níveis de segmentação de mercado normalmente é caracterizado por um mercado pequeno cujas necessidadesnão estão sendo totalmente satisfeitas?`, a: new aln(` Marketing geográfico.`), b: new aln(` Marketing individual.`), c: new aln(` Marketing de nicho;`, 0), d: new aln(` Marketing de segmentação `), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es2`, pId: `0/6`, testRef: `0`, tema: `asaA`,
    prg: `7.A habilidade de preparar produtos de massa de acordo com exigências de cada cliente é conhecida como____.`, a: new aln(` Segmentação por preferências;`), b: new aln(` Customização de massa; `, 0), c: new aln(` Marketing de massa;`), d: new aln(` Marketing de nicho. `), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es2`, pId: `0/7`, testRef: `0`, tema: `asaA`,
    prg: `8. Suponha que a empresa X pretende identificar um mercado com rendimentos elevados e com um estilo de vida activo. Qual das seguintes bases de segmentação seria útil para esse efeito?`, a: new aln(` Demográfica;`), b: new aln(` Comportamental;`), c: new aln(` Psicográfica: `, 0), d: new aln(` Nenhuma das respostas anteriores.`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es2`, pId: `0/8`, testRef: `0`, tema: `asaA`,
    prg: `9. A/O não é o elemento que torna a Internet o meio de comunicação em massa exclusivo na história de negócios/marketing na humanidade`, a: new aln(` Interacção`, 0), b: new aln(` Apresentação 24 horas por dia `), c: new aln(` Relevância da distância`), d: new aln(` Novas oportunidades de negócio `), e: new aln(` Disponibilidade`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es2`, pId: `0/9`, testRef: `0`, tema: `asaA`,
    prg: `10. Quando é que o e-mail Marketing pode ter impacto negativo na reputaçãofimagem de uma marca?`, a: new aln(` Quando se enviam e-mails publicitarios indiscriminadamente`, 0), b: new aln(` quando se enviam e-mails com critério prévio de segmentação `), c: new aln(` quando se enviam e-mails com critério prévio de permissão`), d: new aln(` Quando se tem o conceito de SPAM consolidado `), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es2`, pId: `0/10`, testRef: `0`, tema: `asaA`,
    prg: `11. ão faz parte das vantagens do e-mail marketing quanto aos proveitos permissão`, a: new aln(` Maior notoriedade`), b: new aln(` Publicidade`, 0), c: new aln(` A fidelização`), d: new aln(` A precisão e eficácia`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es2`, pId: `0/11`, testRef: `0`, tema: `asaA`,
    prg: `12.Qual das alineas a seguir é um dos tipos de SPAM?`, a: new aln(` Vendas`), b: new aln(` propraganda`, 0), c: new aln(` segmentação`), d: new aln(` Posicionamento`), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es2`, pId: `0/12`, testRef: `0`, tema: `asaA`,
    prg: `13. Qual das seguintes alternativas seria um exemplo de 'serviço puro"?`, a: new aln(` Empresa aérea`), b: new aln(` Serviço de cópias`), c: new aln(` Revenda de automóveis`), d: new aln(` Seguros `, 0), e: new aln(` Nenhuma das anteriores`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es2`, pId: `0/13`, testRef: `0`, tema: `asaA`,
    prg: `14. Serviços com alto nivel de qualidades de avaliar mesmo depois do consumo. ou seja, que possuem caracteristicas que o comprador normalmente acha dificil`, a: new aln(` de equipamentos`), b: new aln(` de experiência `), c: new aln(` de pesquisa`), d: new aln(` credenciáveis`, 0), e: new aln(` de atenção pessoal`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es2`, pId: `0/14`, testRef: `0`, tema: `asaA`,
    prg: `15. As empresas prestadoras de serviços tentam demonstrar a qualidade de seus serviços por meio de prova fisica e`, a: new aln(` determinação predatória de preços`), b: new aln(` pessoas`), c: new aln(` lucros`), d: new aln(` apresentação`, 0), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es2`, pId: `0/15`, testRef: `0`, tema: `asaA`,
    prg: `
  16. A tarefa da gestão de marketing não é a de atrair clientes e relacionar-se com eles, essa função compete somente aos gestores de marketing. (............)
  
  `, a: new aln(`verdadeiro`, 0), b: new aln(`Falso`), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es2`, pId: `0/16`, testRef: `0`, tema: `asaA`,
    prg: `17. O sucesso ou não da empresa não depende apenas dos fornecedores, intermediários de marketing, clientes, concorrentes e vários públicos. (............)..`, a: new aln(`verdadeiro`, 0), b: new aln(`Falso`), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es2`, pId: `0/17`, testRef: `0`, tema: `asaA`,
    prg: `18. As forças que actuam no Micrombiente são controláveis enquanto as que actuam no Macroambiente são apenas monitoráveis....----------
  `, a: new aln(`verdadeiro`, 0), b: new aln(`Falso`), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es2`, pId: `0/18`, testRef: `0`, tema: `asaA`,
    prg: `19. Na abordagem sobre filosofias de marketing, a orientação para o Cliente significa que o propósito da empresa è
  vender o que o mercado deseja e não o que a fabrica produz. (...........)
  `, a: new aln(`verdadeiro`, 0), b: new aln(`Falso`), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es2`, pId: `0/19`, testRef: `0`, tema: `asaA`,
    prg: `20. Não são apenas os actores e forças externas do ambiente de marketing que afectam a capacidade da Gestão de desenvolver e manter bons relacionamentos com os seus consumidores. (...........)
  Boa sorte e bom trabalho!
  `, a: new aln(`verdadeiro`), b: new aln(`Falso`, 0), c: new aln(``), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  })
];

/// Es2

let es2_t1_21 = [
  new Prg({
    cadNome: `Es2`, pId: `/0`, testRef: ``, tema: ``,
    prg: `1. No âmbito da Gestão de Configuração e Mudança de Software, ao conjunto de um ou mais itens de configuração identificados para uso, independentemente das suas versões, dá-se o nome de: (10 P)`, a: new aln(` Baseline`), b: new aln(` Metadados. `), c: new aln(` Relatório de status.`), d: new aln(` Release request.`, 0), e: new aln(` Biblioteca.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es2`, pId: `/1`, testRef: ``, tema: ``,
    prg: `2. A aplicação de conhecimentos, habilidades, ferramentas e técnicas às atividades do projeto a fim de atender aos seus requisitos denomina-se: (10 P)`, a: new aln(`Gestão de Recursos. `), b: new aln(`Gestão do Conhecimento. `), c: new aln(`Gestão de Projetos. `, 0), d: new aln(`Gestão de Risco. `), e: new aln(`Gestão Contábil Financeiro. `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es2`, pId: `/2`, testRef: ``, tema: ``,
    prg: `3. Os componentes do escopo, que correspondem a fatores considerados verdadeiros para o sucesso do projeto, são: (10 P)`, a: new aln(`As descrições das características. `), b: new aln(`As justificativas. `), c: new aln(`As entregas. `), d: new aln(`Os objetivos. `, 0), e: new aln(`As premissas. `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es2`, pId: `/3`, testRef: ``, tema: ``,
    prg: `4. Os projetos de software devem ter sua qualidade avaliada, e para tanto, selecionaram-se fatores indicados na norma ISO 9126, que identifica alguns atributos importantes da qualidade, dentre os quais, a (assinale a opção correct: (10 P) `, a: new aln(`Eficiência, que representa a facilidade com que o software pode ser transferido entre ambientes computacionais. `), b: new aln(`Eficiência, que representa a facilidade com que o software pode ser transferido entre ambientes computacionais. `), c: new aln(`Manutenibilidade, que representa o período de tempo em que o software esteja disponível para uso. `), d: new aln(`Funcionalidade, que representa a facilidade com que o software pode ser transferido entre ambientes computacionais. `), e: new aln(`Confiabilidade, que representa o período de tempo em que o software esteja disponível para uso. `, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es2`, pId: `/4`, testRef: ``, tema: ``,
    prg: `5. Assinale as alternativas correctas em relação a qualidade de software: (10 P)`, a: new aln(`Entende-se como o uso de métricas para desenvolver estratégias para a melhoria do processo de software. `, 0), b: new aln(`É o conjunto de actividades que garante que cada produto de trabalho da engenharia de software exiba adequada qualidade. `, 0), c: new aln(`Entende-se como actividades de segurança em cada projecto de software. `), d: new aln(`É a conformidade de requisitos funcionais a padrões de desenvolvimento. `, 0), e: new aln(`Encontra-se definida pela norma NBR ISO 9000:2005 e pelo glossário do IEEE. `, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es2`, pId: `/5`, testRef: ``, tema: ``,
    prg: `6. Abaixo são apresentados os 4 passos para realizar uma SQA estatística e criar um processo adaptativo de engenharia de software. Analise os passos e assinale a opção que representa a ordem correcta dos factos: (10 P)1-Considerar que 20% do código tem 80% dos defeitos. 2-Depurar o código até a sua causa subjacente. 3-Colectar e categorizar os defeitos de software encontrados. 4-Corrigir os problemas que causaram os defeitos. `, a: new aln(` 2, 3, 1, 4. `), b: new aln(` 3, 2, 4, 1. `), c: new aln(` 3, 1, 2, 4 `), d: new aln(`3, 2, 1, 4. `, 0), e: new aln(`1, 4, 3, 2.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es2`, pId: `/6`, testRef: ``, tema: ``,
    prg: `7. Para a capacitação de uma organização, segundo o Capability Maturity Model (CMM), a maturidade do processo de software é avaliada de acordo com os seguintes níveis (assinale a opção correct: (5 P)`, a: new aln(`Inicial; Definido; Repetitivo; Gerenciado; Optimizado. `), b: new aln(`Inicial; Definido; Gerenciado; Repetitivo; Optimizado. `), c: new aln(`Inicial; Repetitivo; Definido; Gerenciado; Optimizado. `, 0), d: new aln(`Inicial; Definido; Repetitivo; Optimizado. Gerenciado. `), e: new aln(`Inicial; Gerenciado; Repetitivo; Definido; Optimizado. `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es2`, pId: `/7`, testRef: ``, tema: ``,
    prg: `8. Quanto às métricas de software, os papéis de medição podem ser considerados osseguintes (assinale os verdadeiros): (20 P)`, a: new aln(`Caracterizar `, 0), b: new aln(` Corrigir `), c: new aln(` Avaliar `, 0), d: new aln(`Prever `, 0), e: new aln(` Aperfeiçoar `, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es2`, pId: `/8`, testRef: ``, tema: ``,
    prg: `9. A fase do ciclo de vida dos testes de software, que define que: “A elaboração e revisão de casos de testes e de roteiros de testes deverão ser construídos e modificados em função das mudanças solicitadas pelo Cliente, bem como pelo próprio aperfeiçoamento do processo de testes, para ampliação da sua cobertura.”, é denominada de (indique a opção correct: (5 P)`, a: new aln(`Planeamento `), b: new aln(`Preparação `), c: new aln(`Execução `), d: new aln(`Especificação `, 0), e: new aln(`Manutenção `), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es2`, pId: `/9`, testRef: ``, tema: ``,
    prg: `10.Em relação às métricas de produto de software, assinale as alternativas correctas: (20 P)`, a: new aln(`Métricas diretas – são observados atributos como custo e esforço (nrº de linhas de código produzidas, quantidade de defeitos encontrados).`, 0), b: new aln(`Métricas indiretas – medem o quanto o software se adequa às exigências implícitas e explícitas do cliente (correctitude, manutenibilidade, integridade, usabilidad`), c: new aln(`Métricas de produto e produtividade – medem características do software (representação, execução e saída do produto). `, 0), d: new aln(`Métricas públicas – colectam e avaliam informações sobre defeitos do projeto, tentando descobrir indicadores.`, 0), e: new aln(`Métricas de qualidade e métricas técnicas –. medem a eficiência, confiabilidade, qualidade, funcionalidade.`), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es2`, pId: `/10`, testRef: ``, tema: ``,
    prg: `11.Em relação às características e aos objetivos de projetos, assinale as opções corretas: (20 P)`, a: new aln(`Cada projeto cria produto, serviço ou resultado único. `, 0), b: new aln(`Na definição do projeto, estabelece-se o objetivo principal, relacionado à consecução de determinada(s) meta(s) e cuja execução pode ser indefinida no tempo. `), c: new aln(`No projeto, a data de início é flexível, o importante é a obtenção de seus objetivos. `), d: new aln(`A flexibilidade quanto aos fins a serem atingidos com a execução de um projeto, contribui para o processo de tomada de decisão. `, 0), e: new aln(`Segundo Summerville (2011) um projecto de software consiste de actividades e artefactos. `, 0), imgs: [], fim: ""
  }),
  new Prg({
    cadNome: `Es2`, pId: `/11`, testRef: ``, tema: ``,
    prg: `15.O Guia PMBOK fornece 5 grupos de Processos que são típicas em quase todas áreas de projetos, nomeadamente: `, a: new aln(`Processos de Iniciação;   Processos de Planeamento;   Processos de Execução;   Processos de Monitoramento e Controlo;   Processos de Encerramento. `, 0), b: new aln(`Processos de Iniciação;   Processos de Monitoramento e Controlo;   Processos de Planeamento;   Processos de Encerramento. `), c: new aln(`Processos de Iniciação;   Processos de Execução;   Processos de Monitoramento;   Processos de Encerramento. `), d: new aln(``), e: new aln(``), imgs: [], fim: ""
  })
];

let es2_t1_22 =
  [
    new Prg({
      cadNome: `Es2`, pId: `/0`, testRef: ``, tema: `asaA`,
      prg: `1. No âmbito da Gestão de Configuração e Mudança de Software, ao conjunto de um ou mais itens de configuração identificados para uso, independentemente das suas versões, dá-se o nome de: (0,5) `, a: new aln(` Baseline `), b: new aln(` Metadados.  `), c: new aln(` Metadados.  `), d: new aln(` Release request. `, 0), e: new aln(` Biblioteca. `), imgs: [], fim: ""
    }),
    new Prg({
      cadNome: `Es2`, pId: `/1`, testRef: ``, tema: `asaA`,
      prg: `2. A aplicação de conhecimentos, habilidades, ferramentas e técnicas às atividades do projeto a fim de atender aos seus requisitos denomina-se: (0,5) `, a: new aln(` Gestão de Recursos.  `), b: new aln(` Gestão do Conhecimento.  `), c: new aln(` Gestão de Projetos.  `, 0), d: new aln(` Gestão de Risco.  `), e: new aln(` Gestão Contábil Financeiro. `), imgs: [], fim: ""
    }),
    new Prg({
      cadNome: `Es2`, pId: `/2`, testRef: ``, tema: `asaA`,
      prg: `3. Os componentes do escopo, que correspondem a fatores considerados verdadeiros para o sucesso do projeto, são: (0,5)  `, a: new aln(` As descrições das características.  `), b: new aln(` As justificativas.  `), c: new aln(` As entregas.  `), d: new aln(` Os objetivos.  `, 0), e: new aln(` As premissas. `), imgs: [], fim: ""
    }),
    new Prg({
      cadNome: `Es2`, pId: `/3`, testRef: ``, tema: `asaA`,
      prg: `4. Quanto às métricas de software, os papéis de medição podem ser considerados os seguintes:   `, a: new aln(` Corrigir, Caracterizar, Prever, Avaliar.  `), b: new aln(` Avaliar, Depurar, Melhorar, Prever.  `), c: new aln(` Aperfeiçoar, Caracterizar, Prever, Compilar.  `), d: new aln(` Caracterizar, Prever, Avaliar, Aperfeiçoar.  `, 0), e: new aln(` Compactar, Aperfeiçoar, Caracterizar, Prever. `), imgs: [], fim: ""
    }),
    new Prg({
      cadNome: `Es2`, pId: `/4`, testRef: ``, tema: `asaA`,
      prg: `5. O CVS (Concurrent Version System) é um sistema de controle de versão Open Source. No que respeita às terminologias utilizadas pelo CVS, leia os trechos a seguir: (0,5)_______ é o envio das modificações feitas pelo usuário ao repositório CVS. _______ é a numeração atribuída pelo CVS a cada modificação de um arquivo. _______ é uma ramificação no desenvolvimento, usada para descrever o processo de divisão dos arquivos de um projeto em linhas de desenvolvimento independentes. Assinale a alternativa que preencha corretamente, de cima para baixo, as lacunas dos trechos acima.  `, a: new aln(` Checkout - Release - Branch.  `), b: new aln(` Commit - Revision – Branch.  `, 0), c: new aln(` Update - Revision – Merge.  `), d: new aln(` Commit - Checkin – Hijack.  `), e: new aln(` Update - Checkin – Merge. `), imgs: [], fim: ""
    }),
    new Prg({
      cadNome: `Es2`, pId: `/5`, testRef: ``, tema: `asaA`,
      prg: `6. Para a capacitação de uma organização, segundo o Capability Maturity Model (CMM), a maturidade do processo de software é avaliada de acordo com os seguintes níveis: (0,5) `, a: new aln(` Inicial; Definido; Repetitivo; Gerenciado; Optimizado.  `), b: new aln(` Inicial; Definido; Gerenciado; Repetitivo; Optimizado. `), c: new aln(` Inicial; Repetitivo; Definido; Gerenciado; Optimizado.  `, 0), d: new aln(` Inicial; Definido; Repetitivo; Optimizado. Gerenciado. `), e: new aln(` Inicial; Gerenciado; Repetitivo; Definido; Optimizado. `), imgs: [], fim: ""
    }),
    new Prg({
      cadNome: `Es2`, pId: `/6`, testRef: ``, tema: `asaA`,
      prg: `7. Alguns atributos importantes indicados na norma ISO 9126 para a avaliação da qualidade dos projetos de software, podem ser definidos como: (0,5) `, a: new aln(` Usabilidade, que avalia se o tempo de execução e os recursos são compatíveis com o nível de desempenho do sistema.  `), b: new aln(` Eficiência, que representa a facilidade com que o software pode ser transferido entre ambientes computacionais.  `), c: new aln(` Manutenibilidade, que representa o período de tempo em que o software esteja disponível para uso.  `), d: new aln(` Funcionalidade, que representa a facilidade com que o software pode ser transferido entre ambientes computacionais.  `), e: new aln(` Confiabilidade, que representa o período de tempo em que o software esteja disponível para uso. `, 0), imgs: [], fim: ""
    }),
    new Prg({
      cadNome: `Es2`, pId: `/7`, testRef: ``, tema: `asaA`,
      prg: `8. Abaixo são apresentados os 4 passos para realizar uma SQA estatística e criar um processo adaptativo de engenharia de software. Analise os passos e assinale a opção que representa a ordem correcta dos factos:  `, a: new aln(` 2, 3, 1, 4.  `), b: new aln(` 3, 2, 1, 4.   `), c: new aln(` 3, 1, 2, 4.   `), d: new aln(` 3, 2, 4, 1.   `, 0), e: new aln(` 1, 4, 3, 2. `), imgs: [], fim: ""
    }),
    new Prg({
      cadNome: `Es2`, pId: `/8`, testRef: ``, tema: `asaA`,
      prg: `9. Em relação às métricas de produto de software, assinale a alternativa correta: (1,0) `, a: new aln(` Métricas indiretas – medem o quanto o software se adequa às exigências implícitas e explícitas do cliente (correctitude, manutenibilidade, integridade, usabilidad. `), b: new aln(` Métricas de produto e produtividade – medem características do software (representação, execução, entrada e saída do produto).  `, 0), c: new aln(` Métricas diretas – são observados atributos como custo e esforço (nrº de linhas de código produzidas, quantidade de defeitos encontrados).  `, 0), d: new aln(` Métricas públicas – colectam e avaliam informações sobre características do projeto, tentando descobrir indicadores. `, 0), e: new aln(` Métricas de qualidade e métricas técnicas – medem a eficiência, a confiabilidade, a qualidade e a funcionalidade.`), imgs: [], fim: ""
    }),
    new Prg({
      cadNome: `Es2`, pId: `/9`, testRef: ``, tema: `asaA`,
      prg: `10. Em relação às características e aos objetivos de projetos, é correto que: (1,0) `, a: new aln(` Na definição do projeto, estabelece-se o objetivo principal, relacionado à consecução de determinada(s) meta(s) e cuja execução pode ser indefinida no tempo.  `), b: new aln(` No projeto, a data de início é flexível, o importante é a obtenção de seus objetivos.  `), c: new aln(` A flexibilidade quanto aos fins a serem atingidos com a execução de um projeto, contribui para o processo de tomada de decisão.  `, 0), d: new aln(` Cada projeto cria produto, serviço ou resultado diversificado.  `), e: new aln(` Segundo Summerville (2011) um projecto de software consiste de objetivos, actividades e artefactos. `), imgs: [], fim: ""
    }),
    new Prg({
      cadNome: `Es2`, pId: `/10`, testRef: ``, tema: `asaA`,
      prg: `12. A Gestão de Configuração de  Software e o Processo de Gestão de Mudança, baseiam se nos seguintes padrões: `, a: new aln(` IEEE (padrões ANSI/IEEE 730-1984 e 983-1986).  `), b: new aln(` ISO 9000-3 (NBR 9000-3).  `), c: new aln(` DoD-STD-2167 (Department of Defense Standard 2167A), que aborda o desenvolvimento de software.  `, 0), d: new aln(` IEEE/IEA 12207, que une práticas comerciais com padrões DFD.  `), e: new aln(` SPICE – Software Process Improvement and Capability determination (ISO / IEC 15504).`), imgs: [], fim: ""
    }),
    new Prg({
      cadNome: `Es2`, pId: `/11`, testRef: ``, tema: `asaA`,
      prg: `13. É verdadeiro que: (1,0) `, a: new aln(` Entre as disciplinas da engenharia de software, inclui-se a gestão de configurações, que, aliada à memória humana em pequenos projetos, consegue evitar que artefatos corrigidos reapareçam durante o desenvolvimento do projeto.  `), b: new aln(` No Subversion, um projeto pronto para ser testado e considerado como uma versão estável, é copiado para uma pasta branch e fica congelado para que seja lançado em produção.  `), c: new aln(` Segundo o SWEBOK, a gestão de configuração de software tem por objetivo garantir e manter a integridade do software por meio da gestão e controlo das mudanças, evoluções e manutenções dos itens a serem geridos.  `, 0), d: new aln(` Englobando a gestão do projeto e do seu produto, a gestão da qualidade do projeto aplica-se a todos os projetos, dependendo da natureza do produto.  `), e: new aln(` Uma parte essencial no projeto é a gestão do recurso humano, que é considerado ilimitado. Em virtude disso, o PMBOK define quatro processos que estabelecem os tipos de profissionais, a hierarquia e a função de cada um deles dentro do projeto antes e durante a execução. Esses processos são: avaliação de recursos humanos; contrato ou mobilização da equipa do projeto; desenvolvimento da equipa do projeto; e gestão da equipa de projeto. `), imgs: [], fim: ""
    }),
    new Prg({
      cadNome: `Es2`, pId: `/12`, testRef: ``, tema: `asaA`,
      prg: `14. A fase do ciclo de vida dos testes de software, que define que: “A elaboração e revisão de casos de testes e de roteiros de testes deverão ser construídos e modificados em função das mudanças solicitadas pelo Cliente, bem como pelo próprio aperfeiçoamento do processo de testes, para ampliação da sua cobertura”, é denominada de …………. (1,0) `, a: new aln(` Planeamento  `), b: new aln(` Preparação  `), c: new aln(` Execução  `), d: new aln(` Especificação  `, 0), e: new aln(` Manutenção `), imgs: [], fim: ""
    }),
    new Prg({
      cadNome: `Es2`, pId: `/13`, testRef: ``, tema: `asaA`,
      prg: `15. Sendo as métricas de software formas de quantificar o esforço necessário para a construção de um sistema de software, é correto afirmar que: (1,0) `, a: new aln(` Um indicador é parte de uma métrica.  `), b: new aln(` Custo, funcionalidade e número de erros são métricas indiretas.  `), c: new aln(` A métrica de pontos de função só pode ser calculada com o código terminado.  `), d: new aln(` Linhas de código, esforço e memória são métricas diretas.  `, 0), e: new aln(` Métricas de produtividade indicam o quanto o software atende aos requisitos. `), imgs: [], fim: ""
    }),
    new Prg({
      cadNome: `Es2`, pId: `/14`, testRef: ``, tema: `asaA`,
      prg: `16. O Subversion ou simplesmente SVN é uma ferramenta de controlo de versão de projeto muito poderosa que permite, além do desenvolvimento colaborativo a partir de um repositório único, o merge de conteúdo, armazenamento de logs e geração de estatísticas diversas. Dentre as boas práticas, toda revisão deve ser comentada para facilitar o entendimento das alterações realizadas. Além disso, o código no diretório trunk deve sempre estar pronto para ser compilado e colocado em produção, se necessário. Nesse sentido, uma ferramenta de Integração Contínua deve ser utilizada para a geração de builds de teste a cada commit em todas as noites ao longo da semana. Uma dessas ferramentas é conhecida por: (1,0) `, a: new aln(` TestControl.  `), b: new aln(` CommitControl.  `), c: new aln(` DataControl.  `), d: new aln(` CruiseControl.  `, 0), e: new aln(` BranchControl. `), imgs: [], fim: ""
    }),
    new Prg({
      cadNome: `Es2`, pId: `/15`, testRef: ``, tema: `asaA`,
      prg: `17. Relativamente às ferramentas de Gestão da Qualidade (nomeadamente: I. PDCA; II. CASE; III. 5W1H), cujo objetivo é a melhoria de processos, analise as afirmações a seguir e selecione a alternativa tecnicamente correta: (1,0) `, a: new aln(` Apenas as afirmativas II e III são tecnicamente verdadeiras.  `), b: new aln(` Apenas a afirmativa I é tecnicamente verdadeira.  `, 0), c: new aln(` Apenas as afirmativas I e III são tecnicamente verdadeiras.  `), d: new aln(` As afirmativas I, II e III são tecnicamente verdadeiras.  `), e: new aln(` Apenas as afirmativas I e II são tecnicamente verdadeiras. `), imgs: [], fim: ""
    }),
    new Prg({
      cadNome: `Es2`, pId: `/16`, testRef: ``, tema: `asaA`,
      prg: `18. Considerando o padrão de métricas de software IEEE/ANSI, assinale na tabela abaixo a alternativa que preenche corretamente as lacunas no texto seguinte: 
  ,
  ,1) ______ é um lapso humano que resulta em um software incorreto. 
  ,
  ,2) ________é uma condição acidental que provoca uma unidade do sistema a não operar da forma necessária. 
  ,
  ,3) _______é uma anomalia no produto. 
  ,
  ,4) _______ ocorre quando uma unidade funcional de um sistema relacionado a um software não mais consegue desempenhar as funções necessárias ou deixa de operar dentro dos limites especificados.  `, a: new aln(` Falta – Erro – Defeito – Falha.  `), b: new aln(` Defeito – Falha - Falta – Erro. `), c: new aln(` Erro – Defeito – Falta – Falha.  `), d: new aln(` Erro – Falta – Defeito – Falha.  `, 0), e: new aln(` Falta – Falha - Erro – Defeito. `), imgs: [], fim: ""
    }),
    new Prg({
      cadNome: `Es2`, pId: `/17`, testRef: ``, tema: `asaA`,
      prg: `19. Sistemas de controlo de versões são ferramentas essenciais na gestão de tecnologia da informação de empresas, em especial em empresas desenvolvedoras de software. Estes sistemas têm o intuito de: (1,0) `, a: new aln(` Alocar recursos específicos para o desenvolvimento de diferentes versões do sistema.  `), b: new aln(` Calcular as funcionalidades do sistema, incluindo cálculos de pontos de função.  `), c: new aln(` Identificar uma alteração específica efetuada num código fonte.  `, 0), d: new aln(` Controlar as versões dos diversos softwares adquiridos pela empresa.  `), e: new aln(` Estimar o custo e o tempo de desenvolvimento de uma versão específica de um sistema. `), imgs: [], fim: ""
    }),
    new Prg({
      cadNome: `Es2`, pId: `/18`, testRef: ``, tema: `asaA`,
      prg: `20. Durante o desenvolvimento de software existem diversas categorias de testes que é necessário realizar, como por exemplo: (0,5) `, a: new aln(` Teste de integração (verifica produtos que foram mal testados e lançados ao mercado, corrigindo os problemas quando os utilizadores já têm acesso a aplicação). Teste de funcionalidade (verifica se as funcionalidades descritas na especificação de requisitos são executadas pelo sistema integrado). `), b: new aln(` Teste de esforço (avalia o desempenho do software durante a sua execução, no contexto do sistema integrado). Teste de funcionalidade (verifica se as funcionalidades descritas na especificação de requisitos são executadas pelo sistema integrado.  `), c: new aln(` Teste de desempenho (avalia o desempenho de softwares, especialmente embutidos e de tempo real, durante a sua execução, no contexto do sistema integrado). Teste de unidade (avalia a funcionalidade dos componentes para os diversos tipos de entradas). `, 0), d: new aln(` Teste de aceitação (verifica se os componentes funcionam conjuntamente como especificado no desenho do sistem. Teste de usabilidade (avalia os limites do uso do software sob as condições normais de utilização). `), e: new aln(` Teste de unidade (avalia a funcionalidade dos componentes para os diversos tipos de entradas). Teste de aceitação (verifica se os componentes funcionam conjuntamente como especificado no desenho do sistem.`), imgs: [], fim: ""
    }),
    new Prg({
      cadNome: `Es2`, pId: `/19`, testRef: ``, tema: `asaA`,
      prg: `21. Embora o padrão IEEE Std 730-2014 (IEEE Standard for Software Quality Assurance Processes) seja focado no projeto, ele também se refere a algumas atividades a nível organizacional, ou seja, enfatiza que o escopo desta norma é um único projeto que é executado dentro de uma organização. A figura abaixo ilustra a relação entre o trabalho realizado a nível organizacional versus o trabalho realizado a nível do projeto ao longo do tempo. Preencha as lacunas identificadas pelas letras:  `, a: new aln(` A)Negociar contractos,  B)Execução do Projeto de software, C)Atividades do Peojeto, D)Planeamento de SQA ,E)Atividades e tarefas SQA, F)Enceramento de SQA `, 0), b: new aln(`A) Execução do Projeto de software B) Atividades e tarefas SQA C) Negociar contratos D) Planeamento de SQA E) Atividades do Projeto `), c: new aln(` A) Negociar contratos B) Planeamento de SQA C) Execução do Projeto de software D) Atividades do Projeto E) Atividades e tarefas SQA `), d: new aln(` A) Planeamento de SQA B) Atividades e tarefas SQA C) Execução do Projeto de software D) Atividades do Projeto E) Negociar contratos `), e: new aln(`A) Atividades do Projeto B) Negociar contratos C) Planeamento de SQA D) Atividades e tarefas SQA E) Execução do Projeto de software`), imgs: [[require('../testespics/es2/t1/es2_t1_22_p21.jpeg')]], fim: ""
    }),
    new Prg({
      cadNome: `Es2`, pId: `/20`, testRef: ``, tema: `asaA`,
      prg: `22. _______________ é um método padronizado que determina o tamanho do software por meio de seus requisitos funcionais, considerando as funcionalidades a serem implementadas. Foi desenvolvido para ser aplicado independente da linguagem de programação e tecnologias utilizadas.,
  , Qual das alternativas ao lado, completa corretamente a lacuna? (0,5) `, a: new aln(` Sistema de Administração dos Recursos de Tecnologia da Informação.  `), b: new aln(` Counting Practices Manual (CPM).  `), c: new aln(` Métrica de qualidade.  `), d: new aln(` Análise de Pontos de Função (APF)  `, 0), e: new aln(` COCOMO. `), imgs: [], fim: ""
    })
  ];
let bd1t2 = [bd22, bd19, bd18];
let bd1t1 = [bd16, bd15, bd14];
let bd2t2 = [mkEx1, bd2_t2_23, bd2_r_22, bd2_t2_22, bd2_r_16, bd2_t2_16, bd2_r_14];
let bd2t1 = [bd2_t1_23, bd2_t1_19];

let esTs1 = [es14, es15];
let esTs2 = [es_t2_22, es_t2_21, es_mt2_17, es1_ex_23, es1_ex_21, es1_ex_20, es1_ex2_20];

let es2T1 = [es2_t1_21, es2_t1_22];

let IaTs1 = [ia_t1_23];
let IaTs2 = [ia_t2_23, ia_t2_22];


let mk1t1 = [mk1t1];
export { bd1t2, esTs1, bd1t1, bd2t2, bd2t1, esTs2, IaTs1, IaTs2, mk1t1, es2T1 };