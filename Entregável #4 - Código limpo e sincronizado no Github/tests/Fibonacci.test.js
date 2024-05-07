const Fibonacci = require("../funcoes/Fibonacci");


// Coloque apenas um inteiro, para receber os números da contagem até este inteiro.
test("Esperado, os 10 primeiros números da contagem Fibonacci", () => {
    expect(Fibonacci(10)).toMatchObject(["1,1,2,3,5,8,13,21,34,55"])
})

test("Esperado, os 20 primeiros números da contagem Fibonacci", () => {
    expect(Fibonacci(20)).toMatchObject(["1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765"])
})