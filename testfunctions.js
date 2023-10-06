/////////////////New single Function (buggy)////////////////

yesButton.addEventListener("click", ansTracker);
noButton.addEventListener("click", ansTracker);

function ansTracker() {
    let yes = document.getElementById("yes-button").value;
    let no = document.getElementById("no-button").value;

    const currentDateElement = document.querySelector(".active");
    const currentDateKey = `${currYear}-${currMonth + 1}-${date.getDate()}`;

    updateDateStatus(currentDateKey, yes);
    updateDateStatus(currentDateKey, no);

    if (currentDateElement && yes) {
        currentDateElement.classList.remove("active");
        currentDateElement.classList.add("active-yes");
        document.getElementById("praise").style.visibility = "visible";
    } else if (currentDateElement && no) {
        currentDateElement.classList.remove("active");
        currentDateElement.classList.add("active-no");
        document.getElementById("keep-on").style.visibility = "visible";
    }
};

function updateDateStatus(dateKey, status) {
    dateStatus[dateKey] = status;
};

///////////////////Original////////////////////////////////////

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
    } else {
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
    } else{
    }
};

function updateDateStatus(dateKey, status) {
    dateStatus[dateKey] = status;
};


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