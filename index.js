// Collecting data from setup.html

function collectData() {
    let habit = document.getElementById('habit').value;
    let reinforcer = document.getElementById('reinforcer').value;
    let reward = document.getElementById('reward').value;
    let consequence = document.getElementById('consequence').value;
    let endDate = document.getElementById('endDate').value;
    let frequency = document.querySelector('input[name="frequency"]:checked').value;

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

function displayData() {
    let habit = localStorage.getItem("habit");
    let reinforcer = localStorage.getItem("reinforcer");
    let reward = localStorage.getItem("reward");
    let consequence = localStorage.getItem("consequence");
    let endDate = localStorage.getItem("endDate");
    let frequency = localStorage.getItem("frequency");
    let dateStatus = localStorage.getItem("dateStatus");

    document.getElementById("habit").textContent = habit;
    document.getElementById("reinforcer").textContent = reinforcer;
    document.getElementById("reward").textContent = reward;
    document.getElementById("consequence").textContent = consequence;
    document.getElementById("endDate").textContent = endDate;
    document.getElementById("frequency").textContent = frequency;
    document.getElementById("dateStatus").textContent = dateStatus;
};

// Scripts for Calendar

const daysTag = document.querySelector(".days");
const currentDate = document.querySelector(".current-date");
const prevNextIcon = document.querySelectorAll(".icons span");

// Getting new date, current year, and month
let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

let dateStatus = {};

// Storing full names of all months in an array
const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

////////// New Render Calendar function /////////////////
const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(); // Getting first day of month
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); // Getting last date of month
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(); // Getting last day of month
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // Getting last date of previous month
    let liTag = "";

    // Generate li elements for the days of the previous month
    for (let i = firstDayofMonth - 1; i >= 0; i--) {
        const dateKey = `${currYear}-${currMonth}-${lastDateofLastMonth - i}`;
        let isPast = new Date(dateKey) < new Date(); // Check if the date is in the past
        let isYes = dateStatus[dateKey] === "yes";
        let isNo = dateStatus[dateKey] === "no";
        let isToday = isPast ? (isYes ? "active-yes" : (isNo ? "active-no" : "")) : "";
        liTag += `<li class="inactive ${isToday}">${lastDateofLastMonth - i}</li>`;
    }

    // Generate li elements for the days of the current month
    for (let i = 1; i <= lastDateofMonth; i++) {
        const dateKey = `${currYear}-${currMonth + 1}-${i}`;
        let isPast = new Date(dateKey) < new Date(); // Check if the date is in the past
        let isYes = dateStatus[dateKey] === "yes";
        let isNo = dateStatus[dateKey] === "no";
        let isToday = isPast ? (isYes ? "active-yes" : (isNo ? "active-no" : "")) : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    // Generate li elements for the days of the next month
    for (let i = 1; i < 6 - lastDayofMonth; i++) {
        const dateKey = `${currYear}-${currMonth + 2}-${i}`;
        let isYes = dateStatus[dateKey] === "yes";
        let isNo = dateStatus[dateKey] === "no";
        let isToday = isYes ? "active-yes" : (isNo ? "active-no" : "");
        liTag += `<li class="inactive ${isToday}">${i}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`; // Passing current month and year as currentDate text
    daysTag.innerHTML = liTag;
}

renderCalendar();

prevNextIcon.forEach(icon => {
    // Getting prev and next icons
    icon.addEventListener("click", () => {
        // Adding click event on both icons
        // If clicked icon is the previous icon, then decrement current month by 1, else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) {
            // If current month is less than 0 or greater than 11
            // Creating a new date of the current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // Updating current year with new date year
            currMonth = date.getMonth(); // Updating current month with new date month
        } else {
            date = new Date(); // Pass the current date as date value
        }
        renderCalendar(); // Calling renderCalendar function
    });
});

// Scripts for tracker

const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");

yesButton.addEventListener("click", trackerAnsYes);
noButton.addEventListener("click", trackerAnsNo);

function trackerAnsYes() {
    let yes = document.getElementById("yes-button").value;
    console.log(yes);

    const currentDateElement = document.querySelector(".active");
    const currentDateKey = `${currYear}-${currMonth + 1}-${date.getDate()}`;

    
    // Update the status for the current date
    updateDateStatus(currentDateKey, yes); // Call the updateDateStatus function

    if (currentDateElement) {
        currentDateElement.classList.remove("active");
        currentDateElement.classList.add("active-yes");
    } if (yes) {
        document.getElementById("praise").style.visibility = "visible";
        document.getElementById("keep-on").style.visibility = "hidden";
    } else {
        document.getElementById("keep-on").style.visibility = "visible";
        document.getElementById("praise").style.visibility = "hidden";
    }
};

function trackerAnsNo() {
    let no = document.getElementById("no-button").value;
    console.log(no);

    const currentDateElement = document.querySelector(".active");
    const currentDateKey = `${currYear}-${currMonth + 1}-${date.getDate()}`;

    // Update the status for the current date
    updateDateStatus(currentDateKey, no); // Call the updateDateStatus function

    if (currentDateElement) {
        currentDateElement.classList.remove("active");
        currentDateElement.classList.add("active-no");
    } if (no) {
        document.getElementById("keep-on").style.visibility = "visible";
        document.getElementById("praise").style.visibility = "hidden";
    } else{
        document.getElementById("praise").style.visibility = "visible";
        document.getElementById("keep-on").style.visibility = "hidden";
    }
};

function updateDateStatus(dateKey, status) {
    dateStatus[dateKey] = status;
    
    // stores response to local storage
    localStorage.setItem("dateStatus", JSON.stringify(dateStatus));
    console.log(dateStatus);
};