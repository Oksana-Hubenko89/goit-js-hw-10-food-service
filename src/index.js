// import menuFood from './menu.json';
// import templateMenu from './templates/menu.hbs';
// import './styles.css';

// const refs = {
//   menuList: document.querySelector('.js-menu'),
//   checkbox: document.querySelector('#theme-switch-toggle'),
//   body: document.querySelector('body'),
// };
// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };

// refs.menuList.insertAdjacentHTML('afterbegin', onMenuEl(menuFood));

// function onMenuEl(menuFood) {
//   return templateMenu(menuFood);
// }



// refs.checkbox.addEventListener('change', onChangeTheme);

// function onChangeTheme (evt) {
//   if (evt.target.checked) {
//     refs.body.classList.add(Theme.DARK);
//     refs.body.classList.remove(Theme.LIGHT);
//     localStorage.setItem('theme','dark');
//   } else {        
//     refs.body.classList.add(Theme.LIGHT);
//     refs.body.classList.remove(Theme.DARK);
//     localStorage.setItem('theme','light');
        
//   }
  
// }

// document.addEventListener('DOMcontentLoaded', onSaveTheme);

// function onSaveTheme () {
//   if (localStorage.getItem('theme') === 'dark') {
//     refs.body.classList.add(Theme.DARK);
//     refs.checkbox.checked = true;
//   }
//   else {
//     refs.body.classList.add(Theme.LIGHT);
//     refs.checkbox.checked = false;
//   }
// }

// // const themeChosen = storage.load('Theme');
// // refs.checkbox.checked = themeChosen == 'Theme.DARK' ? true : false;
// // refs.body.classList.add(themeChosen ? themeChosen : Theme.LIGHT);

// // function onChangeTheme() {
// //     refs.body.classList.toggle(Theme.DARK, !refs.body.classListtoggle(Theme.LIGHT),
// //     storage.save('Theme', refs.body.classList[0]));
// // };

// // function populateTheme() {
// //   const savedTheme = localStorage.getItem(STORAGE_KEY_TEME);
// //   if (savedTheme) {
// //     refs.checkbox.value = savedTheme;
// //   }
// //   }
import menuCard from '../src/templates/menu-card.hbs';
import menu from './menu.json';
import './styles.css'; 

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const body = document.body;

const menuContainer = document.querySelector('.js-menu');

const menuCards = menuCard(menu);


const themeChanger = document.querySelector('#theme-switch-toggle');
const savedTheme = localStorage.getItem('Theme');

themeChanger.addEventListener('change', themeSwitch);
menuContainer.insertAdjacentHTML('beforeend', menuCards);

body.classList.add(savedTheme);

if (savedTheme === Theme.DARK) { 
    themeChanger.checked = true;
}

function themeSwitch(e) {
if (e.target.checked) {
body.classList.remove(Theme.LIGHT);
body.classList.add(Theme.DARK);
} else {
body.classList.remove(Theme.DARK);
body.classList.add(Theme.LIGHT);
}
localStorage.setItem('Theme', body.classList);
}
