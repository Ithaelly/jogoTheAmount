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

var xMinBotao = 870;
var larguraBotao = 300;
var xMaxBotao = xMinBotao + larguraBotao;
var yMinBotao1 = 270;
var alturaBotao = 60;
var yMaxBotao1 = yMinBotao1 + alturaBotao;

var yMinBotao2 = 420;
var yMaxBotao2 = yMinBotao2 + alturaBotao;

var yMinBotao3 = 570;
var yMaxBotao3 = yMinBotao3 + alturaBotao;

var yMinBotao0 = 650;
var yMaxBotao0 = yMinBotao0 + alturaBotao;

var tela = 0;

function setup() {//configurar
  createCanvas(1280, 720);
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
  menuBotao("Jogo", yMinBotao1, yMaxBotao1, 1);//chama a função do botão
  menuBotao("Informações", yMinBotao2, yMaxBotao2, 2);
  menuBotao("Colaboradores", yMinBotao3, yMaxBotao3, 3);
}

function menuBotao(texto, yMin, yMax, opcao){
  //CAIXA DE SELEÇÃO DOS BOTÕES
  if((mouseX > xMinBotao && mouseX < xMaxBotao) && (mouseY > yMin && mouseY < yMax)){//quando a pessoa passar o mouse por cima do espaço do botão
     fill(250);//pro espaço do botao ficar branco quand o mouse passa por cima
     if(mouseIsPressed){//se precionar o botão
        tela = opcao;//chama a tela de acordo com a opção que foi passada, no caso, o número da tela
     }
  }
  else{
    noFill();//tira o preenchimento branco qnd o mouse não ta em cima do botão
  }
  rect (xMinBotao, yMin, larguraBotao, alturaBotao, 15);//metodo que cria o retangulo que vai servir como as bordas do botoes
  textSize(35);
  fill(0);//cor de preenchimento das opcoes, ou seja, deixa preto os nomes "jogo" "instrucoes" "colaboradores"
  textFont(fontSubTitulo);//fonte do subtitulo
  text(texto, xMinBotao + 35, yMin + 40);//mostra o texto do botão
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
  menuBotao("Voltar", yMinBotao0, yMaxBotao0, 0);//chama a função do botão
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
  text("Estudante do curso de Ciências e Tecnologia na Universidade Federal do Rio grande do Norte.", 350, 270, 770);
  
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
  text("Pedagoga.", 350, 600, 770);
  
  //VOLTÃO DE VOLTAR
  menuBotao("Voltar", yMinBotao0, yMaxBotao0, 0);
}

function telaJogo(){
  image(fundoTelaJogo,0, 0);
  image(imagemRascunhoJogo, 0, 147);
  
  //TÍTULO
  textSize(40);
  textFont(fontTitulo);
  text("Jogo", 500, 100);
  
  //VOLTÃO DE VOLTAR
  menuBotao("Voltar", yMinBotao0, yMaxBotao0, 0);
}