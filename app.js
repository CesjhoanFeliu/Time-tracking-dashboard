import data from "./data.json" assert { type: "json" };

let dailyBtn = document.querySelector("#daily");
let weeklyBtn = document.querySelector("#weekly");
let monthlyBtn = document.querySelector("#monthly");
const secondSection = document.querySelector(".second-seccion");

const bgColors = [
  "hsl(15, 100%, 70%)",
  "hsl(195, 74%, 62%)",
  "hsl(348, 100%, 68%)",
  "hsl(145, 58%, 55%)",
  "hsl(264, 64%, 52%)",
  " hsl(43, 84%, 65%)",
];
//Creamos un nuevo Array con la información de cada parte del tiempo
let dailyArray = data.map((item) => item.timeframes.daily);
let weeklyArray = data.map((item) => item.timeframes.weekly);
let monthlyArray = data.map((item) => item.timeframes.monthly);
elementos(dailyArray); //Función que se llama para evitar que esté sin nada al cargar la pagina
//Funciones que llaman a cada boton en base a su tiempo (Daily,weekly, monthly)
dailyBtn.addEventListener("click", () => {
  elementos(dailyArray);
});

weeklyBtn.addEventListener("click", () => {
  elementos(weeklyArray);
});

monthlyBtn.addEventListener("click", () => {
  elementos(monthlyArray);
});

//Función que se llama cada vez que un boton es precionado
//Esta función contiene el HTML a mostrar con variantes depentiendo del tiempo (Daily,weekly, monthly)
//Obtenemos como parametros el nuevo Array y lo iteramos con un forEach
function elementos(info) {
  //Empezamos quitando el HTML con un string vacio para eviar duplicaciones al llamar a la función
  secondSection.innerHTML = "";

  //tenemos otro parametro en el ForEach que es index, el cual va a recorrer
  info.forEach((element, index) => {
    //Guardamos la dirección del nombre del json
    let title = data[index].title;
    //La transformamos a minusculas para las imagenes
    let titleMinus = title.toLocaleLowerCase();
    //Condicional con self care ya que es ligeramente diferente

    if (titleMinus == "self care") {
      titleMinus = "self-care";
    }
    secondSection.innerHTML += `<div class="card">
        <div class="card-header">
          <div class="card_background" style="background-color:${bgColors[index]}">
            <img
              class="img-backgrond"
              src="./images/icon-${titleMinus}.svg"
              alt="work"
            />
          </div>
        </div>
        <div class="card__details">
          <div class="card__activity">
            <p>${title}</p>
            <img
              src="./images/icon-ellipsis.svg"
              alt="Imagen
          "
            />
          </div>
          <div class="card__time">
            <p class="card__time--hour">${element.current}hrs</p>
            <p class="card__time--previus">Previous - ${element.previous}</p>
          </div>
        </div>
      </div>`;
  });
}
