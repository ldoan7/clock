const getCurrentTime = () => {
    let dtNow = new Date();
    let intHours = dtNow.getHours();
    // console.log('Hours: ' + intHours);

    let intMins = dtNow.getMinutes();
    // console.log('Mins: ' + intMins);

    let intSecs = dtNow.getSeconds();
    // console.log('Secs: ' + intSecs);

    let strTime = intHours + ':' + intMins + ':' + intSecs;
    // console.log('Time: ' + strTime);

    document.getElementById('clock').innerText = strTime;
};

// Get the current time every second
setInterval(getCurrentTime, 1000);
