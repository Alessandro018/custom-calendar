window.onload = () => {
    const listDays = document.querySelector(".list-days")
    const daysOfTheWeek = [
        "Dom",
        "Seg",
        "Ter",
        "Qua",
        "Qui",
        "Sex",
        "Sáb"
    ];
    for(let weekday=0; weekday < daysOfTheWeek.length; weekday++) {
        listDays.innerHTML += `<div class="weekday">${daysOfTheWeek[weekday]}</div>`;
    }
    for(let i=1; i<=31; i++){
        listDays.innerHTML += `<div class="day" data-day="${i}">${i}</div>`;
    }

    const days = document.querySelectorAll(".list-days .day")
    for (let i = 0; i < days.length; i++) {
        days[i].addEventListener('click', () => {
            days[i].classList.toggle("selected-day")
        })
    } 
}