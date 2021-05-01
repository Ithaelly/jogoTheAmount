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
var aux = 0;
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
  
  //SORTEIO DA PRIMEIRA FASE
  n= parseInt(random(0,2));
  aux=n;
  indice = parseInt(random(0,5));
  j = parseInt(random(0,5));
  k = parseInt(random(0,5));
  l = parseInt(random(0,5));
  m = parseInt(random(0,5));
  
  //SORTEIO DA SEGUNDA FASE
  o= parseInt(random(3,5));
  aux2=o;
  indice2 = parseInt(random(2,7));
  j2 = parseInt(random(2,7));
  k2 = parseInt(random(2,7));
  l2 = parseInt(random(2,7));
  m2 = parseInt(random(2,7));

  //SORTEIO DA TERCEIRA FASE
  p= parseInt(random(6,8));
  aux3=o;
  indice3 = parseInt(random(3,8));
  j3 = parseInt(random(3,8));
  k3 = parseInt(random(3,8));
  l3 = parseInt(random(3,8));
  m3 = parseInt(random(3,8));
  
  //SORTEIO DA QUARTA FASE
  q= parseInt(random(9,10));
  aux4=o;
  indice4 = parseInt(random(5,10));
  j4 = parseInt(random(5,10));
  k4 = parseInt(random(5,10));
  l4 = parseInt(random(5,10));
  m4 = parseInt(random(5,10));
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
  if(errou == 6){
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
        escolha2=opcao;
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
  text("Veja o número e clique na imagem que represente ele. Se você clicar cinco vezes em imagens erradas, você perde.", 350, 530, 700);
  
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
  x=0; y=5; w=0; z=2;//variaveis do sorteio 1
  x2=2; y2=7; w2=3; z2=5;//variaveis do sorteio 2
  x3=3; y3=8; w3=6; z3=8;//variaveis do sorteio 3
  x4=5; y4=10; w4=9; z4=10;//variaveis do sorteio 4
  if(pont==0){
     fase1();
  }
  else if(pont==1){
      fase2();    
  }
  else if(pont==2){
      fase3();   
  }
  else if(pont==3){  
     fase4(); 
  }
  else if(pont==4){
    telaVenceu();  
  }
}

function mouseClicked(){
   if(tela==1 && pont==0){
    //TESTANDO A IMAGEM CLICADA SE É IGUAL AO VALOR DE N
     if(escolha===n){
       pont++;  
     }
     else if(escolha!==n){
       errou++;      
    }
  }
  if(tela==1 && pont==1){
      while(aux2==o){
         o = parseInt(random(w2,z2)); 
      }
    //TESTANDO A IMAGEM CLICADA SE É IGUAL AO VALOR DE N
     if(escolha===o){
       pont++;    
     }
     else if(escolha!==o){
       errou++;     
    }
  }
  if(tela==1 && pont==2){
      while(aux3==p){
         p = parseInt(random(w3,z3)); 
      }
    //TESTANDO A IMAGEM CLICADA SE É IGUAL AO VALOR DE N
     if(escolha===p){
       pont++;     
     }
     else if(escolha!==p){
       errou++;      
    }
  }
  if(tela==1 && pont==3){
      while(aux4==q){
         q = parseInt(random(w4,z4)); 
      }
    //TESTANDO A IMAGEM CLICADA SE É IGUAL AO VALOR DE N
     if(escolha===q){
       pont++; 
     }
     else if(escolha!==q){
       errou++;     
    }
  }
  if(escolha2===0){//clicou no botão de voltar
     aux = 0; pont = 0; errou = 0; escolha = 0;//zerando as variáveis
     x=0; y=5; w=0; z=2;//variaveis do sorteio 1
     tela = 0;//voltando pro menu principal   
  }
}

