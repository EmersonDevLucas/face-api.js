const versiculos = [
    "E conhecereis a verdade, e a verdade vos libertará. - João 8:32",
    "Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o Senhor; pensamentos de paz e não de mal, para vos dar o fim que esperais. - Jeremias 29:11",
    "E tudo o que pedirdes em meu nome, isso farei, para que o Pai seja glorificado no Filho. - João 14:13",
    "O Senhor é bom, uma fortaleza no dia da angústia, e conhece os que nele confiam. - Naum 1:7",
    "E não sede conformados com este mundo, mas sede transformados pela renovação do vosso entendimento, para que experimenteis qual seja a boa, agradável e perfeita vontade de Deus. - Romanos 12:2",
    "E, se o meu povo, que se chama pelo meu nome, se humilhar, e orar, e buscar a minha face, e se converter dos seus maus caminhos; então eu ouvirei dos céus, e perdoarei os seus pecados, e sararei a sua terra. - 2 Crônicas 7:14",
    "E, se creres, verás a glória de Deus. - João 11:40",
    "E, tudo o que pedirdes em oração, crendo, o recebereis. - Mateus 21:22",
    "E, se alguém tem falta de sabedoria, peça a Deus, que a todos dá liberalmente e nada lhes impropera; e ser-lhe-á dada. - Tiago 1:5",
    "Porque Deus não é Deus de confusão, senão de paz. - 1 Coríntios 14:33",
    "E, se alguém não tem amor, não conhece a Deus; porque Deus é amor. - 1 João 4:8",
    "E, se alguém tem sede, venha a mim e beba. - João 7:37",
    "E, se alguém quiser ser o primeiro, será o último de todos e o servo de todos. - Marcos 9:35",
    "E, se alguém quiser vir após mim, negue-se a si mesmo, e tome a sua cruz, e siga-me. - Mateus 16:24",
    "E, se alguém não tem amor, não conhece a Deus; porque Deus é amor. - 1 João 4:8",
    "O Senhor é meu pastor; nada me faltará. - Salmos 23:1",
    "Posso todas as coisas naquele que me fortalece. - Filipenses 4:13",
    "Confia no Senhor de todo o teu coração e não te apoies no teu próprio entendimento. - Provérbios 3:5"
];

function obterVersiculoDoDia() {
    const hoje = new Date();
    const indice = hoje.getDate() % versiculos.length;
    return versiculos[indice];

}

document.getElementById("word").innerText = obterVersiculoDoDia();