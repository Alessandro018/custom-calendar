window.onload = () => {
    const listMonths = document.querySelector(".list-months")
    const listDays = document.querySelector(".list-days")
    const date = new Date();
    const currentMonth = date.getMonth();
    let firstDayWeek = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    let lastDayMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    const daysOfTheWeek = [
        "Dom",
        "Seg",
        "Ter",
        "Qua",
        "Qui",
        "Sex",
        "Sáb"
    ];
    const months = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ]
    
    document.getElementById("month").innerHTML = months[currentMonth]
    for (let month = 0; month < months.length; month++) {
        listMonths.innerHTML += `
            <div class="month ${months[month] == months[currentMonth] ? 'selected-month' : ''}" data-month="${months[month]}">
                ${months[month]}
            </div>`
    }

    for(let weekday=0; weekday < daysOfTheWeek.length; weekday++) {
        listDays.innerHTML += `<div class="weekday">${daysOfTheWeek[weekday]}</div>`;
    }

    for (let i = 0; i < firstDayWeek; i++) {
        listDays.innerHTML += `<div class="fill-day"></div>`;
    }

    for(let i=1; i<=lastDayMonth; i++){
        listDays.innerHTML += `<div class="day" data-day="${i}">${i}</div>`;
    }

    
    const days = document.querySelectorAll(".list-days .day")
    for (let i = 0; i < days.length; i++) {
        days[i].addEventListener('click', () => {
            days[i].classList.toggle("selected-day")
        })
    }

    const getMonths = document.querySelectorAll(".list-months .month")
    for (let i = 0; i < getMonths.length; i++) {
        getMonths[i].addEventListener('click', () => {
            document.getElementsByClassName("selected-month")[0]?.classList.remove("selected-month")
            getMonths[i].classList.toggle("selected-month")
            document.getElementById("months").style.display = "none"
            document.getElementById("calendar-content").style.display = "flex"
            document.getElementById("month").innerHTML = getMonths[i].innerHTML

        })
    }

    document.getElementById("month").onclick = () => {
        document.getElementById("months").style.display = "flex"
        document.getElementById("calendar-content").style.display = "none"
    }
}