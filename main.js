const box = document.getElementById('box');
const boxContent = document.querySelector('.box-content');

box.addEventListener('click', () => {
  boxContent.style.display = 'none';

  for (let i = 0; i < 5; i++) {
    const person = document.createElement('div');
    person.classList.add('person');
    box.appendChild(person);

    const randomX = Math.floor(Math.random() * 240) + 30;
    const randomY = Math.floor(Math.random() * 240) + 30;
    person.style.left = `${randomX}px`;
    person.style.top = `${randomY}px`;

    setTimeout(() => {
      person.style.opacity = '1';
    }, i * 200);
  }
});