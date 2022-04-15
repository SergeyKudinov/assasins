window.addEventListener('DOMContentLoaded', function() {
    const timeOfDeath = '2012-12-21';

    function getTimePassed(starttime) {
        const t = Date.parse(new Date()) - Date.parse(starttime),
            years = Math.floor(t / (1000*60*60*24*30*12)),
            months = Math.floor((t/ (1000*60*60*24*30) % 12)),
            days = Math.floor((t / 1000*60*60*24) % 30),
            hours = Math.floor((t / 1000*60*60) % 24),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds =Math.floor((t / 1000) % 60);
        return {
            'total': t,
            'years': years,
            'months': months,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, starttime) {
        const timer = document.querySelector(selector),
            years = timer.querySelector('#years'),
            months = timer.querySelector('#months'),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

            updateClock();

            function updateClock () {
                const t = getTimePassed(starttime);

                years.innerHTML = getZero(t.years);
                months.innerHTML = getZero(t.months);
                days.innerHTML = getZero(t.days);
                hours.innerHTML = getZero(t.hours);
                minutes.innerHTML = getZero(t.minutes);
                seconds.innerHTML = getZero(t.seconds);

                if (t.total <= 0) {
                    clearInterval(timeInterval);
                }
                
            }
        }
    setClock('.timer', timeOfDeath);

});