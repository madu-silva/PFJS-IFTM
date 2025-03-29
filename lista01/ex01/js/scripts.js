window.addEventListener("DOMContentLoaded", () => {
    const vetAges = [10, 21, 31, 40];

    // 1. Soma das idades
    const sumAges = (vet) => vet.reduce((sum, age) => sum + age, 0);

    const results = document.body;
    results.innerHTML += `<p>Soma das idades = ${sumAges(vetAges)}</p>`;
});