<?php
$hidden = "hidden";
if(isset($_GET['test']))
$hidden = " ";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seja bem vindo</title>
    <link href="../css/style.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap" rel="stylesheet">
    <script src="../scripts/script.js">
    </script>
</head>
<body>
    <header>
        <div>
        <img src="../img/titulo.png">
        </div>
        <div id="div-botoes">
            <a href="sobre-mim.html" class="jersey-10-regular">Sobre Mim</a>
            <a href="projetos.html" class="jersey-10-regular">Meus Projetos</a>
            <a href="experiencia.html" class="jersey-10-regular">Experiência</a>
            <a href="fale-comigo.php" class="jersey-10-regular">Fale Comigo</a>
        </div>
        <div id="div-links">
            <a href="https://www.instagram.com/vine.michel/"><img src="../img/instagram.png" width="25" height="25"></a>
            <a href="https://br.linkedin.com/in/vinicius-michel-rosa-a175b2287"><img src="../img/logotipo-do-linkedin.png" width="25" height="25"></a>
            <a href="https://github.com/OvineMichel"><img src="../img/github.png" width="25" height="25"></a>
            <a href="https://www.facebook.com/profile.php?id=100058163606691"><img src="../img/facebook.png"  width="25" height="25"></a>
            <a href="http://lattes.cnpq.br/1526705346300998"><img src="../img/lattes.png"  width="25" height="25"></a>
        </div>
    </header>
    <div id="sub-body">
        <canvas id="background-canva"></canvas>
        <div style="height: 200px; z-index: 2;">
            <h1 class="jersey-10-regular" id="titulo-sobre" style="margin: 0;">Me<h1 id="sub-titulo" class="jersey-10-regular" style="margin: 0; margin-left: 8px;"> Contate</h1></h1>
        </div>
        <form method="GET" style="z-index: 2;">
            <p class="jersey-10-regular">Insira aqui suas informações para contato</p>
            <input type="text" class="inputs" placeholder="Email">
            <input type="text" class="inputs" placeholder="Assunto">
            <input name="test" hidden>
            <textarea class="jersey-10-regular"></textarea>
            <button class="jersey-10-regular">Contatar</button>
        </form>
        <p  class="jersey-10-regular" style="z-index: 2;" id="mensagem"<?=@$hidden?>>Sua mensagem foi enviada com sucesso! Aguarde o retorno.</p>
    </div>
    <footer>
        <h4 class="jersey-10-regular">Vinicius Michel Rosa - Todos os direitos reservados @</h6>  
     <img src="../img/titulo.png" width="60" height="41">
    </footer>
</body>
</html>