function fase1(){
  image(fundoTelaJogo,0, 0);
  
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
     n = parseInt(random(w,z)); 
     aux=n;
  }
  
  //CONDIÇÃO PARA NÃO REPETIR IMAGEM
  while(imagens[j] == imagens[indice]){
     j = parseInt(random(x,y));
  }
  while(imagens[k]==imagens[indice] || imagens[k]==imagens[j]){
     k = parseInt(random(x,y));   
  }
  while(imagens[l]==imagens[indice] || imagens[l]==imagens[j] || imagens[l]==imagens[k]){
     l = parseInt(random(x,y));   
  }
  while(imagens[m]==imagens[indice] || imagens[m]==imagens[j] || imagens[m]==imagens[k] || imagens[m]==imagens[l]){
     m = parseInt(random(x,y));   
  }
  
  //IMAGENS SORTEADAS
  image(imagens[indice], 95, 185, 180, 220);//cima esquerda
  image(imagens[j], 530, 185, 180, 220);//cima meio
  image(imagens[k], 950, 185, 180, 220);//cima direita
  image(imagens[l], 319, 430, 180, 220);//baixo esquerda
  image(imagens[m], 750, 430, 180, 220);//baixo direita

  //VALOR DA PONTUAÇÃO
  noFill();
  rect (970, 70, 200, 45, 15);//metodo que cria o retangulo
  fill(0);
  textSize(35);
  textFont(fontSubTitulo); 
  text("Pontos:  "+pont, 985, 100); 

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
  
  //TÍTULO
  textSize(40);
  textFont(fontTitulo);
  text("Jogo", 500, 100);
  
  //SUBTÍTULO
  textSize(35);
  textFont(fontSubTitulo); 
  text("Qual figura possui "+o+" flores juntas?", 350, 170);
  
  //CONDIÇÃO PARA TER CERTEZA QUE TEM A IMAGEM DA RESPOSTA DO O
  while(o==imagens[indice2] || o==imagens[j2] || o==imagens[k2] || o==imagens[l2]){
     o = parseInt(random(w2,z2)); 
  }
  
  //CONDIÇÃO PARA NÃO REPETIR IMAGEM
  while(imagens[j2] == imagens[indice2]){
     j2 = parseInt(random(x2,y2));
  }
  while(imagens[k2]==imagens[indice2] || imagens[k2]==imagens[j2]){
     k2 = parseInt(random(x2,y2));   
  }
  while(imagens[l2]==imagens[indice2] || imagens[l2]==imagens[j2] || imagens[l2]==imagens[k2]){
     l2 = parseInt(random(x2,y2));   
  }
  while(imagens[m2]==imagens[indice2] || imagens[m2]==imagens[j2] || imagens[m2]==imagens[k2] || imagens[m2]==imagens[l2]){
     m2 = parseInt(random(x2,y2));   
  }
  
  //IMAGENS SORTEADAS
  image(imagens[indice2], 95, 185, 180, 220);//cima esquerda
  image(imagens[j2], 530, 185, 180, 220);//cima meio
  image(imagens[k2], 950, 185, 180, 220);//cima direita
  image(imagens[l2], 319, 430, 180, 220);//baixo esquerda
  image(imagens[m2], 750, 430, 180, 220);//baixo direita
 
  //VALOR DA PONTUAÇÃO
   noFill();
   rect (970, 70, 200, 45, 15);//metodo que cria o retangulo
   fill(0);
   textSize(35);
   textFont(fontSubTitulo); 
   text("Pontos:  "+pont, 985, 100);
  
  //CRIANDO UMA CAIXA/BOTAO NO LUGAR DAS IMAGENS SORTEADAS
  menuBotao2("imagem indice", xMinBotao4, xMaxBotao4, yMinBotao4, yMaxBotao4, indice2);//chama a função do botão
  menuBotao2("imagem j",xMinBotao5, xMaxBotao5, yMinBotao5, yMaxBotao5, j2); 
  menuBotao2("imagem k",xMinBotao6, xMaxBotao6, yMinBotao6, yMaxBotao6, k2);
  menuBotao2("imagem l", xMinBotao7, xMaxBotao7, yMinBotao7, yMaxBotao7, l2);
  menuBotao2("imagem m",xMinBotao8, xMaxBotao8, yMinBotao8, yMaxBotao8, m2);
  
  //VOLTÃO DE VOLTAR
  menuBotao("Voltar", xMinBotao0, xMaxBotao0, yMinBotao0, yMaxBotao0, 0);//chama a função do botão
}

function fase3(){
  image(fundoTelaJogo,0, 0);
  
  //TÍTULO
  textSize(40);
  textFont(fontTitulo);
  text("Jogo", 500, 100);
  
  //SUBTÍTULO
  textSize(35);
  textFont(fontSubTitulo); 
  text("Qual figura possui "+p+" flores juntas?", 350, 170);
  
  //CONDIÇÃO PARA TER CERTEZA QUE TEM A IMAGEM DA RESPOSTA DO O
  while(p==imagens[indice3] || p==imagens[j3] || p==imagens[k3] || p==imagens[l3]){
     p = parseInt(random(w3,z3)); 
  }
  
  //CONDIÇÃO PARA NÃO REPETIR IMAGEM
  while(imagens[j3] == imagens[indice3]){
     j3 = parseInt(random(x3,y3));
  }
  while(imagens[k3]==imagens[indice3] || imagens[k3]==imagens[j3]){
     k3 = parseInt(random(x3,y3));   
  }
  while(imagens[l3]==imagens[indice3] || imagens[l3]==imagens[j3] || imagens[l3]==imagens[k3]){
     l3 = parseInt(random(x3,y3));   
  }
  while(imagens[m3]==imagens[indice3] || imagens[m3]==imagens[j3] || imagens[m3]==imagens[k3] || imagens[m3]==imagens[l3]){
     m3 = parseInt(random(x3,y3));   
  }
  
  //IMAGENS SORTEADAS
  image(imagens[indice3], 95, 185, 180, 220);//cima esquerda
  image(imagens[j3], 530, 185, 180, 220);//cima meio
  image(imagens[k3], 950, 185, 180, 220);//cima direita
  image(imagens[l3], 319, 430, 180, 220);//baixo esquerda
  image(imagens[m3], 750, 430, 180, 220);//baixo direita
  
  //VALOR DA PONTUAÇÃO
   noFill();
   rect (970, 70, 200, 45, 15);//metodo que cria o retangulo
   fill(0);
   textSize(35);
   textFont(fontSubTitulo); 
   text("Pontos:  "+pont, 985, 100);
  
  //CRIANDO UMA CAIXA/BOTAO NO LUGAR DAS IMAGENS SORTEADAS
  menuBotao2("imagem indice", xMinBotao4, xMaxBotao4, yMinBotao4, yMaxBotao4, indice3);//chama a função do botão
  menuBotao2("imagem j",xMinBotao5, xMaxBotao5, yMinBotao5, yMaxBotao5, j3); 
  menuBotao2("imagem k",xMinBotao6, xMaxBotao6, yMinBotao6, yMaxBotao6, k3);
  menuBotao2("imagem l", xMinBotao7, xMaxBotao7, yMinBotao7, yMaxBotao7, l3);
  menuBotao2("imagem m",xMinBotao8, xMaxBotao8, yMinBotao8, yMaxBotao8, m3);
  
  //VOLTÃO DE VOLTAR
  menuBotao("Voltar", xMinBotao0, xMaxBotao0, yMinBotao0, yMaxBotao0, 0);//chama a função do botão
}

