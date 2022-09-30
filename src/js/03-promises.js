'use strict';

const form = document.querySelector('form');
const promiseDelay = document.querySelector('[name="delay"]');
const promiseStep = document.querySelector('[name="step"]');
const promiseAmount = document.querySelector('[name="amount"]');
const submitBtn = document.querySelector('[type="submit"]');

form.style.display = 'flex';
let totalDelay = 0;

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (position === 1) {
    totalDelay = delay;
  } else {
    totalDelay += Number(promiseStep.value);
  }
  delay = totalDelay;
  console.log(totalDelay);
  console.log(position);
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve();
      } else {
        reject();
      }
    }, totalDelay);
  })
    .then(() => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(() => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });

  console.log(promise);
}
form.addEventListener('submit', () => {
  for (let i = 1; i <= Number(promiseAmount.value); i += 1) {
    createPromise(i, Number(promiseDelay.value));
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();
});
