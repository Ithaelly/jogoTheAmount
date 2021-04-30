var fundoTelaDesenvolvedores;
var fundoTelaInformacoes;
var fundoTelaMenu;
var fundoTelaJogo;
var imagemRascunhoJogo;

var imagemProgramador;
var imagemEducador;

var fontTitulo;
var fontSubTitulo;
var fontNormal;

var tela = 0;
var pont = 0;
var errou = 0;
var escolha = 0;
var imagens = [];

//VARIAVEIS DO MENU BOTAO
var larguraBotao = 300;
var alturaBotao = 60;

var xMinBotao1 = 870;
var xMaxBotao1 = xMinBotao1 + larguraBotao;
var yMinBotao1 = 270;
var yMaxBotao1 = yMinBotao1 + alturaBotao;

var xMinBotao2 = 870;
var xMaxBotao2 = xMinBotao2 + larguraBotao;
var yMinBotao2 = 420;
var yMaxBotao2 = yMinBotao2 + alturaBotao;

var xMinBotao3 = 870;
var xMaxBotao3 = xMinBotao3 + larguraBotao;
var yMinBotao3 = 570;
var yMaxBotao3 = yMinBotao3 + alturaBotao;

var xMinBotao0 = 950;
var xMaxBotao0 = xMinBotao0 + larguraBotao;
var yMinBotao0 = 650;
var yMaxBotao0 = yMinBotao0 + alturaBotao;

//VARIAVEIS DO MENU BOTAO2
var larguraBotao2 = 180;
var alturaBotao2 = 220;

var xMinBotao4 = 95;
var xMaxBotao4 = xMinBotao4 + larguraBotao2;
var yMinBotao4 = 185;
var yMaxBotao4 = yMinBotao4 + alturaBotao2;

var xMinBotao5 = 530;
var xMaxBotao5 = xMinBotao5 + larguraBotao2;
var yMinBotao5 = 185;
var yMaxBotao5 = yMinBotao5 + alturaBotao2;

var xMinBotao6 = 950;
var xMaxBotao6 = xMinBotao6 + larguraBotao2;
var yMinBotao6 = 185;
var yMaxBotao6 = yMinBotao6 + alturaBotao2;

var xMinBotao7 = 318;
var xMaxBotao7 = xMinBotao7 + larguraBotao2;
var yMinBotao7 = 430;
var yMaxBotao7 = yMinBotao7 + alturaBotao2;

var xMinBotao8 = 750;
var xMaxBotao8 = xMinBotao8 + larguraBotao2;
var yMinBotao8 = 430;
var yMaxBotao8 = yMinBotao8 + alturaBotao2;

function setup() {//configurar
  createCanvas(1280, 720);
  n= parseInt(random(0,3));
  indice = parseInt(random(0,5));
  j = parseInt(random(0,5));
  k = parseInt(random(0,5));
  l = parseInt(random(0,5));
  m = parseInt(random(0,5));
}

function preload(){//carregar antes de tudo
  //CARREGANDO IMAGENS DE FUNDO
  fundoTelaDesenvolvedores = loadImage('imagens/fundoTelaDesenvolvedores.png');
  fundoTelaInformacoes = loadImage('imagens/fundoTelaInformacoes.png');
  fundoTelaMenu = loadImage('imagens/fundoTelaMenu.png');
  fundoTelaJogo = loadImage('imagens/fundoTelaJogo.png');
  imagemRascunhoJogo = loadImage('imagens/rascunhoJogo.png');
  
  //CARREGANDO FOTOS PARA TELA DE COLABORADORES
  imagemProgramador = loadImage('imagens/imagemProgramador.jpg');
  imagemEducador = loadImage('imagens/imagemEducador.png');
  
  //CARREGANDO FONTES
  fontTitulo = loadFont('fontes/AGENTORANGE.TTF');
  fontSubTitulo = loadFont('fontes/Minigame.otf');
  fontNormal = loadFont('fontes/Eastman-Grotesque-Regular-trial.otf');

  
  //CARREGANDO AS IMAGENS QUE SÃO ALEATÓRIAS
  for (i = 0; i < 10; i++) {
    imagens[i] = loadImage(i + '.png');
  }
}

function draw() {//código em si
  if(tela == 0){
     telaMenu();
  }
  if(tela == 1){
     telaJogo();
  }
  if(tela == 2){
    telaInformacoes(); 
  } 
  if(tela == 3){
    telaColaboradores();
  }
  if(errou == 11){
    telaGameOver();
  }
}

