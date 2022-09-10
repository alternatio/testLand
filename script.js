const cookieButtonPressed = () => {
    document.getElementsByClassName('cookie')[0].classList.add('cookiePressed')
}

document.addEventListener('invalid', (e) => {
    e.target.className += ' invalid';
}, true);