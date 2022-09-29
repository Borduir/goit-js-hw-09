'use strict';

const form = document.querySelector('form');
const promiseDelay = document.querySelector('[name="delay"]');
const promiseStep = document.querySelector('[name="step"]');
const promiseAmount = document.querySelector('[name="amount"]');
const submitBtn = document.querySelector('[type="submit"]');

form.style.display = 'flex';

let totalDelay = promiseDelay;
let position = 1;
// const timer = setTimeout(createPromise, function () {
//   if ((position = 0)) {
//     totalDelay = promiseDelay.value;
//   } else {
//     totalDelay = promiseDelay.value + promiseStep.value;
//   }
//   return totalDelay;
// });

function createPromise(position, delay) {
  console.log(promiseAmount.value);
  delay = totalDelay;

  if (position <= promiseAmount.value) {
    const shouldResolve = Math.random() > 0.3;
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve();
        } else {
          reject();
        }
      }, delay);
    });
    console.log(promise);
    promise
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      })
      .finally(() => {
        position += 1;
        if (position !== 1) {
          totalDelay += promiseStep.value;
        }
      });
  } else {
    return;
  }
}

form.addEventListener('submit', createPromise);
form.addEventListener('submit', e => {
  e.preventDefault();
});
