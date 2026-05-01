document.getElementById('themeToggle').addEventListener('click', function () {
document.body.classList.toggle('dark-mode');

if (document.body.classList.contains('dark-mode')) {
this.textContent = 'Toggle Light Mode';
} else {
this.textContent = 'Toggle Dark Mode';
}
});

const contactForm = document.getElementById('contactForm');

if (contactForm) {
contactForm.addEventListener('submit', function (e) {
e.preventDefault();

const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const message = document.getElementById('message').value.trim();
const formMessage = document.getElementById('formMessage');

if (name === '' || email === '' || message === '') {
formMessage.textContent = 'Please fill out all fields.';
formMessage.style.color = 'red';
} else {
formMessage.textContent = 'Thank you, ' + name + '! Your message has been sent.';
formMessage.style.color = 'green';
contactForm.reset();
}
});
}
