const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A violência e a segurança pública são questões interligadas que afetam profundamente a vida cotidiana e o bem-estar das comunidades. Enquanto movimentos sociais e defensores dos direitos humanos lutam por justiça e igualdade, suas ações buscam não apenas mitigar a violência, mas também promover políticas públicas que garantam a proteção e a dignidade de todos os cidadãos. ",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: ". "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "."
            }
        ]
    },
    {
        enunciado: " Como os movimentos sociais e os defensores dos direitos humanos abordam a questão da violência e segurança pública?",
        alternativas: [
            {
                texto: "",
                afirmacao: "A violência e a segurança pública são desafios urgentes que afetam comunidades globalmente. "
            },
            {
                texto: "Eles atuam promovendo políticas que visam mitigar a violência e garantir direitos, buscando construir sociedades mais seguras e inclusivas.",
                afirmacao: "Movimentos sociais e defensores dos direitos humanos desempenham um papel crucial ao destacar essas questões e exigir mudanças significativas."
            }
        ]
    },
    {
        enunciado: "Qual é o papel dos movimentos sociais e dos defensores dos direitos humanos na promoção da segurança pública?",
        alternativas: [
            {
                texto: "",
                afirmacao: "Ao promoverem políticas que respeitam os direitos fundamentais e garantem a proteção de todos, "
            },
            {
                texto: "Eles trabalham para sensibilizar, pressionar por políticas públicas eficazes e defender direitos fundamentais, visando reduzir a violência e proteger comunidades vulneráveis.",
                afirmacao: "esses grupos não apenas buscam reduzir a violência, "
            }
        ]
    },
    {
        enunciado: "Como os movimentos sociais e os defensores dos direitos humanos contribuem para enfrentar desafios de violência e segurança pública?",
        alternativas: [
            {
                texto: "",
                afirmacao: "mas também fortalecer a coesão social e a justiça."
            },
            {
                texto: "Eles mobilizam a sociedade civil, pressionam por mudanças legislativas e promovem a conscientização sobre direitos, visando transformar sistemas de segurança para garantir proteção igualitária e justiça para todos.",
                afirmacao: "Suas iniciativas são essenciais para construir "
            }
        ]
    },
    {
        enunciado: "Por que os movimentos sociais e os defensores dos direitos humanos são importantes no contexto da segurança pública e da violência? ",
        alternativas: [
            {
                texto: "",
                afirmacao: "sociedades mais seguras e equitativas, "
            },
            {
                texto: "Eles são importantes porque defendem políticas que protegem os direitos individuais, promovem a justiça social e trabalham para reduzir a violência, contribuindo para uma sociedade mais segura e inclusiva.",
                afirmacao: "onde cada indivíduo possa viver livre de medo e violência. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2024...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();