document.querySelector('.sidebar__forums-chevron-button').addEventListener('click', () => {
  document.querySelector('.sidebar__forums-content').classList.toggle('sidebar__forums-content--visible');
  document.querySelector('#chevron-icon').classList.toggle('sidebar__forums-button-icon--rotate');
})