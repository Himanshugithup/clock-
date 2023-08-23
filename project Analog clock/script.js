/*

12 hour = 360 deg                  60 min = 360 deg
1 hour = 360/12 = 30               1 min = 6 deg
h hours = 30h+m/2                   m min = 6m deg

1hr = 60 min                        60 sec = 360 deg
60 min = 30 deg                     1 sec = 6 deg
1 min = 1/2 deg                     s sec = 6s deg
m min = (1/2)*m deg




*/



let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');


function displayTime(){
    let date = new Date();

    //getting hour,mins and second from date

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();


    let hRotation = 30*hh+mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}





setInterval(displayTime,1000);