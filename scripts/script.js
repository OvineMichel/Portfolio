window.onload = function() {
    
    const canva = document.querySelector("#background-canva");
                const ctx = canva.getContext("2d");
                canva.width = window.innerWidth;
                canva.height = window.innerHeight;
                const linhas = [
                    { y: 0, dy: 13},
                    { y: -10, dy: 6},
                    { y: -20, dy: 9},
                    { y: -30, dy: 5},
                    { y: -20, dy: 5},
                    { y: -20, dy: 9},
                    { y: -20, dy: 8},
                    { y: -20, dy: 10},
                ];
        
                const cores = ["#A195FD", "#3333cc"]
        
                function animacao() {
                    requestAnimationFrame(animacao);
                    ctx.clearRect(0, 0, canva.width, canva.height);
        
                    linhas.forEach(linha => {
                        ctx.fillStyle = cores[Math.floor(Math.random()*2)];
                        ctx.fillRect(0, linha.y, canva.width, 5);
                        linha.y += linha.dy;
        
                        if (linha.y > canva.height) {
                            linha.y = -5;
                        }
                    });
                }
        
                animacao();
                
    const titulos = ["Ecommerce Boutique Elegance", "Site Queen", "Jogo De MYSql"];
    const imagens = ["../img/site-ecommerce.png", "../img/site-queen.png", "../img/site-sql.png"];
    const descs = [
        "Esse é um projeto criado para apresentação no quarto ano do curso de informatica para a internet, trata-se de um ecommerce de roupas e outros artefatos da moda, o site utliza das linguagens CSS, HTML, PHP e Javascript",
        "Este foi um site criado como um tributo a banda queen, como forma de criar um site interativo, animado e com players de audio e video.",
        "Este é um pequeno jogo feito para testar as habilidades dos jogadores no seu conhecimento de SQL, o jogo é feito em HTML, CSS e JS."
    ];

    let i = 0;

    const button_esq = document.querySelector('#btn-esq');
    const button_dir = document.querySelector('#btn-dir');
    const titulo = document.querySelector('#titulo-projeto');
    const imagem = document.querySelector('#img-projeto');
    const desc = document.querySelector('#desc-projeto');

    function trocarProjeto() {
        titulo.innerHTML = titulos[i];
        desc.innerHTML = descs[i];
        imagem.src = imagens[i];
    }

    function somaI() {
        i++;
        if (i > 2) {
            i = 0;
        }
        trocarProjeto();
    }

    function subI() {
        i--;
        if (i < 0) {
            i = 2;
        }
        trocarProjeto();
    }

    button_esq.onclick = subI;
    button_dir.onclick = somaI;

    trocarProjeto();

    
};
