document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;

button.addEventListener('click', () => {
    navigation.classList. toggle('show');
    button.classList.toggle('show');
})