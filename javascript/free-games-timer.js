$(document).ready(function() {
    function getServerTime() {
        return new Date();
    }

    function updateServerTime() {
        var serverTimeElement = document.getElementById("serverTime");
        var serverTime = getServerTime();

        var year = serverTime.getFullYear();
        var month = (serverTime.getMonth() + 1).toString().padStart(2, '0');
        var day = serverTime.getDate().toString().padStart(2, '0');
        var hours = serverTime.getHours().toString().padStart(2, '0');
        var minutes = serverTime.getMinutes().toString().padStart(2, '0');
        var seconds = serverTime.getSeconds().toString().padStart(2, '0');

        var formattedTime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
        serverTimeElement.textContent = formattedTime + " UTC+09:00";
    }

    function getPreviousTime(targetTime, minutes) {
        return new Date(targetTime.getTime() - minutes * 60 * 1000);
    }

    function createTimer(timerContainer, endTime) {
        var timerInterval;
        var targetTime = new Date(parseTimeString(endTime));

        function updateTimer() {
            var currentTime = getServerTime();
            var timeDifference = targetTime - currentTime;

            if (timeDifference <= 0) {
                clearInterval(timerInterval);
                timerContainer.textContent = "00:00:00";

                if (timerContainer.classList.contains("start")) {
                    timerContainer.classList.add("on-sale");
                    timerContainer.textContent = "";
                } else if (timerContainer.classList.contains("end")) {
                    timerContainer.parentNode.parentNode.classList.add("sale-end");
                    timerContainer.textContent = "";
                    timerContainer.previousSibling.textContent = "";
                } else {
                    timerContainer.parentNode.classList.add("expire");
                }
            } else {
                var seconds = Math.floor(timeDifference / 1000) % 60;
                var minutes = Math.floor(timeDifference / (1000 * 60)) % 60;
                var hours = Math.floor(timeDifference / (1000 * 60 * 60));
                var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                var formattedTime;

                if (hours >= 100) {
                    hours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24;
                    formattedTime = days + ":" + hours.toString().padStart(2, '0') + ":" +
                                    minutes.toString().padStart(2, '0') + ":" +
                                    seconds.toString().padStart(2, '0');
                } else {
                    formattedTime = hours.toString().padStart(2, '0') + ":" +
                                    minutes.toString().padStart(2, '0') + ":" +
                                    seconds.toString().padStart(2, '0');
                }

                if (!timerContainer.classList.contains("one-minute-left") && getPreviousTime(targetTime, 1) <= currentTime) {
                    timerContainer.classList.add("one-minute-left");
                }

                if (!timerContainer.classList.contains("ten-minute-left") && getPreviousTime(targetTime, 10) <= currentTime) {
                    timerContainer.classList.add("ten-minute-left");
                }

                if (!timerContainer.classList.contains("one-hour-left") && getPreviousTime(targetTime, 60) <= currentTime) {
                    timerContainer.classList.add("one-hour-left");
                }

                if (!timerContainer.classList.contains("half-day-left") && getPreviousTime(targetTime, 720) <= currentTime) {
                    timerContainer.classList.add("half-day-left");
                }

                if (!timerContainer.classList.contains("one-day-left") && getPreviousTime(targetTime, 1440) <= currentTime) {
                    timerContainer.classList.add("one-day-left");
                }

                timerContainer.textContent = formattedTime;
            }
        }

        updateTimer();
        timerInterval = setInterval(updateTimer, 1000);
    }

    function parseTimeString(timeString) {
        var parts = timeString.split('-');
        var year = parseInt(parts[0], 10);
        var month = parseInt(parts[1], 10) - 1;
        var day = parseInt(parts[2], 10);
        var hours = parseInt(parts[3], 10);
        var minutes = parseInt(parts[4], 10);
        var seconds = parseInt(parts[5], 10);

        return new Date(year, month, day, hours, minutes, seconds);
    }

    updateServerTime();
    setInterval(updateServerTime, 1000);

    var timerContainers = document.querySelectorAll('.timer-container');
    timerContainers.forEach(function(timerContainer) {
        var endTime = timerContainer.getAttribute('settime');
        createTimer(timerContainer, endTime);
    });
});
