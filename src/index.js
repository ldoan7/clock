/**
 * Gets and displays the current time.
 */
const getCurrentTime = () => {
    let dtNow = new Date();

    // Get time zone offset
    let intTimeZoneOffset = dtNow.getTimezoneOffset() / 60;
    let strSign = (intTimeZoneOffset > 0) ? '-' : '+';

    // Get time zone
    let strTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    document.getElementById('clock').innerText = dtNow.toLocaleTimeString() + ' UTC' + strSign +
        intTimeZoneOffset + ' (' + strTimeZone + ')';
};

// Get the current time every second
setInterval(getCurrentTime, 1000);
