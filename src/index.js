"use strict";

import './styles.css';
import menuList from './menu.json';
import menuLi from './menu-li.hbs';

//Theme

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

document.querySelector('body').classList.add(localStorage.getItem('theme'));

const switcher = document.querySelector('#theme-switch-control');

const controlSwitchCheck = () => {
    (document.querySelector('body').classList.contains(Theme.DARK)) ? switcher.setAttribute('checked', 'true') : switcher.removeAttribute('checked');
};

const saveTheme = (localTheme, classTheme) => {
    localStorage.clear();
    localStorage.setItem('theme', localTheme);
    document.querySelector('body').classList.add(localStorage.getItem('theme'));
    if (document.querySelector('body').classList.contains(classTheme)) {
        document.querySelector('body').classList.remove(classTheme);
    };
    (localTheme.includes('dark')) ? switcher.setAttribute('checked', 'true') : switcher.removeAttribute('checked');
};

const switchFunction = (e) => {
    (e.target.checked) ? saveTheme('dark-theme', Theme.LIGHT) : saveTheme('light-theme', Theme.DARK);
};

controlSwitchCheck();
const eventSwitch = document.querySelector('.switch');
eventSwitch.addEventListener('change', switchFunction);

// Шаблонизация

const ulList = document.querySelector('.js-menu');
ulList.insertAdjacentHTML('afterbegin', menuLi(menuList));