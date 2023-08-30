const getCurrentTime = () => {
    let dtNow = new Date();

    document.getElementById('clock').innerText = dtNow.toLocaleTimeString();
};

// Get the current time every second
setInterval(getCurrentTime, 1000);
