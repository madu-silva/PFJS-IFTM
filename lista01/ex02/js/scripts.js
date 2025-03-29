window.addEventListener("DOMContentLoaded", () => {
    const vetAges = [10, 21, 31, 40];

    // 2a. Média aritmética simples das idades
    const sumAges = (vet) => vet.reduce((sum, age) => sum + age, 0);
    const averageAges = (vet) => sumAges(vet) / vet.length;

    // 2b. Maior idade
    const maxAge = (vet) => {
        let max = vet[0];
        for (let i = 1; i < vet.length; i++) {
            if (vet[i] > max) {
                max = vet[i];
            }
        }
        return max;
    };

    // 2c. Idades ímpares
    const oddAges = (vet) => vet.filter(age => age % 2 !== 0);

    // 2d. Verificar se todos são maiores de idade (idade >= 18)
    const allAdults = (vet) => vet.every(age => age >= 18);

    // 2e. Verificar se todas as idades são maiores ou iguais a um valor informado pelo usuário
    const allAgesAbove = (vet, value) => vet.every(age => age >= value);

    // 2f. Exibir todas as idades maiores ou iguais a determinada idade
    const agesAbove = (vet, value) => vet.filter(age => age >= value);

    // 2g. Média das idades das pessoas com idades maiores ou iguais a determinada idade
    const averageAgesAbove = (vet, value) => {
        const filteredAges = agesAbove(vet, value);
        return filteredAges.length > 0 ? sumAges(filteredAges) / filteredAges.length : 0;
    };

    const results = document.body;

    results.innerHTML += `<p>Média das idades = ${averageAges(vetAges)}</p>`;
    results.innerHTML += `<p>Maior idade = ${maxAge(vetAges)}</p>`;
    results.innerHTML += `<p>Idades ímpares = ${oddAges(vetAges).join(", ")}</p>`;
    results.innerHTML += `<p>Todos são maiores de idade? ${allAdults(vetAges)}</p>`;

    const userValue = 20;
    results.innerHTML += `<p>Todas as idades são maiores ou iguais a ${userValue}? ${allAgesAbove(vetAges, userValue)}</p>`;
    results.innerHTML += `<p>Idades maiores ou iguais a ${userValue} = ${agesAbove(vetAges, userValue).join(", ")}</p>`;
    results.innerHTML += `<p>Média das idades maiores ou iguais a ${userValue} = ${averageAgesAbove(vetAges, userValue)}</p>`;
});