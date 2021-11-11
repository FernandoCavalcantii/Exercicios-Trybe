function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  
  // exercicio 1

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  const ulDays = document.querySelector("#days");
  

  for(let i=0;i < dezDaysList.length; i++) {
    let days = document.createElement("li");
    days.innerText = dezDaysList[i];

    if (dezDaysList[i] === 24 || dezDaysList[i] === 31) {
      days.className = "day holiday";
    } else if (dezDaysList[i] === 25) {
      days.className = "day holiday friday"
    } else if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 ) {
      days.className = "day friday";
    } else {
      days.className = "day";
    }
    ulDays.appendChild(days);
  };

// exercicio 2

let divBtnContainer = document.querySelector(".buttons-container");

let btnFunc = function(str) {
  let button = document.createElement("button");
  button.innerHTML = str;
  button.id = "btn-holiday";
  divBtnContainer.appendChild(button);
};

btnFunc("Feriados");

// exercicio 3

let holidayBtn = document.querySelector("#btn-holiday");
let holidayDays = document.querySelectorAll(".holiday");


holidayBtn.addEventListener("click", function() {
  for (let i=0; i < holidayDays.length; i++) {
    if (holidayDays[i].style.backgroundColor === "purple") {
      holidayDays[i].style.backgroundColor = "rgb(238,238,238)";
    } else {
       holidayDays[i].style.backgroundColor = "purple";
    }
  }
});

// exercicio 4

const fridayContainer = document.querySelector(".buttons-container");

let sextaBtn = (str) => {
  let button = document.createElement("button");
  button.innerHTML = str;
  button.id = "btn-friday";
  fridayContainer.appendChild(button);
}

sextaBtn("Sexta-feira");

// exercicio 5

let fridayBtn = document.querySelector("#btn-friday");
let friDays = document.querySelectorAll(".friday");

let sextas = [4, 11, 18, 25];

fridayBtn.addEventListener("click", function() {
  // fazer for / hospedar nº dos dias em variaveis
  for (let i=0; i < friDays.length; i++) {
    if (friDays[i].innerText == 4 || friDays[i].innerText == 11 || friDays[i].innerText == 18 || friDays[i].innerText == 25) {
      friDays[i].innerText = "Sextou!";
    } else {
      friDays[i].innerText = sextas[i];
    }
  }
});

// exercicio 6

let days = document.querySelectorAll("#day");

days.addEventListener("mousemove", function() {
  days.style.fontSize = 140px;
})