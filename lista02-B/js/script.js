window.addEventListener("DOMContentLoaded", () => {
    const usuarios = [
        { nome: "Ana", idade: 18, genero: "F", salario: 1000 },
        { nome: "João", idade: 20, genero: "M", salario: 3000 },
        { nome: "César", idade: 33, genero: "M", salario: 1900 },
        { nome: "Maria", idade: 12, genero: "F", salario: 7000 },
        { nome: "Zé", idade: 17, genero: "M", salario: 2400 },
    ];

    const results = document.body;

    // 1. Exibir o nome e a idade de todas as pessoas maiores de idade
    const maioresDeIdade = usuarios.filter(x => x.idade >= 18);
    results.innerHTML += `<p>Maiores de idade: ${maioresDeIdade.map(x => `${x.nome} (${x.idade})`).join(", ")}</p>`;

    // 2. Exibir os nomes de todas as pessoas do sexo masculino
    const homens = usuarios.filter(x => x.genero === "M");
    results.innerHTML += `<p>Homens: ${homens.map(x => x.nome).join(", ")}</p>`;

    // 3. Exibir os dados da pessoa com o maior salário
    const maiorSalario = usuarios.reduce((maior, usuario) => (usuario.salario > maior.salario ? usuario : maior));
    results.innerHTML += `<p>Pessoa com maior salário: ${maiorSalario.nome}, Idade: ${maiorSalario.idade}, Gênero: ${maiorSalario.genero}, Salário: R$${maiorSalario.salario.toFixed(2)}</p>`;

    // 4. Há alguma mulher que ganha acima de 5000,00?
    const mulherAcima5000 = usuarios.some(x => x.genero === "F" && x.salario > 5000);
    results.innerHTML += `<p>Há alguma mulher que ganha acima de R$5000,00? ${mulherAcima5000 ? "Sim" : "Não"}</p>`;

    // 5. Média dos salários dos homens e das mulheres
    const mulheres = usuarios.filter(x => x.genero === "F");
    const mediaSalarioMulheres = mulheres.reduce((total, x) => total + x.salario, 0) / mulheres.length;
    results.innerHTML += `<p>Média dos salários das mulheres: R$${mediaSalarioMulheres.toFixed(2)}</p>`;

    const mediaSalarioHomens = homens.reduce((total, x) => total + x.salario, 0) / homens.length;
    results.innerHTML += `<p>Média dos salários dos homens: R$${mediaSalarioHomens.toFixed(2)}</p>`;
});