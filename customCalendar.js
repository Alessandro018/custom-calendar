window.onload = () => {
    const currentYear = new Date().getFullYear()
    const Calendar = (date = null) => {
        date = date ?? new Date();
        const listMonths = document.querySelector(".list-months")
        const listDays = document.querySelector(".list-days")
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
        listDays.innerHTML = ""
        listMonths.innerHTML = ""
        for (let month = 0; month < months.length; month++) {
            let getMonth = month.length === 1 ? `0${month}` : month;
            listMonths.innerHTML += `
                <div class="month ${months[month] == months[currentMonth] ? 'selected-month' : ''}" data-month="${getMonth}">
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
    
        
        
    }
    
    Calendar();
    
    const selectDay = (element) => {
        element.classList.toggle("selected-day")
    }

    const selectMonth =  (element) => {
        let selectedMonth = element.getAttribute("data-month")
        document.getElementsByClassName("selected-month")[0]?.classList.remove("selected-month")
        element.classList.toggle("selected-month")
        document.getElementById("months").style.display = "none"
        document.getElementById("calendar-content").style.display = "flex"
        document.getElementById("month").innerHTML = element.innerHTML
        Calendar(new Date(currentYear, selectedMonth))
    }

    document.getElementById("month").onclick = () => {
        document.getElementById("months").style.display = "flex"
        document.getElementById("calendar-content").style.display = "none"
    }

    document.querySelector("body").addEventListener("click", (event) => {
        let getElementClass = event.target.getAttribute("class")?.split(" ")
        let elementClass = getElementClass ? getElementClass[0] : null;

        switch(elementClass){
            case "day":
                selectDay(event.target)
                break;
            case "month":
                selectMonth(event.target)
                break;
        }
    })


}