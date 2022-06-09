const $liDropdownItem1 = document.querySelector('#li-dd-1')
const $liDropdownItem2 = document.querySelector('#li-dd-2')
const $dropdown1 = document.querySelector('#li-dropdown-1')
const $dropdown2 = document.querySelector('#li-dropdown-2')
// txt
const $liText1 = document.querySelector('#li-txt-1')
const $liText2 = document.querySelector('#li-txt-2')
// btn open-close btn
const $btnOpenMenu = document.querySelector('#btn-open')
const $btnCloseMenu = document.querySelector('#btn-close')
const $menu = document.querySelector('#menu')


$liDropdownItem1.addEventListener('click', () => {
    $dropdown1.classList.toggle('dropdown')
    $dropdown1.classList.toggle('d-none')

    $dropdown2.classList.replace('dropdown', 'd-none')
    $liText1.classList.toggle('li-txt-active')
    $liText1.classList.toggle('li-txt')
    // 
    $liText2.classList.replace('li-txt-active', 'li-txt')
})

$liDropdownItem2.addEventListener('click', () => {
    $dropdown2.classList.toggle('dropdown')
    $dropdown2.classList.toggle('d-none')

    $dropdown1.classList.replace('dropdown', 'd-none')
    $liText2.classList.toggle('li-txt-active')
    $liText2.classList.toggle('li-txt')
    // 
    $liText1.classList.replace('li-txt-active', 'li-txt')
})


$btnOpenMenu.addEventListener('click', () => {
    $menu.classList.replace('nav__right', 'visible')
})

$btnCloseMenu.addEventListener('click', () => {
$menu.classList.replace('visible', 'nav__right')
})