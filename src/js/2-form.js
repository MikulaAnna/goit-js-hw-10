//const form = document.querySelector('.feedback-form');

//const storedData = JSON.parse(localStorage.getItem('feedback-form-state'));

//if (storedData) {
//  form.elements.email.value = storedData.email;
//  form.elements.message.value = storedData.message;
//}

//form.addEventListener('input', e => {
//  const formData = {
//    email: form.elements.email.value.trim(),
//    message: form.elements.message.value.trim(),
//  };
//  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
//});

//form.addEventListener('submit', e => {
//  e.preventDefault();

//  const email = form.elements.email.value.trim();
//  const message = form.elements.message.value.trim();

//  if (email === '' || message === '') {
//    alert('Всі поля мають бути заповненими');
//    return;
//  }

//  const formData = {
//    email,
//    message,
//  };
//  console.log(formData);

//  localStorage.removeItem('feedback-form-state');
//  form.reset();
//});

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form-input');

form.addEventListener('input', event => {
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  const data = JSON.stringify({ email, message });
  localStorage.setItem(STORAGE_KEY, data);
});

function formSubmitHandler(event) {
  event.preventDefault();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email === '' || message === '') {
    alert('Всі поля мають бути заповненими');
    return;
  }

  const data = {
    email,
    message,
  };
  console.log(data);

  localStorage.removeItem('STORAGE_KEY');
  form.reset();
}

form.addEventListener('submit', formSubmitHandler);

const jsn = localStorage.getItem(STORAGE_KEY) ?? '';

try {
  const data = JSON.parse(jsn);
  form.elements.email.value = data.email;
  form.elements.message.value = data.message;
} catch {
  console.log('No saved data');
}
