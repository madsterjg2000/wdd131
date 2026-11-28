document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;

const hamButton= document.querySelector('#button')
const navigation = document.querySelector('nav ul')

button.addEventListener('click', () => {
    navigation.classList. toggle('show');
    button.classList.toggle('show');
})