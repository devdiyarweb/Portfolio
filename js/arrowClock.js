const hour = document.querySelector('.h') // подключение к часовой стрелке
const min = document.querySelector('.m') // подключение к минутной стрелке
const sec = document.querySelector('.s') // подключение  к секундной стрелке
const hoursNumver = document.querySelector('.hours') // Подключение к часу на цифровых часах
const minutesNumver = document.querySelector('.minutes') // Подключение к минутам в цифровых часах 
function clock() {
    let time = new Date() // Берет время, которое указано в нашей системе 
    let second = time.getSeconds() * 6;
    let minutes = time.getMinutes() * 6;
    let hours = time.getHours() * 30;
    sec.style = `transform: rotate(${second}deg);`;
    min.style = `transform: rotate(${minutes}deg)`;
    hour.style = `transform: rotate(${hours}deg)`;
    // hoursNumver.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    // minutesNumver.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    setTimeout(() => clock(), 1400)
}
clock()