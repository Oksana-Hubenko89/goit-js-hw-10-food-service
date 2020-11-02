import menuFood from './menu.json';
import templateMenu from './templates/menu-card.hbs';
import './styles.css';

const refs = {
  menuList: document.querySelector('.js-menu'),
  checkbox: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
  savedTheme: localStorage.getItem('Theme'),
};
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.menuList.insertAdjacentHTML('afterbegin', onMenuEl(menuFood));

function onMenuEl(menuFood) {
  return templateMenu(menuFood);
}

refs.checkbox.addEventListener('change', onChangeTheme);

refs.body.classList.add(refs.savedTheme);

if (refs.savedTheme === Theme.DARK) { 
    refs.checkbox.checked = true;
}

function onChangeTheme(e) {
if (e.target.checked) {
refs.body.classList.remove(Theme.LIGHT);
refs.body.classList.add(Theme.DARK);
} else {
refs.body.classList.remove(Theme.DARK);
refs.body.classList.add(Theme.LIGHT);
}
  localStorage.setItem('Theme', refs.body.classList);
}

