// Collecting data from setup.html

function collectData() {
    
    let habit = document.getElementById('habit').value;
    console.log(habit);
    let reinforcer = document.getElementById('reinforcer').value;
    console.log(reinforcer);
    let reward = document.getElementById('reward').value;
    console.log(reward);
    let consequence = document.getElementById('consequence').value;
    console.log(consequence);
    let endDate = document.getElementById('endDate').value;
    console.log(endDate);
    let frequency = document.querySelector('input[name="frequency"]:checked').value;
    console.log(daily);

    // Saving data in local storage
    localStorage.setItem("habit", habit);
    localStorage.setItem("reinforcer", reinforcer);
    localStorage.setItem("reward", reward);
    localStorage.setItem("consequence", consequence);
    localStorage.setItem("endDate", endDate);
    localStorage.setItem("frequency", frequency);
    
    window.location.href = "confirmation.html";
}

// Displaying collected data from collectData

function displayData(){
   let habit =  localStorage.getItem("habit");
   let reinforcer =  localStorage.getItem("reinforcer");
   let reward =  localStorage.getItem("reward");
   let consequence =  localStorage.getItem("consequence");
   let endDate =  localStorage.getItem("endDate");
   let frequency =  localStorage.getItem("frequency");

   document.getElementById("habit").textContent = habit;
   document.getElementById("reinforcer").textContent = reinforcer;
   document.getElementById("reward").textContent = reward;
   document.getElementById("consequence").textContent = consequence;
   document.getElementById("endDate").textContent = endDate;
   document.getElementById("frequency").textContent = frequency;
};


// Scripts for Calendar

const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");
// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();
// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];
const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";
    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }
    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
}
renderCalendar();
prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});

// Scripts for tacker

function trackerAnsYes() {
    let yes = document.getElementById("yes-button").value
    console.log(yes);
};

function trackerAnsNo() {
    let no = document.getElementById("no-button").value
    console.log(no);
};