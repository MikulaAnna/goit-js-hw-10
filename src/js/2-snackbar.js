// INCLUDING LIBRARY IZITOAST

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');

form.addEventListener('submit', generatePromises);

function generatePromises(event) {
  event.preventDefault();

  const delay = parseInt(event.currentTarget.elements.delay.value);
  const state = event.currentTarget.elements.state.value;

  setTimeout(() => {
    let promise;

    promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else if (state === 'rejected') {
          reject(delay);
        }
      }, delay);
    });

    promise
      .then(delay => {
        iziToast.success({
          timeout: false,
          message: `Fulfilled promise in ${delay} ms`,
          messageColor: 'rgb(255, 255, 255)',
          messageSize: '16px',
          backgroundColor: 'rgb(89, 161, 13)',
          maxWidth: '384px',
          position: 'topRight',
          progressBarColor: 'rgb(50, 97, 1)',
        });
      })

      .catch(delay => {
        iziToast.error({
          message: `Rejected promise in ${delay}ms`,
          position: 'topRight',
        });
      });
  }, delay);

  event.currentTarget.reset();
}
