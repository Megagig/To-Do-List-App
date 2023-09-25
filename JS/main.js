const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const errorMessage = document.getElementById('error-message');

const addTask = () => {
  const task = inputBox.value;

  if (task === '') {
    errorMessage.innerText = 'Please enter a task';
  } else {
    const li = document.createElement('li');
    li.innerText = task;
    listContainer.appendChild(li);
    const span = document.createElement('span');
    span.innerHTML = '\u00D7';
    li.appendChild(span);
  }
  inputBox.value = '';
  saveToLocalStorage();
};

listContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
    saveToLocalStorage();
  } else if (event.target.tagName === 'SPAN') {
    const li = event.target.parentElement;
    listContainer.removeChild(li);
    saveToLocalStorage();
  }
});
const saveToLocalStorage = () => {
  localStorage.setItem('listContainer', listContainer.innerHTML);
};

const getFromLocalStorage = () => {
  listContainer.innerHTML = localStorage.getItem('listContainer');
};

getFromLocalStorage();
