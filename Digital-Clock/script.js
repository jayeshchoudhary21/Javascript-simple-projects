function displayTime() {
    const dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    const session = document.getElementById('session');

    // Handle AM/PM and 12-hour format
    if (hrs >= 12) {
        session.innerHTML = 'PM';
    } else {
        session.innerHTML = 'AM';
    }

    if (hrs > 12) {
        hrs = hrs - 12;
    }

    // Add leading zeros to numbers less than 10
    hrs = hrs < 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    document.getElementById('clock').innerHTML = `${hrs}:${min}:${sec}`;
}

// Call the function every 1000ms (1 second)
setInterval(displayTime, 1000);

// Initialize clock immediately on load
displayTime();