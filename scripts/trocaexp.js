window.onload = function(){
const titulos_expe = ['Hackaton Codeday','Monitoria Acadêmica','Universidade de Harvard','Massachusetts Institute of Technology','Colaborador da Neuralink']
    const descs_expe = [
        "O Hackathon Codeday, promovido pelo Instituto Federal Sul-Rio-Grandense (IFsul), foi um evento marcante no calendário acadêmico da instituição, reunindo equipes de todos os anos do curso integrado de informatica para internet e anos superiores de analise e desenvolvimento de sistemas, para uma competição intensa e inovadora. participei deste evento em sua edição mais recente, onde nossa equipe brilhou com um desempenho excepcional. Durante o Codeday, as equipes enfrentaram desafios complexos que exigiam habilidades técnicas avançadas e criatividade na resolução de problemas. A competição foi projetada para testar a capacidade dos participantes em diversas áreas da tecnologia e desenvolvimento de software, incluindo programação, design de sistemas e integração de soluções.",

        "Durante dois anos, atuei como monitor acadêmico de Lógica de Programação no Instituto Federal Sul Rio-Grandense (IFsul). Minha atuação nesse papel foi crucial para a experiência educacional dos alunos que enfrentavam as complexidades da programação pela primeira vez. Como monitor, fui responsável por auxiliar os estudantes na compreensão dos conceitos fundamentais de lógica de programação, como estruturas condicionais, loops e algoritmos.",

        "A Universidade de Harvard é uma instituição de ensino superior localizada em Cambridge, Massachusetts, EUA. Fundada em 1636, é uma das universidades mais antigas e prestigiadas do mundo. Harvard é conhecida por seus programas acadêmicos de alta qualidade, suas pesquisas inovadoras e seu corpo docente renomado.",
        
        "O MIT (Massachusetts Institute of Technology) é uma universidade localizada em Cambridge, Massachusetts, EUA, fundada em 1861. É amplamente reconhecida por sua excelência em ciência, engenharia e tecnologia. O MIT é famoso por sua abordagem prática e orientada para a pesquisa, além de suas contribuições significativas para a inovação tecnológica e científica.",
        
        "Neuralink é uma empresa de neurotecnologia fundada por Elon Musk com o objetivo de desenvolver interfaces cérebro-computador de alta banda. Colaboradores do projeto Neuralink incluem neurocientistas, engenheiros e especialistas em tecnologia de ponta. O projeto busca criar dispositivos que permitam a comunicação direta entre o cérebro e computadores, potencialmente revolucionando áreas como medicina, inteligência artificial e reabilitação."
      ];

      function trocaExp(x){
        document.querySelector("#titulo-expe").innerHTML = titulos_expe[x]
        document.querySelector("#sobre-expe").innerHTML = descs_expe[x]
      }
        document.querySelector("#code").onclick = function() { trocaExp(0); };
        document.querySelector("#mon").onclick = function() { trocaExp(1); };
        document.querySelector("#har").onclick = function() { trocaExp(2); };
        document.querySelector("#mit").onclick = function() { trocaExp(3); };
        document.querySelector("#neu").onclick = function() { trocaExp(4); };
        trocaExp(0)

        
          const canvas = document.getElementById('canvas-expe');
          const ctx = canvas.getContext('2d');
          
          function refazCanvas() {
              canvas.width = canvas.offsetWidth;
              canvas.height = canvas.offsetHeight;
          }

          refazCanvas();
          
          let arraypar = [];
          const particulas = 50; 
          class Particula {
              constructor(x, y, directionX, directionY, size, color) {
                  this.x = x;
                  this.y = y;
                  this.directionX = directionX;
                  this.directionY = directionY;
                  this.size = size;
                  this.color = color;
              }
      
              desenha() {
                  ctx.beginPath();
                  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                  ctx.fillStyle = this.color;
                  ctx.fill();
              }
      
              atualiza() {
                  if (this.x + this.size > canvas.width || this.x - this.size < 0) {
                      this.directionX = -this.directionX;
                  }
                  if (this.y + this.size > canvas.height || this.y - this.size < 0) {
                      this.directionY = -this.directionY;
                  }
                  this.x += this.directionX;
                  this.y += this.directionY;
      
                  this.desenha();
              }
          }
      

          function init() {
            arraypar = [];
              for (let i = 0; i < particulas; i++) {
                  let size = Math.random() * 60 + 2; 
                  let x = Math.random() * (canvas.width - size * 2) + size;
                  let y = Math.random() * (canvas.height - size * 2) + size;
                  let directionX = (Math.random() * 0.4) - 0.2;
                  let directionY = (Math.random() * 0.4) - 0.2; 
                  let color = '#8400FF';
      
                  arraypar.push(new Particula(x, y, directionX, directionY, size, color));
              }
          }
      
          function animar() {
              requestAnimationFrame(animar);
              ctx.clearRect(0, 0, canvas.width, canvas.height);
      
              for (let i = 0; i < arraypar.length; i++) {
                arraypar[i].atualiza();
              }
          }
      
   
          window.addEventListener('resize', function () {
              refazCanvas();
              init(); 
          });
      
          init();
          animar();
      
            
}