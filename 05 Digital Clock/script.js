const time = document.querySelector('.time-section');
const fullDate = document.querySelector('.date-section');

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let dateObj;
let sec, min, hour, date, day, month, year;
setInterval(() => {
    dateObj = new Date();
    sec = dateObj.getUTCSeconds();
    min = dateObj.getMinutes();
    hour = dateObj.getHours();
    date = dateObj.getDate();
    day = dateObj.getDay();
    month = dateObj.getMonth();
    year = dateObj.getFullYear();

    hour = hour < 10 ? hour = '0' + hour : hour;
    min = min < 10 ? min = '0' + min : min;
    sec = sec < 10 ? sec = '0' + sec : sec;

    date = date < 10 ? date = '0' + date : date;
    month = month < 10 ? month = '0' + month : month;


    time.innerHTML = `${hour} : ${min} : ${sec}`;
    fullDate.innerHTML = `${year}-${month}-${date} ${days[day].toUpperCase()}`;
}, 1000);


