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
