import './styles.css';
import menuList from './menu.json'
import menuLi from './menu-li.hbs'

//Theme

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
}

document.querySelector('body').classList.add(localStorage.getItem('theme'))

let switcher = document.querySelector('#theme-switch-control');
let controlSwitchCheck = () => {
    switch (document.querySelector('body').classList.contains(Theme.DARK)) {
        case true:
            switcher.setAttribute('checked', 'true');
            break;
        case false:
            switcher.removeAttribute('checked')
            break;
    }
}
let switchFunction = () => {
    if (switcher.checked) {
        localStorage.clear()
        localStorage.setItem('theme', 'dark-theme')
        document.querySelector('body').classList.add(localStorage.getItem('theme'))
        if (document.querySelector('body').classList.contains(Theme.LIGHT)) {
            document.querySelector('body').classList.remove(Theme.LIGHT)
        }
        switcher.setAttribute('checked', 'true');
    } else {
        localStorage.clear()
        localStorage.setItem('theme', 'light-theme')
        document.querySelector('body').classList.add(localStorage.getItem('theme'))
        if (document.querySelector('body').classList.contains(Theme.DARK)) {
            document.querySelector('body').classList.remove(Theme.DARK)
        }
        switcher.removeAttribute('checked')
    }
}
controlSwitchCheck();
const eventSwitch = document.querySelector('.switch')
eventSwitch.addEventListener('change', switchFunction)

// Шаблонизация

let ulList = document.querySelector('.js-menu')
ulList.insertAdjacentHTML('afterbegin', menuLi(menuList))