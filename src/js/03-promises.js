import Notiflix from 'notiflix';

const bodyEl = document.querySelector('body');
const formEl = document.querySelector('form');
const createBtn = document.querySelector('button');

bodyEl.style.backgroundColor = "#C0C0C0";

createBtn.addEventListener("click", onCreatePromise);


function onCreatePromise(event) {
  event.preventDefault();
  // const { elements: { delay, step, amount} } = event.currentTarget;
  const delay = Number(formEl.elements.delay.value);
  const step = Number(formEl.elements.step.value);
  const amount = Number(formEl.elements.amount.value);
  
  for (let i = 0; i < amount; i++) {
  
    createPromise(i + 1, delay + step * i)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
      
  }
  
}






function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      };
    }, delay);
  });
    
}


// console.log(createPromise(2, 1500));