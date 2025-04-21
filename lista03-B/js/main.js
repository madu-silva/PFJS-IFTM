window.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("opcoes");
    const paragrafo = document.createElement("p");
    document.body.appendChild(paragrafo);

    function fetchEstudantes() {
        fetch('https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json')
            .then(response => response.json())
            .then(estudantes => {

                menu.addEventListener("change", () => {
                    const opcaoSelecionada = menu.value;

                    let res = "";

                    switch (opcaoSelecionada) {
                        case "todos":
                            res = estudantes.map(estudante => 
                                `${estudante.nome}: ${estudante.notaBim1.toFixed(1)} (bimestre 1) e ${estudante.notaBim2.toFixed(1)} (bimestre 2) = ${(estudante.notaBim1 + estudante.notaBim2).toFixed(1)}`
                            ).join("<br><br>");
                            break;

                        case "homens":
                            res = estudantes
                                .filter(estudante => estudante.sexo === "M")
                                .map(estudante => 
                                    `${estudante.nome}: ${estudante.notaBim1.toFixed(1)} (bimestre 1) e ${estudante.notaBim2.toFixed(1)} (bimestre 2) = ${(estudante.notaBim1 + estudante.notaBim2).toFixed(1)}`
                                ).join("<br><br>");
                            break;

                        case "mulheres":
                            res = estudantes
                                .filter(estudante => estudante.sexo === "F")
                                .map(estudante => 
                                    `${estudante.nome}: ${estudante.notaBim1.toFixed(1)} (bimestre 1) e ${estudante.notaBim2.toFixed(1)} (bimestre 2) = ${(estudante.notaBim1 + estudante.notaBim2).toFixed(1)}`
                                ).join("<br><br>");
                            break;

                        case "aprovados":
                            res = estudantes
                                .filter(estudante => (estudante.notaBim1 + estudante.notaBim2) >= 60)
                                .map(estudante => 
                                    `${estudante.nome}: ${estudante.notaBim1.toFixed(1)} (bimestre 1) e ${estudante.notaBim2.toFixed(1)} (bimestre 2) = ${(estudante.notaBim1 + estudante.notaBim2).toFixed(1)}`
                                ).join("<br><br>");
                            break;

                        case "reprovados":
                            res = estudantes
                                .filter(estudante => (estudante.notaBim1 + estudante.notaBim2) < 60)
                                .map(estudante => 
                                    `${estudante.nome}: ${estudante.notaBim1.toFixed(1)} (bimestre 1) e ${estudante.notaBim2.toFixed(1)} (bimestre 2) = ${(estudante.notaBim1 + estudante.notaBim2).toFixed(1)}`
                                ).join("<br><br>");
                            break;

                        case "aprovados-todos":
                            res = estudantes.every(estudante => (estudante.notaBim1 + estudante.notaBim2) >= 60)
                                ? "Sim, todos os alunos foram aprovados."
                                : "Não, nem todos os alunos foram aprovados.";
                            break;

                        case "media":
                            const media = estudantes.reduce((total, estudante) => total + estudante.notaBim1 + estudante.notaBim2, 0) / estudantes.length;
                            res = `Nota média = ${media.toFixed(2)}`;
                            break;

                        default:
                            res = "Selecione uma opção válida.";
                    }

                    paragrafo.innerHTML = res;
                });
            })
            .catch(err => console.log('Erro ao buscar os dados:', err));
    }

    fetchEstudantes();
});