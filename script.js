const time = document.querySelector('.clock-container')
const date = document.querySelector('.date-container')
const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const months = ['January','February','March','April','May','June','July','August','September','October','November', 'December']

const formatTime = value => String(value).length === 1 ? `0${value}` : value


const printClock = (hours, minutes, seconds) => `
    <span>${hours}</span> 
    <span>${minutes}</span> 
    <span>${seconds}</span>
`
const printDate = (weekDay, month, day, year) => `
    <span>${weekDay},</span>
    <span>${month} </span>
    <span>${day},</span>
    <span>${year}</span>
`
const updateClock = () => {
    const present = new Date()
    const hours = formatTime(present.getHours())
    const minutes = formatTime(present.getMinutes())
    const seconds = formatTime(present.getSeconds())
    const weekDay = weekDays[present.getDay()]
    const day = formatTime(present.getDate())
    const month = months[present.getMonth()]  
    const year = present.getFullYear()

    time.innerHTML = printClock(hours, minutes, seconds)
    date.innerHTML = printDate(weekDay, month, day, year)
}

setInterval(updateClock, 1000)
