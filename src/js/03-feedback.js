import throttle from 'lodash.throttle';

const KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
  submit: document.querySelector('.feedback-form button'),
};
const objForm = {};
formInfo();

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);


function onFormInput(event) {
  objForm[event.target.name] = event.target.value;
  const message = JSON.stringify(objForm);
  localStorage.setItem(KEY, message);
}

function onFormSubmit(event) {
  const infoConsol = localStorage.getItem(KEY);
  console.log(JSON.parse(infoConsol));
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(KEY);
}

function formInfo() {
  const saveMessege = localStorage.getItem(KEY);
  if (saveMessege) {
    const messageInfo = JSON.parse(saveMessege);
    objForm.email = messageInfo.email;
    objForm.message = messageInfo.message;

    console.log(messageInfo);
    refs.email.value = messageInfo.email || '';
    refs.message.value = messageInfo.message || '';
  }
}