function telaMenu(){
  image(fundoTelaMenu,0, 0);//imagem de fundo
  
  //TÍTULO
  textSize(65);//tamanho do texto do título
  fill(10);//cor do preenchimento do título
  textFont(fontTitulo);//definindo a fonte do título
  text("The Amount", 220, 190);//texto, distancia da lateral pra começar o texto, distancia de cima pra começar o texto
  
  //SUBTÍTULO
  textSize(35);//tamanho da fonte
  textFont(fontSubTitulo);//tipo da fonte
  text("Associando os números as quantidades", 160, 255);
  
  //BOTÕES
  menuBotao("Jogo", xMinBotao1, xMaxBotao1, yMinBotao1, yMaxBotao1, 1);//chama a função do botão
  menuBotao("Informações", xMinBotao2, xMaxBotao2, yMinBotao2, yMaxBotao2, 2);
  menuBotao("Colaboradores", xMinBotao3, xMaxBotao3, yMinBotao3, yMaxBotao3, 3);
}

function menuBotao(texto, xMin, xMax, yMin, yMax, opcao){
  //CAIXA DE SELEÇÃO DOS BOTÕES
  if((mouseX > xMin && mouseX < xMax) && (mouseY > yMin && mouseY < yMax)){//quando a pessoa passar o mouse por cima do espaço do botão
     fill(250);//pro espaço do botao ficar branco quand o mouse passa por cima
     if(mouseIsPressed){//se precionar o botão
        tela = opcao;//chama a tela de acordo com a opção que foi passada, no caso, o número da tela
     }
  }
  else{
    noFill();//tira o preenchimento branco qnd o mouse não ta em cima do botão
  }
  rect (xMin, yMin, larguraBotao, alturaBotao, 15);//metodo que cria o retangulo que vai servir como as bordas do botoes
  textSize(35);
  fill(0);//cor de preenchimento das opcoes, ou seja, deixa preto os nomes "jogo" "instrucoes" "colaboradores"
  textFont(fontSubTitulo);//fonte do subtitulo
  text(texto, xMin + 35, yMin + 40);//mostra o texto do botão
}

function menuBotao2(texto, xMin, xMax, yMin, yMax, opcao){
  //CAIXA DE SELEÇÃO DOS BOTÕES
  if((mouseX > xMin && mouseX < xMax) && (mouseY > yMin && mouseY < yMax)){//quando a pessoa passar o mouse por cima do espaço do botão
     fill(250);//pro espaço do botao ficar branco quand o mouse passa por cima
       escolha=opcao;
       console.log(opcao);
  }
  else{
    noFill();//tira o preenchimento branco qnd o mouse não ta em cima do botão
  }
  rect (xMin, yMin, larguraBotao2, alturaBotao2, 0);//metodo que cria o retangulo que vai servir como as bordas do botoes
}

function telaInformacoes(){
  image(fundoTelaInformacoes,0, 0);
  
  //TÍTULO
  textSize(40);
  textFont(fontTitulo);
  text("Informacoes", 500, 100);//dist de lado, dist de cima
  
  //SUBTÍTULO
  textSize(35);
  textFont(fontSubTitulo);
  text("Para quem o jogo foi feito?", 480, 240);
  
  //TEXTO NORMAL
  textSize(26);
  textFont(fontNormal);
  text("O jogo foi desenvolvido para criança de três a quatro anos com  dificuldades de relacionar os números com suas respectivas quantidades.", 350, 290, 700);
  
  //SUBTÍTULO
  textSize(35);
  textFont(fontSubTitulo);
  text("Como faz para jogar?", 500, 480);//dist de lado, dist de cima
  
  //TEXTO NORMAL
  textSize(26);
  textFont(fontNormal);
  text("Veja o número e clique na imagem que represente ele.", 400, 530, 770);
  
  //VOLTÃO DE VOLTAR
  menuBotao("Voltar", xMinBotao0, xMaxBotao0, yMinBotao0, yMaxBotao0, 0);//chama a função do botão
}

function telaColaboradores(){
  //DEFININDOS TODAS AS IMAGENS DA TELA
  image(fundoTelaDesenvolvedores,0, 0);
  image(imagemProgramador, 95, 125, 200, 200);//dist de lado, dist de cima, largura, altura
  image(imagemEducador, 95, 455, 200, 200);
  
  //TÍTULO
  textSize(40);
  textFont(fontTitulo);
  text("Colaboradores", 500, 90);
  
  //INFORMAÇÕES DO PROGRAMADOR
  //SUBTÍTULO
  textSize(35);
  textFont(fontSubTitulo);
  text("Ithaelly Mykarlla da Silva de Medeiros", 350, 170);
  
  //TEXTO NORMAL
  textSize(24);
  textFont(fontNormal);
  text("Função: Programadora", 350, 220);
  textSize(24);
  textFont(fontNormal);
  text("Estudante do curso de Ciências e Tecnologia na Universidade Federal do Rio grande do Norte - UFRN.", 350, 270, 770);
  
  //INFORMAÇÕES DO ORIENTADOR
  //SUBTÍTULO
  textSize(35);
  textFont(fontSubTitulo);
  text("Daniela do Nascimento Araújo", 350, 500);
  
  //TEXTO NORMAL
  textSize(24);
  textFont(fontNormal);
  text("Função: Educadora", 350, 550);
  textSize(24);
  textFont(fontNormal);
  text("Formada em Pedagogia na Universidade Vale do Acarau - UVA IBRAPES.", 350, 600, 770);
  
  //VOLTÃO DE VOLTAR
  menuBotao("Voltar", xMinBotao0, xMaxBotao0, yMinBotao0, yMaxBotao0, 0);//chama a função do botão
}

