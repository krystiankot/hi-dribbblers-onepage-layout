// INTERACTIVE MENU


// Changing icons
var items = document.querySelectorAll('.sidebar__menu__item');
var sections = document.querySelectorAll('.content__screen');

function changeIcons() {
    var height = window.pageYOffset;

    if (height < 0.5 * sections[0].offsetHeight) {
        items[0].classList.add('sidebar__menu__item--selected');
        items[1].classList.remove('sidebar__menu__item--selected');
        items[2].classList.remove('sidebar__menu__item--selected');
        items[3].classList.remove('sidebar__menu__item--selected');
    } else if (0.5 * sections[0].offsetHeight <= height && height < 0.5 * sections[1].offsetHeight + sections[1].offsetTop) {
        items[0].classList.remove('sidebar__menu__item--selected');
        items[1].classList.add('sidebar__menu__item--selected');
        items[2].classList.remove('sidebar__menu__item--selected');
        items[3].classList.remove('sidebar__menu__item--selected');
    } else if (0.5 * sections[1].offsetHeight + sections[1].offsetTop <= height && height < 0.5 * sections[2].offsetHeight + sections[2].offsetTop) {
        items[0].classList.remove('sidebar__menu__item--selected');
        items[1].classList.remove('sidebar__menu__item--selected');
        items[2].classList.add('sidebar__menu__item--selected');
        items[3].classList.remove('sidebar__menu__item--selected');
    } else if (height >= 0.5 * sections[2].offsetHeight + sections[2].offsetTop) {
        items[0].classList.remove('sidebar__menu__item--selected');
        items[1].classList.remove('sidebar__menu__item--selected');
        items[2].classList.remove('sidebar__menu__item--selected');
        items[3].classList.add('sidebar__menu__item--selected');
    }
}

changeIcons();
window.addEventListener('scroll', changeIcons, false);
