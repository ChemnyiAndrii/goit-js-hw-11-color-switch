const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const btnstart = document.querySelector('button[data-action="start"]');
const btnstop = document.querySelector('button[data-action="stop"]');
const body = document.querySelector('body');

btnstart.addEventListener('click', startchangecolor);
btnstop.addEventListener('click', stopchangecolor);

function startchangecolor() {
    intervalId = setInterval(() => {
        body.style.backgroundColor =
          colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
    btnstart.disabled = true;
} 
function stopchangecolor() {
    clearInterval(intervalId);
    btnstart.disabled = false;
}
  
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
