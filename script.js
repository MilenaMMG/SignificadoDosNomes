document.addEventListener("DOMContentLoaded", function () {
    const names = {
        br: {
            "Adriana": "Mulher da cidade de Adria",
            "Alberto": "Nobre e brilhante",
            "Ana": "Cheia de graça",
            "Bruno": "Moreno, escuro",
            "Carlos": "Homem do povo",
            "Daniela": "Deus é meu juiz",
            "Eduardo": "Guardião das riquezas",
            "Fernanda": "Ousada para alcançar a paz",
            "Gabriel": "Homem de Deus",
            "João": "Deus é gracioso",
            // Aqui devem estar os outros 990 nomes
        },
        pt: {
            "Alexandre": "Protetor do povo",
            "Beatriz": "Aquela que traz felicidade",
            "Cristiano": "Ungido por Deus",
            "Duarte": "Guardião das riquezas",
            "Francisco": "Aquele que vem da França",
            "Gonçalo": "Guerreiro do exército",
            "Helena": "Tocha brilhante",
            "Isabel": "Consagrada a Deus",
            "Joaquim": "Deus estabeleceu",
            "Leonor": "Brilho do sol",
            // Outros 990 nomes aqui
        },
        us: {
            "Aaron": "Elevado, exaltado",
            "Alice": "De qualidade nobre",
            "Benjamin": "Filho da felicidade",
            "Charlotte": "Mulher do povo",
            "Daniel": "Deus é meu juiz",
            "Elizabeth": "Consagrada a Deus",
            "Henry": "Senhor da casa",
            "James": "Aquele que suplanta",
            "Michael": "Quem é como Deus?",
            "William": "Protetor resoluto",
            // Outros 990 nomes aqui
        }
    };

    function loadNames() {
        const country = document.getElementById("countrySelect").value;
        const nameList = document.getElementById("nameList");
        nameList.innerHTML = "";

        if (country && names[country]) {
            const sortedNames = Object.keys(names[country]).sort();

            sortedNames.forEach(name => {
                const li = document.createElement("li");
                li.textContent = `${name}: ${names[country][name]}`;
                nameList.appendChild(li);
            });
        }
    }

    function filterNames() {
        const searchValue = document.getElementById("search").value.toLowerCase();
        const listItems = document.querySelectorAll("#nameList li");

        listItems.forEach(item => {
            item.style.display = item.textContent.toLowerCase().includes(searchValue) ? "block" : "none";
        });
    }

    document.getElementById("countrySelect").addEventListener("change", loadNames);
    document.getElementById("search").addEventListener("keyup", filterNames);
});
