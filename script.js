//GALERIA DE MULHERES INSPIRADORAS
const mulheres = [
    "Marie Curie foi uma cientista pioneira. Foi a primeira mulher a receber um Prêmio Nobel.",
    "Malala Yousafzai luta pelo direito das meninas à educação e recebeu o Nobel da Paz.",
    "Bertha Lutz foi uma importante ativista brasileira na luta pelo direito ao voto feminino.",
    "Katherine Johnson foi uma matemática cujos cálculos contribuíram para missões espaciais da NASA."
];

function mostrarMulher(numero) {
    document.getElementById("texto-mulher").innerText = mulheres[numero];
}

// METAS DA ODS 5

const metas = [
    "Acabar com todas as formas de discriminação contra mulheres e meninas.",
    "Eliminar a violência contra mulheres e meninas.",
    "Eliminar práticas prejudiciais, como casamento infantil e forçado.",
    "Reconhecer e valorizar o trabalho doméstico e de cuidado não remunerado.",
    "Garantir participação plena das mulheres e igualdade de oportunidades de liderança.",
    "Garantir acesso à saúde sexual e reprodutiva e aos direitos reprodutivos."
];

function mostrarMeta(numero) {
    document.getElementById("texto-meta").innerText = metas[numero];
}

// QUIZ INTERATIVO

const perguntas = [
    {
        pergunta: "1. Qual é o principal objetivo da ODS 5?",
        opcoes: ["Combater a pobreza", "Alcançar a igualdade de gênero", "Proteger os oceanos"],
        correta: 1,
        explicacao: "A ODS 5 busca alcançar a igualdade de gênero e empoderar todas as mulheres e meninas."
    },
    {
        pergunta: "2. A igualdade de gênero significa que:",
        opcoes: ["Todos devem ter os mesmos direitos e oportunidades", "Mulheres devem ter menos direitos", "Homens e mulheres precisam ter as mesmas profissões"],
        correta: 0,
        explicacao: "Igualdade significa garantir direitos e oportunidades sem discriminação."
    },
    {
        pergunta: "3. O que foi uma conquista importante das mulheres no Brasil?",
        opcoes: ["Direito de dirigir", "Direito ao voto", "Fim de todas as desigualdades"],
        correta: 1,
        explicacao: "As mulheres conquistaram o direito ao voto no Brasil em 1932."
    },
    {
        pergunta: "4. A desigualdade salarial ainda é um problema?",
        opcoes: ["Não", "Sim", "Acontecia apenas no passado"],
        correta: 1,
        explicacao: "A diferença salarial entre homens e mulheres ainda é um desafio."
    },
    {
        pergunta: "5. Qual atitude ajuda a combater o machismo?",
        opcoes: ["Reproduzir preconceitos", "Ignorar a desigualdade", "Respeitar e combater atitudes discriminatórias"],
        correta: 2,
        explicacao: "O respeito e a conscientização são fundamentais para transformar a sociedade."
    },
    {
        pergunta: "6. A educação contribui para a igualdade de gênero?",
        opcoes: ["Sim", "Não", "Somente para adultos"],
        correta: 0,
        explicacao: "A educação ajuda a combater estereótipos e amplia oportunidades."
    },
    {
        pergunta: "7. Qual destas é uma forma de violência contra a mulher?",
        opcoes: ["Violência psicológica", "Apenas violência física", "Nenhuma das alternativas"],
        correta: 0,
        explicacao: "A violência pode ser física, psicológica, sexual, moral e patrimonial."
    },
    {
        pergunta: "8. Qual é o número da Central de Atendimento à Mulher?",
        opcoes: ["190", "180", "192"],
        correta: 1,
        explicacao: "O 180 oferece orientação e atendimento às mulheres em situação de violência."
    },
    {
        pergunta: "9. Quem foi Malala Yousafzai?",
        opcoes: ["Uma cientista brasileira", "Uma cantora", "Uma ativista pelo direito à educação"],
        correta: 2,
        explicacao: "Malala defende o direito das meninas à educação e recebeu o Nobel da Paz."
    },
    {
        pergunta: "10. A igualdade de gênero beneficia:",
        opcoes: ["Somente as mulheres", "Toda a sociedade", "Somente os homens"],
        correta: 1,
        explicacao: "Uma sociedade mais igualitária oferece mais oportunidades e justiça para todos."
    }
];

let atual = 0;
let pontos = 0;
let respondeu = false;

function carregarPergunta() {
    respondeu = false;

    const pergunta = perguntas[atual];

    document.getElementById("pergunta").innerText = pergunta.pergunta;
    document.getElementById("feedback").innerText = "";
    document.getElementById("proxima").hidden = true;

    const alternativas = document.getElementById("alternativas");
    alternativas.innerHTML = "";

    pergunta.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement("button");

        botao.innerText = opcao;
        botao.onclick = () => responder(indice);

        alternativas.appendChild(botao);
    });
}

function responder(indice) {
    if (respondeu) return;

    respondeu = true;

    const pergunta = perguntas[atual];
    const botoes = document.querySelectorAll("#alternativas button");

    botoes.forEach((botao, i) => {
        botao.disabled = true;

        if (i === pergunta.correta) {
            botao.classList.add("correta");
        } else if (i === indice) {
            botao.classList.add("incorreta");
        }
    });

    if (indice === pergunta.correta) {
        pontos++;
        document.getElementById("feedback").innerText =
            "Muito bem! Você acertou! 💗 " + pergunta.explicacao;
    } else {
        document.getElementById("feedback").innerText =
            "Quase! Vamos aprender: " + pergunta.explicacao;
    }

    document.getElementById("proxima").hidden = false;
}

function proximaPergunta() {
    atual++;

    if (atual < perguntas.length) {
        carregarPergunta();
    } else {
        document.getElementById("pergunta-quiz").innerHTML = `
            <h3>Quiz finalizado! 🎉</h3>
            <p>Você acertou ${pontos} de ${perguntas.length} perguntas!</p>
            <p>${pontos >= 8 ? "Parabéns! Você conhece muito sobre igualdade de gênero! 💗" : "Continue aprendendo! Conhecimento também transforma a sociedade."}</p>
            <button id="reiniciar" onclick="reiniciarQuiz()">Jogar novamente</button>
        `;
    }
}

function reiniciarQuiz() {
    atual = 0;
    pontos = 0;

    document.getElementById("pergunta-quiz").innerHTML = `
        <h3 id="pergunta"></h3>
        <div id="alternativas"></div>
        <p id="feedback"></p>
        <button id="proxima" onclick="proximaPergunta()" hidden>
            Próxima pergunta
        </button>
    `;

    carregarPergunta();
}

carregarPergunta();