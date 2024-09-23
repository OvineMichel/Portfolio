window.onload = function(){


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
    }