// Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body> на випадкове значення, використовуючи інлайн стиль. Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

// УВАГА
// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).

// Для генерування випадкового кольору використовуй функцію getRandomHexColor






const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');



startBtn.addEventListener("click", onStart);
stopBtn.addEventListener("click", onStop);


function onStart() {
    idInterval = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000);
    
    startBtn.setAttribute("disabled", true);
}

function onStop() {
    startBtn.disabled = false;
    clearInterval(idInterval);  
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}