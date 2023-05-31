
import { Prg, aln, newTesteData } from "./dados";


let bd22 = [
    new Prg({
        cadNome: `Bd1`,
        pId: `/0`,
        testRef: ``,
        tema: ``,
        prg: `1.Normalização _____________ dados duplicados:
          ,,,`,
        a: new aln(`elimina.`, 0),
        b: new aln(`reduz.`),
        c: new aln(`aumenta.`),
        d: new aln(`maximiza.`),
        e: new aln(` `),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/1`,
        testRef: ``,
        tema: ``,
        prg: `2.Na _____________  forma normal um atributo composto é convertido em
          ,,atributos simples.`,
        a: new aln(`Primeira`, 0),
        b: new aln(`Segunda`),
        c: new aln(`Terceira`),
        d: new aln(`Quarta.`),
        e: new aln(` `),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/2`,
        testRef: ``,
        tema: ``,
        prg: `3.A primeira tarefa realizada na __________  é remover atributos repetidos 
          ,,para tabelas separadas:`,
        a: new aln(`1FN.`, 0),
        b: new aln(`2FN.`),
        c: new aln(`3FN.`),
        d: new aln(`4FN.`),
        e: new aln(` `),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/3`,
        testRef: ``,
        tema: ``,
        prg: `4. Uma relação está na 5FN quando dependências multivalor são isoladas na sua própria
          ,relação.`,
        a: new aln(`Falso`, 0),
        b: new aln(`Verade`),
        c: new aln(``),
        d: new aln(``),
        e: new aln(` `),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/4`,
        testRef: ``,
        tema: ``,
        prg: `5. Dada uma dependência funcional R—→S,R é chamado de determinante.
          ,,,`,
        a: new aln(`Verdadeiro`, 0),
        b: new aln(`Falso`),
        c: new aln(``),
        d: new aln(``),
        e: new aln(` `),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/5`,
        testRef: ``,
        tema: ``,
        prg: `6. Qual a forma normal que é baseada em dependència multivalor?
          ,,,`,
        a: new aln(`1FN`),
        b: new aln(`2FN`),
        c: new aln(`3FN`),
        d: new aln(`4FN`, 0),
        e: new aln(` `),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/6`,
        testRef: ``,
        tema: ``,
        prg: `7. Uma dependência funcional é um relacionamento entre ________
          ,,,`,
        a: new aln(`Tabelas.`),
        b: new aln(`Linhas.`),
        c: new aln(`Relações.`),
        d: new aln(`Atributos.`, 0),
        e: new aln(` `),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/7`,
        testRef: ``,
        tema: ``,
        prg: `8. A forma normal que satisfaz dependências multivalor e que está na BCFN é
          ,,,`,
        a: new aln(`4FN`, 0),
        b: new aln(`3FN`),
        c: new aln(`2FN`),
        d: new aln(`Todas mencionadas`),
        e: new aln(` `),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/8`,
        testRef: ``,
        tema: ``,
        prg: `9. Dada a dependência funcional R—→S,T. então é também verdade que R—→S
          ,,,`,
        a: new aln(`Verdadeiro`, 0),
        b: new aln(`Falso`),
        c: new aln(``),
        d: new aln(``),
        e: new aln(` `),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/9`,
        testRef: ``,
        tema: ``,
        prg: `10. Em qual das opções a seguir, uma tabela separada é criada, 
          ,,,consistindo desse atributo e da chave primária da entidade a que se refere?
          ,,,`,
        a: new aln(`Relacionamento muitos-para-muitos`),
        b: new aln(`Um atributo multivalor de uma entidade`, 0),
        c: new aln(`Um relacionamento de um-para-muitos`),
        d: new aln(`Nenhuma das situações`),
        e: new aln(` `),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/10`,
        testRef: ``,
        tema: ``,
        prg: `11. Para algumas relações, alterar os dados pode ter consequências indesejáveis 
          ,,,chamadas:`,
        a: new aln(`Restrições de integridade referencial.`),
        b: new aln(`Anomalias de modificação.`, 0),
        c: new aln(`Formas normais.`),
        d: new aln(`Dependências transitivas.`),
        e: new aln(` `),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/11`,
        testRef: ``,
        tema: ``,
        prg: `12.Qual das opções seguintes é verdadeira para a seguinte situação
          ,,,Cada entidade relacionada com outra tem a sua própria tabela, 
          ,,,e há uma tabela adicional para o relacionamento.
          ,,,`,
        a: new aln(`Relacionamento muitos-para-muitos`, 0),
        b: new aln(`Um atributo multivalor de uma entidade`),
        c: new aln(`Um relacionamento de um-para-muitos`),
        d: new aln(`Nenhuma das situações`),
        e: new aln(` `),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/12`,
        testRef: ``,
        tema: ``,
        prg: `13. Se os atributos A e B determinam o atributo C, então, é verdade que.
          ,,,`,
        a: new aln(`A—→C`),
        b: new aln(`B—→C`),
        c: new aln(`(A, B) é um determinante composto.`, 0),
        d: new aln(`C é um determinante.`),
        e: new aln(` `),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/13`,
        testRef: ``,
        tema: ``,
        prg: `14. Muitas vezes, anomalias de modificação são criticas o suficiente para que 
          ,,as tabelas sejam normalizadas até.`,
        a: new aln(`1FN`),
        b: new aln(`2FN`),
        c: new aln(`3FN`),
        d: new aln(`BCFN`, 0),
        e: new aln(` `),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/14`,
        testRef: ``,
        tema: ``,
        prg: `16. Os desenhadores usam qual das seguintes opções para ajustar o desempenho 
          ,,dos sistemas para dar suporte a operações criticas?
          ,,`,
        a: new aln(`Desnormalização.`, 0),
        b: new aln(`Optimização redundante.
          ,,`),
        c: new aln(`Optimização.
          ,,`),
        d: new aln(`Realização.
          ,,`),
        e: new aln(` `),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/15`,
        testRef: ``,
        tema: ``,
        prg: `17. Uma tabela possui os campos F1, F2, F3, F4 e F5, com as seguintes dependências
          ,,funcionais:
          ,,
          ,,Df1: F1 —→ F3
          ,,Df2: F2 —→ F4
          ,,Df3: F1,F2 —→ F5
          ,,
          ,,Em termos de normalização esta tabela está na`,
        a: new aln(`1FN.`, 0),
        b: new aln(`2FN.`),
        c: new aln(`3FN.`),
        d: new aln(`Nenhuma das mencionadas.`),
        e: new aln(` `),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/16`,
        testRef: ``,
        tema: ``,
        prg: `18. Qual das seguintes frases é falsa?
          ,,`,
        a: new aln(`Qualquer relação com dois atributos está na BCFN.`),
        b: new aln(
            `Uma relação em que a chave tem apenas um atributo está na 2FN.`,
            0
        ),
        c: new aln(
            `Um atributo pode estar transitivamente dependente da chave numa relação 3FN.`
        ),
        d: new aln(
            `Um atributo pode estar transitivamente dependente da chave numa relação BCFN.`
        ),
        e: new aln(` `),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/17`,
        testRef: ``,
        tema: ``,
        prg: `19. Considere o seguinte esquema relacional para uma Livraria:
          ,,
          ,,Livro (Titulo.Autor,  Catalogo_No, Editor, Ano, Preco)
          ,,Colecção (Titulo, Autor, Catalogo_No)
          ,,
          ,,Assuma que (Titulo, Autor) é chave para as duas tabelas. 
          ,,
          ,,Qual destas alternativas é verdadeira?`,
        a: new aln(`Ambas Livro e Colecção estão na BCFN.`),
        b: new aln(`Ambas Livro e Colecção estão, apenas, na 3FN.`),
        c: new aln(`Livro está na 2FN e Colecção está na 3FN.`, 0),
        d: new aln(`Ambas Livro e Colecção estão, apenas, na 2FN.`),
        e: new aln(` `),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/18`,
        testRef: ``,
        tema: ``,
        prg: `20. Dentro do contexto de modelação de uma base de dados relacional 
          ,,em formas normais, é correcto afirmar que a técnica de 
          ,,desnormalização consiste em.`,
        a: new aln(`criar tabelas intermediárias para quebra de cardinalidade N:N`),
        b: new aln(
            `criar indices B-tree para que as formas normais tenham melhor desempenho`
        ),
        c: new aln(
            `rever as falhas geradas por eventuais erros no processo de normalização`
        ),
        d: new aln(
            `sacrificar algumas regras normais a favor da execução mais rápida 
          ,,de determinadas consultas.`,
            0
        ),
        e: new aln(` `),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/19`,
        testRef: ``,
        tema: ``,
        prg: `21. A relação Empe é definida como se segue
          ,,
          ,,Empr (empcode, nome, rua, cidade, pais, código_postal)
          ,,
          ,,Para qualquer código postal há, apenas, uma cidade e um pais. 
          ,,Também, para uma dada rua, cidade e pais, ha, apenas, um código_postal.
          ,,
          ,,Em termos de normalização, Empr é uma relação na`,
        a: new aln(`1FN, apenas`, 0),
        b: new aln(`2FN, e dai  também  na lFN`),
        c: new aln(`3FN, e dai  também  na 2FN e 1FN`),
        d: new aln(`BCFN,e dai também na 3FN, 2FN e 1FN`),
        e: new aln(` `),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/20`,
        testRef: ``,
        tema: ``,
        prg: `22. Considere a relação R (A, B, C, D, E) e as seguintes dependências funcionais
          ,,
          ,,Dfl: A—→B
          ,,Df2: B—→C
          ,,Df3: B.C—→A
          ,,Df4: A—→D
          ,,Df5: E—→A
          ,,Df6: D—→E
          ,,
          ,,Qual das seguintes opções não é chave?`,
        a: new aln(`A.`),
        b: new aln(`E.`),
        c: new aln(`(B, C).`, 0),
        d: new aln(`D.`),
        e: new aln(` `),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/21`,
        testRef: ``,
        tema: ``,
        prg: `23. Uma relação está na forma normal Boyce-Codd, se todo o determinante é chave composta.
          ,,`,
        a: new aln(`Verdadeiro`),
        b: new aln(`Falso`, 0),
        c: new aln(``),
        d: new aln(``),
        e: new aln(` `),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/22`,
        testRef: ``,
        tema: ``,
        prg: `24.As técnicas de projecto de base de dados visam a 
          ,,obtenção de très objectivos principais, que são:`,
        a: new aln(
            `normalização, preservação das dependências funcionais e decomposição sem perda.`,
            0
        ),
        b: new aln(`normalização, independência de dados e decomposição sem perda`),
        c: new aln(
            `normalização, independência de dados e controle de concorrência.`
        ),
        d: new aln(
            `independência de dados, controle de concorrência e normalização. `
        ),
        e: new aln(` `),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/23`,
        testRef: ``,
        tema: ``,
        prg: `25. Considere a tabela
          ,,MatriculaProjeto (CodMat, CodProj, Nome, CodCargo, NomeCargo, DataFim, Horas),
          ,,com as seguintes dependências funcionais:
          ,,
          ,,Dfl: CodMat—→Nome.
          ,,Df2: CodMat—→ CodCargo.
          ,,Df3: CodCargo—→ NomeCargo.
          ,,Df4: CodProj—→ DataFim.
          ,,Df5: CodMat+CodProj —→ Horas.
          ,,
          ,,A normalização desta tabela para a 2FN resultarà, no minimo, em`,
        a: new aln(`1 tabela`),
        b: new aln(`2 tabela`),
        c: new aln(`3 tabela`, 0),
        d: new aln(`4 tabela`),
        e: new aln(`5 tabela`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/24`,
        testRef: ``,
        tema: ``,
        prg: `26. Qual o número de tabelas normalizadas que seria necessário para fazer o mapeamento 
          ,,do MER apresentado na figura seguinte para o modelo relacional?
          ,,
          ,,veja na imagem abaixo!
          ,,
          ,,`,
        a: new aln(`Três tabelas, no mínimo. `),
        b: new aln(`Quatro tabelas, no minimo.`),
        c: new aln(` Cinco tabelas, no mínimo. `, 0),
        d: new aln(`Seis tabelas, no minimo. `),
        e: new aln(``),
        imgs: [require("../testespics/teste2bd/teste21.26.jpeg")],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/25`,
        testRef: ``,
        tema: ``,
        prg: `27. Tomando como base o modelo relacional de dados, a modelação de dados na abordagem lógica, deve contemplar todas as formas normais: já o modelo fisico de dados pode dispensar algumas formas normais com o objectivo de incrementar o desempenho nas operações de consulta a dados.
          ,,`,
        a: new aln(`Verdadeiro`, 0),
        b: new aln(`Falso`),
        c: new aln(``),
        d: new aln(``),
        e: new aln(``),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/26`,
        testRef: ``,
        tema: ``,
        prg: `28. A desnormalização introduz redundancia visando reduzir o tempo das
          ,, consultas,inserções, actualizações e eliminações. 
          ,,São formas de desnormalização a remoção de colunas cujos valores podem ser derivados 
          ,,dos valores de outras colunas visando reduzir a ocorrência de cálculos repetitivos;
          ,, a união de tabelas normalizadas numa tabela visando reduzir as junções
          ,,`,
        a: new aln(`Verdadeiro`),
        b: new aln(`Falso`, 0),
        c: new aln(``),
        d: new aln(``),
        e: new aln(``),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/27`,
        testRef: ``,
        tema: ``,
        prg: `29. Considere a tabela seguinte, onde código-animal é chave.
          ,,
          ,,[veja na Imagem abaixo, dps continue a leitura]
          ,,
          ,,Para que a tabela atenda às très formas normais usuais, 
          ,,é necessário dividi-la em duas tabelas. 
          ,,A primeira com os campos (#código-animal, nome-animal, idade, raça)
          ,, e a segunda com os campos (#código-proprietário, nome-proprietário, 
          ,, fazenda, região-fazenda).`,
        a: new aln(`Verdadeiro`),
        b: new aln(`Falso`, 0),
        c: new aln(``),
        d: new aln(``),
        e: new aln(``),
        imgs: [require("../testespics/teste2bd/teste21.29.jpeg")],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/28`,
        testRef: ``,
        tema: ``,
        prg: `30. Bases de dados relacionais têm a capacidade de representar caracteristicas de objectos,
          ,, como herança e encapsulamento.
          ,,`,
        a: new aln(`Verdadeiro`),
        b: new aln(`Falso`, 0),
        c: new aln(``),
        d: new aln(``),
        e: new aln(``),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/29`,
        testRef: ``,
        tema: ``,
        prg: `31. Marque V para as caracteristicas que pertencem às bases de dados objectos-relacionais 
          ,,e F para as caracteristicas que não pertencem às bases de dados objectos-relacionais e, 
          ,,em seguida, assinale a alternativa que apresenta a sequência correcta.
          ,,
          ,,() A extensibilidade dos tipos básicos
          ,,() Implementação de objectos complexos. 
          ,,() Suportar a herança.
          ,,() Definir regras que permitem definir restrições gerais que actuam na
          ,, base de dados quando um determinado evento acontece`,
        a: new aln(`F/F/V/F`),
        b: new aln(`V/V/V/V`, 0),
        c: new aln(`F/F/F/V`),
        d: new aln(`V/F/F/F`),
        e: new aln(`F/V/F/F`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/30`,
        testRef: ``,
        tema: ``,
        prg: `32. Considere o diagrama entidade-relacionamento a seguir, 
          ,,que expressa um modelo conceptual de dados.
          ,,
          ,,[veja na imagem abaixo]
          ,,
          ,,Suponha que, durante o mapeamento do modelo conceptual acima para modelo relacional,
          ,, o projectista de base de dados responsável pela tarefa decidiu mapear cada entidade 
          ,, para uma relação distinta. 
          ,, Ele também decidiu criar um minimo necessário de relações nesse mapeamento.
          ,,  Sendo assim, as quantidades de chaves primárias e de chaves estrangeiras 
          ,,  criadas nesse mapeamento são, respectivamente.`,
        a: new aln(`3 e 4`),
        b: new aln(`5 e 5`, 0),
        c: new aln(`4 e 4`),
        d: new aln(`3 e 5`),
        e: new aln(``),
        imgs: [require("../testespics/teste2bd/teste21.32.jpeg")],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/31`,
        testRef: ``,
        tema: ``,
        prg: `33. Qual das opções a seguir é usada para inserir a entrada e fornecer o resultado 
          ,,numa variável  procedure?
          ,,`,
        a: new aln(`PUT & GET`),
        b: new aln(`RETURN e DBMS`),
        c: new aln(`INSERT & SELECT`),
        d: new aln(`IN & OUT`, 0),
        e: new aln(``),
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/32`,
        testRef: ``,
        tema: ``,
        prg: `34. Seja dada uma Base de dados que contém um trigger (AFTER INSERT trigger) 
          ,,sobre uma tabela XPTO. Das opções abaixo indique quantas vezes o trigger 
          ,,será executado se forem inseridos 50 registos, 
          ,,utilizando um único comando insert.`,
        a: new aln(
            `50 vezes, pois o trigger foi configurado para ser executado após inserção de dados.`
        ),
        b: new aln(
            `Não será executado o trigger, pois só é válido quando se faz apenas uma única inserção.`
        ),
        c: new aln(
            `1 única vez, pois os registos são inseridos utilizando um único comando insert`,
            0
        ),
        d: new aln(`Nenhuma das alternativas.`),
        e: new aln(``),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/33`,
        testRef: ``,
        tema: ``,
        prg: `35. Sobre a linguagem PL/SQL do Oracle, é correcto afirmar:
          ,,`,
        a: new aln(`Um bloco de programa PL/SQL deve conter três secções declarativa 
          ,,(para declaração de variáveis, por exemplo), executável (comandos)
          ,, e uma secção de tratamento de excepções.`),
        b: new aln(`É uma linguagem orientada a objectos destinada ao desenvolvimento 
          ,,de aplicações que acessam bases de dados.`),
        c: new aln(`É uma linguagem declarativa, ou seja, 
          ,,apresenta apenas instruções para consulta e actualização de dados.`),
        d: new aln(
            `Um bloco de programa PL/SQL pode conter uma secção declarativa 
          ,,(para declaração de variáveis, por exemplo) e uma secção de tratamento de excepções.
          ,,`,
            0
        ),
        e: new aln(``),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/34`,
        testRef: ``,
        tema: ``,
        prg: `36. Numa consulta, o tipo de variável que é usado para fazer loop de tuplas,
          ,, é chamado `,
        a: new aln(`CURSOR`),
        b: new aln(`Variável iterativa`),
        c: new aln(`Variável loop`),
        d: new aln(`Ambos A e B`, 0),
        e: new aln(``),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/35`,
        testRef: ``,
        tema: ``,
        prg: `37. Um procedimento é um programa que executa alguma acção nos dados e
          ,, é armazenado na base de dados.`,
        a: new aln(`Verdadeiro`, 0),
        b: new aln(`Falso`),
        c: new aln(``),
        d: new aln(``),
        e: new aln(``),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/36`,
        testRef: ``,
        tema: ``,
        prg: `38. Se o cursor for movido para as próximas linhas no resultado das consultas, 
          ,,o comando será:`,
        a: new aln(`OPEN CURSOR`),
        b: new aln(`FETCH`, 0),
        c: new aln(`CLOSE CURSOR-`),
        d: new aln(`UPDATE`),
        e: new aln(``),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/37`,
        testRef: ``,
        tema: ``,
        prg: `39. Em programação, o tipo de cláusula que é usado para especificar valores 
          ,,que são para serem acedidos da base de dados é
          ,,`,
        a: new aln(`INTO`, 0),
        b: new aln(`ONTO`),
        c: new aln(`FOR`),
        d: new aln(`WHILE`),
        e: new aln(``),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/38`,
        testRef: ``,
        tema: ``,
        prg: `40. Três tipos de triggers são: BEFORE, AFTER & EXCEPTION
          ,,`,
        a: new aln(`Verdadeiro`),
        b: new aln(`Falso`, 0),
        c: new aln(``),
        d: new aln(``),
        e: new aln(``),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/39`,
        testRef: ``,
        tema: ``,
        prg: `41.Três tipos de triggers são: BEFORE, AFTER & EXCEPTION.
          ,,`,
        a: new aln(`Verdadeiro`),
        b: new aln(`Falso`, 0),
        c: new aln(``),
        d: new aln(``),
        e: new aln(``),
        imgs: [],
        fim: "",
    }),
];

let bd19 = [
    new Prg({
        cadNome: `Bd1`,
        pId: `/0`,
        testRef: ``,
        tema: ``,
        prg: `1. Considere Modelo Entidade-Relação — MER, abaixo: 
          ,
          ,[imagem abaixo]
          ,
          ,Para realizar a derivação do MER acima para o esquema relacional, é correcto afirmar que`,
        a: new aln(`o relacionamento, em termos de máximo, entre País Origem, Setor e Tempo é tipo l : 1 :N.
          ,`),
        b: new aln(
            `uma associação do tipo N:N origina uma nova tabela que herda os atributos da associação 
          ,e cujo identificador pode ser composto 
          ,a partir dos identificadores das entidades participantes na associação. 
          ,`,
            0
        ),
        c: new aln(`são exemplos de tabelas derivadas: País Origem = {Nome, Código, População, PIB} 
          ,e Investe = {Designação, Setor}.
          ,`),
        d: new aln(`em uma associação do tipo 1:N o atributo identificador da entidade do lado N vai ser atributo 
          ,não identificador da entidade do lado l. 
          ,Exemplo: Investidor = {Nomelnvestidor, NomePaísOrigem, Investe}.
          ,`),
        e: new aln(` São exemplos de tabelas derivadas: Tempo = {Ano, Investe} e Setor = {NomePaís,
          , DesignaçãoSector, Ano, Montante}. 
          ,`),
        imgs: [require("../testespics/teste2bd/teste19.1.jpg")],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/1`,
        testRef: ``,
        tema: ``,
        prg: `2. Para criar as estruturas de tabelas usando um Sistema de Gestão de Base de Dados (SGBD),
          ,com base num Diagrama Entidade-Relação e de um Modelo Relacional Ampliado (MRA), 
          ,deverá criar uma`,
        a: new aln(
            `tabela para cada Relacionamento apontado no Diagrama Entidade-Relação.`
        ),
        b: new aln(
            `tabela com todos os atributos representados no Diagrama Entidade-Relação. `
        ),
        c: new aln(
            `tabela para cada tupla representada no Modelo Relacional Ampliado. `
        ),
        d: new aln(`tabela para cada Entidade do Diagrama Entidade-Relação.`, 0),
        e: new aln(` São exemplos de tabelas derivadas: Tempo = {Ano, Investe} e Setor = {NomePaís,
          , DesignaçãoSector, Ano, Montante}. 
          ,`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/2`,
        testRef: ``,
        tema: ``,
        prg: `3. O modelo lógico é desenhado usando um diagrama ER. Neste diagrama, 
          ,num relacionamento:`,
        a: new aln(` l:n, uma ocorrência da entidade A pode se relacionar com várias ocorrências da entidade B
          , ou vice-versa.
          , `),
        b: new aln(`unário (de grau l), uma entidade se relaciona com apenas uma outra entidade externa.
          , `),
        c: new aln(`ternário (ou de grau 3), uma entidade está relacionada com outras três entidades em três relacionamentos diferentes.
          , `),
        d: new aln(
            `n:m há, na prática, uma divisão em duas relações 1:n e uma nova entidade é criada para representar o relacionamento. 
          ,`,
            0
        ),
        e: new aln(` São exemplos de tabelas derivadas: Tempo = {Ano, Investe} e Setor = {NomePaís,
          , DesignaçãoSector, Ano, Montante}. 
          ,`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/3`,
        testRef: ``,
        tema: ``,
        prg: `4.Com relação à elaboração e implantação de projecto de base de dados relacional utilizando 
          ,um mapeamento entidade-relacionamento (ER), 
          ,assinale a(s) opção(ões) correcta(s).
          ,`,
        a: new aln(`Para cada entidade fraca Y no esquema ER, deve ser criada uma relação que inclua todos os atributos simples de Y,
          ,e o atributo-chave da entidade forte (pai) com que se relaciona, como parte da chave primária e chave estrangeira.
          ,`),
        b: new aln(`Todos os relacionamentos binários 1:1 devem ser ignorados, pois, nesse tipo de mapeamento, somente são considerados relacionamentos binários I:N.
          ,`),
        c: new aln(`para os relacionamentos binários N:M, deve ser escolhida apenas uma das entidades, por  exemplo, N, e nela deve ser inserida uma chave estrangeira advinda de M, que comporá uma chave primária simples. 
          ,`),
        d: new aln(`Para cada atributo multivalorado em uma entidade X, deve ser criada uma entidade  associativa Y em que a chave primária em Y será a chave estrangeira de X.
          , `),
        e: new aln(
            `Para cada entidade forte X no esquema ER, deve ser criada uma relação que inclua 
          ,todos os  atributos simples de X.
          ,`,
            0
        ),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/4`,
        testRef: ``,
        tema: ``,
        prg: `5.Analise as afirmativas abaixo em relação ao processo de normalização de dados e às formas normais.
          ,
          ,I.Na Primeira Forma Normal (l FN), não deve existir relações aninhadas 
          ,ou a relação não deve ter atributos multivalorados.
          ,
          ,II.Na Segunda Forma Normal (2FN), para relações em que a chave primária contém  apenas um atributo, 
          ,nenhum atributo não chave deverá ser funcionalmente dependente da chave primária.
          ,
          ,III. Na Terceira Forma Normal (3FN), não devem existir dependências transitivas de um
          , atributo não chave sobre a chave primária.
          , 
          ,Assinale a alternativa correcta:`,
        a: new aln(`Apenas as afirmativas I e II estão correctas. `),
        b: new aln(`Apenas as afirmativas I e III estão correctas. `, 0),
        c: new aln(`Apenas as afirmativas II e III estão correctas. `),
        d: new aln(`Todas as afirmativas estão correctas. `),
        e: new aln(`Para cada entidade forte X no esquema ER, deve ser criada uma relação que inclua 
          ,todos os  atributos simples de X.
          ,`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/5`,
        testRef: ``,
        tema: ``,
        prg: `6.São objectivos gerais do processo de normalização de dados os abaixo relacionados, 
          ,EXCEPTO:
          ,`,
        a: new aln(`eliminar certas espécies de redundâncias;`),
        b: new aln(`produzir um projecto com uma boa representação do mundo real;`),
        c: new aln(`evitar certas anomalias de actualização;`),
        d: new aln(
            `reduzir o número de junções que precisam ser realizadas em tempo de execução;`,
            0
        ),
        e: new aln(`simplificar a imposição de certas restrições de integridade.
          ,`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/6`,
        testRef: ``,
        tema: ``,
        prg: `7. Na ________ forma normal um atributo composto é convertido em
          ,atributos individuais.`,
        a: new aln(`Primeira.`, 0),
        b: new aln(`Segunda.`),
        c: new aln(`Terceira.`),
        d: new aln(`Quarta. `),
        e: new aln(``),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/7`,
        testRef: ``,
        tema: ``,
        prg: `8. Analise as seguintes afirmações relacionadas com a modelação de dados e o projecto de base de dados 
          ,para ambiente relacional:
          ,
          ,I. Normalização é o processo formal passo a passo, que examina os atributos de uma entidade 
          ,com o objectivo de evitar anomalias observadas na inclusão, exclusão e alteração de tuplas exclusivas.
          ,
          ,II. Uma das condições para uma relação R estar na 3FN (terceira forma normal) é que todos os seus 
          ,atributos,não chave, devem ser dependentes não transitivos da chave primária, isto é, 
          ,cada atributo deve ser funcionalmente dependente apenas dos atributos componentes da chave primária e 
          ,todos os seus atributos ,não-chave, devem ser independentes entre si.
          ,
          ,III. Uma relação R está na 2FN (segunda forma normal) se e somente se ela não atender 
          ,à 1FN (primeira forma normal) e todos os atributos ,não-chave, forem totalmente dependentes 
          ,da chave primária.
          ,
          ,IV. Uma relação R está na IFN (primeira forma normal) se e somente se todos os domínios básicos 
          ,contiverem grupos repetitivos.
          ,
          ,Indique a opção que contenha todas as afirmações verdadeiras.
          ,`,
        a: new aln(`I e III`),
        b: new aln(`II e III`),
        c: new aln(`III e IV`),
        d: new aln(`I e II`, 0),
        e: new aln(`II e IV`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/8`,
        testRef: ``,
        tema: ``,
        prg: `9. Quanto à base de dados, marque V para verdadeiro ou F para falso e,
          , em seguida, assinale a alternativa que apresenta a sequência correcta.
          ,
          ,( ) Em algumas bases de dados, não há razões suficientes para se aplicar todas as regras de
          ,normalização.
          ,
          ,( ) Nas bases de dados normalizadas, os atributos não chaves são dependentes da chave primária.
          ,
          ,( ) A normalização de base de dados não elimina todas as redundâncias.
          ,
          ,( ) A normalização de uma base de dados elimina todas as anomalias de actualização.
          ,`,
        a: new aln(`F/F/F/F`),
        b: new aln(`V/F/V/V`),
        c: new aln(`V/V/V/F`, 0),
        d: new aln(`F/V/F/V`),
        e: new aln(`V/F/F/F`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/9`,
        testRef: ``,
        tema: ``,
        prg: `10. Em relação à normalização de tabelas em bases de dados relacionais,
          , é correcto afirmar:
          ,`,
        a: new aln(`Normalizar tabelas da base de dados implica integrá-las em tabelas com finalidade de melhorar a eficiência na consulta da mesma.
          ,`),
        b: new aln(`Normalização é um processo que torna a base de dados mais confiável e eficiente, por isso, deve ser realizado no projecto físico da base de dados *
          ,`),
        c: new aln(
            `Problemas como anomalias de actualização são solucionados através de processo de normalização, que é aplicado no decorrer do projecto lógico da base de dados./
          ,`,
            0
        ),
        d: new aln(` Para a resolução de problemas de anomalias na base de dados, a normalização é aplicada após a criação das tabelas
          ,`),
        e: new aln(``),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/10`,
        testRef: ``,
        tema: ``,
        prg: `11. Ter um campo calculado numa tabela, ou seja, 
          ,um campo que é resultante de cálculo com valores de outros campos viola directa e principalmente a:
          ,`,
        a: new aln(`primeira forma normal (1FN).`),
        b: new aln(`quarta forma normal (4FN). `),
        c: new aln(`terceira forma normal (3FN).`, 0),
        d: new aln(`quinta forma normal (5FN).`),
        e: new aln(`segunda forma normal (2FN).`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/11`,
        testRef: ``,
        tema: ``,
        prg: `12. A definição da primeira forma normal em bases de dados relacionais estabelece que
          ,`,
        a: new aln(
            ` cada conjunto de entidades não pode possuir mais do que cinco atributos.`
        ),
        b: new aln(
            `não deve haver relacionamentos do tipo um para um entre conjuntos de entidades.`
        ),
        c: new aln(
            `não deve haver relacionamentos do tipo muitos para muitos entre conjuntos de entidades. `
        ),
        d: new aln(
            `os domínios de cada conjunto de entidades não podem ser do tipo booleano. `
        ),
        e: new aln(
            `os domínios dos atributos de um conjunto de entidades devem ser atómicos. `,
            0
        ),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/12`,
        testRef: ``,
        tema: ``,
        prg: `13.Considere as entidades abaixo que são integrantes de um modelo de base de dados relacional.
          ,
          ,Candidato (idCandidato (PK), nomeCandidato)
          ,Candidado_Concurso (idCandidato (PK, FK), idConcurso (PK, FK))
          ,Concurso (idConcurso (PK), nome Concurso)
          ,
          ,Analisando-se as entidades, tem-se que:`,
        a: new aln(`se for incluído um atributo pontuacao, ele terá que ser incluído na entidade Candidato.
          ,`),
        b: new aln(
            `se for incluído o atributo DataInscricaoCandidato, ele terá que ser incluído na entidade
          ,Candidato_Concurso.`,
            0
        ),
        c: new aln(`para que a entidade Candidato esteja na 1a forma normal, a entidade Candidato_Concurso 
          ,precisa estar normalizada.`),
        d: new aln(` a entidade Candidato Concurso nunca estará na 2a forma normal porque ela possui chave primária composta.
          ,`),
        e: new aln(`estas entidades estabelecem dois relacionamentos n:m não-identificados (non-identifying). 
          ,`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/13`,
        testRef: ``,
        tema: ``,
        prg: `14. Na derivação de dependências funcionais num projecto relacional,
          , está correcto afirmar que se A, B —→ X,Y então é certo que:
          ,`,
        a: new aln(` A—→X`),
        b: new aln(` A—→ X, Y`),
        c: new aln(`X,Y—→A`),
        d: new aln(`A,B —→ X`, 0),
        e: new aln(`X, Y —→ A, B`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/14`,
        testRef: ``,
        tema: ``,
        prg: `15. Uma Forma Normal (FN) é uma regra que deve ser obedecida por uma tabela para ser considerada 
          ,bem projectada. As descrições a seguir são de tabelas em Formas Normais.
          ,
          ,A. A tabela não contém dependências transitivas, ou seja, as colunas que não sejam chave primária 
          ,não dependem funcionalmente de outras colunas ou combinação de colunas que não sejam chave primária.
          ,
          ,B. A tabela não contém dependências parciais, ou seja, 
          ,cada coluna não chave depende da chave primária completa e não apenas de parte dela.
          ,
          ,Os itens I e II descrevem, respectivamente, regras referentes à:
          ,`,
        a: new aln(`4FN e 2FN.`),
        b: new aln(`2FN e 3FN`),
        c: new aln(`3FN e 2FN`, 0),
        d: new aln(`1FN e 3FN`),
        e: new aln(`3FN e 4FN`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/15`,
        testRef: ``,
        tema: ``,
        prg: `16. Na normalização, a eliminação dos atributos multivalorados ocorre durante a aplicação da:
          ,`,
        a: new aln(`IFN.`, 0),
        b: new aln(`2FN.`),
        c: new aln(`3FN.`),
        d: new aln(`BCFN.`),
        e: new aln(`4FN.`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/16`,
        testRef: ``,
        tema: ``,
        prg: `17. Considere a tabela funcionário a seguir, cuja chave primária é FuncNSS, numa base de dados
          ,relacional.
          ,
          ,[imagem abaixo]
          ,
          ,A manipulação de dados nesta tabela pode levar a problemas conhecidos como anomalias. Sobre elas, 
          ,considere:
          ,
          ,I.Para incluir uma nova tupla na tabela será necessário incluir ou os valores dos atributos do departamento 
          ,para o qual o funcionário trabalha ou valores NULL, 
          ,se o funcionário ainda não trabalha para nenhum departamento. 
          ,Este é um exemplo de anomalia de inserção.
          ,
          ,II. A única maneira de inserir um novo departamento que ainda não tenha funcionários 
          ,é colocar valores NULL nos atributos para funcionário, já que este procedimento não viola 
          ,a integridade de entidade. Este é um exemplo de anomalia de inserção.
          ,
          ,III. Se o funcionário António for excluído e este for o último funcionário trabalhando no departamento RH,
          , a informação referente a este departamento se perde da base de dados. 
          , Este é um exemplo de anomalia de exclusão.
          ,
          ,IV. Se o valor de um dos atributos de determinado departamento for mudado (do departamento 5, por exemplo)
          , será necessário actualizar as tuplas de todos os funcionários que trabalham neste departamento,
          , caso contrário, a base de dados ficará incoerente. Este é um exemplo de anomalia de modificação.
          ,Está correcto o que se afirma APENAS em:
          ,`,
        a: new aln(`I, III e IV`, 0),
        b: new aln(`III e IV.`),
        c: new aln(`I, II e III.`),
        d: new aln(`II e IV.`),
        e: new aln(`I, II e IV.`),
        imgs: [require("../testespics/teste2bd/teste19.17.jpg")],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/17`,
        testRef: ``,
        tema: ``,
        prg: `18. Num projecto de base de dados, o levantamento das dependências funcionais é importante
          ,porque fornece subsídios indispensáveis para a fase de:
          ,`,
        a: new aln(`definição de vistas.`),
        b: new aln(`definição de restrições de integridade.`),
        c: new aln(`confecção do projecto físico.`),
        d: new aln(`estabelecimento dos perfis de segurança.`),
        e: new aln(`normalização.`, 0),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/18`,
        testRef: ``,
        tema: ``,
        prg: `19. No contexto de base de dados relacionais, Dependência Funcional é caracterizada quando:
          ,`,
        a: new aln(`duas tabelas têm entre si relação N para N.`),
        b: new aln(`no relacionamento N para N há uma chave estrangeira.`),
        c: new aln(
            `para cada valor do atributo A existem n valores do atributo B.`
        ),
        d: new aln(
            `a chave primária da tabela do lado 1 vai para a tabela do lado N.`
        ),
        e: new aln(
            `para cada valor do atributo A existe exatamente um único valor do atributo B.`,
            0
        ),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/19`,
        testRef: ``,
        tema: ``,
        prg: `20. Escolha a alternativa correcta sobre dependência funcional em base de dados:
          ,`,
        a: new aln(` Se um atributo da entidade A for dependente de um atributo da entidade B, 
          ,diz-se que há dependência funcional entre os dois.
          ,`),
        b: new aln(`Dependência funcional é a influência exercida por uma entidade sobre outra.
          ,`),
        c: new aln(`Dependência funcional ocorre quando um atributo de determinada entidade pode armazenar 
          ,valores diferentes para cada dupla.
          ,`),
        d: new aln(
            `Todos os atributos de uma entidade na 3a forma normal são dependentes funcionais apenas da
          , chave primária.`,
            0
        ),
        e: new aln(``),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/20`,
        testRef: ``,
        tema: ``,
        prg: `21. Considere o seguinte esquema relacional, onde os atributos sublinhados constituem 
          ,a chave primária da tabela:
          ,R (A, B, C, D, F)
          ,[imagem nr1 ]
          ,
          ,Para satisfazer as dependências funcionais A,B—→C,D e C,D—→ F, a alternativa
          ,que decompõe a relação R em duas relações X e Y, tal que o novo esquema esteja na 
          ,Forma Normal de Boyce-Codd, é:
          ,
          ,[imagem nr2]`,
        a: new aln(`X (A, B, C, D)      Y(B,C,F)  [veja 2 PIC]`),
        b: new aln(`X (A, B, C, D)      Y(C,D,F)  [veja 2 PIC]`, 0),
        c: new aln(`X (A, D)            Y(A,C,D,F)[veja 2 PIC]`),
        d: new aln(`X (A, D)            Y(C,D,F)  [veja 2 PIC]`),
        e: new aln(`X (A, B, C, D, F)   Y(C,D,F)  [veja 2 PIC]`),
        imgs: [
            require("../testespics/teste2bd/teste19.21a.jpg"),
            require("../testespics/teste2bd/teste19.21b.jpg"),
        ],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/21`,
        testRef: ``,
        tema: ``,
        prg: `23. Uma base de dados relacional normalizada significa que as relações que a compõe atendem à
          ,`,
        a: new aln(`1FN, no máximo.`),
        b: new aln(`3FN, no mínimo.`, 0),
        c: new aln(`2FN, mas não necessariamente IFN.`),
        d: new aln(`2FN, no máximo.`),
        e: new aln(`3FN, mas não necessariamente a IFN e 2FN.`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/22`,
        testRef: ``,
        tema: ``,
        prg: `24. Uma relação que contém grupos repetitivos, mas NÃO contém dependências funcionais
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
        pId: `/23`,
        testRef: ``,
        tema: ``,
        prg: `25. Considere a situação expressa pelas seguintes relações: um cliente faz n pedidos, mas um pedido específico é de somente um cliente. 
          ,Seguindo, num pedido específico são relacionados n produtos, 
          ,mas um mesmo produto pode constar em mais de um pedido.
          , Após normalizar essas relações é possível que se estabeleçam tabelas relacionais correspondentes, 
          , sendo elas: 
          ,`,
        a: new aln(`cliente, pedido e produto.`),
        b: new aln(`cliente, cliente-pedido e produto.`),
        c: new aln(` cliente, pedido, pedido-produto e produto.`, 0),
        d: new aln(`pedido-produto e cliente-produto.`),
        e: new aln(`pedido, pedido-produto e cliente-produto.`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/24`,
        testRef: ``,
        tema: ``,
        prg: `26. Suponha a seguinte tabela (com todos seus domínios atómicos) de uma base de dados
          ,relacional:
          ,T (A, B, C, D) (veja na imagem)
          ,[imagem abaixo]
          ,
          ,Considere, ainda, as seguintes dependências funcionais:
          ,DF1: A—→B, C, D
          ,DF2: C—→D
          ,
          ,A maior forma normal em que se encontra essa tabela é:`,
        a: new aln(`primeira forma normal.`),
        b: new aln(`segunda forma normal.`, 0),
        c: new aln(`terceira forma normal.`),
        d: new aln(`quarta forma normal.`),
        e: new aln(`forma normal de Boyce-Codd.`),
        imgs: [require("../testespics/teste2bd/teste19.26.jpg")],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/25`,
        testRef: ``,
        tema: ``,
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
          ,Assinale a alternativa CORRECTA.`,
        a: new aln(`I.`),
        b: new aln(`II.`),
        c: new aln(`III.`),
        d: new aln(`I e II.`, 0),
        e: new aln(`II e III.`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/26`,
        testRef: ``,
        tema: ``,
        prg: `28. Com relação à normalização, analise o texto a seguir:
          ,
          ,'Cada ocorrência da chave primária deve corresponder a uma e somente uma informação de cada atributo, 
          ,ou seja, a entidade não pode conter grupos repetitivos (multivalorados). 
          ,Para se obter entidades nesta forma, é necessário decompor cada entidade não normalizada 
          ,em tantas entidades quanto for o número de conjuntos de atributos repetitivos'
          ,
          ,O texto define:
          ,`,
        a: new aln(`O conceito de anomalia`),
        b: new aln(`A terceira forma normal`),
        c: new aln(`O conceito de generalização`),
        d: new aln(`A segunda forma normal`),
        e: new aln(`A primeira forma normal `, 0),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/27`,
        testRef: ``,
        tema: ``,
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
          ,V.Ela está na terceira forma normal.`,
        a: new aln(`Somente a afirmativa I está correcta.`, 0),
        b: new aln(`Somente a afirmativa I está correcta.`),
        c: new aln(`Somente a afirmativa IV está correcta.`),
        d: new aln(`Somente as afirmativas III e IV estão correctas.`),
        e: new aln(`Somente as afirmativas III e V estão correctas.`),
        imgs: [require("../testespics/teste2bd/teste19.29.jpg")],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/28`,
        testRef: ``,
        tema: ``,
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
          ,[imagem abaixo]`,
        a: new aln(`R (A,......)[veja acima]`, 0),
        b: new aln(`R (A, B.......)[veja acima]`),
        c: new aln(`R (A, B, C, D)[veja acima]`),
        d: new aln(`RI (A, C, D); R2 (A, B)[veja acima]`),
        e: new aln(`RI (A, B, D); R2 (B, C) [veja acima]`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/29`,
        testRef: ``,
        tema: ``,
        prg: `31. Numa base de dados relacional, considere uma tabela T, não normalizada contendo os atributos NSS, Matrícula, Nome, Endereço, Telefone. Sobre esses atributos, foram apuradas as seguintes dependências funcionais:
          ,Dfl: Matricula —→ NSS
          ,Df2: NSS —→ Nome
          ,Df3: Matrícula —→ Endereço
          ,Df4: Telefone —→ Matricula
          ,
          ,[imagem]`,
        a: new aln(`TI (NSS, Nome)
          ,T2 (Matrícula, NSS)
          ,T3 (Telefone, Matrícula, Endereço)
          ,`),
        b: new aln(`T1 (NSS, Matrícula, Nome, Endereço) 
          ,T2 (Telefone, Matrícula)
          ,`),
        c: new aln(`T1 (NSS, Nome)
          ,T2 (Matrícula, NSS, Endereço)
          ,T3 (Telefone, Matrícula)
          ,`),
        d: new aln(
            `T1 (NSS, Nome)
          ,T2 (Matrícula, NSS, Endereço)
          ,T3 (Telefone, Matrícula)
          ,`,
            0
        ),
        e: new aln(`T1 (NSS, Nome)
          ,T2 (Matrícula, NSS)
          ,T3 (Nome, Endereço)
          ,T4 (Telefone, Matrícula)
          ,`),
        imgs: [require("../testespics/teste2bd/teste19.31.jpg")],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/30`,
        testRef: ``,
        tema: ``,
        prg: `32. Em relação à normalização de relações, considere a seguinte relação e suas dependências funcionais (DF).
          ,
          ,[imagem]
          ,
          ,Indique entre as opções abaixo de esquemas de relação aquela que é resultado da aplicação da
          ,segunda forma normal.
          ,
          ,[imagem abaixo]`,
        a: new aln(`TABELA1 (A, B, C, D) e TABELA2 (B, E, F, G)`, 0),
        b: new aln(`TABELA1 (A, B,C,D),    TABELA2 (B, E, F) e TABELA3 (F, G)`),
        c: new aln(`TABELA1 (A, B,C,D),    TABELA2 (B, E, F) e TABELA3 (B, F, G) `),
        d: new aln(`TABELA1 (A, B, C, D, E, F) e TABELA2 (E, G)`),
        e: new aln(``),
        imgs: [
            require("../testespics/teste2bd/teste19.32.jpg"),
            require("../testespics/teste2bd/teste19.32b.jpg"),
        ],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/31`,
        testRef: ``,
        tema: ``,
        prg: `33. Uma das razões para se realizar a desnormalização de um projecto de base de dados é quando:
          ,`,
        a: new aln(`É necessário construir consultas DDL.`),
        b: new aln(`Para agilizar a evolução do projecto de base de dados e compatibilidade de charset.
          ,`),
        c: new aln(`Não existe escolha, pois a desnormalização é obrigatória para qualquer tipo de projecto de
          ,base de dados.`),
        d: new aln(
            `Ele encontra a necessidade de reduzir a quantidade de associações (JOIN) em consultas e,
          ,consequentemente, reduzir o uso de recursos do SGBD.
          ,`,
            0
        ),
        e: new aln(``),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/32`,
        testRef: ``,
        tema: ``,
        prg: `34. Considere a entidade associativa Empreitada entre as entidades Funcionário e Projecto de n:m. 
          ,Cada gestor de empreitada é também um funcionário que pode gerir n empreitadas,
          , mas cada empreitada só pode ser gerida por um único gestor.
          ,
          ,No modelo lógico de BDR normalizada, esta situação exige que
          ,`,
        a: new aln(
            `o relacionamento Gere entre Empreitada e Funcionário gestor (nesse sentido) 
          ,seja n:1 e entre Empreitada e Projecto (nesse sentido) seja n:1.
          ,`,
            0
        ),
        b: new aln(` o relacionamento Gere entre Empreitada e Funcionário gestor seja 1:n (nesse sentido) 
          ,e entre Empreitada e Projecto seja 1:n (nesse sentido)
          ,`),
        c: new aln(`o identificador de Projecto seja chave estrangeira em Funcionário na função de gestor.
          ,`),
        d: new aln(`o identificador de Funcionário gestor seja chave estrangeira em Projecto.
          ,`),
        e: new aln(``),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/33`,
        testRef: ``,
        tema: ``,
        prg: `35. Toda chave estrangeira que não é uma chave primária ou não faz parte de uma chave primária 
          ,composta representa um relacionamento
          ,`,
        a: new aln(`1:1 ou 1:N`, 0),
        b: new aln(`1:N ou M:N`),
        c: new aln(`1:1, somente`),
        d: new aln(`1:N, somente`),
        e: new aln(`M:N, somente
          ,`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/34`,
        testRef: ``,
        tema: ``,
        prg: `36. Na associação 1:N (um para muitos) é correcto:
          ,`,
        a: new aln(`criar uma nova tabela com as chaves das classes envolvidas na associação.
          ,`),
        b: new aln(`acrescentar a chave da classe do lado n, como chave alheia, na tabela no lado 1.
          ,`),
        c: new aln(`acrescentar ambas as chaves, em todas as tabelas envolvidas, como chaves alheias.
          ,`),
        d: new aln(`criar chaves primárias adicionais, em cada uma das tabelas, 
          ,para estabelecer a associação entre as classes.
          ,`),
        e: new aln(
            `acrescentar a chave da classe do lado 1, como chave alheia, na tabela no lado N.
          ,`,
            0
        ),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/35`,
        testRef: ``,
        tema: ``,
        prg: `37.Em relação às principais fases do projecto de base de dados, 
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
          ,Marque a alternativa correcta:
          ,`,
        a: new aln(`apenas as afirmativas I e II são verdadeiras;`),
        b: new aln(`apenas as afirmativas I e III são verdadeiras;`),
        c: new aln(`apenas as afirmativas II e III são verdadeiras;`),
        d: new aln(`Todas as afirmativas são verdadeiras.`, 0),
        e: new aln(``),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/36`,
        testRef: ``,
        tema: ``,
        prg: `38. Com relação à Modelação de Dados Objecto-Relacional, relacione as duas colunas
          ,
          ,[imagem abaixo]
          ,
          ,`,
        a: new aln(`I-A, II-C.`),
        b: new aln(`I-A, II-B.`, 0),
        c: new aln(`I-B, II-A.`),
        d: new aln(`I-B, II-C.`),
        e: new aln(`I-C, II-B.`),
        imgs: [require("../testespics/teste2bd/teste19.38.jpg")],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/37`,
        testRef: ``,
        tema: ``,
        prg: `39. No relacionamento 1:N (um para muitos), na Modelação Objecto-Relacional é correcto
          ,`,
        a: new aln(`criar uma nova tabela com as chaves das classes envolvidas no relacionamento.
          ,`),
        b: new aln(`acrescentar a chave da classe do lado n, como chave alheia, na tabela no lado 1.
          ,`),
        c: new aln(`acrescentar ambas as chaves, em todas as tabelas envolvidas, como chaves alheias.
          ,`),
        d: new aln(`criar chaves primárias adicionais, em cada uma das tabelas, para estabelecer o
          ,relacionamento entre as classes.
          ,`),
        e: new aln(
            `acrescentar a chave da classe do lado 1, como chave alheia, na tabela no lado n. 
          ,`,
            0
        ),
        imgs: [],
        fim: "",
    }),
];

let bd18 = [
    new Prg({
        cadNome: `Bd1`,
        pId: `/0`,
        testRef: ``,
        tema: ``,
        prg: `1. Em relação à normalização de dados, NÃO é um objectivo desse processo:
          ,,`,
        a: new aln(`eliminar a redundância causada pelos campos repetidos.`),
        b: new aln(`minimizar a integridade dos dados e melhorar o desempenho.`),
        c: new aln(`evitar anormalidades na actualização dos dados.`),
        d: new aln(`representar de forma precisa o que está sendo modelado.`, 0),
        e: new aln(`simplificar a manutenção e a recuperação de informações.`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/1`,
        testRef: ``,
        tema: ``,
        prg: `2.Numa base de dados relacional, a normalização é o processo de reunirem-se os dados 
          , que serão armazenados e separá-los em tabelas, 
          , tendo como objectivo principal a preservação da integridade dos dados. Para isso,
          , faz-se referência às integridades de entidade, de domínio,
          , referencial e à definida pelo utilizador.
          ,O conceito básico da integridade de entidade especifica `,
        a: new aln(
            `quais dados são absolutamente necessários para que a base de dados funcione apropriadamente.`
        ),
        b: new aln(`as restrições nas informações armazenadas na base de dados. 
          ,Uma entidade dentro de uma base de dados é a representação de uma entidade no mundo real que 
          ,foi escolhida para ser armazenada.`),
        c: new aln(
            `que deve ser possível identificar exclusivamente cada entidade armazenada na base de dados. `,
            0
        ),
        d: new aln(`a garantia de que as linhas relacionadas em um par de tabelas continuem relacionadas mesmo depois 
          ,de terem sido feitas alterações.`),
        e: new aln(`que quando uma base de dados está armazenando um registo, ele precisa armazenar algo em cada campo,
          , mesmo que isso não seja necessário.`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/2`,
        testRef: ``,
        tema: ``,
        prg: `3.Um analista de sistemas necessita projectar uma base de dados relacional. 
          ,Para verificar se as tabelas que constituem a base de dados estão na Segunda Forma Normal, 
          ,o analista deverá empregar o conceito de:`,
        a: new aln(`atomicidade.`),
        b: new aln(`inconsistência de dados.`),
        c: new aln(`dependência funcional.`, 0),
        d: new aln(`replicação de dados.`),
        e: new aln(`chave estrangeira.`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/3`,
        testRef: ``,
        tema: ``,
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
          ,A sequência que apresenta a associação correcta entre os números e os termos é`,
        a: new aln(`1-1FN; 2-2FN; 3-3FN; 4-4FN.
          ,`),
        b: new aln(`1-4FN; 2-3FN; 3-2FN; 4-1FN.
          ,`),
        c: new aln(`1-2FN; 2-4FN; 3-FN;  4-3FN.
          ,`),
        d: new aln(`1-3FN; 2-1FN; 3-4FN; 4-2FN.
          ,`),
        e: new aln(
            `1-2FN; 2-1FN; 3-4FN; 4-3FN.
          ,`,
            0
        ),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/4`,
        testRef: ``,
        tema: ``,
        prg: `5. São todas características de uma relação que está na 4a forma normal - 4FN: 
          ,
          ,1. Não possuir atributos multivalorados.
          ,2. Cada atributo não chave depender da chave primária inteira.
          ,3. Não existirem dependências multivaloradas.
          ,
          ,Assinale a alternativa que indica todas as afirmativas correctas. `,
        a: new aln(`É correcta apenas a afirmativa 1.`),
        b: new aln(`São correctas apenas as afirmativas 1 e 2.`),
        c: new aln(`São correctas apenas as afirmativas 1 e 3.`),
        d: new aln(`São correctas apenas as afirmativas 2 e 3.`),
        e: new aln(`São correctas as afirmativas 1, 2 e 3.`, 0),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/5`,
        testRef: ``,
        tema: ``,
        prg: `6. Considere a seguinte definição de uma das formas normais, utilizadas no projecto de base de dados:
          ,
          ,Uma tabela está nessa forma normal se, e somente se, cada determinante é uma chave candidata.
          ,
          ,Essa definição corresponde à:`,
        a: new aln(`primeira forma normal.`),
        b: new aln(`segunda forma normal.`),
        c: new aln(`terceira forma normal.`),
        d: new aln(`quarta forma normal.`),
        e: new aln(`forma normal de Boyce-Codd.`, 0),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/6`,
        testRef: ``,
        tema: ``,
        prg: `7.Para que as tabelas referentes ao modelo estejam na 2FN é necessário:`,
        a: new aln(`mudar a ordem da cardinalidade dos relacionamentos, já que são originários de um 
          ,relacionamento N para N entre MEDICO e PACIENTE.`),
        b: new aln(`retirar os atributos EspecialidadeMedico e DiagnosticoConsulta da tabela CONSULTA 
          ,e colocá-los na tabela MEDICO, pois, esses atributos são dependentes apenas do atributo CRMMedico.
          ,`),
        c: new aln(`criar um atributo chave primária chamado CodigoConsulta na tabela CONSULTA 
          ,e definir os atributos CodigoPaciente, CRMMedico, DataConsulta e HoraConsulta como 
          ,atributos não chave primária.`),
        d: new aln(
            `retirar o atributo EspecialidadeMedico da tabela CONSULTA e colocá-lo na tabela MEDICO, 
          ,pois, o atributo EspecialidadeMedico é dependente apenas do atributo CRMMedico.
          ,`,
            0
        ),
        e: new aln(`mudar os atributos DataConsulta e HoraConsulta para a tabela PACIENTE, 
          ,já que é o paciente que agenda a consulta. Logo, esses atributos são dependentes apenas 
          ,do atributo CodigoPaciente.`),
        imgs: [require("../testespics/teste2bd/teste18.7.jpg")],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/7`,
        testRef: ``,
        tema: ``,
        prg: `8. Analise as seguintes tabelas de base de dados.
          ,
          ,[veja imagem]
          ,
          ,Quanto à cardinalidade das tabelas apresentadas, assinale a alternativa correcta.`,
        a: new aln(`1:1.`, 0),
        b: new aln(`1:M.`),
        c: new aln(`1:N.`),
        d: new aln(`N:N.`),
        e: new aln(`M:N.`),
        imgs: [require("../testespics/teste2bd/teste18.8.jpg")],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/8`,
        testRef: ``,
        tema: ``,
        prg: `9. Na normalização, a eliminação dos atributos multivalorados ocorre durante a aplicação da
          ,`,
        a: new aln(`1FN.`, 0),
        b: new aln(`2FN.`),
        c: new aln(`3FN.`),
        d: new aln(`BCFN.`),
        e: new aln(`4FN.`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/9`,
        testRef: ``,
        tema: ``,
        prg: `10. Considere as relações: veja as pics abaixo
          ,
          ,[veja imagem]
          ,
          ,Depois da análise das relações, conclui-se que:`,
        a: new aln(`as relações respeitam todas as formas normais.`),
        b: new aln(`ambas as relações contemplam a 2FN.`),
        c: new aln(`EMPREGADO contempla a primeira forma normal (IFN),
          , mas PONTO não satisfaz a segunda forma normal (2FN).
          ,`),
        d: new aln(`EMPREGADO não contempla IFN e PONTO satisfaz 2FN.`),
        e: new aln(`EMPREGADO não contempla IFN e PONTO não respeita a 2FN.`, 0),
        imgs: [
            require("../testespics/teste2bd/teste18.10a.jpg"),
            require("../testespics/teste2bd/teste18.10b.jpg"),
        ],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/10`,
        testRef: ``,
        tema: ``,
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
          ,Está correcto o que se afirma APENAS em:`,
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
        pId: `/11`,
        testRef: ``,
        tema: ``,
        prg: `12.Uma empresa possui informações sobre as horas extras trabalhadas de seus funcionários numa tabela que,
          , além de outras colunas, contém as colunas de horário de entrada e horário de saída e
          ,o valor total a ser pago pelas horas trabalhadas. Baseado nas informações apresentadas, é correcto afirmar que esta tabela
          ,`,
        a: new aln(`encontra-se na segunda forma normal.`),
        b: new aln(
            `encontra-se na primeira forma normal, mas não na segunda forma normal.`
        ),
        c: new aln(
            `encontra-se na segunda forma normal, mas não na terceira forma normal.`
        ),
        d: new aln(`não se encontra na primeira forma normal.`, 0),
        e: new aln(`encontra-se na terceira forma normal.`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/12`,
        testRef: ``,
        tema: ``,
        prg: `13. Considere um formulário eletrónico de pedidos onde conste o código e o nome do cliente
          , que faz o pedido; o número e a data do pedido; e a lista de produtos pedidos contendo 
          , o código do produto, o nome do produto, a quantidade pedida do produto e o valor unitário do produto. 
          , Todos os dados serão persistidos num SGBD relacional, com excepção dos totais. 
          , Todos os códigos são identificadores únicos.
          ,
          ,Com a aplicação das formas normais (até a 3 FN) o resultado será a existência de, APENAS,
          ,`,
        a: new aln(`2 tabelas.`),
        b: new aln(`3 tabelas.`),
        c: new aln(`4 tabelas.`, 0),
        d: new aln(`5 tabelas.`),
        e: new aln(`6 tabelas.
          ,`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/13`,
        testRef: ``,
        tema: ``,
        prg: `14. Considere quatro relações compostas da seguinte forma:
          ,
          ,Pedido (NumPedido Data Pedido, IDClierite, Nome Cliente) 
          ,ItemPedido (NumPedido, Numitem, Qtd Item Peido) 
          ,Item (Numltem, Preco_Item) 
          ,Cliente (IDCliente, Nome Cliente, Endereco Cliente)
          ,
          ,Obs: O atributo identificador está a sublinhado.
          ,Quanto às regras de normalização, é correcto afirmar que Pedido, ItemPedido e Item, 
          ,estão normalizadas, respectivamente, até a:`,
        a: new aln(`1FN, IFN e 2FN.`),
        b: new aln(`1FN, 2FN e 2FN.`),
        c: new aln(`2FN, 2FN e 2FN. D2FN, 3FN e 3FN.`),
        d: new aln(`3FN, 3FN e 3FN.`, 0),
        e: new aln(``),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/14`,
        testRef: ``,
        tema: ``,
        prg: `15. Uma base de dados relacional normalizada significa que as relações que a compõe atendem à
          ,`,
        a: new aln(`1FN, no máximo. B.JFN, no mínimo.`),
        b: new aln(`3FN, no mínimo.`, 0),
        c: new aln(`2FN, mas não necessariamente IFN.`),
        d: new aln(`2FN, no máximo.`),
        e: new aln(`3FN, mas não necessariamente a IFN e 2FN`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/15`,
        testRef: ``,
        tema: ``,
        prg: `16. Na transformação de um modelo de dados conceptual para uma BD relacional normalizada, um
          ,relacionamento binário muitos-para-muitos só pode ser definido em termos de uma tabela
          ,`,
        a: new aln(`que contém chaves primárias correspondentes as chaves estrangeiras das duas entidades
          ,associadas mais os atributos (se houverem) simultaneamente determinados por ambas.`),
        b: new aln(`igual a uma das entidades associadas que inclui, como chaves estrangeiras suas, 
          ,as chaves primárias correspondentes à outra entidade, de forma multivalorados.`),
        c: new aln(`igual a uma das entidades associadas cujas chaves primárias suas são compostas das chaves
          ,primárias correspondentes à outra entidade. `),
        d: new aln(
            `que contém chaves estrangeiras correspondentes as chaves primárias das duas entidades
          ,associadas mais os atributos (se houverem) simultaneamente determinados por ambas. 
          ,`,
            0
        ),
        e: new aln(`igual a uma das entidades associadas cujas chaves primárias suas são compostas das chaves
          ,estrangeiras correspondentes à outra entidade.`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/16`,
        testRef: ``,
        tema: ``,
        prg: `18. Observe a tabela a seguir, pertencente a uma base de dados relacional. A chave da tabela é
          ,{nomeproduto , nomefornecedor}
          ,
          ,[veja a IMAGEM]
          ,
          ,O problema que esta tabela apresenta é:`,
        a: new aln(`não existem chaves candidatas.`),
        b: new aln(`Ela viola a primeira forma normal (1FN).`),
        c: new aln(`ela está na IFN, mas viola a segunda forma normal (2FN).`, 0),
        d: new aln(`ela está na 2FN, mas viola a terceira forma normal (3FN). `),
        e: new aln(
            `ela não é uma relação, uma vez que existem valores duplicados para a chave primária.`
        ),
        imgs: [require("../testespics/teste2bd/teste18.18.jpg")],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/17`,
        testRef: ``,
        tema: ``,
        prg: `19. Considere a seguinte relação e dependências funcionais
          ,
          ,Funcionario = (IDfune, nome, rua, cp, cidade, pais) 
          ,IDfunc—→ nome, rua, cp, cidade, pais
          ,cp—→cidade, pais
          ,
          ,A forma normal mais elevada na qual a relação acima se encontra é a`,
        a: new aln(`primeira forma normal. `, 0),
        b: new aln(`segunda forma normal.`),
        c: new aln(`terceira forma normal.`),
        d: new aln(`quarta forma normal.`),
        e: new aln(``),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/18`,
        testRef: ``,
        tema: ``,
        prg: `20. Eliminar as dependências multivaloradas (DMV) não triviais de uma tabela, 
          ,projectando-as para tabelas menores separadas e, assim, 
          ,eliminar as anomalias de actualização associadas às
          ,
          ,DMVs é objectivo da`,
        a: new aln(`1FN`),
        b: new aln(`2FN`),
        c: new aln(`3FN`),
        d: new aln(`4FN`, 0),
        e: new aln(`5FN`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/19`,
        testRef: ``,
        tema: ``,
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
          ,Assinale:`,
        a: new aln(`se apenas as afirmativas I, II e III estiverem correctas. `, 0),
        b: new aln(`se apenas as afirmativas I e II e IV estiverem correctas.`),
        c: new aln(`se apenas as afirmativas II e III estiverem correctas.`),
        d: new aln(`se apenas as afirmativas e III estiverem correctas.`),
        e: new aln(`se todas as afirmativas estiverem correctas.`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/20`,
        testRef: ``,
        tema: ``,
        prg: `22. Considere a classe associação entre Médico e Paciente (n:m) intitulada Consulta que,
          , por sua vez, se relaciona com Medicamento em n:m. Na conversão para base de dados relacional, 
          , este modelo de dados completo será derivado para`,
        a: new aln(`très tabelas.`),
        b: new aln(`quatro tabelas.`),
        c: new aln(`cinco tabelas.`, 0),
        d: new aln(`seis tabelas.`),
        e: new aln(`sete tabelas.`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/21`,
        testRef: ``,
        tema: ``,
        prg: `23. Considere a entidade associativa Empreitada entre as entidades Funcionário 
          ,e Projecto de nom. Cada gestor de empreitada é também um funcionário que pode gerir n empreitadas, 
          ,mas cada empreitada só pode ser gerida por um único gestor.
          ,
          ,No projecto lógico de BDR normalizada, esta situação exige que`,
        a: new aln(`o relacionamento Gere entre Empreitada e Funcionário seja nm e entre Empreitada e
          ,Projecto (nesse sentido) seja 1:n`),
        b: new aln(`o relacionamento Gere entre Empreitada e Funcionário seja 1:n (nesse sentido) 
          ,e entre Empreitada e Projecto seja n:m`),
        c: new aln(`o identificador de projecto seja chave estrangeira em Funcionário na função de gestor.
          ,`),
        d: new aln(
            `o identificador de funcionário gestor seja chave estrangeira em Empreitada. 
          ,`,
            0
        ),
        e: new aln(`o identificador de funcionário gestor seja chave estrangeira em Projecto.
          ,`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/22`,
        testRef: ``,
        tema: ``,
        prg: `24.Toda chave estrangeira que não é uma chave primária ou não faz parte de uma chave primária 
          ,composta representa um relacionamento`,
        a: new aln(`1:1 ou 1:N`, 0),
        b: new aln(`1:N ou M:N`),
        c: new aln(`1:1, somente`),
        d: new aln(`1:N, somente`),
        e: new aln(`M:N, somente`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/23`,
        testRef: ``,
        tema: ``,
        prg: `25. Na associação I:N (um para muitos) é correcto
          ,`,
        a: new aln(
            `criar uma nova tabela com as chaves das classes envolvidas na associação.`
        ),
        b: new aln(
            `acrescentar a chave da classe do lado n, como chave alheia, na tabela no lado 1.`
        ),
        c: new aln(
            `acrescentar ambas as chaves, em todas as tabelas envolvidas, como chaves alheias.`
        ),
        d: new aln(`criar chaves primárias adicionais, em cada uma das tabelas, 
          ,para estabelecer a associação entre as classes.`),
        e: new aln(
            `acrescentar a chave da classe do lado 1, como chave alheia, na tabela no lado N.`,
            0
        ),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/24`,
        testRef: ``,
        tema: ``,
        prg: `26.Com relação à elaboração e implantação de projecto de base de dados relacional utilizando 
          ,um mapeamento entidade-relacionamento (ER), 
          ,assinale a(s) opção(ões) correcta(s).`,
        a: new aln(`Para cada entidade fraca Y no esquema ER, deve ser criada uma relação que inclua todos os atributos simples de Y,
          ,e o atributo-chave da entidade forte (pai) com que se relaciona, como parte da chave primária e chave estrangeira.
          ,`),
        b: new aln(`Todos os relacionamentos binários 1:1 devem ser ignorados, pois, nesse tipo de mapeamento, somente são considerados relacionamentos binários I:N.
          ,`),
        c: new aln(` ara os relacionamentos binários N:M, deve ser escolhida apenas uma das entidades, por  exemplo, N, e nela deve ser inserida uma chave estrangeira advinda de M, que comporá uma chave primária simples. 
          ,`),
        d: new aln(`Para cada atributo multivalorado em uma entidade X, deve ser criada uma entidade  associativa Y em que a chave primária em Y será a chave estrangeira de X.
          , `),
        e: new aln(
            `Para cada entidade forte X no esquema ER, deve ser criada uma relação que inclua 
          ,todos os  atributos simples de X.`,
            0
        ),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/25`,
        testRef: ``,
        tema: ``,
        prg: `27. A descrição concisa dos requisitos de dados dos utilizadores, que inclui descrições detalhadas
          ,de tipos entidades, relacionamentos e restrições, expressos usando os conceitos fornecidos 
          ,pelo modelo de dados de alto nivel, é conhecida como esquema.`,
        a: new aln(` Conceptual.`, 0),
        b: new aln(`Lógico.`),
        c: new aln(`Fisico.`),
        d: new aln(`Interno.`),
        e: new aln(` Externo.`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/26`,
        testRef: ``,
        tema: ``,
        prg: `28. Num projecto de base de dados, o levantamento das dependências funcionais é importante
          ,porque fornece subsidios indispensáveis para a fase de:`,
        a: new aln(`definição de vistas.`),
        b: new aln(`definição de restrições de integridade. C. confecção do projecto fisico.
          ,`),
        c: new aln(`confecção do projecto fisico.`),
        d: new aln(`estabelecimento dos perfis de segurança.`),
        e: new aln(`normalização. `, 0),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/27`,
        testRef: ``,
        tema: ``,
        prg: `29. Um modelo lógico de dados é:`,
        a: new aln(`uma representação sucinta da base de dados a ser implementada`),
        b: new aln(
            `uma representação lógica das informações da área de negócios `,
            0
        ),
        c: new aln(`um modelo que guarda acentuada relação de dependência com o modelo fisico
          ,`),
        d: new aln(`dependente da tecnologia implementada em função das constantes mudanças dos produtos tecnológicos
          ,`),
        e: new aln(`um modelo que admite a replicação de atributos`),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/28`,
        testRef: ``,
        tema: ``,
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
          ,Marque a alternativa correcta:`,
        a: new aln(`apenas as afirmativas I e II são verdadeiras;`),
        b: new aln(`apenas as afirmativas I e III são verdadeiras;`),
        c: new aln(`apenas as afirmativas II e III são verdadeiras;`),
        d: new aln(`Todas as afirmativas são verdadeiras.`, 0),
        e: new aln(``),
        imgs: [],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/29`,
        testRef: ``,
        tema: ``,
        prg: `31. Com relação à Modelação de Dados Objecto-Relacional, relacione as duas colunas
          ,
          ,[veja a imagem]`,
        a: new aln(`I-A, II-C.`),
        b: new aln(`I-A, II-B.`, 0),
        c: new aln(`I-B, II-A.`),
        d: new aln(`I-B, II-C.`),
        e: new aln(`I-C, II-B.`),
        imgs: [require("../testespics/teste2bd/teste18.31.jpg")],
        fim: "",
    }),
    new Prg({
        cadNome: `Bd1`,
        pId: `/30`,
        testRef: ``,
        tema: ``,
        prg: `32.No relacionamento 1:N (um para muitos), na Modelação Objecto-Relacional é correcto :
          ,`,
        a: new aln(
            `criar uma nova tabela com as chaves das classes envolvidas no relacionamento.`
        ),
        b: new aln(
            `acrescentar a chave da classe do lado n, como chave alheia, na tabela no lado 1. `
        ),
        c: new aln(`criar chaves primárias adicionais, em cada uma das tabelas,
          , para estabelecer o relacionamento entre as classes.
          ,`),
        d: new aln(`acrescentar ambas as chaves, em todas as tabelas envolvidas, como chaves alheias.
          ,`),
        e: new aln(
            `acrescentar a chave da classe do lado 1, como chave alheia, na tabela no lado n.
          ,`,
            0
        ),
        imgs: [],
        fim: "",
    }),
];

let bd16 = [
    new Prg({
        cadNome: `Bd1`,
        pId: `/0`,
        testRef: ``,
        tema: ``,
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
        tema: ``,
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
        tema: ``,
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


export { bd14, bd15, bd16, bd18, bd19, bd22 };