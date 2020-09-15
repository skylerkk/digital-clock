setInterval(updateTime, 1000);
function updateTime(){
    let timer = new Date();
    let hour = timer.getHours();
    let minute = timer.getMinutes();
    let second = timer.getSeconds();
    var format;

    if (hour > 12){
        hour -= 12;
        format = "PM";
    }
    else if (hour === 12){
        format = "PM";
    }
    else if (hour === 0){
        hour = 12;
        format = "AM";
    }
    else {
        format = "AM";
    }
    
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second: second;

    let currentTime = hour + ":" + minute + ":" + second + " " + format;

    document.getElementById("clock").innerHTML = currentTime;
}
updateTime();