function telaJogo(){
  if(pont==0){
     fase1();
  }
  else if(pont==3){
      fase2();    
  }
  else if(pont==5){
      fase3();   
  }
  else if(pont==6){
     telaVenceu();   
  }
}

function mouseClicked(){
  if(tela==1 && pont==0){
    //TESTANDO A IMAGEM CLICADA SE É IGUAL AO VALOR DE N
     if(escolha===n){
       pont++;
       console.log("valor de escolha: "+escolha+" e de n: "+n);
       console.log("Acertou");  
       console.log("pont: "+pont);
       
       //VALOR DA PONTUAÇÃO
       noFill();
       rect (970, 70, 200, 45, 15);//metodo que cria o retangulo
       fill(0);
       textSize(35);
       textFont(fontSubTitulo); 
       text("Pontos:  "+pont, 985, 100);    
     }
     else if(escolha!==n){
       errou++;
       console.log("valor de escolha: "+escolha+" e de n: "+n);
       console.log("Errou");      
    }
  }
}

function fase1(){
  image(fundoTelaJogo,0, 0);
  //image(imagemRascunhoJogo, 0, 147);
  
  //TÍTULO
  textSize(40);
  textFont(fontTitulo);
  text("Jogo", 500, 100);
  
  //SUBTÍTULO
  textSize(35);
  textFont(fontSubTitulo); 
  text("Qual figura possui "+n+" flores juntas?", 350, 170);

  //CONDIÇÃO PARA TER CERTEZA QUE TEM A IMAGEM DA RESPOSTA DO N
  while(n==imagens[indice] || n==imagens[j] || n==imagens[k] || n==imagens[l]){
     n = parseInt(random(0,5)); 
  }
  
  //CONDIÇÃO PARA NÃO REPETIR IMAGEM
  while(imagens[j] == imagens[indice]){
     j = parseInt(random(0,5));
  }
  while(imagens[k]==imagens[indice] || imagens[k]==imagens[j]){
     k = parseInt(random(0,5));   
  }
  while(imagens[l]==imagens[indice] || imagens[l]==imagens[j] || imagens[l]==imagens[k]){
     l = parseInt(random(0,5));   
  }
  while(imagens[m]==imagens[indice] || imagens[m]==imagens[j] || imagens[m]==imagens[k] || imagens[m]==imagens[l]){
     m = parseInt(random(0,5));   
  }
  
  //IMAGENS SORTEADAS
  image(imagens[indice], 95, 185, 180, 220);//cima esquerda
  image(imagens[j], 530, 185, 180, 220);//cima meio
  image(imagens[k], 950, 185, 180, 220);//cima direita
  image(imagens[l], 319, 430, 180, 220);//baixo esquerda
  image(imagens[m], 750, 430, 180, 220);//baixo direita

//CRIANDO UMA CAIXA/BOTAO NO LUGAR DAS IMAGENS SORTEADAS
  menuBotao2("imagem indice", xMinBotao4, xMaxBotao4, yMinBotao4, yMaxBotao4, indice);//chama a função do botão
  menuBotao2("imagem j", xMinBotao5, xMaxBotao5, yMinBotao5, yMaxBotao5, j); 
  menuBotao2("imagem k", xMinBotao6, xMaxBotao6, yMinBotao6, yMaxBotao6, k);
  menuBotao2("imagem l", xMinBotao7, xMaxBotao7, yMinBotao7, yMaxBotao7, l);
  menuBotao2("imagem m", xMinBotao8, xMaxBotao8, yMinBotao8, yMaxBotao8, m);
  
  //TESTANDO A IMAGEM CLICADA SE É IGUAL AO VALOR DE N
  
  //VOLTÃO DE VOLTAR
  menuBotao("Voltar", xMinBotao0, xMaxBotao0, yMinBotao0, yMaxBotao0, 0);//chama a função do botão
}

function fase2(){
  image(fundoTelaJogo,0, 0);
  //image(imagemRascunhoJogo, 0, 147);
  
  //TÍTULO
  textSize(40);
  textFont(fontTitulo);
  text("Jogo", 500, 100);
}

function telaGameOver(){
  image(fundoTelaInformacoes,0, 0);
  
  //TÍTULO
  textSize(72);
  textFont(fontTitulo);
  text("Game Over!", 350, 330);
  
  //SUBTÍTULO
  textSize(35);
  textFont(fontSubTitulo); 
  text("Sinto muito, mas você perdeu!", 510, 420);

  //SUBTÍTULO
  textSize(26);
  textFont(fontSubTitulo); 
  text("Você clicou 10 vezes em imagens erradas.", 390, 379);
}
