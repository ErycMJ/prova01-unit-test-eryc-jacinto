const Utilitarios = require("../src/utilitarios");

describe("Classe Utilitarios", () => {
    let util;

    beforeEach(() => {
        util = new Utilitarios();
    });

    test("inverterString deve inverter uma string", () => {
        expect(util.inverterString("eryc")).toBe("cyre");
    });

    test("inverterString deve lidar com string vazia", () => {
        expect(util.inverterString("")).toBe("");
    });

    test("contarCaracteres deve contar os caracteres de uma string", () => {
        expect(util.contarCaracteres("eryc")).toBe(4);
    });

    test("contarCaracteres deve lidar com string vazia", () => {
        expect(util.contarCaracteres("")).toBe(0);
    });

    test("paraMaiusculas deve transformar a string em maiúsculas", () => {
        expect(util.paraMaiusculas("eryc")).toBe("ERYC");
    });

    test("paraMinusculas deve transformar a string em minúsculas", () => {
        expect(util.paraMinusculas("ERYC")).toBe("eryc");
    });

    test("primeiraLetraMaiuscula deve capitalizar a primeira letra", () => {
        expect(util.primeiraLetraMaiuscula("eryc")).toBe("Eryc");
    });

    test("somar deve somar dois números", () => {
        expect(util.somar(1, 2)).toBe(3);
    });

    test("subtrair deve subtrair dois números", () => {
        expect(util.subtrair(2, 1)).toBe(1);
    });

    test("multiplicar deve multiplicar dois números", () => {
        expect(util.multiplicar(1, 2)).toBe(2);
    });

    test("dividir deve dividir dois números", () => {
        expect(util.dividir(1, 2)).toBe(0.5);
    });

    test("dividir deve lançar erro ao dividir por zero", () => {
        expect(() => util.dividir(2, 0)).toThrow("Divisão por zero");
    });

    test("dividir deve lidar com números negativos", () => {
        expect(util.dividir(-6, 2)).toBe(-3);
    });

    test("ehPar deve verificar se o número é par", () => {
        expect(util.ehPar(2)).toBe(true);
        expect(util.ehPar(1)).toBe(false);
    });

    test("ehPar deve lidar com zero", () => {
        expect(util.ehPar(0)).toBe(true);
    });

    test("primeiroElemento deve retornar o primeiro elemento", () => {
        expect(util.primeiroElemento([1, 2, 3])).toBe(1);
    });

    test("primeiroElemento deve retornar undefined para array vazio", () => {
        expect(util.primeiroElemento([])).toBeUndefined();
    });

    test("ultimoElemento deve retornar o último elemento", () => {
        expect(util.ultimoElemento([1, 2, 3])).toBe(3);
    });

    test("ultimoElemento deve retornar undefined para array vazio", () => {
        expect(util.ultimoElemento([])).toBeUndefined();
    });

    test("tamanhoArray deve retornar o tamanho do array", () => {
        expect(util.tamanhoArray([1, 2, 3])).toBe(3);
    });

    test("ordenarArray deve ordenar um array", () => {
        expect(util.ordenarArray([3, 1, 2])).toEqual([1, 2, 3]);
    });

    test("ordenarArray deve lidar com array vazio", () => {
        expect(util.ordenarArray([])).toEqual([]);
    });

    test("inverterArray deve inverter um array", () => {
        expect(util.inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
    });

    test("inverterArray deve lidar com array vazio", () => {
        expect(util.inverterArray([])).toEqual([]);
    });

    test("gerarNumeroAleatorio deve gerar número menor que o máximo", () => {
        const num = util.gerarNumeroAleatorio(10);
        expect(num).toBeGreaterThanOrEqual(0);
        expect(num).toBeLessThan(10);
    });

    test("gerarNumeroAleatorio deve gerar número com valor padrão", () => {
        const num = util.gerarNumeroAleatorio();
        expect(num).toBeGreaterThanOrEqual(0);
        expect(num).toBeLessThan(100);
    });

    test("ehNumero deve verificar se é um número válido", () => {
        expect(util.ehNumero(5)).toBe(true);
        expect(util.ehNumero("5")).toBe(false);
        expect(util.ehNumero(NaN)).toBe(false);
    });

    test("removerEspacos deve remover espaços no início e fim", () => {
        expect(util.removerEspacos("  teste  ")).toBe("teste");
    });

    test("repetirTexto deve repetir o texto", () => {
        expect(util.repetirTexto("a", 3)).toBe("aaa");
    });

    test("juntarArray deve juntar os elementos com separador", () => {
        expect(util.juntarArray([1, 2, 3], "-")).toBe("1-2-3");
    });

    test("contarPalavras deve contar as palavras", () => {
        expect(util.contarPalavras("um dois  três")).toBe(3);
    });

    test("mediaArray deve retornar a média dos valores", () => {
        expect(util.mediaArray([1, 2, 3])).toBe(2);
        expect(util.mediaArray([])).toBe(0);
    });

    test("removerDuplicados deve remover valores duplicados", () => {
        expect(util.removerDuplicados([1, 1, 2, 3, 3])).toEqual([1, 2, 3]);
    });

    test("ehPalindromo deve verificar palavras palíndromas", () => {
        expect(util.ehPalindromo("arara")).toBe(true);
        expect(util.ehPalindromo("banana")).toBe(false);
        expect(util.ehPalindromo("")).toBe(true);
    });
});
