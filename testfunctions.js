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