// Comédia , Ação , Drama , Aventura , Suspense 

// Gente Grande 1 , 12 , Comédia
// Sonic 3 , 10 , Ação, Aventura , Comédia
// Vingadores Ultimato , 12 , Ação, Aventura
// Karate Kid , 10 , Ação, Drama
// O impossível , 12 , Drama, Suspense
// Shrek , Livre , Aventura , Comédia
// O menino que descobriu o Vento , 14 , Drama
// O Maskara , Livre , Ação , Comédia
// Megamente , Livre , Ação

let campoIdade;
let campoComédia;
let campoAção;

function setup() {
  createCanvas(800, 400);
  fill("#151E3F");
  textStyle(BOLD);
  createElement("h1", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoComédia = createCheckbox("Gosta de Comédia?");
  campoAção = createCheckbox("Gosta de Ação?");
}

function draw() {
  background("#F2F3D9");
  let idade = campoIdade.value();
  let gostaDeComédia = campoComédia.checked();
  let gostaDeAção = campoAção.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeComédia, gostaDeAção);

  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeComédia, gostaDeAção) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "O menino que descobriu o vento";
    } else {
      if (idade >= 12) {
        if(gostaDeComédia || gostaDeAção) {
          return "Homem aranha: no aranhaverso";          
        } else{
         return "O impossível";
        }
      } else {
        if (gostaDeComédia) {
          return "Sonic 3 ";
        } else {
          return "Karate Kid";
        }
      }
    }
  } else {
    if (gostaDeComédia) {
      return "Shrek";
    } else {
      return "Megamente";
    }
  }
}