function fase4(){
  image(fundoTelaJogo,0, 0);
  
  //TÍTULO
  textSize(40);
  textFont(fontTitulo);
  text("Jogo", 500, 100);
  
  //SUBTÍTULO
  textSize(35);
  textFont(fontSubTitulo); 
  text("Qual figura possui "+q+" flores juntas?", 350, 170);
  
  //CONDIÇÃO PARA TER CERTEZA QUE TEM A IMAGEM DA RESPOSTA DO O
  while(q==imagens[indice4] || q==imagens[j4] || q==imagens[k4] || q==imagens[l4]){
     q = parseInt(random(w4,z4)); 
  }
  
  //CONDIÇÃO PARA NÃO REPETIR IMAGEM
  while(imagens[j4] == imagens[indice4]){
     j4 = parseInt(random(x4,y4));
  }
  while(imagens[k4]==imagens[indice4] || imagens[k4]==imagens[j4]){
     k4 = parseInt(random(x4,y4));   
  }
  while(imagens[l4]==imagens[indice4] || imagens[l4]==imagens[j4] || imagens[l4]==imagens[k4]){
     l4 = parseInt(random(x4,y4));   
  }
  while(imagens[m4]==imagens[indice4] || imagens[m4]==imagens[j4] || imagens[m4]==imagens[k4] || imagens[m4]==imagens[l4]){
     m4 = parseInt(random(x4,y4));   
  }
  
  //IMAGENS SORTEADAS
  image(imagens[indice4], 95, 185, 180, 220);//cima esquerda
  image(imagens[j4], 530, 185, 180, 220);//cima meio
  image(imagens[k4], 950, 185, 180, 220);//cima direita
  image(imagens[l4], 319, 430, 180, 220);//baixo esquerda
  image(imagens[m4], 750, 430, 180, 220);//baixo direita
  
  //VALOR DA PONTUAÇÃO
   noFill();
   rect (970, 70, 200, 45, 15);//metodo que cria o retangulo
   fill(0);
   textSize(35);
   textFont(fontSubTitulo); 
   text("Pontos:  "+pont, 985, 100);
  
  //CRIANDO UMA CAIXA/BOTAO NO LUGAR DAS IMAGENS SORTEADAS
  menuBotao2("imagem indice", xMinBotao4, xMaxBotao4, yMinBotao4, yMaxBotao4, indice4);//chama a função do botão
  menuBotao2("imagem j",xMinBotao5, xMaxBotao5, yMinBotao5, yMaxBotao5, j4); 
  menuBotao2("imagem k",xMinBotao6, xMaxBotao6, yMinBotao6, yMaxBotao6, k4);
  menuBotao2("imagem l", xMinBotao7, xMaxBotao7, yMinBotao7, yMaxBotao7, l4);
  menuBotao2("imagem m",xMinBotao8, xMaxBotao8, yMinBotao8, yMaxBotao8, m4);
  
  //VOLTÃO DE VOLTAR
  menuBotao("Voltar", xMinBotao0, xMaxBotao0, yMinBotao0, yMaxBotao0, 0);//chama a função do botão
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
  text("Você clicou 5 vezes em imagens erradas.", 390, 379);

  //VOLTÃO DE VOLTAR
  menuBotao("Voltar", xMinBotao0, xMaxBotao0, yMinBotao0, yMaxBotao0, 0);//chama a função do botão
}

function telaVenceu(){
  image(fundoTelaInformacoes,0, 0);
  
  //TÍTULO
  textSize(72);
  textFont(fontTitulo);
  text("Acabouu!", 400, 330);
  
  //SUBTÍTULO
  textSize(44);
  textFont(fontSubTitulo); 
  text("Parabénsss! Você venceu o jogo!", 350, 400);
  
  //VOLTÃO DE VOLTAR
  menuBotao("Voltar", xMinBotao0, xMaxBotao0, yMinBotao0, yMaxBotao0, 0);//chama a função do botão
}
