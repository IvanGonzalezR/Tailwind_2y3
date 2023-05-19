let htmlElement = document.querySelector('html');
let localStorageTheme = localStorage.getItem('theme');
let moonSvg = document.getElementById('moonSvg');
let moonSvgTabBar = document.getElementById('moonSvgTabBar');
moonSvg.addEventListener('click', () => changeTheme());
moonSvgTabBar.addEventListener('click', () => changeTheme());

if (localStorageTheme === 'dark') {
  htmlElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
}

function changeTheme() {
  if (htmlElement.classList.contains('dark')) {
    htmlElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    htmlElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}