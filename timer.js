let countdownInterval;

function startCountdown() {
    const task = document.getElementById("task").value;
    const time = parseInt(document.getElementById("time").value);

    if (!task || isNaN(time) || time <= 0) {
        alert("Please enter a valid task and time.");
        return;
    }

    document.getElementById("status").innerText = "";
    document.getElementById("countdown").innerText = formatTime(time * 60);

    let timeRemaining = time * 60;

    clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
        timeRemaining--;

        document.getElementById("countdown").innerText = formatTime(timeRemaining);

        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerText = "00:00";
            document.getElementById("status").innerText = `Task Completed: ${task}`;
        }
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secondsLeft.toString().padStart(2, "0")}`;
}
