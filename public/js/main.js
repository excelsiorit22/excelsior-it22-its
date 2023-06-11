// BAGIAN NAVBAR
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

// TYPE BAGIAN HOMEPAGE
let typed = new Typed('#element', {
    strings: ['Excelsior', "Angkatan '22"],
    typeSpeed: 120,
    loop: true
});

function openPopup() {
    document.getElementById("popup").style.display = "block";
  }

  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }