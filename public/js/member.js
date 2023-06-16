function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}
const card = document.querySelectorAll('.card')
const popup = document.querySelectorAll('.popup')

for(let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', () => {
        popup[i].classList.toggle('open')
    })
}

for(let i = 0; i < popup.length; i++) {
    popup[i].addEventListener('click', () => [
        popup[i].classList.toggle('open'),
    ])
}

// BAGIAN NAVBAR