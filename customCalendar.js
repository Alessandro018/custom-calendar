    const Calendar = (date = new Date(), minimumYear = 5, listEventDays = []) => {
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
        
        document.getElementById("month").setAttribute("data-month", currentMonth)
        document.getElementById("month").innerHTML = months[currentMonth]
        listDays.innerHTML = ""
        listMonths.innerHTML = ""
        if(document.getElementById("year")) {
            document.getElementById("year").innerHTML = ""
        }
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
            listDays.innerHTML += `<div class="day" data-day="${i.toString().length === 1 ? '0'+i : i}">
                ${i}
                ${listEventDays.indexOf(i) >= 0 ? '<div class="event"></div>' : ''}
            </div>`;
        }

        if(document.getElementById("year")) {
            if(date.getMonth() === 11) {
                document.getElementById("year").innerHTML += `
                <option value="${date.getFullYear() + 1}">${date.getFullYear() + 1}</option>`
            }
            for (let i = 0; i < minimumYear; i++) {
                document.getElementById("year").innerHTML += `
                <option value="${date.getFullYear() - i}" ${date.getFullYear() - i === date.getFullYear() ? 'selected' : ''}>
                    ${date.getFullYear() - i}
                </option>`
            }
        }
         
    }
    
    const selectDay = (element) => {
        element.classList.toggle("selected-day")
    }

    const selectMonth =  (element) => {
        let selectedMonth = element.getAttribute("data-month")
        let yearSelected = document.getElementById("year") ? document.getElementById("year").value : new Date().getFullYear()
        document.getElementsByClassName("selected-month")[0]?.classList.remove("selected-month")
        element.classList.toggle("selected-month")
        document.getElementById("months").style.display = "none"
        document.getElementById("calendar-content").style.display = "flex"
        document.getElementById("month").innerHTML = element.innerHTML
        Calendar(new Date(yearSelected, selectedMonth))
    }

    const changeMonth = (element) => {
        let selectedMonth = parseInt(document.getElementById("month").getAttribute("data-month"))
        let yearSelected = document.getElementById("year") ? document.getElementById("year").value : new Date().getFullYear()

        if(/^(\+)?([0-9]+)$/.test(selectedMonth)){
            let month = (element.classList[1] == "next-month") ? selectedMonth + 1 : selectedMonth -1;
            Calendar(new Date(yearSelected, month))
        }

    }

    document.getElementById("month").onclick = () => {
        document.getElementById("months").style.display = "flex"
        document.getElementById("calendar-content").style.display = "none"
    }

    document.querySelector("body").addEventListener("click", (event) => {
        let getElementClass = event.target.classList
        let elementClass = getElementClass[0] ? getElementClass[0] : null;

        switch(elementClass){
            case "day":
                selectDay(event.target)
                break;
            case "month":
                selectMonth(event.target)
                break;
            case "change-month":
                changeMonth(event.target)
                break;
        }
    })